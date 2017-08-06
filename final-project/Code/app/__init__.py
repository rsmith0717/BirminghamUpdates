# app/__init__.py

# third-party imports
from flask import Flask
from flask_bootstrap import Bootstrap
from flask_sqlalchemy import SQLAlchemy
from flask_login import LoginManager
from flask_migrate import Migrate
from flask_googlemaps import GoogleMaps
from flask_googlemaps import Map
from flask_mail import Mail
import pymysql
pymysql.install_as_MySQLdb()


# local imports
from config import app_config

db = SQLAlchemy()
login_manager = LoginManager()


def create_app(config_name):
    app = Flask(__name__, instance_relative_config=True)
    #app.config.from_object(app_config[config_name])
    app.config.from_object(app_config['development'])
    app.config.from_pyfile('config.py')
    #Future work: create txt file to store googlemaps_key
    app.config['GOOGLEMAPS_KEY'] = "AIzaSyDwtj6w0ghdk0un6lxhzsB3DmatH_hIYhc"
    db.init_app(app)

    login_manager.init_app(app)
    login_manager.login_message = "You must be logged in to access this page."
    login_manager.login_view = "auth.login"

    migrate = Migrate(app, db)

    GoogleMaps(app)
    Bootstrap(app)
    mail = Mail(app)

    #Correct position
    from app import models

    from .admin import admin as admin_blueprint
    app.register_blueprint(admin_blueprint, url_prefix='/admin')

    from .auth import auth as auth_blueprint
    app.register_blueprint(auth_blueprint)

    from .home import home as home_blueprint
    app.register_blueprint(home_blueprint)

    from app import models



    return app
