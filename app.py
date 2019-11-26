import os
from flask import Flask, request, render_template, url_for, jsonify, abort
from lib import get_fuente, get_news, pre_process_text, get_tipo_noticia
import nltk
from nltk.corpus import stopwords
nltk.download('stopwords')

f = open("a.txt", "r")
stop_words = f.read()
nltk_spanish_stop_words = stopwords.words("spanish")
nltk_english_stop_words = stopwords.words("english")
total_stop_words = list(nltk_spanish_stop_words + nltk_english_stop_words + stop_words.split())
app = Flask(__name__)


@app.route('/process',methods= ['POST'])
def process():
    # En caso de no enviar URL o hacerlo con errores
    if not request.json or not 'url' in request.json:
        abort(400) 
    json = obtener_json(request.json['url'])
    return jsonify({'data': json }), 201
    



def obtener_json(url_noticia):
    
   if url_noticia:
      fuente, index = get_fuente(url_noticia)
      news = get_news(url_noticia, index)

      fecha = check_empty(news[0], 'fecha')
      categoria = check_empty(news[1], 'categoria')
      autor = check_empty(news[2], 'autor')
      title = check_empty(news[3], 'titulo')
      summary = check_empty(news[4], 'resumen')
      content = news[5]
      if len(content) == 0:
         process = pre_process_text(title)
         tipo = get_tipo_noticia(process)
         print(tipo)
         json = {'fuente_noticia': fuente,
              'tipo_noticia':'Categoria predecida: '+ tipo,
              'error':'',
              'fecha': fecha,
              'categoria_periodico':'Categoria segun el periodico: '+categoria,
              'autor':autor,
              'titulo':title,
              'resumen':summary,
              'contenido':'No hay contenido en la noticia'}

      else:
         process = pre_process_text(content)
         tipo = get_tipo_noticia(process)
         print(tipo)
         json = {'fuente_noticia': fuente,
                 'tipo_noticia': 'Categoria predecida: '+tipo,
                 'error':'',
                 'fecha': fecha,
                 'categoria_periodico':'Categoria segun el periodico: '+categoria,
                 'autor':autor,
                 'titulo':title,
                 'resumen':summary,
                 'contenido':content}
   else:
      json = {'fuente_noticia':'',
              'tipo_noticia': '',
              'error':'No se ingreso URL',
              'fecha': '',
              'categoria_periodico':'',
              'autor':'',
              'titulo':'',
              'resumen':'',
              'contenido':''}
   return json

def check_empty(text, valor):
   if (len(text) == 0) or (text == 'None'):
      text = 'La noticia no cuenta con '+valor
   return text

if __name__ == '__main__':
    app.run()
    #app.run(host='0.0.0.0', debug = False)