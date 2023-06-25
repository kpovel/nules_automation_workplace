import { useEffect, useState } from "react";

type JournalData = {
  ID_Journal: string;
  ObjectID: string;
  EmployeeID: string;
  ResponsiblePersonID: string;
  ViolationID: string;
  RecordDate: Date;
};

export function ViewData() {
  const [journalData, setJournalData] = useState<null | JournalData[]>();

  async function getJournalData() {
    try {
      const request = await fetch("/api/data/getJournalData");

      const response = await request.json();
      setJournalData(response);
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    void getJournalData();
  }, []);

  return <div>view data</div>;
}
