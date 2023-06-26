import { useState, useEffect, FormEvent, ChangeEvent } from "react";
import { WholeDB, Journal } from "../../utils/dataTypes";

export function DeleteJournal() {
  const [data, setData] = useState<null | WholeDB>();
  const [journalData, setJournalData] = useState<Journal>({
    ID_Journal: "",
    ObjectID: "",
    EmployeeID: "",
    ResponsiblePersonID: "",
    ViolationID: "",
    RecordDate: new Date(),
  });
  const [selectedJournalID, setSelectedJournalID] = useState("");

  async function getAllData() {
    try {
      const request = await fetch("/api/data/getAllData");

      const response = await request.json();
      setData(response);
      if (response) {
        setJournalData({
          ID_Journal: response.journal[0].ID_Journal,
          ObjectID: response.inspectionObject[0].ID_InspectionObject,
          EmployeeID: response.employee[0].ID_Employee,
          ResponsiblePersonID:
            response.responsiblePerson[0].ID_ResponsiblePerson,
          ViolationID: response.violation[0].ID_Violation,
          RecordDate: new Date(),
        });
      }
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    void getAllData();
  }, []);

  const handleJournalSelection = (event: ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;
    setSelectedJournalID(value);

    const selectedJournal = data?.journal.find(
      (journal) => journal.ID_Journal === value
    );

    if (selectedJournal) {
      setJournalData(selectedJournal);
    }
  };

  async function deleteJournalData(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    try {
      const response = await fetch(`/api/data/deleteJournalRecord`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ID_Journal: selectedJournalID }),
      });

      const json = await response.json();
      if (response.ok) {
        setSelectedJournalID("");
        setJournalData({
          ID_Journal: "",
          ObjectID: "",
          EmployeeID: "",
          ResponsiblePersonID: "",
          ViolationID: "",
          RecordDate: new Date(),
        });
      }
      console.log(json);
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <>
      <h3 className="text-center text-3xl font-semibold text-white">
        Delete Journal data
      </h3>
      <form className="mx-auto container" onSubmit={deleteJournalData}>
        <div className="w-80">
          <div className="mb-4">
            <label
              htmlFor="ID_Journal"
              className="block text-white font-bold mb-2"
            >
              ID Journal:
            </label>
            <select
              id="ID_Journal"
              name="ID_Journal"
              value={selectedJournalID}
              onChange={handleJournalSelection}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            >
              {data?.journal.map((journal: Journal) => (
                <option key={journal.ID_Journal} value={journal.ID_Journal}>
                  {journal.ID_Journal}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-4">
            <p className="block text-white font-bold mb-2">Object:</p>
            <div className="shadow appearance-none border rounded w-full py-2 px-3 bg-gray-50 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
              {journalData.ObjectID}
            </div>
          </div>
          <div className="mb-4">
            <p className="block text-white font-bold mb-2">Employee:</p>
            <div className="shadow appearance-none border rounded w-full py-2 px-3 bg-gray-50 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
              {journalData.EmployeeID}
            </div>
          </div>
          <div className="mb-4">
            <p className="block text-white font-bold mb-2">
              Responsible Person:
            </p>
            <div className="shadow appearance-none border rounded w-full py-2 px-3 bg-gray-50 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
              {journalData.ResponsiblePersonID}
            </div>
          </div>
          <div className="mb-4">
            <p className="block text-white font-bold mb-2">Violation:</p>
            <div className="shadow appearance-none border rounded w-full py-2 px-3 bg-gray-50 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
              {journalData.ViolationID}
            </div>
          </div>
          <button
            type="submit"
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Delete
          </button>
        </div>
      </form>
    </>
  );
}
