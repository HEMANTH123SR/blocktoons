"use client";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { useState, useEffect } from "react";
import { krabbyPatty } from "@/lib/fonts/font";
import { Search } from "lucide-react";
export const HeaderNav = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 flex w-full max-w-[1550px] items-center  border-b  justify-between px-3 py-3.5 text-black transition-colors duration-300 md:px-7 ${
        isScrolled
          ? "border-b bg-white bg-opacity-70 backdrop-blur-md backdrop-filter"
          : "bg-white"
      }`}
    >
      <div className="flex items-center justify-center space-x-8">
        <Link className="flex items-center justify-center space-x-2" href={"/"}>
          <h1
            className={`${krabbyPatty.className} text-[#62C9C3] cursor-pointer font-semibold text-2xl first-letter:text-4xl`}
          >
            BloockToons
          </h1>
        </Link>
      </div>
      <div className="hidden  md:block">
        <div className="flex space-x-5">
          <Link
            href={"/"}
            className="rounded-md px-4 py-2.5  font-semibold text-[#868686] hover:bg-slate-50"
          >
            Publish
          </Link>
          <Link
            href={"/"}
            className="rounded-md px-4 py-2.5  font-semibold text-[#868686] hover:bg-slate-50"
          >
            Dashboard
          </Link>
          <Link
            href={"/"}
            className="rounded-md px-4 py-2.5  font-semibold text-[#868686] hover:bg-slate-50"
          >
            Random
          </Link>
          <Link
            href={"/"}
            className="rounded-md px-4 py-2.5  font-semibold text-[#868686] hover:bg-slate-50"
          >
            Bookmark
          </Link>
        </div>
      </div>
      {/* right navigation link consist of auth and search */}
      <div className="flex justify-center items-center space-x-5 ">
        <Link href={"/search"} className="hidden md:block">
          <Search className="text-2xl text-text cursor-pointer" />
        </Link>

        <div className="hidden md:flex">
          <SignedOut>
            <Link
              href={""}
              className="rounded-lg border text-lg bg-white px-2.5 py-1 font-semibold text-black"
            >
              Sign In
            </Link>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </div>
    </header>
  );
};
