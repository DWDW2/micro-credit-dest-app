import React, { Dispatch, SetStateAction } from "react";

type Props = {
  setAge: Dispatch<SetStateAction<string>>;
  age: string;
};

export default function FloatingLabel({ setAge, age }: Props) {
  return (
    <div className="relative">
      <input
        type="number"
        className="w-full h-11 px-2 rounded-md border bg-transparent border-neutral-200 peer focus:outline-neutral-400"
        placeholder="e.g 34"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <label
        className={`text-sm text-gray-500 font-medium absolute -translate-y-1/2 left-2 z-20 px-1 transition-all duration-200 bg-white
        ${
          age
            ? "top-0 text-xs text-gray-600"
            : "top-1/2 peer-focus:top-0 peer-focus:text-xs peer-focus:text-gray-600"
        }`}
      >
        Возраст туриста
      </label>
    </div>
  );
}
