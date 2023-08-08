import { employeeNavigation } from ".";
import { JournalInsert } from "../../../components/insertData/journalInser";
import { NavigationMenu } from "../../../components/navigationMenu";

export default function Employee() {
  return (
    <div>
      <NavigationMenu navigation={employeeNavigation} />
      <JournalInsert/>
    </div>
  );
}

