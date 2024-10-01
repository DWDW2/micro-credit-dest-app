import React from "react";
import { CalcRefactored } from "./_components/Refactor";
import Cards from "./_components/Cards";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <>
      <section className="w-full items-center flex flex-col lg:mx-auto h-fit">
        <div className="font-spaceGrotesk tracking-tight text-3xl font-semibold p-8 mt-10">
          <b className="font-bold text-4xl">BestOffer</b> <br />
          Финансовый маркетплейс для всех
        </div>
        <div className="w-full flex flex-row pl-8 space-x-4">
          <Button>Найти страховку</Button>
          <Button variant={"outline"}>Обратиться к нам</Button>
        </div>
      </section>
      <CalcRefactored />
      <Cards />
    </>
  );
}
