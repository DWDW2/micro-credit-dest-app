import Link from "next/link";
import React from "react";

type Props = {};

export default function Navbar({}: Props) {
  return (
    <nav className="bg-white shadow-md p-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <img src={"logo.png"} alt="logo" className="h-auto w-auto" />
          </div>
          {/* <div className="flex">
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              {[
                { name: "Страхование", href: "/travel" },
                { name: "Займы", href: "/microcredits" },
                { name: "Бизнес", href: "/business" },
                { name: "Новости", href: "/news" },
                { name: "Контакты", href: "/contacts" },
              ].map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="uppercase text-sm tracking-wider border-transparent text-gray-900 hover:border-gray-900 hover:text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 font-medium"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div> */}
        </div>
      </div>
      <div className="lg:max-w-6xl lg:mx-auto lg:block p-8 hidden">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex-1 pr-8">
            <h1 className="text-5xl font-bold mb-4">
              Туристическая
              <br />
              страховка
            </h1>
            <p className="text-gray-600 text-lg leading-relaxed">
              Сравните цены на страховые полисы для поездок за границу. Купите
              полис с выгодными условиями и покрытием от 10 000 до 100 000 $/€
            </p>
          </div>
          <div className="flex-shrink-0">
            <img
              src={"tyr.png"}
              alt="Travel Insurance Illustration"
              className="w-96 h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </nav>
  );
}
