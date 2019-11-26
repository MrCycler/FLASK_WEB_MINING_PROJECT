import re 
from bs4 import BeautifulSoup 
import wget 
import requests
import dateutil.parser
import base64
import datetime
import numpy as np
import nltk
import string

import joblib
import gensim

from nltk.corpus import stopwords
nltk.download('stopwords')

#------------------------------------------------------------------------------------------
# Se carga el modelo WV y tamaño del vector caracteristico
#------------------------------------------------------------------------------------------
model = gensim.models.Word2Vec.load("./wv_models/modelo_300_5.model")
k_means_c4 = joblib.load('./wv_models/km3_c4_300_5.joblib')

def getFV(document, model):   
    words=document.split()
    s=np.zeros(model.vector_size)
    k=1
    for w in words:
        if w in model.wv.vocab:
            s=s+model[w]
            k=k+1
    
    return s/k

#------------------------------------------------------------------------------------------
# Funciones para limpiar contenido
#------------------------------------------------------------------------------------------
f = open("a.txt", "r", encoding='utf-8')
stop_words = f.read()
nltk_spanish_stop_words = stopwords.words("spanish")
nltk_english_stop_words = stopwords.words("english")
total_stop_words = list(nltk_spanish_stop_words + nltk_english_stop_words + stop_words.split())

def limpiar_parrafo(contenido):
    if not(isinstance(contenido, float)):
        parrafo_punt = contenido.translate(str.maketrans('', '', string.punctuation+'‘’¡¿“”►‘’°')) #Elimina signos de puntuación
        parrafo_clean = parrafo_punt.lower() #Cambia todo a minuscula
    else:
        parrafo_clean = np.NaN
    return parrafo_clean

def eliminar_stopwords(cadena, stopwords):
    if not(isinstance(cadena, float)):
        text = ' '.join([word for word in cadena.split() if word not in stopwords])
    else:
        text = np.NaN
    return text

def pre_process_text(text):
    return eliminar_stopwords(limpiar_parrafo(text),total_stop_words)

def get_tipo_noticia(document):
    vector = getFV(document, model)
    label = k_means_c4.predict([vector])

    if label == 0:
        #tipo = 'Crime and police records'
        tipo = 'Crimen y Policial'
    if label == 1:
        #tipo = 'National and International Sports'
        tipo = 'Deportes Nacionales e Internacional'
    if label == 2:
        #tipo = 'Entertainment and IT'
        tipo = 'Entretenimiento y Tecnologia'
    if label == 3:
        #tipo = 'Politics and Economics'
        tipo = 'Politica y Economía'


    return tipo    

#------------------------------------------------------------------------------------------
#Funcion para obtener la fuente del periodico mediante la URL
#------------------------------------------------------------------------------------------
def get_fuente(url):
    lower_url = url.lower()
    fuente = 'El periodico no se encuetra entre los accesibles.'
    index_fuente = -1
   
    news1_regex = re.compile(r"rpp")
    news2_regex = re.compile(r"elcomercio")
    news3_regex = re.compile(r"peru21")
    news4_regex = re.compile(r"trome")

    n1 = news1_regex.findall(lower_url)
    n2 = news2_regex.findall(lower_url)
    n3 = news3_regex.findall(lower_url)
    n4 = news4_regex.findall(lower_url)

    if len(n1)!= 0:
        fuente = 'Fuente: RPP Noticias'
        index_fuente = 0
    if len(n2)!= 0:
        fuente = 'Fuente: El Comercio'
        index_fuente = 1
    if len(n3)!= 0:
        fuente = 'Fuente: Peru 21'
        index_fuente = 2
    if len(n4)!= 0:
        fuente = 'Fuente: Trome'
        index_fuente = 3

    return fuente, index_fuente


def get_news(url, type_newspaper):

    new =[]
    if type_newspaper == 0:
        #print("Fuente: RPP")
        new = rpp_scraping(url)

    if type_newspaper == 1:
        #print("Fuente: El Comercio")
        new = comercio_scraping(url)
    
    if type_newspaper == 2:
        #print("Fuente: Peru 21")
        new = peru_21_scraping(url)
    
    if type_newspaper == 3:
        #print("Fuente: El Trome")
        new = trome_scraping(url)
    return new

#----------------------------------------------------------------------------------
#Funciones de scrapping EL COMERCIO
#----------------------------------------------------------------------------------
def get_title_comercio(content_soup):
    if content_soup.find('h1', {'class': 'story-header__news-title'}) is not None:
        return content_soup.find('h1', {'class': 'story-header__news-title'}).text
    
    return;
  
def get_summary_comercio(content_soup):
    if content_soup.find('h2', {'class': 'story-header__news-summary'}) is not None:
        return content_soup.find('h2', {'class': 'story-header__news-summary'}).text
    
    return;
  
def get_category_comercio(content_soup):
    if content_soup.find('div', {'class': 'story-header__title-section'}) is not None:
        return content_soup.find('div', {'class': 'story-header__title-section'}).text
            
    return;
  
