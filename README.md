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