import React from "react";

const HeroContainer = ({ children }) => {
  return (
    <div className="container max-w-[1292px] w-full mx-auto px-3 sm:px-4 lg:px-5 ">
      {children}
    </div>
  );
};

export default HeroContainer;
