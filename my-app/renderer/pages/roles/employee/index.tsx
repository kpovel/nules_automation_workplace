import { useState, useEffect } from "react";
import { WholeDB } from "../../../utils/dataTypes";
import { NavigationMenu } from "../../../components/navigationMenu";
import { InspectionObjectView } from "../../../components/viewData/inspectionObjectView";
import { ViolationView } from "../../../components/viewData/violationView";
import { JournalView } from "../../../components/viewData/journalView";
import { generateCSVForEmployee } from "../../../utils/generateCSV";

export const employeeNavigation: { name: string; href: string }[] = [
  { name: "Переглянути журнал", href: "/roles/employee" },
  { name: "Занести дані", href: "/roles/employee/insert" },
];

export default function Employee() {
  const [data, setData] = useState<null | WholeDB>();

  async function getAllData() {
    try {
      const request = await fetch("/api/data/getAllData");

      const response = await request.json();
      setData(response);
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    void getAllData();
  }, []);

  return (
    <div>
      <NavigationMenu navigation={employeeNavigation} />
      <div className="container mx-auto">
        <h1 className="text-2xl font-bold mb-4">View Data</h1>
        <button className="border rounded p-2 m-4" onClick={() => generateCSVForEmployee(data)}>Click me to export the data</button>
        {data && (
          <InspectionObjectView inspectionObjectData={data.inspectionObject} />
        )}
        {data && <ViolationView violationData={data.violation} />}
        {data && <JournalView journalData={data.journal} />}
      </div>
    </div>
  );
}
