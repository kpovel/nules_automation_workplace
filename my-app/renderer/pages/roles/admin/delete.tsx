import { adminNavigation } from ".";
import { DeleteJournal } from "../../../components/deleteData/deleteJournal";
import { NavigationMenu } from "../../../components/navigationMenu";

export default function Admin() {
  return (
    <div>
      <NavigationMenu navigation={adminNavigation} />
      <DeleteJournal/>
    </div>
  );
}

