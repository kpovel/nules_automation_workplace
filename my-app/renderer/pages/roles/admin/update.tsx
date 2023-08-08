import { adminNavigation } from ".";
import { NavigationMenu } from "../../../components/navigationMenu";
import { UpdateJournal } from "../../../components/updateData/updateJournal";

export default function Admin() {
  return (
    <div>
      <NavigationMenu navigation={adminNavigation} />
      <UpdateJournal/>
    </div>
  );
}

