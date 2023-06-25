export type Person = {
  ID_Person: string;
  LastName: string;
  FirstName: string
  MiddleName: string | null;
  Position: string;
  Email: string;
  PhoneNumber: string;
}

export type ResponsiblePerson = {
  ID_ResponsiblePerson: string;
}

export type Employee = {
  ID_Employee: string;
}

export type InspectionObject = {
  ID_InspectionObject: string;
  Name: string;
  Address: string;
  Type: string
}

export type Violation = {
  ID_Violation: string;
  Description: string;
}

export type Journal = {
  ID_Journal: string;
  ObjectID: string;
  EmployeeID: string;
  ResponsiblePersonID: string;
  ViolationID: string;
  RecordDate: Date;
};