import { WholeDB } from "../dataTypes";
import { generateEmployeeCSV } from "./generateEmployeeCSV";
import { generateInspectionObjectCSV } from "./generateInspectionObjectCSV";
import { generateJournalCSV } from "./generateJournalCSV";
import { generatePersonCSV } from "./generatePersonCSV";
import { generateResponsiblePersonCSV } from "./generateResponsiblePersonCSV";
import { generateViolationCSV } from "./generateViolationCSV";

function generateCSVContent(data: WholeDB): string[][] {
  const csvContent: string[][] = [];

  csvContent.push(...generatePersonCSV(data.person));
  csvContent.push(...generateResponsiblePersonCSV(data.responsiblePerson));
  csvContent.push(...generateEmployeeCSV(data.employee));
  csvContent.push(...generateInspectionObjectCSV(data.inspectionObject));
  csvContent.push(...generateViolationCSV(data.violation));
  csvContent.push(...generateJournalCSV(data.journal));
  return csvContent;
}

export function generateCSV(data: WholeDB) {
  const csvContent = generateCSVContent(data);

  const csvString = csvContent
    .map((row) => row.map((cell) => `"${cell}"`).join(","))
    .join("\n");

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
