drop database things;
create database things;
use things;

create table users (
userid int auto_increment not null,
firstname nvarchar(255),
lastname nvarchar(255),
email nvarchar(255),
username nvarchar(255),
password nvarchar(255),
PRIMARY KEY (userid)
);

insert into users values(
null,
"admin first",
"admin last",
"admin@email.com",
"admin",
'$2a$10$ERuZXBwxxfROKF/3rU0j6.kUUmoegvWLo6a0bUxW.ItfXp1/EoXV6'
);

create table movies (
itemtype nvarchar(50),
movieid int auto_increment not null,
userid int,
title nvarchar(255),
director nvarchar(255),
descr nvarchar(255),
PRIMARY KEY (movieid),
FOREIGN KEY (userid) references Users(userid)
);

insert into movies values(
"movie",
null,
1,
"The Godfather",
"Francis Ford Cappola",
"Probably the best movie ever made",

create table books (
itemtype nvarchar(50),
bookid int auto_increment not null,
userid int, 
title nvarchar (255),
author nvarchar (255),
descr nvarchar (255),
PRIMARY KEY (bookid),
FOREIGN KEY (userid) references Users(userid)
);

insert into books values(
"book",
null,
1,
"The Great Gatsby",
"F Scott Fitzerald",
"This is a description of a book",

create table cds (
itemtype nvarchar(50),
cdid int auto_increment not null,
userid int,
title nvarchar (255),
artist nvarchar(100),
descr nvarchar (255),
PRIMARY KEY (cdid),
FOREIGN KEY (userid) references Users(userid)
);

insert into cds values(
"cd",
null,
1,
"Night at the Opera",
"Queen",
"A description of this CD goes here",

create table vinyls (
itemtype nvarchar(50),
vinylid int auto_increment not null,  
userid int,
title nvarchar(255),
descr nvarchar (255),
PRIMARY KEY (vinylid),
FOREIGN KEY (userid) references Users(userid) 
);

create table movietrades(
movietradeid int auto_increment not null,
hostid int,
sellerid int,
hostmovieid int,
sellermovieid int,
dateoftrade date,
FOREIGN KEY (hostid) references Users(userid),
FOREIGN KEY (sellerid) references Users(userid),
FOREIGN KEY (hostmovieid) references movies(movieid),
FOREIGN KEY (sellermovieid) references movies(movieid)
); 

create table booktrades(
booktradeid int auto_increment not null,
hostid int,
sellerid int,
hostbookid int,
sellerbookid int,
dateoftrade date,
FOREIGN KEY (hostid) references Users(userid),
FOREIGN KEY (sellerid) references Users(userid),
FOREIGN KEY (hostbookid) references books(bookid),
FOREIGN KEY (sellerbookid) references books(bookid)
); 

create table cdtrades(
cdtradeid int auto_increment not null,
hostid int,
sellerid int,
hostcdid int,
sellercdid int,
dateoftrade date,
FOREIGN KEY (hostid) references Users(userid),
FOREIGN KEY (sellerid) references Users(userid),
FOREIGN KEY (hostcdid) references cds(cdid),
FOREIGN KEY (sellercdid) references cds(cdid)
); 

create table vinyltrades(
vinyltradeid int auto_increment not null,
hostid int,
sellerid int,
hostvinylid int,
sellervinylid int,
dateoftrade date,
FOREIGN KEY (hostid) references Users(userid),
FOREIGN KEY (sellerid) references Users(userid),
FOREIGN KEY (hostvinylid) references vinyls(vinylid),
FOREIGN KEY (sellervinylid) references vinyl(vinylid)
); 