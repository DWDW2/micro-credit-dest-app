import React, { Dispatch, SetStateAction, useState } from "react";
import { APIcountries } from "../_types/Calc.types";
import PopCalendar from "./PopCalendar";
import CountrySelect from "./CountrySelect";
import FloatingLabel from "./FloatingLabel";
import { Button } from "@/components/ui/button";

type Props = {
  country: string;
  setCountry: Dispatch<SetStateAction<string>>;
  countries: APIcountries[];
  startDate: Date | undefined;
  setStartDate: Dispatch<SetStateAction<Date | undefined>>;
  endDate: Date | undefined;
  setEndDate: Dispatch<SetStateAction<Date | undefined>>;
  handleGetPrice: () => void;
  age: string;
  setAge: Dispatch<SetStateAction<string>>;
};

export default function RenderVariants({
  countries,
  country,
  startDate,
  setCountry,
  setEndDate,
  setStartDate,
  endDate,
  handleGetPrice,
  age,
  setAge,
}: Props) {
  const [isOpenSelect, setIsOpenSelect] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  return (
    <div className="md:max-w-6xl md:mx-auto p-8 bg-white rounded-xl mx-8">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
        <CountrySelect
          value={country}
          setAction={setCountry}
          countries={countries}
          isOpenSelect={isOpenSelect}
          setIsOpenSelect={setIsOpenSelect}
        />
        <PopCalendar date={startDate} setDate={setStartDate} desc="Улетаете" />
        <PopCalendar
          date={endDate}
          setDate={setEndDate}
          desc="Возвращаетесь"
          startDate={startDate}
        />
        <FloatingLabel setAge={setAge} age={age} />
        <Button
          className="bg-primary text-white mt-4"
          onClick={handleGetPrice}
          disabled={isLoading}
        >
          {isLoading ? "Загрузка..." : "Показать цены"}
        </Button>
      </div>
    </div>
  );
}
