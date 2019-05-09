CREATE TABLE burgers (
	id integer primary key auto_increment, 
    burger_name varchar(100),
    devoured boolean default false,
    createdAt TIMESTAMP NOT NULL
);