from model import Pun
from werkzeug import exceptions

puns = [
    {"id": 1, "name": "Owen", "pun": "We’re raisin the roof!"},
    {"id": 2, "name": "Abi", "pun": "Orange you glad to see me?"},
    {
        "id": 3,
        "name": "Simon",
        "pun": "I sat down be cider and we talked for hours.",
    },
    {"id": 4, "name": "Harris", "pun": "Well, it takes two to mango."},
    {"id": 5, "name": "Tobi", "pun": "Honey, dew or dew not, there is no try."},
    {"id": 6, "name": "Kenneth", "pun": "You hold the kiwi to my heart"},
]


def show(request):
    return Pun.Pun.get_all(), 200


def create(req):
    new_pun = req.get_json()
    name = new_pun["name"]
    pun = new_pun["pun"]
    Pun.add(name, pun)
    return new_pun, 201


def index_puns(uid):
    return Pun.Pun.get_by_id(uid), 200
