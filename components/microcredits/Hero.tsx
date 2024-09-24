import React from "react";
type Props = {
  title: string;
  desc: string;
};
export default function Hero({ title, desc }: Props) {
  return (
    <div className="flex flex-col font-aeroport w-full h-fit items-start space-y-2">
      <div className="text-[23px] lg:text-[40px] leading-tight">{title}</div>
      <div className="font-aeroportRegular text-gray-600 text-[16px] w-full lg:w-1/2">
        {desc}
      </div>
    </div>
  );
}
