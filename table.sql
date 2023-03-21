CREATE TABLE product (
    id int NOT NULL AUTO_INCREMENT,
    name varChar(255) NOT NULL,
    description varChar(255),
    price integer NOT NULL,
    PRIMARY KEY(id)
);