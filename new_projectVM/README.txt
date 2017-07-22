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
      alias project="cd /var/www/html/project"
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
Create new wsgi file:
    sudo nano webproject.wsgi
      ->
      import sys
      sys.path.append('/var/www/html/project/')
      from webproject import app as application
      #
_________________________________________________________________________
