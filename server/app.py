from flask import Flask
from flask_cors import CORS
from werkzeug import exceptions

app = Flask(__name__)
CORS(app)


@app.route("/")
def welcome():
    return "Welcome to Gunanas - The Home of Fruits Puns"


if __name__ == "__main__":
    app.run(debug=True)
