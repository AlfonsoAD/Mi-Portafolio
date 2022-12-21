import React, { useEffect } from "react";
import { useRouter } from "next/router";
import Splash from "../components/Splash";

const Index = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push("/principal");
    }, 3000);
  });
  return (
    <div className="bg-marine h-screen ">
      <Splash />
    </div>
  );
};

export default Index;
