# views 2 change Event to Events
from app import mail
from flask import abort, flash, redirect, render_template, url_for
from flask_login import current_user, login_required
from flask_mail import Message, Mail
from flask import current_app


from . import admin
from .forms import EventForm
from .. import db
#from .. import mail
from ..models import *
from config import ADMINS


def check_admin():
    """
    Prevent non-admins from accessing the page
    """
    if not current_user.is_admin:
        abort(403)

# Event Views

@admin.route('/events', methods=['GET', 'POST'])
@admin.route('/events/<int:page>', methods=['GET', 'POST'])
@login_required
def list_events(page=1):
    """
    List all events
    """
    check_admin()

    #events = Events.query.all()
    POSTS_PER_PAGE = 20
    events = Events.query.paginate(page, POSTS_PER_PAGE, False)

    return render_template('admin/events/events.html',
                           events=events, title="Events")

@admin.route('/events/add', methods=['GET', 'POST'])
@login_required
def add_event():
    """
    Add a event to the database
    """
    check_admin()

    add_event = True

    form = EventForm()
    if form.validate_on_submit():
        event = Events(name=form.name.data,
                                description=form.description.data, startTime = form.startTime.data, 
                                endTime = form.endTime.data,  longitude = form.longitude.data,
                                latitude = form.latitude.data, usersID= current_user.id)
        try:
            # add event to the database
            db.session.add(event)
            db.session.commit()
            flash('You have successfully added a new event.')
        except:
            # in case event name already exists
            flash('Error: event name already exists.')

        # redirect to event page
        return redirect(url_for('admin.list_events'))

    # load event template
    return render_template('admin/events/event.html', action="Add",
                           add_event=add_event, form=form,
                           title="Add Event")

@admin.route('/events/edit/<int:id>', methods=['GET', 'POST'])
@login_required
def edit_event(id):
    """
    Edit a event
    """
    check_admin()

    add_event = False

    event = Events.query.get_or_404(id)
    form = EventForm(obj=event)
    if form.validate_on_submit():
        event.name = form.name.data
        event.description = form.description.data
        event.startTime = form.startTime.data
        event.endTime = form.endTime.data
        event.longitude = form.longitude.data
        event.latitude = form.latitude.data
        db.session.commit()
        flash('You have successfully edited the event.')

        # redirect to the departments page
        return redirect(url_for('admin.list_events'))

    form.description.data = event.description
    form.name.data = event.name
    return render_template('admin/events/event.html', action="Edit",
                           add_event=add_event, form=form,
                           event=event, title="Edit Event")

@admin.route('/events/delete/<int:id>', methods=['GET', 'POST'])
@login_required
def delete_event(id):
    """
    Delete a devent from the database
    """
    check_admin()

    event = Events.query.get_or_404(id)
    db.session.delete(event)
    db.session.commit()
    flash('You have successfully deleted the event.')

    # redirect to the events page
    return redirect(url_for('admin.list_events'))

    return render_template(title="Delete Event")

#@admin.route('/test-email/', methods=['GET', 'POST'])
@admin.route('/test-email/')
@login_required
def test_email():
    """
    Email Test
    """
    check_admin()

    events = Events.query.all()
    """
    POSTS_PER_PAGE = 20
    events = Events.query.paginate(1, POSTS_PER_PAGE, False)
    #msg = Message('test subject', sender=ADMINS[0], recipients=ADMINS[0])
    """
    msg = Message('Formatted Email Test',
    sender=ADMINS[0],
    recipients=ADMINS)

    msg.body = 'Test Email: this message body'
    #msg.html = '<b>HTML</b> body'
    msg.html = render_template('admin/events/email-template.html',
                           events=events, title="Events for the Month")
    mail.send(msg)
    return msg.html
