import {
  Button,
  Dropdown,
  DropdownAction,
  DropdownArrow,
  DropdownContent,
  DropdownItem,
} from "keep-react";
import { Link } from "react-router";

function DropDown() {
  return (
    <Dropdown>
      <DropdownAction asChild>
        <Button className="bg-blue-500">Dashboard</Button>
      </DropdownAction>
      <DropdownContent>
        <DropdownArrow />

        <DropdownItem>
          <Link to={"/add-service"}>add service</Link>
        </DropdownItem>
        <DropdownItem>
          <Link to={"/manage-service"}>manage service</Link>
        </DropdownItem>
        <DropdownItem>
          <Link to={"/booked-services"}>booked services</Link>
        </DropdownItem>
        <DropdownItem>
          <Link to={"/service-To-Do"}>service To Do</Link>
        </DropdownItem>
      </DropdownContent>
    </Dropdown>
  );
}

export default DropDown;
