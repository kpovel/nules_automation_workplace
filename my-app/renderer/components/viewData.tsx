import { useEffect, useState } from "react";
import { WholeDB } from "../utils/dataTypes";

export function ViewData() {
  const [data, setData] = useState<null | WholeDB[]>();

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

  return <div>view data</div>;
}
