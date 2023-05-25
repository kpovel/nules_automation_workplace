use automation_workplace;

GO
CREATE PROCEDURE RetrievePersonDetails @ID_Person CHAR(20)
AS
BEGIN
    SELECT * FROM Person WHERE ID_Person = @ID_Person
END
GO
