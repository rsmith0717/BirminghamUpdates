-- Database and tables must be created first before creating the sprocs

-- drop database school;

create database school;  

USE school;

-- drop table students;
 
CREATE TABLE students (
  studentId int NOT NULL AUTO_INCREMENT,
  firstname varchar(100) DEFAULT NULL,
  lastname varchar(100) DEFAULT NULL,
  email varchar(100) DEFAULT NULL,
  courseNum varchar(100) DEFAULT NULL,
  CUDDate TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  CUDAction int,
  PRIMARY KEY (studentId)
);

-- drop table courses;

CREATE TABLE courses (
  courseId int NOT NULL AUTO_INCREMENT,
  courseNum varchar(100) DEFAULT NULL,
  CUDDate TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  CUDAction int,
  PRIMARY KEY (courseId)
);

-- drop table enrollments;

CREATE TABLE enrollments (
  studentId int,
  courseId int,
  CUDDate TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  CUDAction int,
  KEY studentId (studentId),
  KEY courseId (courseId),
  CONSTRAINT enrollment_ibfk_1 FOREIGN KEY (studentId) REFERENCES students (studentId),
  CONSTRAINT enrollment_ibfk_2 FOREIGN KEY (courseId) REFERENCES courses (courseId)
);

-- initialize the courses table with a set of courses
insert into courses (courseNum, CUDAction) values ('CS421',  1);
insert into courses (courseNum, CUDAction) values ('CS621',  1);

