import { useState, useEffect } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ViewPost from "../components/ViewPost";

import MainHeader from "../components/mainHeader";
import Ad from "./Ad";
import AdMap from "../components/AdMap";

const HomeLogged = () => {
  const [admin, setAdmin] = useState();

  useEffect(() => {
    checkAdmin();
  }, []);
  const checkAdmin = () => {
    if (JSON.parse(localStorage.getItem("role")) === "admin") {
      setAdmin(true);
      console.log(admin);
    } else {
      setAdmin(false);
    }
  };
  return (
    <div className="homeLogged">
      <MainHeader />
      <AdMap />
      <Navbar />
      <ViewPost />
      <Footer />
    </div>
  );
};
export default HomeLogged;
