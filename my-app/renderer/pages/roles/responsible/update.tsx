import { NavigationMenu } from "../../../components/navigationMenu";
import { UpdateJournal } from "../../../components/updateData/updateJournal";

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
      <UpdateJournal/>
    </div>
  );
}

