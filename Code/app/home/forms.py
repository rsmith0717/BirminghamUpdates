from flask_wtf import FlaskForm
from wtforms import StringField, SubmitField
from wtforms.validators import DataRequired

class EventForm(FlaskForm):
    """
    Form for admin to add or edit a department
    """
    name = StringField('Name', validators=[DataRequired()])
    description = StringField('Description', validators=[DataRequired()])
    startTime = StringField('Start Time', validators=[DataRequired()])
    endTime = StringField('End Time', validators=[DataRequired()])
    latitude = StringField('Latitude', validators=[DataRequired()])
    longitude = StringField('Longitude', validators=[DataRequired()])
    submit = SubmitField('Submit')
