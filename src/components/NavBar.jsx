"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const navItem = [
  { id: 1, name: "home", pathName: "/" },
  { id: 2, name: "portfolio", pathName: "/portfolio" },
  { id: 3, name: "contact", pathName: "/contact" },
];

const NavBar = () => {
  const pathname = usePathname();

  return (
    <nav className="w-full h-full flex justify-center items-center sticky bg-transparent">
      <ul className="flex items-center gap-2">
        {navItem.map((item, i) => {
          const isActive = pathname === item.pathName;
          return (
            <li
              key={i}
              className={` ${
                isActive
                  ? "bg-black text-white rounded-md p-3 m-1 text-base font-medium hover:bg-gray-700 w-full h-full"
                  : " dark:bg-dark text-black dark:text-white rounded-md p-3 m-1 text-base font-medium hover:bg-gray-700 hover:text-white w-full h-full"
              }`}
            >
              <Link href={item.pathName} className="uppercase cursor-pointer ">
                {item.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavBar;
