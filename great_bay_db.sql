DROP DATABASE IF EXISTS great_bay_db;
CREATE DATABASE great_bay_db;

USE great_bay_db;

CREATE TABLE items (
    id integer(25) NOT NULL AUTO_INCREMENT,
    itemName varchar(100),
    highBid integer(100),
    currentBid integer(100),
    highestBidder varchar(20),
    PRIMARY KEY (id)
);

INSERT INTO items (itemName, highBid, currentBid)
VALUES ("cigs", 2, null);

INSERT INTO items (itemName, highBid, currentBid)
VALUES ("whiskey", 5, null);

INSERT INTO items (itemName, highBid, currentBid)
VALUES ("beer", 5, null);

INSERT INTO items (itemName, highBid, currentBid)
VALUES ("wine", 5, null);

INSERT INTO items (itemName, highBid, currentBid)
VALUES ("fruit", 7, null);

-- SELECT * FROM great_bay_db.items;