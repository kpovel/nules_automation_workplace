import { DeleteJournal } from "../../../components/deleteData/deleteJournal";
import { NavigationMenu } from "../../../components/navigationMenu";

const navigation: { name: string; href: string }[] = [
  { name: "Переглянути журнал", href: "/roles/responsible" },
  { name: "Занести дані", href: "/roles/responsible/insert" },
  { name: "Оновити дані", href: "/roles/responsible/update" },
  { name: "Видалити дані", href: "/roles/responsible/delete" },
];

export default function Responsible() {
  return (
    <div>
      <NavigationMenu navigation={navigation} />
      <DeleteJournal />
    </div>
  );
}
