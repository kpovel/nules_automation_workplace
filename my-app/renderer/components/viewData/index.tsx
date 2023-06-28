import { useEffect, useState } from "react";
import { WholeDB } from "../../utils/dataTypes";
import { PersonView } from "./personView";
import { ResponsiblePersonView } from "./responsiblePersonView";
import { EmployeeView } from "./employeeView";
import { InspectionObjectView } from "./inspectionObjectView";
import { ViolationView } from "./violationView";
import { JournalView } from "./journalView";
import { generateWholeDBToCSV } from "../../utils/generateCSV";

export function ViewData() {
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
      <div className="container mx-auto">
        <h1 className="text-2xl font-bold mb-4">View Data</h1>
        <button className="border rounded p-2 m-4" onClick={() => generateWholeDBToCSV(data)}>Click me to export the data</button>
        {data && <PersonView personData={data.person} />}
        {data && (
          <ResponsiblePersonView
            responsiblePersonData={data.responsiblePerson}
          />
        )}
        {data && <EmployeeView employeeData={data.employee} />}
        {data && (
          <InspectionObjectView inspectionObjectData={data.inspectionObject} />
        )}
        {data && <ViolationView violationData={data.violation} />}
        {data && <JournalView journalData={data.journal} />}
      </div>
    </div>
  );
}
