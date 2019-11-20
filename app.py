from flask import Flask, render_template, url_for
app = Flask(__name__,template_folder="./frontend/web_mining_app/build", static_folder="./frontend/web_mining_app/build/static")

@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def hello(path):
    return render_template('index.html')

@app.route('/curioso')
def hello_name():
    return "Hola curioso, la curiosidad mato al gato"

@app.route('/react')
def index():
    return render_template('index.html')

if __name__ == '__main__':
    app.run()