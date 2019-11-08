from flask import Flask, render_template, url_for
app = Flask(__name__,template_folder="./frontend/web_mining_app/build_app", static_folder="./frontend/web_mining_app/build_app/static")


@app.route('/')
def hello():
    return "Hello World - REACT BRANCH!"

@app.route('/<name>')
def hello_name(name):
    return "Hello {}!".format(name)

@app.route('/react')
def index():
    return render_template('index.html')

if __name__ == '__main__':
    app.run()