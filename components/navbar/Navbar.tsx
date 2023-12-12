import { HomeIcon } from "@primer/octicons-react";
import Link from "next/link";
import { ActiveLink } from "..";

const navItems = [
  { path: "/about", text: "About" },
  { path: "/pricing", text: "Pricing" },
  { path: "/contact", text: "Contact" },
];

export const Navbar = () => {
  return (
    <nav className="flex justify-between bg-blue-800 bg-opacity-30 p-2 m-2 rounded">
      <Link className="flex items-center" href={"/"}>
        <HomeIcon className="mr-2" size={24} />
        Home
      </Link>

      <div className="flex gap-4">
        {navItems.map(({ path, text }) => (
          <ActiveLink key={path} path={path} text={text} />
        ))}
      </div>
    </nav>
  );
};
