# app/admin/__init__.py

from flask import Blueprint
from flask import Flask
from flask_mail import Mail, Message

home = Blueprint('home', __name__)

from . import views
