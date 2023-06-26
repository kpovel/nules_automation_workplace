import { Violation } from "../../utils/dataTypes";

export function ViolationView({
  violationData,
}: {
  violationData: Violation[];
}) {
  return (
    <div className="mt-8">
      <h3 className="text-xl font-bold mb-4">Violation</h3>
      <table className="table-auto">
        <thead>
          <tr>
            <th className="px-4 py-2">ID_Violation</th>
            <th className="px-4 py-2">Description</th>
          </tr>
        </thead>
        <tbody>
          {violationData.map((violation) => (
            <tr key={violation.ID_Violation}>
              <td className="border px-4 py-2">{violation.ID_Violation}</td>
              <td className="border px-4 py-2">{violation.Description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
