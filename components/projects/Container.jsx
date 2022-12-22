import React from "react";

const Container = ({ children }) => {
  return (
    <div className="flex flex-wrap justify-center items-center bg-transparent">
      {children}
    </div>
  );
};

export default Container;
