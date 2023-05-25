USE automation_workplace;
GO

CREATE TRIGGER CheckJournalIntegrity
    ON Journal
    AFTER INSERT, UPDATE
    AS
BEGIN
    IF NOT EXISTS (SELECT 1
                   FROM inserted
                   WHERE ObjectID IN (SELECT ID_InspectionObject FROM InspectionObject)
                     AND EmployeeID IN (SELECT ID_Employee FROM Employee)
                     AND ResponsiblePersonID IN (SELECT ID_ResponsiblePerson FROM ResponsiblePerson)
                     AND ViolationID IN (SELECT ID_Violation FROM Violation))
        BEGIN
            THROW 50001, 'Record in Journal references non-existing entities.', 1;
        END
END

