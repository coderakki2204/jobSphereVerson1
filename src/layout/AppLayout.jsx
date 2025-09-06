import React from "react";
import Navbar from "../componets/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../componets/Footer";
const AppLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default AppLayout;
