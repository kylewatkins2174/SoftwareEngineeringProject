drop database things;
create database things;
use things;

create table users (
userid int auto_increment not null,
firstname nvarchar(255),
lastname nvarchar(255),
email nvarchar(255),
username nvarchar(255),
passw nvarchar(50),
PRIMARY KEY (userid)
);

create table movies (
movieid int auto_increment not null,
userid int,
title nvarchar(255),
producer nvarchar(255),
descr nvarchar(255),
dateposted date,
PRIMARY KEY (movieid),
FOREIGN KEY (userid) references Users(userid)
);

create table books (
bookid int auto_increment not null,
userid int, 
title nvarchar (255),
author nvarchar (255),
descr nvarchar (255),
dateposted date,
PRIMARY KEY (bookid),
FOREIGN KEY (userid) references Users(userid)
);

create table cds (
cdid int auto_increment not null,
userid int,
title nvarchar (255),
descr nvarchar (255),
dateposted date,
PRIMARY KEY (cdid),
FOREIGN KEY (userid) references Users(userid)
);

create table vinyls (
vinylid int auto_increment not null,  
userid int,
title nvarchar(255),
descr nvarchar (255),
dateposted date,
PRIMARY KEY (vinylid),
FOREIGN KEY (userid) references Users(userid) 
);
