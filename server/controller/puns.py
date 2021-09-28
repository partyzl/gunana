from flask import jsonify
from model import Pun
from werkzeug import exceptions
import data


def show():
    return jsonify(Pun.pun_list), 200


def create(req):
    new_pun = req.get_json()
    name = new_pun["name"]
    pun = new_pun["pun"]
    Pun.add(name, pun)
    return new_pun, 201


def index_puns(uid):
    return Pun.get_by_id(uid), 200
