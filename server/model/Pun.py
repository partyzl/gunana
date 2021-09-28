class Pun:
    # should be private
    def __init__(self, id, name, pun):
        self.id = id
        self.name = name
        self.pun = pun

    # this is static
    pun_list = []

    @staticmethod
    def add(len(pun_list), name, pun):
        pun_list.push(Pun(name, pun))

    @staticmethod
    def load(pun_list):
        for pun in pun_list:
            punlist.push(Pun(len(pun_list), pun.name, pun.pun))

    def get_by_id(id):
        return pun_list[id]



