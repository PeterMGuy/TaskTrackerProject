CREATE DATABASE sitepoint CHARACTER SET utf8 COLLATE utf8_general_ci;
USE sitepoint;

CREATE TABLE authors (
  id int(11) NOT NULL AUTO_INCREMENT,
  name varchar(50),
  city varchar(50),
  PRIMARY KEY (id)
);

INSERT INTO authors (id, name, city) VALUES
(1, 'Michaela Lehr', 'Berlin'),
(2, 'Michael Wanyoike', 'Nairobi'),
(3, 'James Hibbard', 'Munich'),
(4, 'Karolina Gawron', 'Wrocław');

CREATE TABLE tasks (
  id int(11) NOT NULL AUTO_INCREMENT,
  task_name varchar (50)
);

