# Connect to the database.
import sys
import pymysql

# connect to db
# pymysql.connect def makeConnection():
def makeConnection():

	file = open(sys.path[0]+"/dbconfig.txt", "r")   
	dbStr = file.readline().strip() 
	userStr = file.readline().strip() 
	passwdStr = file.readline().strip() 
	hostStr = file.readline().strip() 

	conn = pymysql.connect(
		db=dbStr,
		user=userStr,
		passwd=passwdStr,
		host=hostStr)
	return conn


# void def createRecord(**studentRec):
def createRecord(**studentRec):
	firstname = studentRec['firstname'].strip()
	lastname = studentRec['lastname'].strip()
	email = studentRec['email'].strip()
	coursenum = studentRec['coursenum'].strip()

	conn = makeConnection()
	c = conn.cursor()

	# Insert student data.
	query = "CALL create_enrollment ('%s', '%s', '%s', '%s');" % (firstname, lastname, email, coursenum)
	c.execute(query)
	conn.commit()
	conn.close()
	

# list-of-list 	getEnrollmentRecords():	
def getEnrollmentRecords():
	conn = makeConnection()
	c = conn.cursor()	

	# Print the contents of the db table.
	c.execute("CALL get_all_enrollments();")	

	# Fetch all the rows in a list of lists.
	results = c.fetchall()

	conn.close()
	return results

# [] getCourses():	
def getCourses():
	conn = makeConnection()
	c = conn.cursor()	

	# Print the contents of the db table.
	c.execute("CALL get_courses();")	

	# Fetch all the rows in a list of lists.
	results = c.fetchall()

	records = []
	for i, r in enumerate(results):
		records.append(r[0])
# 		print ("%d: %s" % (i+1,  r[0]))

	conn.close()
	return records	