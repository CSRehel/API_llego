CREATE DATABASE Company;

DROP TABLE IF EXISTS Employees;
DROP TABLE IF EXISTS Departments;

CREATE TABLE Employees(
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    lastname VARCHAR(100) NOT NULL,
    birthday DATE NOT NULL,
    id_department INTEGER NOT NULL,
    FOREIGN KEY (id_department) REFERENCES Departments(id)
);

CREATE TABLE Departments(
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL
);

---------------------------------------------------------------------------------------
-- inserts de departamentos

INSERT INTO Departments(name)
VALUES('Marketing'),('Comercial'),('Recursos Humanos'), ('Informatica'), ('Finanzas');
---------------------------------------------------------------------------------------
