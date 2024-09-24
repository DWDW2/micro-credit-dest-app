"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";

type Props = {
  title: string;
  imageLink: string;
  theBestChoice?: boolean;
  chanceRate: string;
};

export default function Card({
  title,
  imageLink,
  theBestChoice,
  chanceRate,
}: Props) {
  const [isGreen, setisGreen] = useState<boolean>(false);
  const [isRed, setisRed] = useState<boolean>(false);
  const [isOrange, setisOrange] = useState<boolean>(false);
  useEffect(() => {
    switch (chanceRate) {
      case "Низкий":
        setisRed(true);
        break;
      case "Средний":
        setisOrange(true);
        break;
      case "Высокий":
        setisGreen(true);
        break;
    }
  }, [chanceRate]);
  return (
    <>
      <div
        className={`bg-white p-5 w-full mx-auto flex flex-col rounded-xl space-y-4 sm:mx-0`}
      >
        <div className="flex flex-row w-full items-center space-x-2">
          <div className="rounded-2xl border border-gray-200 w-[50px] h-[50px] p-1 items-center flex">
            <Image
              src={imageLink}
              width={50}
              height={50}
              alt="image"
              className="w-full"
            />
          </div>
          <div className="font-medium text-xl font-aeroport">{title}</div>
        </div>
        {theBestChoice ? (
          <div
            className={`w-fit h-fit font-medium px-2 text-sm rounded-2xl font-aeroport bg-sky-400 text-white`}
          >
            лучшее предложение
          </div>
        ) : (
          <></>
        )}
        <div className="flex flex-col justify-between h-24">
          <div className="flex flex-row w-full justify-between items-center">
            <div className={`text-gray-400 text-sm`}>Сумма до</div>
            <div className="font-aeroportRegular text-base text-gray-700">
              700000к тг
            </div>
          </div>
          <div className="flex flex-row w-full justify-between items-center">
            <div className={` text-gray-400 text-sm`}>Срок до</div>
            <div className="font-aeroportRegular text-base text-gray-700">
              700000к тг
            </div>
          </div>
          <div className="flex flex-row w-full justify-between items-center">
            <div className="text-gray-400 text-sm font-aeroportRegular">
              Одобрение
            </div>
            <div
              className={cn(
                isGreen && "text-green-500",
                isOrange && "text-orange-500",
                isRed && "text-red-500",
                "font-aeroport"
              )}
            >
              {chanceRate}
            </div>
          </div>
        </div>
        <Button className="rounded-lg bg-primary">Перейти на сайт</Button>
      </div>
    </>
  );
}
