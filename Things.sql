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
),
(
null,
"Bill",
"Gates",
"bill@email.com",
"bill",
'$2a$10$ERuZXBwxxfROKF/3rU0j6.kUUmoegvWLo6a0bUxW.ItfXp1/EoXV6'
),
(
null,
"Stacy",
"Jones",
"stacy@email.com",
"stacy",
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
"Probably the best movie ever made."
),
(
"movie",
null,
1,
"The Shawshank Redemption",
"Frank Darabont",
"Probably the second best movie ever made."
),
(
"movie",
null,
1,
"Citizen Kane",
"Orson Wells",
"A media mogul's enigmatic life unravels through the investigation of a reporter, unveiling the complexity of power and personal identity."
),
(
"movie",
null,
1,
"Pulp Fiction",
"Quentin Tarantino",
"A non-linear narrative intertwining crime, humor, and philosophy, redefining cinematic storytelling with Tarantino's signature style."
),
(
"movie",
null,
1,
"The Dark Knight",
"Christopher Nolan",
"Gotham's fate hangs in the balance as Batman confronts the Joker in a riveting battle of chaos and morality."
),
(
"movie",
null,
2,
"Jaws",
"Steven Spielberg",
"A coastal town's struggle against a relentless great white shark, ushering in suspenseful thrills and setting the standard for the blockbuster genre."
),
(
"movie",
null,
2,
"Night of the Living Dead",
"George A. Romero",
"A group fights to survive a zombie apocalypse in this groundbreaking horror classic."
),
(
"movie",
null,
3,
"Blade Runner",
"Ridley Scott",
"A dystopian masterpiece blending noir and sci-fi, questioning humanity through the eyes of artificial beings known as replicants."
);

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
"Where the gilded age gets its 'gilded' from."
),
(
"book",
null,
1,
"Flowers for Algernon",
"Daniel Keyes",
"Rat vs mental illness, who wins?"
),
(
"book",
null,
1,
"1984",
"George Orwell",
"Orwell's dystopian masterpiece warns of a totalitarian future where surveillance and thought control crush individual freedom."
),
(
"book",
null,
1,
"Hamlet",
"William Shakespeare",
"A tragic prince's existential turmoil sparks revenge and chaos in Shakespeare's iconic exploration of human nature and fate."
),
(
"book",
null,
2,
"Hatchet",
"Gary Paulsen",
"A gripping survival tale of a boy stranded in the wilderness, armed only with a hatchet, navigating challenges and self-discovery."
),
(
"book",
null,
2,
"Invisible Man",
"Ralph Ellison",
"An exploration of identity, invisibility, and societal perception in a racially charged America."
),
(
"book",
null,
3,
"To Kill a Mockingbird",
"Harper Lee",
"A poignant exploration of racial injustice in the American South, seen through the eyes of a young girl named Scout."
),
(
"book",
null,
3,
"Lord of the Flies",
"William Golding",
"Stranded boys' descent into savagery exposes the fragility of civilization in Golding's haunting allegory."
);

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
"Queen's album fuses rock, opera, and theatricality, showcasing musical innovation and Freddie Mercury's iconic vocals."
),
(
"cd",
null,
1,
"A Hard Day's Night",
"The Beatles",
"The Beatles' iconic album blending infectious melodies and youthful exuberance, defining the sound of the 1960s."
),
(
"cd",
null,
1,
"Thriller",
"Micheal Jackson",
"A genre-defying masterpiece with timeless hits that revolutionized pop music."
),
(
"cd",
null,
2,
"In Utero",
"Nirvana",
"Nirvana's raw and introspective album encapsulating grunge's intensity and Kurt Cobain's emotional depth."
),
(
"cd",
null,
3,
"Exodus",
"Bob Marley",
"Bob Marley's reggae masterpiece, blending revolutionary messages with infectious rhythms, defining a genre and cultural movement."
),
(
"cd",
null,
3,
"Physical Graffiti",
"Led Zeppelin",
"Iconic double album blending rock, blues, and diverse musical styles, showcasing a creative zenith."
);


create table vinyls (
itemtype nvarchar(50),
vinylid int auto_increment not null,  
userid int,
title nvarchar(255),
artist nvarchar(100),
descr nvarchar (255),
PRIMARY KEY (vinylid),
FOREIGN KEY (userid) references Users(userid) 
);

insert into vinyls values (
"vinyl",
null,
1,
"Purple Rain",
"Prince",
"A sonic journey blending rock, pop, and funk, showcasing Prince's musical genius and emotional depth."
),
(
"vinyl",
null,
1,
"The Dark Side of the Moon",
"Pink Floyd",
"Concept album exploring the human experience through mesmerizing soundscapes and profound lyrics."
),
(
"vinyl",
null,
2,
"Nothing But The Best",
"Frank Sinatra",
"A Sinatra compilation capturing the essence of his legendary career through timeless classics and unparalleled vocal mastery."
),
(
"vinyl",
null,
2,
"The Black Parade",
"My Chemical Romance",
"Rock opera exploring life, death, and identity through a hauntingly theatrical musical journey."
),
(
"vinyl",
null,
3,
"30",
"Adele",
" A soulful journey through heartbreak, resilience, and self-discovery, encapsulated in powerful vocals and evocative storytelling."
),
(
"vinyl",
null,
3,
"Kind of Blue",
"Miles Davis",
"A sublime exploration of improvisation and modal jazz that captivates with its cool brilliance."
);

create table movietrades(
movietradeid int auto_increment not null,
userid int,
ownerid int,
usermovieid int,
ownermovieid int,
dateoftrade date,
PRIMARY KEY (movietradeid),
FOREIGN KEY (userid) references Users(userid),
FOREIGN KEY (ownerid) references Users(userid),
FOREIGN KEY (usermovieid) references movies(movieid),
FOREIGN KEY (ownermovieid) references movies(movieid)
); 

create table booktrades(
booktradeid int auto_increment not null,
userid int,
ownerid int,
userbookid int,
ownerbookid int,
dateoftrade date,
PRIMARY KEY (booktradeid),
FOREIGN KEY (userid) references Users(userid),
FOREIGN KEY (ownerid) references Users(userid),
FOREIGN KEY (userbookid) references books(bookid),
FOREIGN KEY (ownerbookid) references books(bookid)
); 

create table cdtrades(
cdtradeid int auto_increment not null,
userid int,
ownerid int,
usercdid int,
ownercdid int,
dateoftrade date,
PRIMARY KEY (cdtradeid),
FOREIGN KEY (userid) references Users(userid),
FOREIGN KEY (ownerid) references Users(userid),
FOREIGN KEY (usercdid) references cds(cdid),
FOREIGN KEY (ownercdid) references cds(cdid)
); 

create table vinyltrades(
vinyltradeid int auto_increment not null,
userid int,
ownerid int,
uservinylid int,
ownervinylid int,
dateoftrade date,
PRIMARY KEY (vinyltradeid),
FOREIGN KEY (userid) references Users(userid),
FOREIGN KEY (ownerid) references Users(userid),
FOREIGN KEY (uservinylid) references vinyls(vinylid),
FOREIGN KEY (ownervinylid) references vinyls(vinylid)
); 
