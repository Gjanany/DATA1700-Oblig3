
CREATE TABLE Filmer (
                       film VARCHAR(30) NOT NULL,
                       PRIMARY KEY (film)
);

CREATE TABLE Billetter (
                           id INTEGER NOT NULL AUTO_INCREMENT,
                           film VARCHAR (20) NOT NULL,

                        /*Antall får 2 pga. et maksimum på 100 billetter*/
                           antall CHAR(2) NOT NULL,
                           fornavn VARCHAR(30) NOT NULL,
                           etternavn VARCHAR(30) NOT NULL,
                           epost VARCHAR(30) NOT NULL,

                        /*Telefonnummer med 8 sifre*/
                           telefonnr VARCHAR(8) NOT NULL,
                           PRIMARY KEY (id),
                           FOREIGN KEY (film) references Filmer(film)
);