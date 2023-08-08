import { responsibleNavigation } from ".";
import { JournalInsert } from "../../../components/insertData/journalInser";
import { NavigationMenu } from "../../../components/navigationMenu";

export default function Responsible() {
  return (
    <div>
      <NavigationMenu navigation={responsibleNavigation} />
      <JournalInsert />
    </div>
  );
}
