import { InspectionObject } from "../../utils/dataTypes";

export function InspectionObjectView({
  inspectionObjectData
}: {
  inspectionObjectData: InspectionObject[];
}) {
  return (
    <div className="mt-8">
      <h3 className="text-xl font-bold mb-4">InspectionObject</h3>
      <table className="table-auto">
        <thead>
          <tr>
            <th className="px-4 py-2">ID_InspectionObject</th>
            <th className="px-4 py-2">Name</th>
            <th className="px-4 py-2">Address</th>
            <th className="px-4 py-2">Type</th>
          </tr>
        </thead>
        <tbody>
          {inspectionObjectData.map((inspectionObject) => (
            <tr key={inspectionObject.ID_InspectionObject}>
              <td className="border px-4 py-2">
                {inspectionObject.ID_InspectionObject}
              </td>
              <td className="border px-4 py-2">{inspectionObject.Name}</td>
              <td className="border px-4 py-2">{inspectionObject.Address}</td>
              <td className="border px-4 py-2">{inspectionObject.Type}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
