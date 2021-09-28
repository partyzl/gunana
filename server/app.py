from flask import Flask, request, jsonify
from flask_cors import CORS
from werkzeug import exceptions
from puns import puns

app = Flask(__name__)
CORS(app)


@app.route("/")
def welcome():
    return "Welcome to Gunanas - The Home of Fruits Puns"


@app.route("/puns", methods=["GET", "POST"])
def puns_handler():
    fns = {"GET": puns.show, "POST": puns.create}
    return fns[request.method](request)


@app.route("/puns/<int:id>", methods=["GET"])
def index_puns(id):
    return puns.index(id)


if __name__ == "__main__":
    app.run(debug=True)
