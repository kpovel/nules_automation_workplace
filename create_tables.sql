USE automation_workplace;
GO

IF EXISTS (SELECT *
           FROM sys.tables
           WHERE name = 'Journal')
    DROP TABLE Journal;

IF EXISTS (SELECT *
           FROM sys.tables
           WHERE name = 'Violation')
    DROP TABLE Violation;

IF EXISTS (SELECT *
           FROM sys.tables
           WHERE name = 'InspectionObject')
    DROP TABLE InspectionObject;

IF EXISTS (SELECT *
           FROM sys.tables
           WHERE name = 'Employee')
    DROP TABLE Employee;

IF EXISTS (SELECT *
           FROM sys.tables
           WHERE name = 'ResponsiblePerson')
    DROP TABLE ResponsiblePerson;

IF EXISTS (SELECT *
           FROM sys.tables
           WHERE name = 'Person')
    DROP TABLE Person;

CREATE TABLE Person
(
    ID_Person   CHAR(20) PRIMARY KEY,
    LastName    NVARCHAR(50)         NOT NULL,
    FirstName   NVARCHAR(50)         NOT NULL,
    MiddleName  NVARCHAR(50),
    Position    NVARCHAR(100)        NOT NULL,
    Email       NVARCHAR(100) UNIQUE NOT NULL,
    PhoneNumber NVARCHAR(20) UNIQUE  NOT NULL
);

CREATE TABLE ResponsiblePerson
(
    ID_ResponsiblePerson CHAR(20) PRIMARY KEY,
    FOREIGN KEY (ID_ResponsiblePerson) REFERENCES Person (ID_Person)
);

CREATE TABLE Employee
(
    ID_Employee CHAR(20) PRIMARY KEY,
    FOREIGN KEY (ID_Employee) REFERENCES Person (ID_Person)
);

CREATE TABLE InspectionObject
(
    ID_InspectionObject CHAR(20) PRIMARY KEY,
    Name                NVARCHAR(100) NOT NULL,
    Address             NVARCHAR(200) NOT NULL,
    Type                NVARCHAR(50)  NOT NULL
);

CREATE TABLE Violation
(
    ID_Violation CHAR(20) PRIMARY KEY,
    Description  NVARCHAR(MAX) NOT NULL
);

CREATE TABLE Journal
(
    ID_Journal          CHAR(20) PRIMARY KEY,
    ObjectID            CHAR(20) NOT NULL,
    EmployeeID          CHAR(20) NOT NULL,
    ResponsiblePersonID CHAR(20) NOT NULL,
    ViolationID         CHAR(20) NOT NULL,
    RecordDate          DATE     NOT NULL DEFAULT GETDATE(),
    FOREIGN KEY (ObjectID) REFERENCES InspectionObject (ID_InspectionObject),
    FOREIGN KEY (EmployeeID) REFERENCES Employee (ID_Employee),
    FOREIGN KEY (ResponsiblePersonID) REFERENCES ResponsiblePerson (ID_ResponsiblePerson),
    FOREIGN KEY (ViolationID) REFERENCES Violation (ID_Violation)
);
