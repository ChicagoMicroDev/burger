DROP DATABASE IF EXISTS burgers_db;

CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers(
id INT AUTO_INCREMENT,
burgers_name VARCHAR (40)NOT NULL,
devoured BOOL DEFAULT false,
PRIMARY Key (id)

);
