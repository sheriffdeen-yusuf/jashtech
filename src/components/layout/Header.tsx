import React from "react";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import Button from "../Ui/Button";
import { Lock } from "lucide-react";
import HeaderSm from "./HeaderSm";

function Header() {
  return (
    <>
      <HeaderSm />
      <header className="inset-0 left-1 top-1 hidden items-center  justify-between bg-white/30 px-40 py-4 backdrop-blur-sm  md:flex  ">
        <h1 className="text-3xl font-extrabold italic ">
          <span className="text-primary">jash</span>tech
        </h1>
        <ul className="space-x-6 font-semibold">
          <Link className="text-primary" href={"/"}>
            Home
          </Link>
          <Link href={"/"}>About</Link>
          <Link href={"/"}>Course</Link>
          <Link href={"/"}>Blog</Link>
          <Link href={"/"}>Contact</Link>
        </ul>
        <div className="flex items-center gap-2 ">
          <ThemeToggle />
          <Button className="flex gap-1 bg-stone-100 text-lg hover:bg-stone-200/70">
            <Lock className="h-[1.5rem] w-[1.3rem]" strokeWidth={1.25} />
            Login
          </Button>
          <Button className="bg-primary px-6 py-3 font-semibold text-white  hover:bg-primary/90">
            Sign up for Free
          </Button>
        </div>
      </header>
    </>
  );
}

export default Header;
