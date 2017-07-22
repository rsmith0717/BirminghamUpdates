--CREATE TABLE STATEMENTS

create table events(
event varchar(500) not null,
start_time datetime,
end_time datetime,
event_description_agenda varchar(1000),
venue varchar(200),
street_address varchar(200),
latitude float,
longitude float,
classification varchar(100),
location_address varchar(200),
audience varchar(200),
location_zip varchar(6),
location_state varchar(50),
event_info_url_description varchar(1000),
event_info_url varchar(2083));

-- Edited on 20170719
--Database name: webproject
--To create database:
create database webproject;
--To use database :
use webproject;



--NEW CREATE TABLE STATEMENTS

create table events(
event varchar(500) not null,
start_time varchar(100),
end_time varchar(100),
event_description_agenda varchar(1000),
venue varchar(200),
street_address varchar(200),
latitude float,
longitude float,
classification varchar(100),
location_address varchar(200),
audience varchar(200),
location_zip varchar(6),
location_state varchar(50),
event_info_url_description varchar(1000),
event_info_url varchar(2083));
