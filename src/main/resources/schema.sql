
CREATE TABLE Billetter (
   id INTEGER PRIMARY KEY AUTO_INCREMENT,
   film VARCHAR (20) NOT NULL,

/*Antall får 2 pga. et maksimum på 100 billetter*/
   quantity CHAR(2) NOT NULL,
   firstname VARCHAR(30) NOT NULL,
   surname VARCHAR(30) NOT NULL,
   email VARCHAR(30) NOT NULL,
/*Telefonnummer med 8 sifre*/
   phonenr VARCHAR(8) NOT NULL
);