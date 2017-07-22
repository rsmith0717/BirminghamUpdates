#!/usr/bin/python

from flask import Flask, render_template, request, Response
import json
from dbfunctions import *

app = Flask(__name__)

@app.route("/")
@app.route("/index")
def index():
 courses = getCourses()		# get the list of courses from db to initialize the raio button list
 return render_template('index.html', courses=courses)

# *** A. You are to create the code for the route decorator of "/processRecord" to handle the
# POST request from the form
# The view function for this route decorator should:
# 1. store the 5 fields from the form into database using the
#		db method of createRecord in dbfunctions.
# 2. on return, render the template of processRecord.html, and pass to the template
#		the parameters of firstname, lastname, email, and coursenum so that you
#		can use these info to display them on that page
@app.route("/processRecord", methods=[ 'POST'])
def processRecord():
 record={
 "firstname":request.values.get('firstname'),
 "lastname":request.values.get('lastname'),
 "email":request.values.get('email'),
 "coursenum":request.values.get('coursenum')
 }
 createRecord(**record) ## createRecord from input
 return render_template('processRecord.html',record=record)


###################################### End A#############################

# *** B. You are to create the code for the route decorator of "/studentRecords" to handle the
# get request from URL link to display the template of 'studentRecords.html
# The view function for this route decorator should:
# 1. get the current enrollment records from the database using db method
#	of getEnrollmentRecords in dbfunctions.
# 2. on return, render the template of 'studentRecords.html' and pass it the list
#	of enrollment records retrieved from the database so that you can display them
# 	in the  studentRecords.html template
@app.route("/studentRecords")
def studentRecords():
 totalRecords = getEnrollmentRecords()
 return render_template('studentRecords.html',totalRecords=totalRecords)
###################################### End B #############################


# used for debugging in development only!  NOT for production!!!
if __name__ == "__main__":
 app.debug = True
 app.run(host='0.0.0.0', port=5000)
