import { Employee } from "../dataTypes";

export function generateEmployeeCSV(data: Employee[]) {
  const csvContent: string[][] = [];
  const employeeHeader = [
    "ID_Employee",
  ];

  csvContent.push(["Employee", ""]);
  csvContent.push(employeeHeader);
  data.forEach((employee) => {
    const row = [
      employee.ID_Employee,
    ];
    csvContent.push(row);
  });
  csvContent.push([""]);
  return csvContent;
}
