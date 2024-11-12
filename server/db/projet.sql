CREATE DATABASE 

use projet

CREATE TABLE projet (
    id int AUTO_INCREMENT NOT NULL PRIMARY KEY,
    nom VARCHAR(255), 
    description VARCHAR(255),
    image VARCHAR(255),
    lien TEXT,
    github  TEXT
);

INSERT INTO projet ( nom, description, image, lien, github)
VALUES 
    ( "H2Overflow", "webapp  pour explorer les nappes phréatiques en France", 'image.png', "https://h2overflow.vercel.app", "https://github.com/lucasA49/H2Overflow"), 
    ( "Watt Map", "application web permettant aux utilisateurs de réserver des bornes de recharge pour voitures électriques", 'image2.png', 'http://exemple2.com', "https://github.com/lucasA49/WattMap"),
    ( "Walter Water", "webapp pour localiser les points d'eau et les toilettes proches partout dans le monde", "image2.png", "https://walterwater.vercel.app", "https://github.com/lucasA49/WalterWater"); 