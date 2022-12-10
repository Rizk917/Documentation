select name FROM students 
select name FROM students WHERE Age >30
select name FROM students WHERE Age >30 AND Gender="F"
select Points FROM students WHERE name="Alex"
INSERT INTO students VALUES ('7','Mhmd','25','M','700');
UPDATE students  SET Points="700" WHERE name="Basma"
UPDATE students SET Points="150" WHERE name="Alex"
______________________________________

CREATE TABLE "graduates" (
	"ID"	INTEGER NOT NULL,
	"Name"	TEXT NOT NULL UNIQUE,
	"Age"	INTEGER,
	"Gender"	TEXT,
	"Points"	INTEGER,
	"Graduation"	TEXT,
	PRIMARY KEY("ID" AUTOINCREMENT)
);
______________________________________
INSERT INTO graduates (ID, name,Age, Gender, Points)
SELECT ID, name,Age, Gender, Points
FROM students
WHERE name="Basma";
______________________________________
UPDATE graduates  SET Graduation="25/07/2022" WHERE name="Basma"
______________________________________
DELETE from students WHERE name="Layal"
_______________________________________
______________________________________