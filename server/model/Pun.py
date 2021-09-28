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


class Pun:
    # should be private
    def __init__(self, id, name, pun):
        self.id = id
        self.name = name
        self.pun = pun

    # this is static
    pun_list = []

    @staticmethod
    def add(name, pun):
        Pun.pun_list.append(Pun(len(Pun.pun_list), name, pun))

    @staticmethod
    def load():
        for pun in puns:
            Pun.pun_list.append(Pun(len(Pun.pun_list), pun["name"], pun["pun"]))

    @staticmethod
    def get_by_id(id):
        return Pun.pun_list[id]
