import { Violation } from "../dataTypes";

export function generateViolationCSV(data: Violation[]) {
  const csvContent: string[][] = [];
  const violationHeader = ["ID_Violation", "Description"];
  csvContent.push(["Violation", "", ""]);
  csvContent.push(violationHeader);
  data.forEach((violation) => {
    const row = [violation.ID_Violation, violation.Description];
    csvContent.push(row);
  });
  csvContent.push([""]);
  return csvContent;
}

