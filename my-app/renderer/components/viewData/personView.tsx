import { Person } from "../../utils/dataTypes";

export function PersonView({ personData }: { personData: Person[] }) {
  return (
    <>
      <h3 className="text-xl font-bold mb-4">Person</h3>
      <table className="table-auto">
        <thead>
          <tr>
            <th className="px-4 py-2">ID</th>
            <th className="px-4 py-2">Last Name</th>
            <th className="px-4 py-2">First Name</th>
            <th className="px-4 py-2">Middle Name</th>
            <th className="px-4 py-2">Position</th>
            <th className="px-4 py-2">Email</th>
            <th className="px-4 py-2">Phone Number</th>
          </tr>
        </thead>
        <tbody>
          {personData.map((person) => (
            <tr key={person.ID_Person}>
              <td className="border px-4 py-2">{person.ID_Person}</td>
              <td className="border px-4 py-2">{person.LastName}</td>
              <td className="border px-4 py-2">{person.FirstName}</td>
              <td className="border px-4 py-2">{person.MiddleName}</td>
              <td className="border px-4 py-2">{person.Position}</td>
              <td className="border px-4 py-2">{person.Email}</td>
              <td className="border px-4 py-2">{person.PhoneNumber}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
