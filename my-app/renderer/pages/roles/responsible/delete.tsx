import { responsibleNavigation } from ".";
import { DeleteJournal } from "../../../components/deleteData/deleteJournal";
import { NavigationMenu } from "../../../components/navigationMenu";

export default function Responsible() {
  return (
    <div>
      <NavigationMenu navigation={responsibleNavigation} />
      <DeleteJournal />
    </div>
  );
}
