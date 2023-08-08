import { NavigationMenu } from "../../../components/navigationMenu";
import { ViewData } from "../../../components/viewData";

export const adminNavigation: { name: string; href: string }[] = [
  { name: "Переглянути журнал", href: "/roles/admin" },
  { name: "Занести дані", href: "/roles/admin/insert" },
  { name: "Оновити дані", href: "/roles/admin/update" },
  { name: "Видалити дані", href: "/roles/admin/delete" },
  { name: "Переглянути звіти", href: "/roles/admin/reports" },
];

export default function Admin() {
  return (
    <div>
      <NavigationMenu navigation={adminNavigation} />
      <ViewData />
    </div>
  );
}
