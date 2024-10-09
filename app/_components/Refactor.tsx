"use client";
import { useState } from "react";
import axios, { AxiosResponse } from "axios";
import { Button } from "@/components/ui/button";
import { format } from "date-fns";
import { APIResponse, InsuranceOption } from "../_types/Calc.types";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import React from "react";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import TravelInsuranceDialog from "./TravelDiolog";
import { cn } from "@/lib/utils";
import FloatingLabel from "./FloatingLabel";
import PopCalendar from "./PopCalendar";
import { Toaster } from "react-hot-toast";
import CountrySelect from "./CountrySelect";

export function CalcRefactored() {
  const [country, setCountry] = useState<string>("");
  const [startDate, setStartDate] = useState<Date | undefined>(undefined);
  const [endDate, setEndDate] = useState<Date | undefined>(undefined);
  const [age, setAge] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [results, setResults] = useState<APIResponse[]>([]);
  const [error, setError] = useState<string>("");
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isOpenSelect, setIsOpenSelect] = useState<boolean>(false);
  // const [countries, setCountries] = useState<string[]>([""]);
  // console.log(error);
  // useEffect(() => {
  //   const getData = async () => {
  //     // setLoading(true);
  //     try {
  //       const response = await axios.get<string[]>(
  //         "https://bestoffer.kz/api/mst/countries"
  //       );
  //       setCountries(response?.data);
  //     } catch (err: any) {
  //       // setError(err.message || 'Something went wrong');
  //     } finally {
  //       // setLoading(false);
  //     }
  //   };
  //   getData();
  // }, []);
  // console.log(countries);
  const countries = [
    "Австралия",
    "Австрия",
    "Азербайджан",
    "Албания",
    "Алжир",
    "Ангола",
    "Аргентина",
    "Армения",
    "Беларусь",
    "Бельгия",
    "Болгария",
    "Бразилия",
    "Великобритания",
    "Венгрия",
    "Вьетнам",
    "Германия",
    "Греция",
    "Грузия",
    "Дания",
    "Египет",
    "Израиль",
    "Индия",
    "Индонезия",
    "Иран",
    "Ирландия",
    "Исландия",
    "Испания",
    "Италия",
    "Казахстан",
    "Канада",
    "Кипр",
    "Китай",
    "Колумбия",
    "Куба",
    "Латвия",
    "Литва",
    "Люксембург",
    "Малайзия",
    "Мальта",
    "Марокко",
    "Мексика",
    "Нидерланды",
    "Новая Зеландия",
    "Норвегия",
    "ОАЭ",
    "Польша",
    "Португалия",
    "Россия",
    "Румыния",
    "Сербия",
    "Сингапур",
    "Словакия",
    "Словения",
    "США",
    "Таиланд",
    "Турция",
    "Украина",
    "Финляндия",
    "Франция",
    "Хорватия",
    "Черногория",
    "Чехия",
    "Чили",
    "Швейцария",
    "Швеция",
    "Эстония",
    "Южная Корея",
    "Япония",
  ];
  const handleGetPrice = async (): Promise<void> => {
    if (!startDate || !endDate || !country || !age) {
      setError("Please select both start and end dates.");
      return;
    }

    setIsLoading(true);
    setError("");
    setResults([]);

    const endpoints = [
      "https://bestoffer.kz/api/mst/amanat",
      "https://bestoffer.kz/api/mst/interteach",
      "https://bestoffer.kz/api/mst/asko",
      "https://bestoffer.kz/api/mst/freedom",
      "https://bestoffer.kz/api/mst/nomad",
      "https://bestoffer.kz/api/mst/jusan",
    ];

    const requestData = {
      age: parseInt(age),
      country: country,
      start_date: format(startDate, "yyyy-MM-dd"),
      end_date: format(endDate, "yyyy-MM-dd"),
    };

    try {
      const requests = endpoints.map((endpoint) =>
        axios.post<APIResponse>(endpoint, requestData, {
          headers: {
            accept: "application/json",
            "Content-Type": "application/json",
          },
          withCredentials: true,
          timeout: 50000,
        })
      );

      const responses = await Promise.all(
        requests.map((p) => p.catch((e) => e))
      );

      const successfulResponses = responses.filter(
        (response): response is AxiosResponse<APIResponse> =>
          !(response instanceof Error)
      );
      const errors = responses.filter(
        (response): response is Error => response instanceof Error
      );

      if (successfulResponses.length > 0) {
        const allResults = successfulResponses.map((response) => response.data);
        console.log("API Responses:", allResults);
        setResults(allResults);
      } else {
        console.error("All API requests failed:", errors);
        setError("All API requests failed. Please try again.");
      }

      if (errors.length > 0) {
        console.error("API Errors:", errors);
        const errorMessages = errors.map((err) => {
          if (axios.isAxiosError(err)) {
            if (err.code === "ECONNABORTED") {
              return `Request timeout: ${err.config?.url}`;
            }
            return err.message;
          }
          return err.toString();
        });
        setError(`Errors occurred: ${errorMessages.join(", ")}`);
      }
    } catch (err: any) {
      if (axios.isAxiosError(err)) {
        console.error("API Error:", err.response?.data || err.message);
        setError(
          `An error occurred: ${err.response?.data?.message || err.message}`
        );
      } else {
        console.error("An unexpected error occurred:", err);
        setError("An unexpected error occurred. Please try again.");
      }
    } finally {
      setIsLoading(false);
    }
  };

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
    <div className="mb-8 space-y-4 font-opensans">
      <Toaster />
      <div className="max-w-6xl mx-auto p-8 bg-white rounded-xl">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
          <CountrySelect
            value={country}
            setAction={setCountry}
            countries={countries}
            isOpenSelect={isOpenSelect}
            setIsOpenSelect={setIsOpenSelect}
          />
          <PopCalendar
            date={startDate}
            setDate={setStartDate}
            desc="Улетаете"
          />
          <PopCalendar
            date={endDate}
            setDate={setEndDate}
            desc="Возврощаетесь"
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

      {results.length > 0 && (
        <div className="max-w-6xl mx-auto">
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
                    result.insurance_company.name.toLocaleLowerCase() ===
                      "nomad"
                      ? "flex flex-col md:flex-row items-start md:items-center justify-between p-3 space-y-4 md:space-y-0 bg-white rounded-xl border border-[#0fd149] shadow-none"
                      : "flex flex-col md:flex-row items-start md:items-center justify-between p-3 space-y-4 md:space-y-0 bg-white rounded-xl border-0 shadow-none"
                  )}
                >
                  <div className="flex items-center space-x-4 md:space-x-4 md:w-[25%]">
                    <img
                      src={`${result.insurance_company.name}.svg`}
                      onError={(e) => {
                        e.currentTarget.onerror = null;
                        e.currentTarget.src = `${result.insurance_company.name}.png`;
                      }}
                      alt={result.insurance_company.name}
                      className="w-16 h-16 object-contain rounded-xl border-2 border-gray-300 p-1"
                    />
                    <div>
                      <h3 className="font-aeroport text-xl font-bold">
                        {result.insurance_company.name}
                      </h3>
                      {index === 0 &&
                        result.insurance_company.name.toLowerCase() ===
                          "nomad" && (
                          <Badge className="bg-green-500 text-white font-aeroport">
                            Лучший выбор
                          </Badge>
                        )}
                    </div>
                  </div>
                  <div className="flex items-center md:w-[25%]">
                    <span className="font-bold font-sans mx-auto">
                      <p className="text-sm text-secondaryText">
                        Страховая сумма
                      </p>
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
                          country={country}
                          countryId={result.country.external_info.id}
                          insuranceSumId={result.results[0].external_info.id}
                          startDate={startDate ?? new Date()}
                          endDate={endDate ?? new Date()}
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
                          Поситите наш сайт
                        </a>
                      </Button>
                    )}
                  </div>
                </Card>
              ))}
          </div>
        </div>
      )}
    </div>
  );
}
