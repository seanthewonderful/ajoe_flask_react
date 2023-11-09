# from flask_vite import Vite
from flask import Flask
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
CORS(app)
db = SQLAlchemy()


@app.route("/")
def serve_frontend():
    return app.send_static_file("frontend/index.html")


@app.route("/members")
def members():
    return {"message": "Hello from Flask!"}


if __name__ == "__main__":
    db.init_app(app)
    app.run(debug=True)
