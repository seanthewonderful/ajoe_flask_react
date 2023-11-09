from database import db


class User(db.Model):
    """users table"""

    __tablename__ == "users"

    id = db.Column(db.Integer, primary_key=True, autoincrement=True)

    username = db.Column(db.String(50))
    password = db.Column(db.String(250))
    email = db.Column(db.String(75))
    zipcode = db.Column(db.String(5), nullable=True)

    def __repr__(self) -> str:
        return f"<User: {self.username}"
