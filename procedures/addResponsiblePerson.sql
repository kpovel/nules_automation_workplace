use automation_workplace;

GO
CREATE PROCEDURE AddResponsiblePerson @ID_Person CHAR(20),
                                      @LastName NVARCHAR(50),
                                      @FirstName NVARCHAR(50),
                                      @MiddleName NVARCHAR(50),
                                      @Position NVARCHAR(100),
                                      @Email NVARCHAR(100),
                                      @PhoneNumber NVARCHAR(20)
AS
BEGIN
    INSERT INTO Person (ID_Person, LastName, FirstName, MiddleName, Position, Email, PhoneNumber)
    VALUES (@ID_Person, @LastName, @FirstName, @MiddleName, @Position, @Email, @PhoneNumber);

    INSERT INTO ResponsiblePerson (ID_ResponsiblePerson)
    VALUES (@ID_Person);
END
GO

