# WEB MINING APP
## Autores:
    - Pablo Antunez
    - Jose Balbuena
    - Juan Mendoza
    - Carlos Roca
    - Hilda Samame
## ARQUITECTURA:
    - Backend: FLASK 
    - Frontend: REACT JS 
    - Storage: Amazon RDS
    - Servicios adicionales: POWER BI

<hr />

# CONFORMACIÓN DE CARPETAS DEL PROYECTO
 |-->frontend
    |-->web_mining_app
        |-->build
        |-->node_modules
        |-->public
            |-->assets
            |-->(other files)
        |-->src
            |-->Page_Categories
            |-->Page_Historical
            |-->Page_Probe
            |-->Page_Sources
            |-->App.css
            |-->App.js
            |-->App.test.js
            |-->index.css
            |-->index.js
            |-->logo.svg
            |-->serviceWorker.js
        |-->.gitignore
        |-->package-lock.json
        |-->package.json
        |-->REACTJS_README.md
 |-->venv_flask
 |-->.gitignore
 |-->app.py
 |-->Procfile
 |-->requirements.txt
 |-->README.md

ARCHIVOS DEL BACKEND:
- venv_flask : en caso de crear un entorno virtual, la carpeta debe estar en el directorio raíz
- .gitignore : archivo con la configuración para subir solo los archivos principales al github
- Procfile : archivo con la configuración para el deploy en heroku
- requirements.txt : archivo con el listado de dependencias de python que se necesitan instalar para correr el servidor
- README.md :  este archivo con indicaciones
- app.py: (SOLO EDITAR ESTE) este archivo contiene la programación del servidor FLASK.

ARCHIVOS DEL FRONTEND:
El proyecto en frontend esta dentro de la carpeta frontend y se llama web_mining_app
- build: contiene los archivos a ser renderizados por el backend, generados en el pase a producción del frontend
- node_modules: contiene las librerías necesarias para correr la aplicación react js
- public: contiene las imagenes o archivos estaticos a añadir a la página web
    |-->assets: (SOLO EDITAR ESTA CARPETA) Subir acá imagenes que se usarán en el desarrollo
- src: acá esta el código del frontend, acá mencionare solo los archivos que se (DEBEN EDITAR)
    |-->App.js y App.css: Contiene el código Javascript y CSS para la aplicación completa
    |-->Page_Categories: Contiene el código Javascript y CSS del informe de noticias según categoría 
    |-->Page_Sources: Contiene el código Javascript y CSS del informe de noticias según fuente 
    |-->Page_Historical: Contiene el código Javascript y CSS del informe historico de noticias 
    |-->Page_Probe: Contiene el código Javascript y CSS de la página donde se prueba el algoritmo
- .gitignore : archivo con la configuración para subir solo los archivos principales al github
- package.json y package-lock.json: contiene el listado de dependencias de la aplicación REACT JS
- REACTJS_README.md: contiene las indicaciones propias de la aplicación REACT JS

<hr />

# CONFIGURACIÓN PARA INSTALAR Y CORRER EL PROYECTO

## CONFIGURACIÓN PARA INSTALAR Y CORRER EL SERVIDOR FLASK LOCAL (BACKEND): 

###  En caso no se desee crear un entorno virtual :V

- ####  install python 3
`sudo apt-get install python3-pip`
- ####  install requeriments (Puedes instalar cada dependencia por separado, solo pip install Flask & pip install gunicorn)
`pip install -r requirements.txt`
- ####  run the app
`python app.py`

###  En caso se desee crear un entorno virtual (RECOMENDABLE)

- ####  install python 3
`sudo apt-get install python3-pip`
- ####  install venv
`sudo pip3 install virtualenv` 
- ####  create a virtual environment
`virtualenv venv_flask`
- ####  activate venv
`source venv_flask/bin/activate`
- ####  (C) to deactivate
`deactivate`
- ####  install requeriments 
`pip install -r requirements.txt`
- ####  run the app
`python app.py`

## CONFIGURACIÓN PARA INSTALAR EL SERVIDOR NODE JS LOCAL (FRONTEND): 

- ####  (OJO) Para correr el frontend necesita tener instalado NODE JS Y NPM
- ####  ir a la carpeta frontend/web_mining_app 
- ####  instalar las dependencias de la aplicación con
`npm install`
- ####  correr la aplicación usando
`npm start`
- ####  se ejecutará un servidor local NODEJS
- ####  cada vez que haga un cambio y guarde el archivo los veras en el servidor local NODE JS

## LLEVAR A PRODUCCIÓN EL FRONTEND (FRONTEND): 
- ####  una vez que se han hecho todos los cambios en el código de frontend para llevarlo a producción solo tiene que escribir el siguiente comando
`npm run build`