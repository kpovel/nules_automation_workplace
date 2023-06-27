import { Journal } from "../dataTypes";

export function generateJournalCSV(data: Journal[]) {
  const csvContent: string[][] = [];
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
  data.forEach((journal) => {
    const row = [
      journal.ID_Journal,
      journal.ObjectID,
      journal.EmployeeID,
      journal.ResponsiblePersonID,
      journal.ViolationID,
      journal.RecordDate.toString(),
    ];
    csvContent.push(row);
  });
  csvContent.push([""]);
  return csvContent;
}
