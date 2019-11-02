from flask import Flask
app = Flask(__name__,
 static_folder = './public',
 template_folder="./static")

from templates.app_module.views import hello_blueprint
# register the blueprints
app.register_blueprint(hello_blueprint)