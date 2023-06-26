import { JournalInsert } from "../../../components/insertData/journalInser";
import { NavigationMenu } from "../../../components/navigationMenu";

const navigation: { name: string; href: string }[] = [
  { name: "Переглянути журнал", href: "/roles/employee" },
  { name: "Занести дані", href: "/roles/employee/insert" },
];

export default function Employee() {
  return (
    <div>
      <NavigationMenu navigation={navigation} />
      <JournalInsert/>
    </div>
  );
}

