import Image from "next/image";
import React from "react";
import { aeroport } from "../fonts";
type Props = {
  title: string;
  imageLink: string;
  theBestChoice?: boolean;
};

export default function Card({ title, imageLink, theBestChoice }: Props) {
  return (
    <>
      <div className="bg-white p-4 w-fit flex flex-col rounded-lg">
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
          <div className="font-semibold text-xl tracking-title">{title}</div>
        </div>
        {theBestChoice ? (
          <div
            className={`w-fit h-fit font-medium ${aeroport.className} ${aeroport.style} px-2 text-sm rounded-2xl bg-sky-400 text-white`}
          >
            лучшее предложение
          </div>
        ) : (
          <></>
        )}
      </div>
    </>
  );
}
