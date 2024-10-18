CREATE DATABASE task_app;
USE task_app;

CREATE TABLE students (
    studentID integer  PRIMARY KEY AUTO_INCREMENT,
    studentNumber DECIMAL(5,0),
    firstName VARCHAR(30),
    lastName VARCHAR(30),
    classRoom NUMERIC(2,0)
);

CREATE TABLE courses (
    courseID integer  PRIMARY KEY AUTO_INCREMENT,
    courseCode CHAR(3),
    courseName VARCHAR(30),
    classRoom NUMERIC(2,0),
    teacherFirstName VARCHAR(20),
    teacherLastName VARCHAR(20)
);

CREATE TABLE exams (
    examId integer  PRIMARY KEY AUTO_INCREMENT,
    courseCode CHAR(3),
    studentNumber DECIMAL(5,0),
    examDate DATE,
    score NUMERIC(1,0)
);

