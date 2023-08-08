import { responsibleNavigation } from ".";
import { NavigationMenu } from "../../../components/navigationMenu";
import { UpdateJournal } from "../../../components/updateData/updateJournal";

export default function Responsible() {
  return (
    <div>
      <NavigationMenu navigation={responsibleNavigation} />
      <UpdateJournal/>
    </div>
  );
}

