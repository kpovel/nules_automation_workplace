USE automation_workplace;
GO

BEGIN TRANSACTION
DELETE FROM InspectionObject;
GO
INSERT INTO InspectionObject (ID_InspectionObject, Name, Address, Type)
VALUES ('IO1', N'Завод А', N'м. Київ, вул. Індустріальна, 12', N'Промисловий об’єкт');
INSERT INTO InspectionObject (ID_InspectionObject, Name, Address, Type)
VALUES ('IO2', N'Магазин Б', N'м. Київ, вул. Центральна, 34', N'Торговельний об’єкт');

INSERT INTO InspectionObject (ID_InspectionObject, Name, Address, Type)
VALUES ('IO3', N'Офіс В', N'м. Київ, вул. Офісна, 56', N'Офісний об’єкт');

COMMIT;
BEGIN TRANSACTION

DELETE FROM Violation
INSERT INTO Violation (ID_Violation, Description)
VALUES ('V1', N'Порушення вимог щодо безпеки праці');

INSERT INTO Violation (ID_Violation, Description)
VALUES ('V2', N'Порушення вимог щодо дотримання пожежної безпеки');

INSERT INTO Violation (ID_Violation, Description)
VALUES ('V3', N'Порушення вимог щодо екологічної безпеки');
COMMIT;
