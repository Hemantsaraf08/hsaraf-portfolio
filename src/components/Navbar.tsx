import Link from "next/link";
import React from "react";
import Button from "../ui/Button";

function Navbar() {
  return (
    <div className="bg-neutral-700 fixed top-0 left-0 right-0 ">
      <nav className="container flex items-center justify-between h-20">
        <div className="flex items-center justify-between">
          <Link href="/">
            <h3 className="text-secondary-100 text-3xl">
              Hemant <span className="text-secondary-200">Saraf</span>
            </h3>
          </Link>
        </div>
        <div className="flex items-center gap-8">
          <NavLinks url="/#home" text="Home" />
          <NavLinks url="/#about" text="About Me" />
          <NavLinks url="/#work" text="Work" />
          <NavLinks url="/blog" text="Blogs" />
          <Link href="/#say-hello">
            <Button variant="primary" size="small" text="Say Hello"/>
          </Link>
        </div>
      </nav>
    </div>
  );
}

const NavLinks = ({ url, text }: { url: string; text: string }) => {
  return (
    <Link href={url} className="group">
      <span className="text-base text-neutral-200 group-hover:text-white transition-all duration-300 ease-out">{text}</span>
      <div className="mt-0.5 w-0 group-hover:w-full h-1 bg-secondary-500 rounded-3xl z-[-1] transition-all duration-300 ease-out"></div>
    </Link>
  );
};
export default Navbar;
