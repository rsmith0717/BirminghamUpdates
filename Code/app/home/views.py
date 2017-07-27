from flask import abort, flash, redirect, render_template, url_for
from flask_login import current_user, login_required
from flask_googlemaps import GoogleMaps
from flask_googlemaps import Map

from . import home
from .forms import EventForm
from ..models import *


def check_creator(id):
    """
    Prevent non-admins from accessing the page
    """
    if current_user.id == id:
        return True
    else:
        return False

@home.route('/')
def homepage():
    """
    Render the homepage template on the / route
    """
    return render_template('home/index.html', title="Welcome")

@home.route('/all-events')
@home.route('/all-events/<int:page>', methods=['GET', 'POST'])

def allevents(page=1):
    """
    Render the events on the / route all-events
    """
    #events = Events.query.all()
    POSTS_PER_PAGE = 20
    events = Events.query.paginate(page, POSTS_PER_PAGE, False)



    return render_template('home/all-events.html',
                           events=events, title="Events")

@home.route('/events/view/<int:id>', methods=['GET', 'POST'])
def view_event(id):
    """
    View a event
    """
    add_event = False

    event = Events.query.get_or_404(id)
    creator_id = event.usersID
    creator = False
    # creating a map in the view
    latitude = event.latitude
    lng = event.longitude

    """mymap = Map(
        #identifier="view-side",
        #latitude = event.latitude,
        lng = event.longitude,
        markers = [(latitude,lng)]
    )
    """
    mymap = Map(
        identifier="view-side",
        lat=37.4419,
        lng=-122.1419,
        markers=[(37.4419, -122.1419)]
    )

    if hasattr(current_user, 'id'):
        creator = check_creator(creator_id)
        print(creator)


    return render_template('home/view-event.html',
                           add_event=add_event, event=event, action='Edit', title="View Event", creator=creator)#mymap=mymap

@home.route('/events/edit/<int:id>', methods=['GET', 'POST'])
def edit_event(id):
    add_event = False

    event = Events.query.get_or_404(id)
    creator_id = event.usersID
    creator = check_creator(creator_id)
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
        return redirect(url_for('home.view_event', id=event.id))

    form.description.data = event.description
    form.name.data = event.name
    return render_template('home/edit-event.html', action="Edit",
                           add_event=add_event, form=form,
                           event=event, title="Edit Event",creator=creator)

@home.route('/dashboard')
@login_required
def dashboard():
    """
    Render the dashboard template on the /dashboard route
    """
    return render_template('home/dashboard.html', title="Dashboard")

# add admin dashboard view
@home.route('/admin/dashboard')
@login_required
def admin_dashboard():
    # prevent non-admins from accessing the page
    if not current_user.is_admin:
        abort(403)

    return render_template('home/admin_dashboard.html', title="Dashboard")