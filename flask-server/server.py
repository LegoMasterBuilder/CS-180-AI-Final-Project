from flask import Flask, request, render_template
from use_model import predict
from flask import jsonify 
import sys

app = Flask(__name__, template_folder = 'template')

# @app.route("/api/<string:title>/", methods=["GET"])
# def predict_title(title):
#     title = title.replace("_", " ")
#     print(title, file=sys.stderr)
#     return {"nsfw": str(predict([title])[0])}

@app.route("/api", methods=["GET"])
def predict_title():
    if request.method == 'GET':
        title = request.args.get('title', None)
        
        if title:
            result = str(predict([title])[0])
            if result == '0':
                return render_template('sfw.html')
            elif result == '1':
                return render_template('nsfw.html')
            
        return "No Reddit Title information is given."

if __name__ == "__main__":
    app.run()