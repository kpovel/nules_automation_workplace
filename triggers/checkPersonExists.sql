USE automation_workplace;

GO
CREATE TRIGGER CheckPersonExists
    ON Person
    AFTER INSERT
    AS
BEGIN
    IF EXISTS (SELECT 1
               FROM inserted
               WHERE ID_Person IN (SELECT ID_ResponsiblePerson
                                   FROM ResponsiblePerson
                                   UNION
                                   SELECT ID_Employee
                                   FROM Employee))
        BEGIN
            THROW 50001, 'This person already exists as an Employee or a Responsible person.', 1;
        END
END
