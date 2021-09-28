from flask import Flask, request
from flask_cors import CORS
from controller import puns
from model import Pun


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
    Pun.Pun.load()
    print(Pun.Pun.pun_list)
    app.run(debug=True)
