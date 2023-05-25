USE automation_workplace;

CREATE LOGIN AdminLogin WITH PASSWORD = 'ComplexAdminPassword1!';
CREATE USER AdminUser FOR LOGIN AdminLogin;
GRANT ALL TO AdminUser;

CREATE LOGIN InspectorLogin WITH PASSWORD = 'ComplexInspectorPassword1!';
CREATE USER InspectorUser FOR LOGIN InspectorLogin;
GRANT SELECT, INSERT, UPDATE ON Person TO InspectorUser;
GRANT SELECT, INSERT, UPDATE ON Employee TO InspectorUser;
GRANT SELECT, INSERT ON Journal TO InspectorUser;
GRANT SELECT ON InspectionObject TO InspectorUser;
GRANT SELECT ON Violation TO InspectorUser;

CREATE LOGIN ResponsibleLogin WITH PASSWORD = 'ComplexResponsiblePassword1!';
CREATE USER ResponsibleUser FOR LOGIN ResponsibleLogin;
GRANT SELECT ON Journal TO ResponsibleUser;
