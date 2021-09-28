import pytest
import app


@pytest.fixture
def api(monkeypatch):
    test_dogs = [
        {"id": 1, "name": "Owen", "pun": "test punny"},
        {"id": 2, "name": "Abi", "pun": "test punny2"},
    ]
    monkeypatch.setattr(app, "puns", test_puns)
    api = app.app.test_client()
    return api
