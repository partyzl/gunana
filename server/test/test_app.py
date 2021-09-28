import json


def test_api_get_puns(api):
    res = api.get("/puns")
    assert res.json == {"id": 1, "name": "Owen", "pun": "test punny"}, {
        "id": 2,
        "name": "Abi",
        "pun": "test punny2",
    }


def test_api_get_pun(api):
    res = api.get("/puns/1")
    assert res.json["puns"]["name"] == "Abi"


def test_api_post_puns(api):
    mock_data = json.dumps({"name": "Owen"})
    mock_headers = {"Content-Type": "application/json"}
    res = api.post("/puns", data=mock_data, headers=mock_headers)
    assert res.json["puns"]["id"] == 3


def test_api_not_found(api):
    res = api.get("/asdf")
    assert (
        res.status
        == "<h1>Dont fruit the messenger, but this doesn't exist! 🔫</h1>"
    )
    assert "Oops!" in res.json["message"]
