USE automation_workplace;
GO

CREATE TABLE Person
(
    ID          INT PRIMARY KEY IDENTITY (1,1),
    LastName    NVARCHAR(50)         NOT NULL,
    FirstName   NVARCHAR(50)         NOT NULL,
    MiddleName  NVARCHAR(50),
    Position    NVARCHAR(100)        NOT NULL,
    Email       NVARCHAR(100) UNIQUE NOT NULL,
    PhoneNumber NVARCHAR(20) UNIQUE  NOT NULL
);

CREATE TABLE ResponsiblePerson
(
    ID INT PRIMARY KEY,
    FOREIGN KEY (ID) REFERENCES Person (ID)
);

CREATE TABLE Employee
(
    ID INT PRIMARY KEY,
    FOREIGN KEY (ID) REFERENCES Person (ID)
);

CREATE TABLE InspectionObject
(
    ID      INT PRIMARY KEY IDENTITY (1,1),
    Name    NVARCHAR(100) NOT NULL,
    Address NVARCHAR(200) NOT NULL,
    Type    NVARCHAR(50)  NOT NULL
);

CREATE TABLE Violation
(
    ID          INT PRIMARY KEY IDENTITY (1,1),
    Description NVARCHAR(MAX) NOT NULL
);

CREATE TABLE Journal
(
    ID                  INT PRIMARY KEY IDENTITY (1,1),
    ObjectID            INT  NOT NULL,
    EmployeeID          INT  NOT NULL,
    ResponsiblePersonID INT  NOT NULL,
    ViolationID         INT  NOT NULL,
    RecordDate          DATE NOT NULL DEFAULT GETDATE(),
    FOREIGN KEY (ObjectID) REFERENCES InspectionObject (ID),
    FOREIGN KEY (EmployeeID) REFERENCES Employee (ID),
    FOREIGN KEY (ResponsiblePersonID) REFERENCES ResponsiblePerson (ID),
    FOREIGN KEY (ViolationID) REFERENCES Violation (ID)
);
