import { NavigationMenu } from "../../../components/navigationMenu";
import { UpdateJournal } from "../../../components/updateData/updateJournal";

const navigation: { name: string; href: string }[] = [
  { name: "Переглянути журнал", href: "/roles/admin" },
  { name: "Занести дані", href: "/roles/admin/insert" },
  { name: "Оновити дані", href: "/roles/admin/update" },
  { name: "Видалити дані", href: "/roles/admin/delete" },
];

export default function Admin() {
  return (
    <div>
      <NavigationMenu navigation={navigation} />
      <UpdateJournal/>
    </div>
  );
}

