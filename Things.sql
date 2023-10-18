create table users (
userid int,
firstname nvarchar(255),
lastname nvarchar(255),
email nvarchar(255),
username nvarchar(255),
PRIMARY KEY (userid)
);

create table passwords(
userid int,
password nvarchar(255),
FOREIGN KEY (userid) references Users(userid)
);

create table userinventory (
itemid int,
itemname nvarchar(255),
userid int,
PRIMARY KEY (itemid),
FOREIGN KEY (useris) references Users(userid)
);

