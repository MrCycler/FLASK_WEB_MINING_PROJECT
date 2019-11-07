# En caso no se desee crear un entorno virtual :V

## install python 3
sudo apt-get install python3-pip
## install requeriments (Puedes instalar cada dependencia por separado, solo pip install Flask & pip install gunicorn)
pip install -r requirements.txt
## run the app
python app.py

# En caso se desee crear un entorno virtual (RECOMENDABLE)

## install python 3
sudo apt-get install python3-pip
## install venv
sudo pip3 install virtualenv 
## create a virtual environment
virtualenv venv_flask
## activate venv
source venv_flask/bin/activate
## (C) to deactivate
deactivate
## install requeriments 
pip install -r requirements.txt
## run the app
python app.py