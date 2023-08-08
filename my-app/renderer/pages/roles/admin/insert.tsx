import { adminNavigation } from ".";
import { JournalInsert } from "../../../components/insertData/journalInser";
import { NavigationMenu } from "../../../components/navigationMenu";

export default function Admin() {
  return (
    <div>
      <NavigationMenu navigation={adminNavigation} />
      <JournalInsert/>
    </div>
  );
}

