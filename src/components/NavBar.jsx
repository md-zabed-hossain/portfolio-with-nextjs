
import Link from "next/link";
import React from "react";

const navItem = [
  {id: 1, name: "home", path: "/"},
  {id: 2, name: "portfolio", path: "/portfolio"},
  {id: 3, name: "contact", path: "/contact"},
]

const NavBar = () => {
  return (
    <nav className="w-full h-full flex justify-center items-center">
      <ul className="flex items-center gap-2">
        {navItem.map((item, i) => {
          return <li key={i} className="uppercase cursor-pointer">
          <Link href={item.path}>

          {item.name}
          </Link>
          </li>
        })}
      </ul>
    
    </nav>
  );
};

export default NavBar;
