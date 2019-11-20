from flask import Flask, render_template, url_for
app = Flask(__name__,template_folder="./frontend/web_mining_app/build", static_folder="./frontend/web_mining_app/build/static")


@app.route('/')
def hello():
    return render_template('index.html')

@app.route('/<name>')
def hello_name(name):
    return "Hola curioso {}!, la curiosidad mato al gato".format(name)

@app.route('/react')
def index():
    return render_template('index.html')

if __name__ == '__main__':
    app.run()