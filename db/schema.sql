DROP DATABASE if exists burger_db;
CREATE DATABASE burger_db;

USE burger_db;

CREATE TABLE burgers (
id int auto_increment not null,
name VARCHAR(30) not null,
devour boolean default true,

primary key (id)
);