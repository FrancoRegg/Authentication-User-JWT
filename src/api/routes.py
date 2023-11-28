"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException

from flask_jwt_extended import create_access_token
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required

api = Blueprint('api', __name__)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200


##### ruta de registro de usuario #####
@api.route("/register", methods=['POST'])
def register():
    body = request.get_json(silent=True)
    if body is None:
        return jsonify('body must be sent'), 400
    if 'email' not in body:
        return jsonify('email required'), 400
    if 'password' not in body:
        return jsonify('password required'), 400

    new_user = User(email=body['email'],
                    password=body['password'], is_active=True)
    db.session.add(new_user)
    db.session.commit()
    return jsonify('Successful registration')

##### ruta de inicio de sesion #####


"""@api.route("/login", methods=["POST"])
def login():
    body = request.get_json(silent=True)
    if body is None:
        return jsonify('body must be sent'), 400
    if 'email' not in body:
        return jsonify('email required'), 400
    if 'password' not in body:
        return jsonify('password required'), 400

    user = User.query.filter_by(email=body['email']).first()
    if user is None:
        return jsonify('usuario inexistente')
    if user.password != body['password']:
        return jsonify('contraseña correcta')"""





