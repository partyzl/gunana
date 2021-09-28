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
        Pun.pun_list.push(Pun(len(Pun.pun_list), name, pun))

    @staticmethod
    def load():
        for pun in Pun.pun_list:
            Pun.pun_list.push(Pun(len(Pun.pun_list), pun.name, pun.pun))

    @staticmethod
    def get_by_id(id):
        return Pun.pun_list[id]
