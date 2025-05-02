import React, { useEffect } from "react";
import Navbar from "../navpar/Navbar";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Footer/Footer";
import BackToTop from "../BackToTop/BackToTop";
import SpeechWrapper from "../SpeechWrapper/SpeechWrapper";

export default function Layout() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      <Navbar />
      <div className="">
        <Outlet></Outlet>
        <BackToTop />
      </div>
      <Footer />
      <SpeechWrapper />
    </>
  );
}
