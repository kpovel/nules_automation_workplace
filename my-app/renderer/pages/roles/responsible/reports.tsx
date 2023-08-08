import { responsibleNavigation } from ".";
import { NavigationMenu } from "../../../components/navigationMenu";

export default function Reports() {
  return (
    <div className="pl-5">
      <NavigationMenu navigation={responsibleNavigation} />
      <h3 className="text-xl font-bold mb-4">ViolationsByEmployee</h3>
      <table className="table-auto">
        <thead>
          <tr>
            <th className="px-4 py-2">First Name</th>
            <th className="px-4 py-2">Last Name</th>
            <th className="px-4 py-2">Middle Name</th>
            <th className="px-4 py-2">Inspection Object</th>
            <th className="px-4 py-2">Address</th>
            <th className="px-4 py-2">Description</th>
            <th className="px-4 py-2">RecordDate</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border px-4 py-2">John</td>
            <td className="border px-4 py-2">Doe</td>
            <td className="border px-4 py-2">Smith</td>
            <td className="border px-4 py-2">Завод А</td>
            <td className="border px-4 py-2">
              м. Київ, вул. Індустріальна, 12
            </td>
            <td className="border px-4 py-2">
              Порушення вимог щодо безпеки праці
            </td>
            <td className="border px-4 py-2">2023-06-26</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">John</td>
            <td className="border px-4 py-2">Doe</td>
            <td className="border px-4 py-2">Smith</td>
            <td className="border px-4 py-2">Магазин Б</td>
            <td className="border px-4 py-2">м. Київ, вул. Центральна, 34</td>
            <td className="border px-4 py-2">
              Порушення вимог щодо безпеки праці
            </td>
            <td className="border px-4 py-2">2023-06-26</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">Jane</td>
            <td className="border px-4 py-2">Smith</td>
            <td className="border px-4 py-2">Doe</td>
            <td className="border px-4 py-2">Офіс В</td>
            <td className="border px-4 py-2">м. Київ, вул. Офісна, 56</td>
            <td className="border px-4 py-2">
              Порушення вимог щодо дотримання пожежної безпеки
            </td>
            <td className="border px-4 py-2">2023-06-27</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">Jane</td>
            <td className="border px-4 py-2">Smith</td>
            <td className="border px-4 py-2">Doe</td>
            <td className="border px-4 py-2">Завод А</td>
            <td className="border px-4 py-2">
              м. Київ, вул. Індустріальна, 12
            </td>
            <td className="border px-4 py-2">
              Порушення вимог щодо дотримання пожежної безпеки
            </td>
            <td className="border px-4 py-2">2023-06-28</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">Jane</td>
            <td className="border px-4 py-2">Smith</td>
            <td className="border px-4 py-2">Doe</td>
            <td className="border px-4 py-2">Магазин Б</td>
            <td className="border px-4 py-2">м. Київ, вул. Центральна, 34</td>
            <td className="border px-4 py-2">
              Порушення вимог щодо екологічної безпеки
            </td>
            <td className="border px-4 py-2">2023-06-29</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">Jane</td>
            <td className="border px-4 py-2">Smith</td>
            <td className="border px-4 py-2">Doe</td>
            <td className="border px-4 py-2">Офіс В</td>
            <td className="border px-4 py-2">м. Київ, вул. Офісна, 56</td>
            <td className="border px-4 py-2">
              Порушення вимог щодо екологічної безпеки
            </td>
            <td className="border px-4 py-2">2023-06-30</td>
          </tr>
        </tbody>
      </table>

      <h3 className="text-xl font-bold my-4">
        ViolationsUnderResponsiblePerson
      </h3>
      <table className="table-auto">
        <thead>
          <tr>
            <th className="px-4 py-2">First Name</th>
            <th className="px-4 py-2">Last Name</th>
            <th className="px-4 py-2">Middle Name</th>
            <th className="px-4 py-2">Inspection Object</th>
            <th className="px-4 py-2">Address</th>
            <th className="px-4 py-2">Description</th>
            <th className="px-4 py-2">RecordDate</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border px-4 py-2">Ivan</td>
            <td className="border px-4 py-2">Kovalchuk</td>
            <td className="border px-4 py-2">Ivanovich</td>
            <td className="border px-4 py-2">Завод А</td>
            <td className="border px-4 py-2">
              м. Київ, вул. Індустріальна, 12
            </td>
            <td className="border px-4 py-2">
              Порушення вимог щодо безпеки праці
            </td>
            <td className="border px-4 py-2">2023-06-26</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">Jane</td>
            <td className="border px-4 py-2">Johnson</td>
            <td className="border px-4 py-2">Smith</td>
            <td className="border px-4 py-2">Магазин Б</td>
            <td className="border px-4 py-2">м. Київ, вул. Центральна, 34</td>
            <td className="border px-4 py-2">
              Порушення вимог щодо дотримання пожежної безпеки
            </td>
            <td className="border px-4 py-2">2023-06-27</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">Emily</td>
            <td className="border px-4 py-2">Anderson</td>
            <td className="border px-4 py-2">Jane</td>
            <td className="border px-4 py-2">Офіс В</td>
            <td className="border px-4 py-2">м. Київ, вул. Офісна, 56</td>
            <td className="border px-4 py-2">
              Порушення вимог щодо екологічної безпеки
            </td>
            <td className="border px-4 py-2">2023-06-28</td>
          </tr>
        </tbody>
      </table>

            <h3 className="text-xl font-bold my-4">ViolationsByInspectionObject</h3>
      <table className="table-auto">
        <thead>
          <tr>
            <th className="px-4 py-2">Inspection Object</th>
            <th className="px-4 py-2">Address</th>
            <th className="px-4 py-2">Type</th>
            <th className="px-4 py-2">ID_Violation</th>
            <th className="px-4 py-2">Description</th>
            <th className="px-4 py-2">RecordDate</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border px-4 py-2">Завод А</td>
            <td className="border px-4 py-2">м. Київ, вул. Індустріальна, 12</td>
            <td className="border px-4 py-2">Промисловий об’єкт</td>
            <td className="border px-4 py-2">V1</td>
            <td className="border px-4 py-2">Порушення вимог щодо безпеки праці</td>
            <td className="border px-4 py-2">2023-06-26</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">Магазин Б</td>
            <td className="border px-4 py-2">м. Київ, вул. Центральна, 34</td>
            <td className="border px-4 py-2">Торговельний об’єкт</td>
            <td className="border px-4 py-2">V2</td>
            <td className="border px-4 py-2">Порушення вимог щодо дотримання пожежної безпеки</td>
            <td className="border px-4 py-2">2023-06-27</td>
          </tr>
          <tr>
            <td className="border px-4 py-2">Офіс В</td>
            <td className="border px-4 py-2">м. Київ, вул. Офісна, 56</td>
            <td className="border px-4 py-2">Офісний об’єкт</td>
            <td className="border px-4 py-2">V3</td>
            <td className="border px-4 py-2">Порушення вимог щодо екологічної безпеки</td>
            <td className="border px-4 py-2">2023-06-28</td>
          </tr>
        </tbody>
      </table>

    </div>
  );
}
