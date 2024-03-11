import React, { useState } from "react";
import logo from "../../assets/images/serversNow.png";
import Dropdown from "./Dropdown";
import ButtonPrimary from "./ButtonPrimary";
import UserDropDown from "./UserDropDown";
import { Hamberger } from "./Icon";

const Nav = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const handleDropdownToggle = (dropdownTitle) => {
    setOpenDropdown(openDropdown === dropdownTitle ? null : dropdownTitle);
  };

  // Array of objects for dropdown items
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
    <>
      <nav className="w-full max-w-[1172px] mx-auto flex justify-between items-center bg-transparent  h-[10vh]  ">
        <div className="text-4xl gradient-text cursor-pointer ">
          <a href="/">
            <img className="sm:w-[133px] w-[100px] " src={logo} alt="Logo" />
          </a>
        </div>
        <div className="flex items-center justify-center gap-5 ">
          <ul className="hidden justify-center items-center gap-[32px] lg:flex">
            <li className="nav-text text-nowrap ">
              <a
                className="text-gray3 hover:text-primary transition"
                href="#home"
              >
                Home
              </a>
            </li>
            <Dropdown
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
            <Dropdown
              title="More Hosting"
              itemTitle={"Hosting"}
              items={moreHostingItems}
              isOpen={openDropdown === "More Hosting"}
              onToggle={handleDropdownToggle}
            />
            <Dropdown
              title="Company"
              itemTitle={"Company"}
              items={companyItems}
              isOpen={openDropdown === "Company"}
              onToggle={handleDropdownToggle}
            />
          </ul>
          <div className="flex justify-center items-center md:gap-[32px] sm:gap-4 gap-3 ">
            <div className="lg:w-[144px] md:w-[130px] sm:w-[120px] w-[90px] lg:h-[45px] md:h-[42px] sm:h-[40px] h-[38px]">
              <ButtonPrimary primary={"Sign In"} />
            </div>
            <div className="">
              <UserDropDown
                title=""
                itemTitle={""}
                items={userItems}
                isOpen={openDropdown === ""}
                onToggle={handleDropdownToggle}
              />
            </div>
            <div className="lg:hidden block">
              <Hamberger />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
