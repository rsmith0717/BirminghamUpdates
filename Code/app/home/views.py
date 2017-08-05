from flask import abort, flash, redirect, render_template, url_for, jsonify,json,request
from flask_login import current_user, login_required
from flask_googlemaps import GoogleMaps
from flask_googlemaps import Map
from sqlalchemy import text



from . import home
from .forms import EventForm
from .. import db
from ..models import *
from config import ADMINS


def check_creator(id):
    """
    Prevent non-admins from accessing the page
    """
    if current_user.id == id:
        return True
    else:
        return False

def check_location(longitude):
    """
    Prevent non-admins from accessing the page
    """
    if longitude != "":
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
    attendees = Subscription.query.count()




    return render_template('home/all-events.html',
                           events=events, title="Events")

@home.route('/myevents')
@home.route('/myevents/<int:page>', methods=['GET', 'POST'])

def myevents(page=1):
    """
    Render the events on the / route all-events
    """
    #events = Events.query.all()
    POSTS_PER_PAGE = 20
    events = Events.query.filter_by(usersID=current_user.id).paginate(page, POSTS_PER_PAGE, False)


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

    attendees = Subscription.query.filter_by(event_id=id)
    tfval = check_location(latitude)

    """mymap = Map(
        #identifier="view-side",
        #latitude = event.latitude,
        lng = event.longitude,
        markers = [(latitude,lng)]
    )
    """
    if hasattr(current_user, 'id'):
        creator = check_creator(creator_id)
        print(creator)


    return render_template('home/view-event.html',
                           add_event=add_event, event=event, action='Edit', title="View Event", creator=creator, tfval=tfval)


@home.route('/events/attend/<int:id>', methods=['GET', 'POST'])
@login_required
def attend_event(id):
    """
    View a event
    """

    event = Events.query.get_or_404(id)
    event_id = event.id
    username = current_user.username

    subscription = Subscription(username=username, event_id=event_id)

    db.session.add(subscription)
    db.session.commit()
    flash('You have successfully registered for an event!')

    return redirect(url_for('home.allevents'))

@home.route('/events/edit/<int:id>', methods=['GET', 'POST'])
@login_required
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


@home.route('/events/add', methods=['GET', 'POST'])
@login_required
def createevent():
    add_event = True
    form = EventForm()
    if form.validate_on_submit():
        event = Events(name=form.name.data,
        description=form.description.data,
        startTime = form.startTime.data,
        endTime = form.endTime.data,
        longitude = form.longitude.data,
        latitude = form.latitude.data,
        usersID=current_user.id)
        try:
            # add event to the database
            db.session.add(event)
            db.session.commit()
            flash('You have successfully added a new event.')
        except:
            # in case event name already exists
            flash('Error: event name already exists.')

        # redirect to event page
        return redirect(url_for('home.allevents'))

    return render_template('home/edit-event.html', action="Add",
                           add_event=add_event, form=form,
                           title="Add Event")


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


def alchemyencoder(obj):
    """JSON encoder function for SQLAlchemy special classes."""
    if isinstance(obj, datetime.date):
        return obj.isoformat()
    elif isinstance(obj, decimal.Decimal):
        return float(obj)

def haversine(lon1, lat1, lon2, lat2):
    """
    Calculate the great circle distance between two points
    on the earth (specified in decimal degrees)
    """
    # convert decimal degrees to radians
    lon1, lat1, lon2, lat2 = map(radians, [lon1, lat1, lon2, lat2])
    # haversine formula
    dlon = lon2 - lon1
    dlat = lat2 - lat1
    a = sin(dlat/2)**2 + cos(lat1) * cos(lat2) * sin(dlon/2)**2
    c = 2 * asin(sqrt(a))
    km = 6367 * c
    return km



#api - get all events api
@home.route('/api/allevents')
def get_tasks():
    args = request.args
    limit = args['limit']
    latitude = args['latitude']
    longitude = args['longitude']
    radius = args['radius']
    query = "SELECT * , ( '3959' * acos( cos(radians({0}) ) * cos( radians(latitude)) * cos(radians(longitude) - radians({1}) ) + sin( radians({0}) ) * sin(radians(latitude)))) as distance FROM `table 5` where ( '3959' * acos( cos(radians({0}) ) * cos( radians(latitude)) * cos(radians(longitude) - radians({1}) ) + sin( radians({0}) ) * sin(radians(latitude)))) < {2}".format(latitude,longitude,radius)
    #print(query)
    sql = text(query)
    res = db.engine.execute(sql)

    #return jsonify(dict(data=[query])) # or whatever is required
    return json.dumps([dict(r) for r in res], default=alchemyencoder)
