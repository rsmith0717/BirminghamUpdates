from flask import render_template
from config import ADMINS
from flask_mail import Message
from app import mail

def send_email(subject, sender, recipients, text_body, html_body):
    msg = Message(subject, sender=sender, recipients=recipients)
    msg.body = text_body
    msg.html = html_body
    mail.send(msg)



def event_update(recipient):
    #send_email('Test Email',ADMINS[0], recipient,  )