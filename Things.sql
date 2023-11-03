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

create table items (
itemid int auto_increment not null,
userid int,
itemname nvarchar(255),
itemdescr nvarchar(255),
dateposted date,
PRIMARY KEY (itemid),
FOREIGN KEY (userid) references Users(userid)
);
