import React from "react";
import { BreadCrumb } from "../../../components/breadcrumb";
import HelpPopover from "./HelpPopover";
import NotificationPopover from "../notifications";
import ProfilePopover from "./ProfilePopover";
import Searchbar from "./Searchbar";

const breadcrumbItems = [
  { label: "Dashboards", link: "/dashboard", isActive: false },
  { label: "Home", link: "#", isActive: true },
];

const Header = () => {
  return (
    <header
      id="bst-header"
      className="position-fixed w-100 top-0 end-0 py-2 px-3 bg-white"
    >
      <div className="d-flex align-items-center justify-content-between mx-auto p-3 inter-regular">
        <BreadCrumb items={breadcrumbItems} />
        <ul className="d-flex column-gap-1 m-0 p-0">
          <li>
            <Searchbar />
          </li>
          <li>
            <HelpPopover />
          </li>
          <li>
            <NotificationPopover />
          </li>
          <li>
            <ProfilePopover />
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
