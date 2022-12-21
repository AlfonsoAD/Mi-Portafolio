import React from "react";
import Image from "next/image";
import logo from "../public/ja.png";

const Splash = () => {
  return (
    <div className="flex flex-nowrap justify-center items-center h-screen">
      <Image
        src={logo}
        height="120"
        width="120"
        alt="logo"
        className="animate-bounce"
      />
    </div>
  );
};

export default Splash;
