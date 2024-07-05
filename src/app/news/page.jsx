import AllNewsDisplay from "@/components/NewsComponents/AllNewsDisplay";
import Navbar from "@/components/NavComponents/Navbar";
import React from "react";

const page = () => {
  return (
    <div>
      <Navbar />
      <AllNewsDisplay />
    </div>
  );
};

export default page;
