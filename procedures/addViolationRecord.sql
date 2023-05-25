use automation_workplace;

GO
CREATE PROCEDURE AddViolationRecord @ID_Journal CHAR(20),
                                    @ObjectID CHAR(20),
                                    @EmployeeID CHAR(20),
                                    @ResponsiblePersonID CHAR(20),
                                    @ViolationID CHAR(20)
AS
BEGIN
    INSERT INTO Journal (ID_Journal, ObjectID, EmployeeID, ResponsiblePersonID, ViolationID)
    VALUES (@ID_Journal, @ObjectID, @EmployeeID, @ResponsiblePersonID, @ViolationID)
END
GO
