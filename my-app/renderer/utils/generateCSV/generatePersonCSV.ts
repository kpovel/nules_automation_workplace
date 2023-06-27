import { Person } from "../dataTypes";

export function generatePersonCSV(data: Person[]) {
  const csvContent: string[][] = [];
  const personHeader = [
    "ID_Person",
    "FirstName",
    "MiddleName",
    "LastName",
    "PhoneNumber",
    "Email",
    "Position",
  ];

  csvContent.push(["Person", "", "", "", "", "", ""]);
  csvContent.push(personHeader);
  data.forEach((person) => {
    const row = [
      person.ID_Person,
      person.FirstName,
      person.MiddleName || "",
      person.LastName,
      person.PhoneNumber,
      person.Email,
      person.Position,
    ];
    csvContent.push(row);
  });
  csvContent.push([""]);
  return csvContent;
}

