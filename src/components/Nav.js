import React from "react";
import logo from "../assets/logo.png";
import userLogo from "../assets/profile__logo.png";
import "./Nav.css";
import { useState, useEffect } from "react";

const Nav = () => {
  const [show, handleShow] = useState();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else {
        handleShow(false);
      }
    });
    return () => {
      window.removeEventListener("scroll", () => {
        if (window.scrollY > 100) {
          handleShow(true);
        } else {
          handleShow(false);
        }
      });
    };
  }, []);
  return (
    <div className={`nav ${show && "nav-black"}`}>
      <img className="nav-logo" src={logo} alt="logo" />

      <img className="nav-profile" src={userLogo} alt="" />
    </div>
  );
};

export default Nav;
