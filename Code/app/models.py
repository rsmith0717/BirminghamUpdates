# Remember that a model is a representation of a database table in code. We'll need three models: User, Event, and Role.
from flask_login import UserMixin
from werkzeug.security import generate_password_hash, check_password_hash

from app import db, login_manager

class User(UserMixin, db.Model):
    """
    Create an User table
    """

    # Ensures table will be named in plural and not in singular
    # as is the name of the model
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(60), index=True, unique=True)
    username = db.Column(db.String(60), index=True, unique=True)
    first_name = db.Column(db.String(60), index=True)
    last_name = db.Column(db.String(60), index=True)
    password_hash = db.Column(db.String(128))
    event_id = db.Column(db.Integer, db.ForeignKey('events.id'))
    role_id = db.Column(db.Integer, db.ForeignKey('roles.id'))
    is_admin = db.Column(db.Boolean, default=False)

    @property
    def password(self):
        """
        Prevent pasword from being accessed
        """
        raise AttributeError('password is not a readable attribute.')

    @password.setter
    def password(self, password):
        """
        Set password to a hashed password
        """
        self.password_hash = generate_password_hash(password)

    def verify_password(self, password):
        """
        Check if hashed password matches actual password
        """
        return check_password_hash(self.password_hash, password)

    def __repr__(self):
        return '<User: {}>'.format(self.username)

# Set up user_loader
@login_manager.user_loader
def load_user(user_id):
    return User.query.get(int(user_id))

class Event(db.Model):
    """
    Create a Event table
    """

    __tablename__ = 'events'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(60), unique=True)
    description = db.Column(db.String(200))
    users = db.relationship('User', backref='event',
                                lazy='dynamic')

    def __repr__(self):
        return '<Event: {}>'.format(self.name)

class Events(db.Model):
    """
    Create a Events table
    """

    __tablename__ = 'table 5'

    id = db.Column('event_id', db.Integer, primary_key=True)
    usersID = db.Column('users_id', db.Integer)
    name = db.Column('Event', db.String(100), unique=False)
    description = db.Column('Street Address', db.String(200))
    startTime = db.Column('Start time', db.String(200))
    endTime = db.Column('End Time', db.String(200))
    latitude = db.Column('Latitude', db.String(200))
    longitude = db.Column('Longitude', db.String(200))


    
    #users = db.relationship('User', backref='events',
                                #lazy='dynamic')

    def __repr__(self):
        return '<Event: {}>'.format(self.name)
