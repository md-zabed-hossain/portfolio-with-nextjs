import React from "react";
import NavBar from "./NavBar";
import { ThemeSwitcher } from "./theme-switcher";

const Header = () => {
  return (
    <>
      <div className="w-full h-10 flex items-center">
      <ThemeSwitcher/>
        <NavBar />
      </div>
    </>
  );
};

export default Header;
