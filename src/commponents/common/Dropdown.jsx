import React, { useState, useRef, useEffect } from "react";
import { DropdownIcon } from "./Icon";

const Dropdown = ({ title, items, isOpen, onToggle, itemTitle }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [dropdownHeight, setDropdownHeight] = useState(0);
  const dropdownRef = useRef(null);

  const handleDropdownClick = () => {
    onToggle(title);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  useEffect(() => {
    if (isOpen) {
      // Set the height of the dropdown to its scroll height when it's open
      setDropdownHeight(dropdownRef.current.scrollHeight);
    } else {
      // Set the height back to 0 when it's closed
      setDropdownHeight(0);
    }
  }, [isOpen]);

  return (
    <li
      className="nav-text text-gray3 hover:text-primary text-nowrap flex items-center justify-center gap-2 transition-all duration-300 cursor-pointer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className="transition relative flex gap-2"
        onClick={handleDropdownClick}
      >
        {title}
        <DropdownIcon isHovered={isHovered} />
        <ul
          ref={dropdownRef}
          className={`absolute left-0 mt-[35px] bg-white rounded-[20px] shadow-lg w-[149px] transition-all overflow-hidden z-10 border border-[#E1E1E1] text-[#000000] ${
            isOpen ? "" : "border-transparent"
          }`}
          style={{ height: isOpen ? dropdownHeight : 0 }}
        >
          <h4 className="px-4 py-2 text-[16px] text-[#000000B2] leading-[125%]">
            {itemTitle}
          </h4>
          <hr className="mx-4 "></hr>
          {items.map((item, index) => (
            <li key={index}>
              <a
                className="text-small block mx-2 rounded-lg py-2 px-2 my-2 hover:font-medium hover:bg-[#FAF8E5] transition-all duration-300"
                href="#"
              >
                {item.label} {/* Accessing the label property */}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
};

export default Dropdown;
