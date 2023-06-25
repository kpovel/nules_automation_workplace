import { useEffect, useState } from "react";
import { Journal } from "../utils/dataTypes";

export function ViewData() {
  const [data, setData] = useState<null | Journal[]>();

  async function getJournalData() {
    try {
      const request = await fetch("/api/data/getJournalData");

      const response = await request.json();
      setData(response);
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    void getJournalData();
  }, []);

  return <div>view data</div>;
}
