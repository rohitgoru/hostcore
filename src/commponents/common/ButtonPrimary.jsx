import React from "react";

const ButtonPrimary = ({ primary, width }) => {
  return (
    <>
      <button
        className={`bg-primary !text-white rounded-[4px] w-full  text-nowrap flex items-center justify-center   hover:!text-black transition-all duration-200 w-full h-full`}
        style={{ width: width }}
      >
        {primary}
      </button>
    </>
  );
};

export default ButtonPrimary;