def get_author_comercio(content_soup):
    if content_soup.find('a', {'class': 'story-content__author-link'}) is not None:
        return content_soup.find('a', {'class': 'story-content__author-link'}).text
    
    return;
  
def get_date_comercio(content_soup):
    if content_soup.find('div', {'class': 'story-content__date'}) is not None:
        if content_soup.find('div', {'class': 'story-content__date'}).find('time') is not None:
            date = content_soup.find('div', {'class': 'story-content__date'}).find('time')['datetime']
            if date != 'None':
              fecha = re.findall(r'\d{4}-\d{2}-\d{2}',date)
              hora = re.findall(r'\d{2}:\d{2}',date)
              fe = fecha[0]+' '+hora[0]
              return datetime.datetime.strptime(fe, '%Y-%m-%d %H:%M')
            
    return;
  
def get_content_comercio(content_soup):
    if content_soup.find('div', {'class': 'story-content__content'}) is not None:
        if len(content_soup.find('div', {'class': 'story-content__content'}).findAll('p', {'class': 'story-content__font--secondary'})) > 0:
            content_array = content_soup.find('div', {'class': 'story-content__content'}).findAll('p', {'class': 'story-content__font--secondary'})
            content = ''
            for item in content_array:
              #content = content + ' ' + str(item.text)
              content = content + ' ' + item.text
            return content
    
    return;

def comercio_scraping(url):
  content_article = requests.get(url).content
  soup_article = BeautifulSoup(content_article,"html.parser", from_encoding="utf-8")

  title = get_title_comercio(soup_article)
  summary = get_summary_comercio(soup_article)
  category = get_category_comercio(soup_article)
  author = get_author_comercio(soup_article)
  date = get_date_comercio(soup_article)
  content = get_content_comercio(soup_article)

  #news = [date,category,author,title,summary,content]
  news = [str(date), str(category), str(author), str(title), str(summary), str(content)]
  return news

#----------------------------------------------------------------------------------
#Funciones de scrapping RPP
#----------------------------------------------------------------------------------
def get_title_rpp(soup_article):
    if soup_article.find("h1",{"itemprop":"headline"}) is not None:
        title = soup_article.find("h1",{"itemprop":"headline"}).text
    else:
        title = "None"
    return title
  
  
def get_date_rpp(soup_article):
    if soup_article.find("time",{"itemprop":"datePublished"}) is not None:
        fecha = soup_article.find("time",{"itemprop":"datePublished"})
        fecha_return = dateutil.parser.parse(fecha["datetime"])      
    else:
        fecha_return = "None"
    return fecha_return
  
  
def get_cat_rpp(soup_article):
    if soup_article.find("span",{"itemprop":"name"}) is not None:
        categoria = soup_article.find("span",{"itemprop":"name"}).text
    else:
        categoria = "None"
    return categoria
  
  
def get_author_rpp(soup_article):
    if soup_article.find("div",{"id":"author-name"}) is not None:
        autor = soup_article.find("div",{"id":"author-name"}).text
    else:
        autor = "None"
    return autor
  
  
def get_summary_rpp(soup_article):
    if soup_article.find("div",{"class":"sumary"}) is not None:
        resumen = soup_article.find("div",{"class":"sumary"})
        nonBreakSpace = u'\xa0'
        resumen_return = resumen.text.replace(nonBreakSpace, ' ')
    else:
        resumen_return = "None"
    return resumen_return
  
  
def get_content_rpp(soup_article):
    if soup_article.find("div",{"id":"article-body"}) is not None:
        contenido_p = soup_article.find("div",{"id":"article-body"}).findAll(["p","h3"])
        content_line = []
        for cont_p in contenido_p:
            if cont_p.parent.has_attr('class'):
                try:
                    if cont_p.parent.name == "div" and cont_p.parent.attrs['class'][0] == "col-detail":
                        tt = cont_p.text
                        content_line.append(tt+" ")
                except IndexError:
                    pass
                continue       
        contenido = ''.join(content_line)
        nonBreakSpace = u'\xa0'
        contenido_return = contenido.replace(nonBreakSpace, ' ')        
    else:
        contenido_return = "None"
    return contenido_return

def rpp_scraping(url):
  content_article = requests.get(url).content
  soup_article = BeautifulSoup(content_article,"html.parser", from_encoding="utf-8")

  title = get_title_rpp(soup_article)
  summary = get_summary_rpp(soup_article)
  category = get_cat_rpp(soup_article)
  author = get_author_rpp(soup_article)
  date = get_date_rpp(soup_article)
  content = get_content_rpp(soup_article)

  #news = [date,category,author,title,summary,content]
  
  news = [str(date),str(category),str(author),str(title),str(summary),str(content)]
  return news

