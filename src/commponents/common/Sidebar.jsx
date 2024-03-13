import React from "react";
import logo from "../../assets/images/serversNow.png";

const Sidebar = ({ showSidebr }) => {
  return (
    <div
      className={`max-w-[320px] h-screen w-full bg-slate-500 absolute top-0  z-50 p-4 ${
        showSidebr ? "left-0" : "left-[-100%]"
      }`}
    >
      <div className="flex flex-col h-full">
        <div className="w-full">
          <div className="text-4xl gradient-text cursor-pointer ">
            <a href="/">
              <img className="sm:w-[115px] w-[90px] " src={logo} alt="Logo" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
