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

create table userinventory (
itemid int,
itemname nvarchar(255),
userid int,
PRIMARY KEY (itemid),
FOREIGN KEY (userid) references Users(userid)
);