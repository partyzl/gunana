import json


def test_api_get_puns(api):
    res = api.get("/puns")
    assert res.json == {"id": 1, "name": "Owen", "pun": "test punny"}, {
        "id": 2,
        "name": "Abi",
        "pun": "test punny2",
    }
