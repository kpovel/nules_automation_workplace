import { WholeDB } from "./dataTypes";

export function generateCSV(data: WholeDB) {
  const csvContent = [];

  // Generate CSV for the Journal table
  const journalHeader = [
    "ID_Journal",
    "ObjectID",
    "EmployeeID",
    "ResponsiblePersonID",
    "ViolationID",
    "RecordDate",
  ];
  csvContent.push(["Journal", "", "", "", "", ""]);
  csvContent.push(journalHeader);
  data.journal.forEach((journal) => {
    const row = [
      journal.ID_Journal,
      journal.ObjectID,
      journal.EmployeeID,
      journal.ResponsiblePersonID,
      journal.ViolationID,
      journal.RecordDate,
    ];
    csvContent.push(row);
  });
  csvContent.push([""]);

  // Generate CSV for the InspectionObject table
  const inspectionObjectHeader = [
    "ID_InspectionObject",
    "Name",
    "Address",
    "Type",
  ];
  csvContent.push(["InspectionObject", "", "", ""]);
  csvContent.push(inspectionObjectHeader);
  data.inspectionObject.forEach((inspectionObject) => {
    const row = [
      inspectionObject.ID_InspectionObject,
      inspectionObject.Name,
      inspectionObject.Address,
      inspectionObject.Type,
    ];
    csvContent.push(row);
  });
  csvContent.push([""]);

  // Generate CSV for the Violation table
  const violationHeader = ["ID_Violation", "Description"];
  csvContent.push(["Violation", "", ""]);
  csvContent.push(violationHeader);
  data.violation.forEach((violation) => {
    const row = [violation.ID_Violation, violation.Description];
    csvContent.push(row);
  });
  csvContent.push([""]);

  // Generate CSV for the Person table
  const personHeader = [
    "ID_Person",
    "LastName",
    "FirstName",
    "MiddleName",
    "Position",
    "Email",
    "PhoneNumber",
  ];
  csvContent.push(["Person", "", "", "", "", "", ""]);
  csvContent.push(personHeader);
  data.person.forEach((person) => {
    const row = [
      person.ID_Person,
      person.LastName,
      person.FirstName,
      person.MiddleName || "",
      person.Position,
      person.Email,
      person.PhoneNumber,
    ];
    csvContent.push(row);
  });

  // Combine all CSV rows into a single string
  const csvString = csvContent
    .map((row) => row.map((cell) => `"${cell}"`).join(","))
    .join("\n");

  // Download the CSV file
  const blob = new Blob([csvString], { type: "text/csv;charset=utf-8;" });
  const link = document.createElement("a");
  if (link.download !== undefined) {
    const url = URL.createObjectURL(blob);
    link.setAttribute("href", url);
    link.setAttribute("download", "data.csv");
    link.style.visibility = "hidden";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}
