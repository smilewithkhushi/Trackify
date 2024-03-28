"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { AiFillBug } from "react-icons/ai";
import classnames from "classnames";

const NavBar = () => {
  //this hook shows the current pathname of the page
  const currentPath = usePathname();

  const links = [
    { label: "Dashboard", href: "/" },
    { label: "Issues", href: "/issues" },
  ];

  return (
    <nav className="w-full flex flex-row space-x-6 border-b mb-5 px-5 h-14 items-center text-black">
      <Link href="/">
        <AiFillBug />
      </Link>
      <ul className="w-full flex flex-row space-x-6">
        {links.map((link) => (
          <Link
            key={link.href}
            
            //using classnames to render the css styles as per conditions
            className={classnames({
              "text-zinc-900": link.href === currentPath,
              "text-zinc-500": link.href !== currentPath,
              "transition-colors": true,
              "hover:text-zinc-800": true,
            })}
            href={link.href}
          >
            {link.label}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;

//styling the active link in navbar
//${link.href === currentPath ? "text-zinc-900" : "text-zinc-500"} transition-colors hover:text-zinc-800`}
