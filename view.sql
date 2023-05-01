USE automation_workplace;
GO

IF OBJECT_ID('ViolationsByEmployee', 'V') IS NOT NULL
    DROP VIEW ViolationsByEmployee;
GO

CREATE VIEW ViolationsByEmployee AS
SELECT p.FirstName,
       p.LastName,
       p.MiddleName,
       io.Name AS InspectionObjectName,
       io.Address,
       v.Description,
       j.RecordDate
FROM Journal j
         JOIN Person p ON j.EmployeeID = p.ID_Person
         JOIN InspectionObject io ON j.ObjectID = io.ID_InspectionObject
         JOIN Violation v ON j.ViolationID = v.ID_Violation;
GO


USE automation_workplace;
GO

IF OBJECT_ID('ViolationsUnderResponsiblePerson', 'V') IS NOT NULL
    DROP VIEW ViolationsUnderResponsiblePerson;
GO

CREATE VIEW ViolationsUnderResponsiblePerson AS
SELECT p.FirstName,
       p.LastName,
       p.MiddleName,
       io.Name AS InspectionObjectName,
       io.Address,
       v.Description,
       j.RecordDate
FROM Journal j
         JOIN Person p ON j.ResponsiblePersonID = p.ID_Person
         JOIN InspectionObject io ON j.ObjectID = io.ID_InspectionObject
         JOIN Violation v ON j.ViolationID = v.ID_Violation;
GO


USE automation_workplace;
GO

IF OBJECT_ID('ViolationsByInspectionObject', 'V') IS NOT NULL
    DROP VIEW ViolationsByInspectionObject;
GO

CREATE VIEW ViolationsByInspectionObject AS
SELECT io.Name AS InspectionObjectName, io.Address, io.Type, v.ID_Violation, v.Description, j.RecordDate
FROM Journal j
         JOIN InspectionObject io ON j.ObjectID = io.ID_InspectionObject
         JOIN Violation v ON j.ViolationID = v.ID_Violation;
GO
