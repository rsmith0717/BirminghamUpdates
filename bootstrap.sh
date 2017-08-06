#!/usr/bin/env bash
#Create on 20170805
#Group BHAM Activities
#Based on bootstrap.sh in CS622 Summer-2017 class at UAB
# adapted and extended from        https://www.dev-metal.com/super-simple-vagrant-lamp-stack-bootstrap-installable-one-command/

# Use single quotes instead of double quotes to make it work with special-character passwords
PASSWORD='pwd12345'
WEBPROJECTFOLDER='final-project'

# create project folder
sudo mkdir  "/var/www/html/${WEBPROJECTFOLDER}"

export DEBIAN_FRONTEND=noninteractive

# update / upgrade
sudo apt-get update
sudo apt-get -y upgrade

# install python in case wasn't installed on the box
sudo apt-get -y install python3 ipython3 curl

# To have python runs with python3
sudo ln -s /usr/bin/python3 /usr/bin/python

# installing Pip, the recommended package installer for Python:
sudo apt-get -y install python3-pip
sudo -H pip3 install --upgrade pip

# install apache2 web server
sudo apt-get install -y apache2

# install Flask
sudo apt-get -y install python3-flask

# install and enable mod_wsgi for running Python 3 with Apache
sudo apt-get -y install libapache2-mod-wsgi-py3

# install database server, mysql, and give an initial password to installer.
# Best is to change password afterward so that the new password will not be viewable
# in a text file like this one.
sudo debconf-set-selections <<< "mysql-server mysql-server/root_password password $PASSWORD"
sudo debconf-set-selections <<< "mysql-server mysql-server/root_password_again password $PASSWORD"
sudo apt-get -y install mysql-server

# install a simple way to connect Python with MySQL
sudo pip3 install pymysql
sudo apt-get -qqy install python3-sqlalchemy
sudo pip3 install flask-sqlalchemy

#install flask requirement packages from requirements.txt
sudo pip3 install -r "/var/www/html/requirements.txt"

sudo pip3 install virtualenv
sudo pip3 install virtualenvwrapper
export WORKON_HOME=~/Envs
source /usr/local/bin/virtualenvwrapper.sh

sudo pip3 install flask_bootstrap
sudo pip3 install flask_migrate
sudo pip3 install flask_wtf
sudo pip3 install Flask
sudo pip3 install flask_mail
sudo pip3 install flask_googlemaps
sudo pip3 install flask_login

#================================Database setup========================#
#chmod create-db.sh 755
sudo chmod +x /var/www/html/create-db.sh
#create new db and dbuser
/var/www/html/create-db.sh final_project bhamadmin password
/var/www/html/create-db.sh final_project dt_admin dt2016
#import the existing database
#mysql -ubhamadmin -ppassword final_project < /var/www/html/export_final_project.sql
mysql -ubhamadmin -ppassword final_project < /var/www/html/20170805_1946_DumpExport.sql
#=====================================================================#


# setup hosts file
VHOST=$(cat <<EOF
<VirtualHost *:80>
    DocumentRoot "/var/www/html/${PROJECTFOLDER}"
    <Directory "/var/www/html/${PROJECTFOLDER}">
        AllowOverride All
        Require all granted
    </Directory>
</VirtualHost>
EOF
)
echo "${VHOST}" > /etc/apache2/sites-available/000-default.conf


# setup webproject hosts file
WEBVHOST=$(cat <<EOF
<virtualhost *:80>
	ServerName bhamactivities
	WSGIDaemonProcess app user=www-data group=www-data threads=5 home=/var/www/html/final-project/Code/
	WSGIScriptAlias / /var/www/html/final-project/Code/run.wsgi

	<directory /var/www/html/final-project/Code>
  		WSGIProcessGroup app
  		WSGIApplicationGroup %{GLOBAL}
  		WSGIScriptReloading On
  		AllowOverride All
  		Require all granted
 	</directory>
</virtualhost>
EOF
)
echo "${WEBVHOST}" > /etc/apache2/sites-available/webproject.conf


PROFILE=$(cat <<EOF
alias shared="cd /var/www/html/"
alias project="cd /var/www/html/final-project/"
alias el="sudo cat /var/log/apache2/error.log"
alias sa="cd /etc/apache2/sites-available"
alias ar="sudo service apache2 restart"
EOF
)
echo "${PROFILE}" > ~/.bash_profile

# enable mod_rewrite
sudo a2enmod rewrite

# restart apache
sudo service apache2 restart

#ensure apache2 ENV vars are set for the session
source /etc/apache2/envvars

# install git
sudo apt-get -y install git

# enable mod_wsgi
sudo a2enmod wsgi

#disable default apache2 config file
sudo a2dissite "000-default.conf"

#Enable final-project apache2 config file
sudo a2ensite "webproject.conf"

# restart apache
sudo service apache2 restart
