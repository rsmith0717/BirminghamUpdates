This is the latest version of Vagrantfile create on 20170719
OS Information
host: 127.0.0.1
host name: webproject
application name: webproject
Host port: 8080(http), 5000(Flask), 3306(mySQL)
_________________________________________________________________________
To Run OS

1.run vagrant up
2.run vagrant ssh
3.set up .profile
    - sudo nano .profile
      alias shared="cd /var/www/html/"
      alias project="cd /var/www/html/final-project/Code"
      alias el="sudo nano /var/log/apache2/error.log"
      alias sa="cd /etc/apache2/sites-available"
4.edit /etc/hosts file
    - sudo nano /etc/hosts
      127.0.0.1 webproject
_________________________________________________________________________

MySQL Information:
Edit mysql conf for external mysql client access:
  sudo nano /etc/mysql/mysql.conf.d/mysqld.cnf
  comment line:
    #bind-address       = 127.0.0.1

Allow mySQL client get access from outside:
grant all on *.* to root@'10.0.2.2' identified by 'pwd12345';

To login : mysql -u root -p
password : pwd12345

Database name: webproject
To create database: create database webproject;
To use database : use webproject;

________________________________________________________________________

To enable new apache config file:

To disable previous apache2 config :
    Change directory -> cd /etc/apache2/sites-available
    To disable previous configuration -> sudo a2dissite 000-default.conf
    To enable new configuration-> sudo a2ensite webproject.conf
    Restart apache2 server--> sudo service apache2 restart

_________________________________________________________________________
Install Virtual Environment
    $sudo pip install virtualenv
    $sudo pip install virtualenvwrapper

_________________________________________________________________________
Install flask and freeze
  $sudo pip install Flask
  $sudo pip freeze

_________________________________________________________________________

Install Flask Mail
   $sudo pip install Flask-Mail

   ref: https://pythonhosted.org/Flask-Mail/

_________________________________________________________________________
Install Flask Google Map
    $sudo pip install flask-googlemaps

    ref: https://pypi.python.org/pypi/Flask-GoogleMaps/

_________________________________________________________________________
Install mysql-python

  $sudo pip install flask-sqlalchemy mysql-python


_________________________________________________________________________
Create new wsgi file:
$sudo nano webproject.wsgi
      ->
      import sys
      sys.path.append('/var/www/html/project/')
      from webproject import app as application
      #
_________________________________________________________________________
Install Flask Login:

$ sudo pip install flask-login


_________________________________________________________________________
Install Flask-migrate : for the database (SQLALCHEMY)
$ source /usr/local/bin/virtualenvwrapper.sh
$ sudo pip install flask-migrate
$ flask db init
_________________________________________________________________________
Install pymysql
$sudo pip install pymysql
_________________________________________________________________________
Install Blueprint and Flask-bootstrap
[WTF FORM]
$ sudo pip install Flask-WTF
$ sudo pip install flask-bootstrap

install wtforms components for time picker.
$ sudo pip install wtforms-components


_________________________________________________________________________

Email Newsletter
Ref: https://blog.miguelgrinberg.com/post/the-flask-mega-tutorial-part-xi-email-support
1. Register the admin email account ex: gmail
2. Create temp email for users. URL: maildrop.cc
    ex: bhamuser@maildrop.cc, bhamuser1@maildrop.cc, bhamuser2@maildrop.cc
3. Edit Code>instance>config.py

      # email server
      MAIL_SERVER = 'smtp.googlemail.com'
      MAIL_PORT = 465
      MAIL_USE_TLS = False
      MAIL_USE_SSL = True
      MAIL_USERNAME = os.environ.get('MAIL_USERNAME')
      MAIL_PASSWORD = os.environ.get('MAIL_PASSWORD')

      # administrator list
      ADMINS = ['your-gmail-username@gmail.com']


=========================================================================
Traceback (most recent call last):
  File "run.py", line 14, in <module>
    app = create_app(config_name)
  File "/var/www/html/Code/app/__init__.py", line 22, in create_app
    app.config.from_object(app_config[config_name])
KeyError: None
#SOLUTION#
	- nano run.py
	- Change config_name to
			config_name = 'development'
	- nano app/__init__.py
	- Change  app.config.from_object(app_config[config_name])
				to  app.config.from_object(app_config['development'])
_______________________________________________________________________

#ERROR: Can't Access MySQL DB from MYSQL workbench#

#SOLUTION#:
- Ref: https://stackoverflow.com/questions/8348506/grant-remote-access-of-mysql-database-from-any-ip-address
	- $ sudo nano /etc/mysql/mysql.conf.d/mysqld.cnf
	- comment on bind-address in mysqld.cnf
	 #bind-address           = 127.0.0.1
	- $ sudo /etc/init.d/mysql restart

	- Change grant privilege
		- login to mysql
			$ mysql -u root -p
			$ pwd12345
		- Grant privilege
	 		mysql> GRANT ALL PRIVILEGES ON *.* TO 'root'@'%' IDENTIFIED BY 'pwd12345' WITH GRANT OPTION;
			mysql> GRANT ALL PRIVILEGES ON *.* TO 'dt_admin'@'%' IDENTIFIED BY 'dt2016' WITH GRANT OPTION;
			mysql> FLUSH PRIVILEGES;
_______________________________________________________________________
#ERROR: application can't run on host machine browser#

#SOLUTION#:
	- $ nano run.py
	- change app.run() to
	 		app.run(host='0.0.0.0',port=5000)


========================================================================
Export database to sql file
mysqldump -uUSERNAME -pPASSWORD -hHOSTNAME USER_DATABASE > FILENAME.sql

Then import using:
Import database from sql file
mysql -uUSERNAME -pPASSWORD -hHOSTNAME USER_DATABASE < FILENAME.sql
_______________________________________________________________________
