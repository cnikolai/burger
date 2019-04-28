DROP DATABASE IF EXISTS burgers_db;

CREATE DATABASE burgers_db;

use burgers_db;

CREATE TABLE burgers (
	id integer primary key auto_increment, 
    burger_name varchar(100),
    devoured boolean default false
);
