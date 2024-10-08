import { cn } from "@/lib/utils";
import React, { Dispatch, SetStateAction } from "react";

type Props = {
  setAge: Dispatch<SetStateAction<string>>;
  age: string;
};

export default function FloatingLabel({ setAge, age }: Props) {
  return (
    <div className="relative w-full">
      <input
        type="number"
        className={cn(
          "peer w-full h-12 px-4 text-sm border rounded-md bg-transparent border-neutral-200",
          "focus:outline-none focus:border-neutral-400"
        )}
        placeholder=" "
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <label
        className={cn(
          "absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 transition-all duration-300 pointer-events-none bg-white px-2", // Padding increased
          "peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-sm peer-placeholder-shown:text-gray-500",
          "peer-focus:top-0 peer-focus:-translate-y-1/2 peer-focus:text-xs peer-focus:text-gray-500",
          age && "top-0 -translate-y-1/2 text-xs"
        )}
      >
        Возраст туриста
      </label>
    </div>
  );
}
