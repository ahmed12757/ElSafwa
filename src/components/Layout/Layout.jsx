import React from "react";
import Navbar from "../navpar/Navbar";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <Navbar />
      <div className="">
        <Outlet></Outlet>
      </div>
    </>
  );
}
