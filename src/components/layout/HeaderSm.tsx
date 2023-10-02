import React, { useState } from "react";
import { Search, Menu, X, ChevronRight } from "lucide-react";
import { IconButton } from "@mui/material";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import Button from "../Ui/Button";

function HeaderSm() {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <>
      <header className="inset-0 left-1 top-1 flex items-center  justify-between border-b border-black  bg-white/30 px-8 py-4  backdrop-blur-sm md:hidden  ">
        <h1 className=" text-2xl font-extrabold italic">
          <span className="text-primary">j</span>tech
        </h1>
        <div className="flex gap-3">
          <IconButton>
            <Search size={25} strokeWidth={2} />
          </IconButton>
          <IconButton onClick={() => setShowSidebar(!showSidebar)}>
            <Menu size={25} strokeWidth={2} />
          </IconButton>
        </div>
      </header>
      <Sidebar showSidebar={showSidebar} setShowSidebar={setShowSidebar} />
    </>
  );
}

export default HeaderSm;

function Sidebar({ showSidebar, setShowSidebar }: any) {
  return (
    <div
      className={`${
        showSidebar ? "translate-x-0" : "-translate-x-[30rem]"
      } fixed right-0 top-0 z-20 block  w-[270px] rounded-lg  bg-white p-6 text-black shadow-md transition-transform duration-300 md:hidden`}
    >
      <div className="flex justify-between">
        <ThemeToggle />
        <IconButton
          onClick={() => setShowSidebar(!showSidebar)}
          className="mx-end"
        >
          <X size={25} strokeWidth={2} />
        </IconButton>
      </div>
      <div className="border-b-2 border-stone-300"></div>
      <div className="">
        <Link href="/">
          <IconButton className="flex w-full items-center justify-between">
            <p>About </p>
            <ChevronRight size={25} strokeWidth={2} />
          </IconButton>
        </Link>
        <Link href="/">
          <IconButton className="flex w-full items-center justify-between">
            <p>Course </p>
            <ChevronRight size={25} strokeWidth={2} />
          </IconButton>
        </Link>
        <Link href="/">
          <IconButton className="flex w-full items-center justify-between">
            <p>Blog </p>
            <ChevronRight size={25} strokeWidth={2} />
          </IconButton>
        </Link>
        <Link href="/">
          <IconButton className="flex w-full items-center justify-between">
            <p>Contact </p>
            <ChevronRight size={25} strokeWidth={2} />
          </IconButton>
        </Link>
      </div>
      {/*  */}
      <div className="mt-2 flex justify-between">
        <Button
          type="small"
          className="bg-stone-100 text-black hover:bg-stone-200/70"
        >
          Login
        </Button>
        <Button
          type="small"
          className="bg-primary  text-white  hover:bg-primary/90"
        >
          Sign Up
        </Button>
      </div>
    </div>
  );
}
