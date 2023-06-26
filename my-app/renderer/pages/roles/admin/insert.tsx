import { JournalInsert } from "../../../components/insertData/journalInser";
import { NavigationMenu } from "../../../components/navigationMenu";

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
      <JournalInsert/>
    </div>
  );
}

