import React from "react";
import Navbar from "../navpar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import BackToTop from "../BackToTop/BackToTop";

export default function Layout() {
  return (
    <>
      <Navbar />
      <div className="">
        <Outlet></Outlet>
        <BackToTop />
      </div>
      <Footer />
    </>
  );
}
