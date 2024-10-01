import React from "react";
import { CalcRefactored } from "./_components/Refactor";
import Cards from "./_components/Cards";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <section className="w-full items-center flex flex-col lg:mx-auto h-fit lg:items-start lg:max-w-6xl lg:py-10">
        <div className="w-full flex md:flex-col justify-between items-center lg:flex-row">
          <div className="font-spaceGrotesk tracking-tight text-3xl font-semibold p-8 mt-10 lg:text-5xl lg:p-0">
            <b className="font-bold text-4xl lg:text-6xl text-[#adeb1c] ">
              BestOffer
            </b>{" "}
            <br />
            Финансовый маркетплейс для всех
          </div>
          <div className="hidden lg:block">
            <Image
              src={"./Through the park cuate.svg"}
              width={500}
              height={500}
              className="max-w-xl"
              alt="park"
            />
          </div>
        </div>
      </section>
      <CalcRefactored />
      <Cards />
    </>
  );
}
