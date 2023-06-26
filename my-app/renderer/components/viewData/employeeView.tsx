import { Employee } from "../../utils/dataTypes";

export function EmployeeView({
  employeeData
}: {
  employeeData: Employee[];
}) {
  return (
    <div className="mt-8">
      <h3 className="text-xl font-bold mb-4">Employee</h3>
      <table className="table-auto">
        <thead>
          <tr>
            <th className="px-4 py-2">ID_Employee</th>
          </tr>
        </thead>
        <tbody>
          {employeeData.map((employee) => (
            <tr key={employee.ID_Employee}>
              <td className="border px-4 py-2">{employee.ID_Employee}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