#----------------------------------------------------------------------------------
#Funciones de scrapping PERU 21
#----------------------------------------------------------------------------------
def get_title_peru(soup_article):
  #Elemento tag que busca la linea HTML relacionada al titulo
  tag = soup_article.find('h1', {'class' : 'story-header__news-title'}) 
  #Se verifica que lo obtenido no sea del tipo None
  if tag != None:
    titulo = tag.text
  else:
    titulo = None
  
  return titulo 

def get_summary_peru(soup_article):
  #Elemento tag que busca la linea HTML relacionada al resumen
  tag = soup_article.find('h2', {'class' : 'story-header__news-summary'})
  #Se verifica que lo obtenido no sea del tipo None
  if tag != None:
    resumen = tag.text
  else:
    resumen = None
  
  return resumen 

def get_category_peru(soup_article):
  #Elemento tag que busca la linea HTML relacionada a la categoria
  tag = soup_article.find('div', {'class' : 'text-gray-300'})
  #Se verifica que lo obtenido no sea del tipo None
  if tag != None:
    categoria = tag.text
  else:
    categoria = None
  
  return categoria

def get_author_peru(soup_article):
  #Elemento tag que busca la linea HTML relacionada al autor
  tag = soup_article.find('a', {'class' : 'secondary-font'})
  #Se verifica que lo obtenido no sea del tipo None
  if tag != None:
    autor = tag.text
  else:
    autor = None
  
  return autor 

def get_date_peru(soup_article):
  #Elemento tag que busca la linea HTML relacionada al autor
  tag = soup_article.find('time')
  #Se verifica que lo obtenido no sea del tipo None
  if tag != None:
    txt = tag.text
    #print(txt)
    fecha = re.findall(r'\d{2}/\d{2}/\d{4}',txt) #Se obtiene la fecha del string
    hora = re.findall(r'\d{2}:\d{2}',txt) #Se obtiene la hora del string
    fe = fecha[0]+' '+hora[0] #Se unen los datos para convertir a datetime
    fecha_hora = datetime.datetime.strptime(fe, '%d/%m/%Y %H:%M')
    fecha_hora = fecha_hora - datetime.timedelta(hours=5)
    #print(fecha_hora)
  else:
    fecha_hora = None
  
  return fecha_hora 

def get_contenido_peru(soup_article):
  #Elemento tag que busca la linea HTML relacionada al autor
  tag = soup_article.findAll('p', {'class' : 'story-content__font--secondary'})
  #Se verifica que lo obtenido no sea del tipo None
  if tag != None:
    art = [i.text for i in tag]
    sep = ' '
    full_content = sep.join(art)
  else:
    full_cotent = None
  
  return full_content

def peru_21_scraping(url):
  content_article = requests.get(url).content
  soup_article = BeautifulSoup(content_article,"html.parser", from_encoding="utf-8")

  title = get_title_peru(soup_article)
  summary = get_summary_peru(soup_article)
  category = get_category_peru(soup_article)
  author = get_author_peru(soup_article)
  date = get_date_peru(soup_article)
  content = get_contenido_peru(soup_article)

  #news = [str(date),category,author,title,summary,content]
  news = [str(date),str(category),str(author),str(title),str(summary),str(content)]
  
  return news

#----------------------------------------------------------------------------------
#Funciones de scrapping EL TROME
#----------------------------------------------------------------------------------
def get_title_trome(content_soup):
    if content_soup.find('h1', {'class': 'news-title'}) is not None:
        return content_soup.find('h1', {'class': 'news-title'}).text
    
    return;
  
def get_summary_trome(content_soup):
    if content_soup.find('h2', {'class': 'news-summary'}) is not None:
        return content_soup.find('h2', {'class': 'news-summary'}).text
    
    return;
  
def get_author_trome(content_soup):
    if content_soup.find('span', {'class': 'author-name'}).find('a') is not None:
        return content_soup.find('span', {'class': 'author-name'}).find('a').text
    return;
  
def get_date_trome(content_soup):
    if content_soup.find('time', {'class': 'news-date'}).text is not None:
        string_date = content_soup.find('time', {'class': 'news-date'}).text
        if string_date is not None:
            string_date =string_date[0:(string_date.find('h'))].replace(" - ",' ')+":00"
            return dateutil.parser.parse(string_date)
    
    return;
  
def get_content_trome(content_soup):
    if content_soup.find('p', {'class': 'first-parrafo'}) is not None:
        content_array = content_soup.findAll('p', {'class': 'first-parrafo'})
        content = ''
        for item in content_array:
          #content = content + ' ' + str(item.text)
          content = content + ' ' + item.text
        return content
    return;

def trome_scraping(url):
  content_article = requests.get(url).content
  soup_article = BeautifulSoup(content_article,"html.parser", from_encoding="utf-8")

  title = get_title_trome(soup_article)
  summary = get_summary_trome(soup_article)
  category = ''
  author = get_author_trome(soup_article)
  date = get_date_trome(soup_article)
  content = get_content_trome(soup_article)

  #news = [date,category,author,title,summary,content]
  news = [str(date),str(category),str(author),str(title),str(summary),str(content)]
  return news
