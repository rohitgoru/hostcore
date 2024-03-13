import React, { useState } from "react";
import logo from "../../assets/images/serversNow.png";
import { Hamberger, HambergerCancel } from "./Icon";
import Dropdown from "./Dropdown";
import SidebarDropdown from "./SidebarDropdown";
import ButtonPrimary from "./ButtonPrimary";

const Sidebar = ({ showSidebr, click }) => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const handleDropdownToggle = (dropdownTitle) => {
    setOpenDropdown(openDropdown === dropdownTitle ? null : dropdownTitle);
  }; // Array of objects for dropdown items
  const dropdownItems = [
    { label: "Server 01", value: "server01" },
    { label: "Server 02", value: "server02" },
    { label: "Server 03", value: "server03" },
    { label: "Server 04", value: "server04" },
  ];

  const moreHostingItems = [
    { label: "Item 1", value: "item1" },
    { label: "Item 2", value: "item2" },
    { label: "Item 3", value: "item3" },
    { label: "Item 4", value: "item4" },
    { label: "Item 5", value: "item5" },
  ];

  const companyItems = [
    { label: "Item 1", value: "item1" },
    { label: "Item 2", value: "item2" },
    { label: "Item 3", value: "item3" },
    { label: "Item 4", value: "item4" },
    { label: "Item 5", value: "item5" },
  ];
  const userItems = [
    { label: "Profile", value: "profile" },
    { label: "My Services", value: "services" },
    { label: "Tickets", value: "tickets" },
    { label: "Settings", value: "settings" },
  ];
  return (
    <div
      className={`max-w-[320px] h-screen w-full bg-[#e1e8ff] absolute top-0  z-50 p-4 transition-all duration-[0.5s] ease-in-out overflow-hidden ${
        showSidebr ? "left-0" : "left-[-100%]"
      }`}
    >
      <div className="flex flex-col h-full">
        <div className="w-full flex justify-between items-center">
          <div className="text-4xl gradient-text cursor-pointer ">
            <a href="/">
              <img className="sm:w-[115px] w-[90px] " src={logo} alt="Logo" />
            </a>
          </div>
          <div
            className={`cursor-pointer ${showSidebr ? "block" : "hidden"}`}
            onClick={click}
          >
            <HambergerCancel />
          </div>
        </div>
        <div className={`mt-[100px] relative flex-grow`}>
          <ul className="justify-start flex-col items-start gap-[20px] flex ">
            <li className="nav-text text-nowrap ">
              <a
                className="text-gray3 hover:text-primary transition"
                href="#home"
              >
                Home
              </a>
            </li>
            <SidebarDropdown
              title="Game Server"
              itemTitle={"Server"}
              items={dropdownItems}
              isOpen={openDropdown === "Game Server"}
              onToggle={handleDropdownToggle}
            />
            <li className="nav-text text-nowrap ">
              <a
                className="text-gray3 hover:text-primary transition"
                href="#Web Hosting"
              >
                Web Hosting
              </a>
            </li>
            <SidebarDropdown
              title="More Hosting"
              itemTitle={"Hosting"}
              items={moreHostingItems}
              isOpen={openDropdown === "More Hosting"}
              onToggle={handleDropdownToggle}
            />
            <SidebarDropdown
              title="Company"
              itemTitle={"Company"}
              items={companyItems}
              isOpen={openDropdown === "Company"}
              onToggle={handleDropdownToggle}
            />
          </ul>
        </div>
        <div className="w-full h-[38px]">
          <ButtonPrimary primary={"Sign In"} />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
