# Do these things before trying to run the program
# import the sql file to give yourself a database to work with
# mysql -u <user> -p<password> <dbname> < file.sql
# export FLASK_CONFIG=development
# export FLASK_APP=run.py
# flask run
# admin account is admin@admin.com  password is admin2016
# https://scotch.io/tutorials/build-a-crud-web-app-with-python-and-flask-part-one
import os

from app import create_app

#config_name = os.getenv('FLASK_CONFIG')
config_name = 'development'
app = create_app(config_name)

if __name__ == '__main__':
    #Allow client access to python application outside the virtual machine
    app.run(host='0.0.0.0',port=5000)
