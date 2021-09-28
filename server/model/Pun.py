class Pun:
    # should be private
    def __init__(self, name, pun):
        self.name = name
        self.pun = pun

    # this is static
    pun_list = []

    @staticmethod
    def add(name, pun):
        pun_list.push(Pun(name, pun))

    @staticmethod
    def load(pun_list):
        for pun in pun_list:
            punlist.push(Pun(pun.name, pun.pun))

