from flask import render_template
from flask_login import login_required
from flask import abort, render_template
from flask_login import current_user, login_required

from . import home
from ..models import *


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
    Edit a event
    """
    add_event = False

    event = Events.query.get_or_404(id)

    return render_template('home/view-event.html', action="Edit",
                           add_event=add_event, event=event, title="View Event")

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