import { NavigationMenu } from "../../../components/navigationMenu";
import { ViewData } from "../../../components/viewData";

export const navigation: { name: string; href: string }[] = [
  { name: "Переглянути таблиці", href: "/roles/responsible" },
  { name: "Занести дані", href: "/roles/responsible/insert" },
  { name: "Оновити дані", href: "/roles/responsible/update" },
  { name: "Видалити дані", href: "/roles/responsible/delete" },
  { name: "Переглянути звіти", href: "/roles/responsible/reports" },
];

export default function Responsible() {
  return (
    <div>
      <NavigationMenu navigation={navigation} />
      <ViewData />
    </div>
  );
}
