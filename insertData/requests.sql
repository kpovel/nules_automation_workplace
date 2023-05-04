USE automation_workplace;
GO


-- Додавання даних в таблицю Person
INSERT INTO Person (ID_Person, LastName, FirstName, MiddleName, Position, Email, PhoneNumber)
VALUES ('P001', N'Іванов', N'Іван', N'Іванович', N'Менеджер', 'ivanov@example.com', '+380501112233');

INSERT INTO Person (ID_Person, LastName, FirstName, MiddleName, Position, Email, PhoneNumber)
VALUES ('P002', N'Петров', N'Петро', N'Петрович', N'Інспектор', 'petrov@example.com', '+380501112244');

INSERT INTO Person (ID_Person, LastName, FirstName, MiddleName, Position, Email, PhoneNumber)
VALUES ('P003', N'Сидоров', N'Сидір', N'Сидорович', N'Відповідальна особа', 'sidorov@example.com', '+380501112255');

-- Додавання даних в таблицю Employee
INSERT INTO Employee (ID_Employee)
VALUES ('P002');

-- Додавання даних в таблицю ResponsiblePerson
INSERT INTO ResponsiblePerson (ID_ResponsiblePerson)
VALUES ('P003');

-- Додавання даних в таблицю InspectionObject
INSERT INTO InspectionObject (ID_InspectionObject, Name, Address, Type)
VALUES ('O001', N'Торговий центр', N'вул. Центральна, 1', N'Торгівля');

INSERT INTO InspectionObject (ID_InspectionObject, Name, Address, Type)
VALUES ('O002', N'Офісна будівля', N'пр. Свободи, 12', N'Офіс');

-- Додавання даних в таблицю Violation
INSERT INTO Violation (ID_Violation, Description)
VALUES ('V001', N'Порушення протипожежних вимог');

INSERT INTO Violation (ID_Violation, Description)
VALUES ('V002', N'Порушення санітарних норм');

-- Додавання даних в таблицю Journal
INSERT INTO Journal (ID_Journal, ObjectID, EmployeeID, ResponsiblePersonID, ViolationID, RecordDate)
VALUES ('J001', 'O001', 'P002', 'P003', 'V001', '2023-05-01');

INSERT INTO Journal (ID_Journal, ObjectID, EmployeeID, ResponsiblePersonID, ViolationID, RecordDate)
VALUES ('J002', 'O002', 'P002', 'P003', 'V002', '2023-05-02');
