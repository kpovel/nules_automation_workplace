import { ResponsiblePerson } from "../../utils/dataTypes";

export function ResponsiblePersonView({
  responsiblePersonData,
}: {
  responsiblePersonData: ResponsiblePerson[];
}) {
  return (
    <div className="mt-8">
      <h3 className="text-xl font-bold mb-4">ResponsiblePerson</h3>
      <table className="table-auto">
        <thead>
          <tr>
            <th className="px-4 py-2">ID_ResponsiblePerson</th>
          </tr>
        </thead>
        <tbody>
          {responsiblePersonData.map((responsiblePerson) => (
            <tr key={responsiblePerson.ID_ResponsiblePerson}>
              <td className="border px-4 py-2">
                {responsiblePerson.ID_ResponsiblePerson}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
