import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Navbar({}) {
  return (
    <nav className="bg-white p-5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 md:flex md:flex-row md:justify-between md:items-center">
        <Image
          src={"./logo_small_no_bg.png"}
          width={50}
          height={50}
          alt="logo"
          className=""
        />
        <nav className="h-fit hidden md:block">
          <Link
            href={"/"}
            className="hover:underline transition-all ease-in duration-150"
          >
            Туристическое страхование
          </Link>
        </nav>
      </div>
    </nav>
  );
}
