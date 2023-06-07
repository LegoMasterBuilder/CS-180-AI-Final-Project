from flask import Flask
from flask.json import jsonify
from use_model import predict

app = Flask(__name__)


@app.route("/api/<string:title>/", methods=["GET"])
def predict_title(title):
    title = title.replace("_", " ")
    return {"nsfw": str(predict([title])[0])}


if __name__ == "__main__":
    app.run()
