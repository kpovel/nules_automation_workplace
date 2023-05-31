USE automation_workplace;

CREATE LOGIN AdminLogin WITH PASSWORD = 'ComplexAdminPassword1!';
CREATE USER AdminUser FOR LOGIN AdminLogin;
GRANT ALL TO AdminUser;

CREATE LOGIN ResponsibleLogin WITH PASSWORD = 'ComplexResponsiblePassword1!';
CREATE USER ResponsibleUser FOR LOGIN ResponsibleLogin;
GRANT SELECT, INSERT, UPDATE ON Journal TO ResponsibleUser;
GRANT SELECT ON Person TO ResponsibleUser;
GRANT SELECT ON ResponsiblePerson TO ResponsibleUser;
GRANT SELECT ON Employee TO ResponsibleUser;
GRANT SELECT ON InspectionObject TO ResponsibleUser;
GRANT SELECT ON Violation TO ResponsibleUser;

CREATE LOGIN EmployeeLogin WITH PASSWORD = 'ComplexEmployeePassword1!';
CREATE USER EmployeeUser FOR LOGIN EmployeeLogin;
GRANT SELECT, INSERT ON Journal TO EmployeeUser
GRANT SELECT ON InspectionObject TO EmployeeUser;
GRANT SELECT ON Violation TO EmployeeUser;
