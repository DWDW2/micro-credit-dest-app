import React from "react";
import { CalcRefactored } from "./_components/Refactor";
import Cards from "./_components/Cards";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <>
      <section className="w-full max-w-6xl mx-auto px-8 sm:px-8 lg:px-0 mt-10">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="flex flex-col lg:flex-row items-center justify-between p-10 sm:p-10">
            <div className="w-full lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0">
              <h1 className="font-bold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-[#9193ff] mb-4">
                BestOffer
              </h1>
              <p className="font-aeroport text-sm sm:text-xl leading-tighter">
                Найдите самое лучшие предложения по страховке
              </p>
            </div>
            <div className="w-full lg:w-1/2 md:flex justify-center lg:justify-end hidden">
              <Image
                src="/Business Team Illustration.svg"
                width={500}
                height={500}
                className="w-full max-w-[300px] sm:max-w-[400px] lg:max-w-[500px] rounded-full"
                alt="Business Team Illustration"
              />
            </div>
            <div className="space-x-4 md:hidden">
              <Button className="bg-primary">Somthing</Button>
              <Button variant={"outline"}>Somthing</Button>
            </div>
          </div>
        </div>
      </section>
      <CalcRefactored />
      <Cards />
    </>
  );
}
