import React from "react";
import NavBar from "./NavBar";
import { ThemeSwitcher } from "./theme-switcher";

const Header = () => {
  return (
    <>
      <div className="w-full h-15 p-5 m-2 flex justify-center items-center">
      <ThemeSwitcher/>
        <NavBar />
      </div>
    </>
  );
};

export default Header;
