USE automation_workplace;

GO
CREATE TRIGGER DeletePerson ON Person
    AFTER DELETE
    AS
BEGIN
    DELETE FROM ResponsiblePerson
    WHERE ID_ResponsiblePerson IN (SELECT ID_Person FROM deleted);

    DELETE FROM Employee
    WHERE ID_Employee IN (SELECT ID_Person FROM deleted);
END
