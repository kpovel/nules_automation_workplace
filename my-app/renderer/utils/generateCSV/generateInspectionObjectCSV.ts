import { InspectionObject } from "../dataTypes";

export function generateInspectionObjectCSV(data: InspectionObject[]) {
  const csvContent: string[][] = [];

  const inspectionObjectHeader = [
    "ID_InspectionObject",
    "Name",
    "Address",
    "Type",
  ];
  csvContent.push(["InspectionObject", "", "", ""]);
  csvContent.push(inspectionObjectHeader);
  data.forEach((inspectionObject) => {
    const row = [
      inspectionObject.ID_InspectionObject,
      inspectionObject.Name,
      inspectionObject.Address,
      inspectionObject.Type,
    ];
    csvContent.push(row);
  });
  csvContent.push([""]);
  return csvContent;
}
