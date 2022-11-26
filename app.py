from flask import Flask, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
import json

app = Flask(__name__)

app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///users_database.db"

db = SQLAlchemy(app)

migrate = Migrate(app,db)


class User(db.Model):
    __tablename__='users_table'
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String, unique=True, nullable=False)
    email = db.Column(db.String)

@app.route('/')
def example():
    with open('example.json','r') as file:
        message = json.loads(file.read())
    return message

@app.route('/by_id/<int:id>')
def by_id(id):
    user = User.query.filter(User.id==id).scalar()
    user_obj = {'id':user.id,'name':user.username,'email':user.email}
    return jsonify(user_obj)

@app.route('/all')
def users_all():
    users = User.query.all()
    users_list = list(map(lambda user: {'id':user.id,'name':user.username,'email':user.email} ,users))
    return jsonify(users_list)


if __name__ == '__main__':
    app.run(host='localhost', port=7000, debug=True)
