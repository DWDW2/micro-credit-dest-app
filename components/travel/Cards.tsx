import React from "react";
import { Card } from "../ui/card";
type Props = {};

export default function Cards({}: Props) {
  return (
    <div className="space-y-10 p-3 md:p-0">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mx-auto p-4 md:p-0 max-w-6xl">
        <Card className="md:row-span-2 p-8 bg-white shadow-md flex flex-col h-full relative overflow-hidden">
          <div className="z-10">
            <h2 className="text-4xl font-bold mb-4 font-aeroport">
              Идеально для визы
            </h2>
            <p className="text-gray-600 text-xl mb-8 max-w-[70%] font-aeroportRegular">
              Мы поможем выбрать страховку для путешествия в любую точку мира.
            </p>
          </div>
          <div className="lg:absolute block lg:bottom-0 lg:right-0 w-auto h-auto items-end justify-end">
            <img
              src={"btr.jpg"}
              alt="Travel illustration"
              className="w-96 h-50 object-contain hidden lg:block"
            />
          </div>
        </Card>

        <Card className="p-8 bg-white shadow-md">
          <h2 className="text-2xl font-bold mb-3 font-aeroport">Выгодно</h2>
          <p className="text-gray-600 font-aeroportRegular">
            Стоимость страховых полисов может различаться. Мы рассчитаем
            стоимость в нескольких компаниях, чтобы вы могли выбрать самый
            выгодный вариант.
          </p>
        </Card>

        <Card className="p-8 bg-white shadow-md">
          <h3 className="text-2xl font-bold mb-3 font-aeroport">
            Без комиссии
          </h3>
          <p className="text-gray-600 font-aeroportRegular">
            Наш сервис полностью бесплатен для пользователей. Полисы
            предлагаются по ценам страховых компаний без дополнительных наценок.
          </p>
        </Card>
      </div>

      <div className="mx-auto p-3 md:p-8 bg-white rounded-xl max-w-6xl">
        <h3 className="text-4xl font-bold mb-10 font-aeroport">
          Как оформить туристическую страховку
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="bg-gray-200 rounded-lg h-auto flex items-center justify-center overflow-hidden">
            <img
              src={"woman.png"}
              alt="Happy travelers"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col justify-center font-opensans">
            <ul className="space-y-6 text-lg">
              <li className="flex items-start">
                <span className="w-3 h-3 bg-black rounded-full mt-2 mr-4 flex-shrink-0"></span>
                <span>Укажите страну и даты поездки</span>
              </li>
              <li className="flex items-start">
                <span className="w-3 h-3 bg-black rounded-full mt-2 mr-4 flex-shrink-0"></span>
                <span>Сравните условия и выберите наилучший вариант</span>
              </li>
              <li className="flex items-start">
                <span className="w-3 h-3 bg-black rounded-full mt-2 mr-4 flex-shrink-0"></span>
                <span>Заполните анкету на сайте</span>
              </li>
              <li className="flex items-start">
                <span className="w-3 h-3 bg-black rounded-full mt-2 mr-4 flex-shrink-0"></span>
                <span>Оплатите полис</span>
              </li>
              <li className="flex items-start">
                <span className="w-3 h-3 bg-black rounded-full mt-2 mr-4 flex-shrink-0"></span>
                <span>Получите полис на электронную почту</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto p-3 md:p-8 bg-white rounded-xl">
        <div className="max-w-6xl mx-auto ">
          <h2 className="text-4xl font-bold mb-10 font-aeroport">
            Что делать если что-то случилось
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-aeroportRegular">
            <Card className="p-8 bg-white shadow-md">
              <h3 className="text-xl font-bold mb-2">
                Обратитесь к вашему ассистансу
              </h3>
              <p className="text-gray-600">
                Воспользуйтесь контактами в вашем полисе
              </p>
            </Card>

            <Card className="p-8 bg-white shadow-md">
              <h3 className="text-xl font-bold mb-2">
                Следуйте указаниям оператора
              </h3>
              <p className="text-gray-600">
                Вас проинструктируют по получению помощи и подберут подходящее
                медицинское учреждение
              </p>
            </Card>

            <Card className="p-8 bg-white shadow-md">
              <h3 className="text-xl font-bold mb-2">
                Сохраняйте все документы и чеки
              </h3>
              <p className="text-gray-600">
                При возникновении расходов предоставьте их в страховую компанию
              </p>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
