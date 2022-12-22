import React from "react";
import Image from "next/image";

const Contact = () => {
  return (
    <div className="flex flex-wrap justify-center items-start m-3">
      <div className="flex flex-wrap justify-between items-start m-3">
        <Image
          src="https://user-images.githubusercontent.com/90345024/209055331-f2117137-1eb7-4301-9b14-f2014a7910f0.png"
          height="56"
          width="56"
          alt="logo"
        />
        <a href="https://github.com/AlfonsoAD">
          <h1 className="text-3xl font-semibold text-zinc-100 hover:text-marine-400 m-4">
            AlfonsoAD
          </h1>
        </a>
      </div>
      <div className="flex flex-wrap justify-between items-start m-3">
        <Image
          src="https://user-images.githubusercontent.com/90345024/209056759-a3fa9403-d7d6-4966-b3c8-1d91d66fbded.png"
          height="56"
          width="56"
          alt="logo"
        />
        <h1 className="text-3xl font-semibold text-zinc-100 hover:text-marine-400 m-4">
          andrajesus2015@gmail.com
        </h1>
      </div>
    </div>
  );
};

export default Contact;
