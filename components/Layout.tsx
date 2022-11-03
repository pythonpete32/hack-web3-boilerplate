import React from "react";
import { Footer } from "./Footer";
import { Navbar } from "./Navbar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Navbar />
      <div className="flex  min-h-screen p-4 justify-center items-center ">
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
