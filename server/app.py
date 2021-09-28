from flask import Flask, request
from flask_cors import CORS
from controller import puns
from model import Pun
from werkzeug import exceptions


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
    return puns.index_puns(id)


@app.errorhandler(exceptions.NotFound)
def handle_404(err):
    return "<h1>Dont fruit the messenger, but this doesn't exist! 🔫</h1>", 404


@app.errorhandler(exceptions.BadRequest)
def handle_400(err):
    return "<h1>Berry sorry, it's not us, it's you 🔫 </h1>", 400


@app.errorhandler(exceptions.InternalServerError)
def handle_500(err):
    return "<h1>Berry sorry, it's not you, it's us 🔫 </h1>", 500


if __name__ == "__main__":
    Pun.Pun.load()
    print(Pun.Pun.pun_list)
    app.run(debug=True)
