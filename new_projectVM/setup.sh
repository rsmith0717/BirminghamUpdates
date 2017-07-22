#!/usr/bin/env bash
#setup.sh is created by Chanchai Lee on 20170719

#Create .profile variable
AL=$(cat <<EOF
alias shared="cd /var/www/html"
alias project="cd /var/www/html/project"
alias el="sudo nano /var/log/apache2/error.log"
alias sa="cd /etc/apache2/sites-available"
EOF
)
echo "${AL}" > ~/.profile

#Add hostname to /etc/hosts
EDITHOST=$(cat <<EOF
127.0.0.1 webproject
EOF
)
echo "${EDITHOST}" > /etc/hosts
