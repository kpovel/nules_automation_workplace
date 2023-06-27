import { ResponsiblePerson } from "../dataTypes";

export function generateResponsiblePersonCSV(data: ResponsiblePerson[]) {
  const csvContent: string[][] = [];
  const responsiblePersonHeader = [
    "ID_ResponsiblePerson",
  ];

  csvContent.push(["ResponsiblePerson", ""]);
  csvContent.push(responsiblePersonHeader);
  data.forEach((responsiblePerson) => {
    const row = [
      responsiblePerson.ID_ResponsiblePerson,
    ];
    csvContent.push(row);
  });
  csvContent.push([""]);
  return csvContent;
}

