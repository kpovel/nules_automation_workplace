import { useState, useEffect, FormEvent, ChangeEvent } from "react";
import {
  WholeDB,
  Journal,
  InspectionObject,
  Employee,
  ResponsiblePerson,
  Violation,
} from "../../utils/dataTypes";
import { Person } from "../../utils/dataTypes";

export function JournalInsert() {
  const [data, setData] = useState<null | WholeDB>();
  const [journalData, setJournalData] = useState<Journal>({
    ID_Journal: "",
    ObjectID: "",
    EmployeeID: "",
    ResponsiblePersonID: "",
    ViolationID: "",
    RecordDate: new Date(),
  });

  async function getAllData() {
    try {
      const request = await fetch("/api/data/getAllData");

      const response = await request.json();
      setData(response);
      if (response) {
        setJournalData({
          ID_Journal: "",
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

  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    setJournalData({ ...journalData, [name]: value });
  };

  const handleDateChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setJournalData({ ...journalData, [name]: new Date(value) });
  };

  async function insertJournalData(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    try {
      const response = await fetch("/api/data/insertJournal", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(journalData),
      });

      const json = await response.json();
      if (response.ok) {
        setJournalData({ ...journalData, ID_Journal: "" });
      }
      console.log(json);
    } catch (err) {
      console.error(err);
    }
  }

  return (
    <>
      <h3 className="text-center text-3xl font-semibold text-white">
        Insert Journal data
      </h3>
      <form className="mx-auto container" onSubmit={insertJournalData}>
        <div className="w-80">
          <div className="mb-4">
            <label
              htmlFor="ID_Journal"
              className="block text-white font-bold mb-2"
            >
              ID Journal:
            </label>
            <input
              type="text"
              id="ID_Journal"
              name="ID_Journal"
              value={journalData.ID_Journal}
              required
              onChange={handleInputChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="ObjectID"
              className="block text-white font-bold mb-2"
            >
              Object:
            </label>
            <select
              id="ObjectID"
              name="ObjectID"
              value={journalData.ObjectID}
              onChange={handleInputChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            >
              {data?.inspectionObject.map((object: InspectionObject) => (
                <option
                  key={object.ID_InspectionObject}
                  value={object.ID_InspectionObject}
                >
                  {object.Name}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-4">
            <label
              htmlFor="EmployeeID"
              className="block text-white font-bold mb-2"
            >
              Employee:
            </label>
            <select
              id="EmployeeID"
              name="EmployeeID"
              value={journalData.EmployeeID}
              onChange={handleInputChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            >
              {data?.employee.map((employee: Employee) => {
                const employeeData: Person = data.person.find(
                  (person) => person.ID_Person === employee.ID_Employee
                );
                return (
                  <option
                    key={employee.ID_Employee}
                    value={employee.ID_Employee}
                  >
                    {employeeData.LastName} {employeeData.FirstName}{" "}
                    {employeeData?.MiddleName}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="mb-4">
            <label
              htmlFor="ResponsiblePersonID"
              className="block text-white font-bold mb-2"
            >
              Responsible Person:
            </label>
            <select
              id="ResponsiblePersonID"
              name="ResponsiblePersonID"
              value={journalData.ResponsiblePersonID}
              onChange={handleInputChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            >
              {data?.responsiblePerson.map(
                (responsiblePerson: ResponsiblePerson) => {
                  const responsiblePersonData: Person = data.person.find(
                    (person) =>
                      person.ID_Person ===
                      responsiblePerson.ID_ResponsiblePerson
                  );

                  return (
                    <option
                      key={responsiblePerson.ID_ResponsiblePerson}
                      value={responsiblePerson.ID_ResponsiblePerson}
                    >
                      {responsiblePersonData.LastName}{" "}
                      {responsiblePersonData.FirstName}{" "}
                      {responsiblePersonData.MiddleName}
                    </option>
                  );
                }
              )}
            </select>
          </div>
          <div className="mb-4">
            <label
              htmlFor="ViolationID"
              className="block text-white font-bold mb-2"
            >
              Violation:
            </label>
            <select
              id="ViolationID"
              name="ViolationID"
              value={journalData.ViolationID}
              onChange={handleInputChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            >
              {data?.violation.map((violation: Violation) => (
                <option
                  key={violation.ID_Violation}
                  value={violation.ID_Violation}
                >
                  {violation.Description}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-4">
            <label
              htmlFor="RecordDate"
              className="block text-white font-bold mb-2"
            >
              Record Date:
            </label>
            <input
              type="date"
              id="RecordDate"
              name="RecordDate"
              value={journalData.RecordDate.toISOString().substr(0, 10)}
              onChange={handleDateChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Submit
          </button>
        </div>
      </form>
    </>
  );
}
