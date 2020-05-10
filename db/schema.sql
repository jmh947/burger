CREATE DATABASE burger_db;

USE burger_db;

CREATE TABLE toppings 
(
id int not null auto_increment,
meat varchar(30) not null,
veggies varchar(30) not null,
cheese boolean default true,
bun boolean default true,

 primary key (id)
 
 );