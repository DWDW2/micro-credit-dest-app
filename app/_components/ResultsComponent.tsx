import React, { useState } from "react";
import {
  APIcountries,
  APIResponse,
  InsuranceOption,
} from "../_types/Calc.types";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import TravelInsuranceDialog from "./TravelDiolog";
type Props = {
  results: APIResponse[];
  countries: APIcountries[];
};

export default function ResultsComponent({ results, countries }: Props) {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const isSingleOption = (
    option: InsuranceOption | InsuranceOption[] | InsuranceOption[][]
  ): option is InsuranceOption => {
    return !Array.isArray(option);
  };

  const isOptionArray = (
    option: InsuranceOption | InsuranceOption[] | InsuranceOption[][]
  ): option is InsuranceOption[] => {
    return Array.isArray(option) && !Array.isArray(option[0]);
  };

  const renderInsuranceOptions = (
    options: InsuranceOption | InsuranceOption[] | InsuranceOption[][]
  ): JSX.Element => {
    if (isSingleOption(options)) {
      return (
        <p>
          {options.discounted_premium
            ? options.discounted_premium
            : options.premium}{" "}
          тенге
        </p>
      );
    }

    if (isOptionArray(options)) {
      return (
        <ul>
          {options.map((option, index) => (
            <li key={index} className="mb-2">
              <p>
                {option.discounted_premium
                  ? option.discounted_premium
                  : option.premium}{" "}
                тенге
              </p>
            </li>
          ))}
        </ul>
      );
    }
    return (
      <>
        {options.map((optionGroup, groupIndex) => (
          <div key={groupIndex} className="mt-2">
            <h5 className="text-sm font-semibold">
              Группа опций {groupIndex + 1}
            </h5>
            <ul>
              {optionGroup.map((option, optionIndex) => (
                <li key={optionIndex} className="mb-2">
                  <p>
                    Стоимость:{" "}
                    {option.discounted_premium
                      ? option.discounted_premium
                      : option.premium}{" "}
                    тенге
                  </p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </>
    );
  };
  return (
    <div className="md:max-w-6xl md:mx-auto mx-8">
      <h2 className="text-xl font-bold mb-2">Результаты:</h2>
      <div className="space-y-4">
        {results
          .sort((a, b) =>
            a.insurance_company.name.toLowerCase() === "nomad"
              ? -1
              : b.insurance_company.name.toLowerCase() === "nomad"
              ? 1
              : 0
          )
          .map((result, index) => (
            <Card
              key={result.insurance_company.name}
              className={cn(
                result.insurance_company.name.toLocaleLowerCase() === "nomad"
                  ? "flex flex-col md:flex-row items-start md:items-center justify-between p-3 space-y-4 md:space-y-0 bg-white rounded-xl border border-[#0fd149] shadow-none"
                  : "flex flex-col md:flex-row items-start md:items-center justify-between p-3 space-y-4 md:space-y-0 bg-white rounded-xl border-0 shadow-none"
              )}
            >
              <div className="flex items-center space-x-4 md:space-x-4 md:w-[25%]">
                <Image
                  src={`${result.insurance_company.name}.svg`}
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = `${result.insurance_company.name}.png`;
                  }}
                  alt={result.insurance_company.name}
                  className="w-16 h-16 object-contain rounded-xl border-2 border-gray-300 p-1"
                  width={64}
                  height={64}
                />
                <div>
                  <h3 className="font-aeroport text-xl font-bold">
                    {result.insurance_company.name}
                  </h3>
                  {index === 0 &&
                    result.insurance_company.name.toLowerCase() === "nomad" && (
                      <Badge className="bg-green-500 text-white font-aeroport">
                        Лучший выбор
                      </Badge>
                    )}
                </div>
              </div>
              <div className="flex items-center md:w-[25%]">
                <span className="font-bold font-sans mx-auto">
                  <p className="text-sm text-secondaryText">Страховая сумма</p>
                  {Array.isArray(result.results[0])
                    ? result.results[0][0].valuexs
                    : result.results[0].value}{" "}
                  USD
                </span>
              </div>
              <div className="flex items-center md:w-[25%]">
                <span className="font-bold font-sans mx-auto">
                  <p className="text-sm text-secondaryText">Цена</p>
                  {renderInsuranceOptions(result.results[0])}
                </span>
              </div>
              <div className="flex items-center flex-col w-full md:w-[25%]">
                {result.insurance_company.name.toLowerCase() === "nomad" ? (
                  <Dialog open={isOpen} onOpenChange={setIsOpen}>
                    <DialogTrigger asChild>
                      <Button className="font-aeroportRegular w-full md:w-auto">
                        Оформить страховку
                      </Button>
                    </DialogTrigger>
                    <TravelInsuranceDialog
                      country={
                        countries.find((c) => c.alpha_code === country)
                          ?.country_name || ""
                      }
                      countryId={result.country.external_info.id}
                      insuranceSumId={result.results[0].external_info.id}
                      startDate={startDate!}
                      endDate={endDate!}
                    />
                  </Dialog>
                ) : (
                  <Button asChild className="font-aeroportRegular">
                    <a
                      href={result.insurance_company.main_page}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full md:w-auto"
                    >
                      Посетите наш сайт
                    </a>
                  </Button>
                )}
              </div>
            </Card>
          ))}
      </div>
    </div>
  );
}
