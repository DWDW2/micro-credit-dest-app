import Image from "next/image";
import React from "react";

export default function Navbar({}) {
  return (
    <nav className="bg-white p-5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Image
          src={"./logo.png"}
          width={150}
          height={150}
          alt="logo"
          className="w-24 h-fit md:w-32 lg:w-36"
        />
      </div>
    </nav>
  );
}
