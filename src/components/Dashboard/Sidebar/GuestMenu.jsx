import MenuItem from "./MenuItem";
import { MdManageHistory } from "react-icons/md";


const GuestMenu = () => {
    return (
        <>
            <MenuItem
                icon={MdManageHistory}
                label='Manage Bookings'
                address='manage-bookings'
              />
        </>
    );
};

export default GuestMenu;