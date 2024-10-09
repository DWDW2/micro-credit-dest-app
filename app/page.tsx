import React from "react";
import { CalcRefactored } from "./_components/Refactor";
import Cards from "./_components/Cards";

export default function Home() {
  return (
    <>
      <div className="flex items-center justify-center px-4 sm:px-6 lg:px-8 min-h-max mt-14">
        <div className="max-w-3xl text-center leading-tighter tracking-tight">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-4">
            <b className="font-extrabold text-primary">BestOffer.kz</b>{" "}
            финансовый маркетплейс
          </h1>
          <p className="text-xl sm:text-2xl text-gray-700 mb-8">
            маркетплейс где можно найти выгодные предложения по всем категориям
          </p>
        </div>
      </div>
      <CalcRefactored />
      <Cards />
    </>
  );
}
