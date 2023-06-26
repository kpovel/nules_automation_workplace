import { useEffect, useState } from "react";
import { WholeDB } from "../../utils/dataTypes";
import { PersonView } from "./personView";

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
        {data && <PersonView personData={data.person} />}
      </div>
    </div>
  );
}
