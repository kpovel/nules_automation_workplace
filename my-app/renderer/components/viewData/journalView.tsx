import { Journal } from "../../utils/dataTypes";

export function JournalView({
  journalData,
}: {
  journalData: Journal[];
}) {
  return (
    <div className="my-8">
      <h3 className="text-xl font-bold mb-4">Journal</h3>
      <table className="table-auto">
        <thead>
          <tr>
            <th className="px-4 py-2">ID_Journal</th>
            <th className="px-4 py-2">ObjectID</th>
            <th className="px-4 py-2">EmployeeID</th>
            <th className="px-4 py-2">ResponsiblePersonID</th>
            <th className="px-4 py-2">ViolationID</th>
            <th className="px-4 py-2">RecordDate</th>
          </tr>
        </thead>
        <tbody>
          {journalData.map((record) => (
            <tr key={record.ID_Journal}>
              <td className="border px-4 py-2">{record.ID_Journal}</td>
              <td className="border px-4 py-2">{record.ObjectID}</td>
              <td className="border px-4 py-2">{record.EmployeeID}</td>
              <td className="border px-4 py-2">{record.ResponsiblePersonID}</td>
              <td className="border px-4 py-2">{record.ViolationID}</td>
              <td className="border px-4 py-2">
                {record.RecordDate.toString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
