import React from "react";

export default function LoanForm() {
  return (
    <div className="flex flex-col md:flex-row bg-white shadow-md rounded-xl p-8 space-y-4 md:space-y-0 md:space-x-4 font-aeroport">
      <div className="flex flex-col space-y-4 lg:w-1/2 md:w-1/2 w-full">
        <input
          type="text"
          placeholder="Сумма займа"
          className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="text"
          placeholder="Срок в днях"
          className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="flex flex-col items-center text-left md:items-start bg-gray-100 p-6 rounded-lg flex-grow md:w-auto  md:text-left">
        <p className="lg:text-2xl md:text-2xl text-lg font-semibold text-gray-700">
          Найдем займ без процентов
        </p>
        <p className="lg:text-lg md:text-lg text-sm text-gray-500">
          Онлайн-оформление и одобрение за 3 минуты
        </p>
        <button className="mt-4 bg-primary text-white font-bold text-sm md:text-xl lg:text-lg py-2 px-6 rounded-lg hover:bg-primary/90 transition duration-300 w-full">
          Заполнить анкету
        </button>
      </div>
    </div>
  );
}
