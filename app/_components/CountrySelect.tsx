import React, { Dispatch, SetStateAction } from "react";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

type Props = {
  countries: string[];
  value: string;
  isOpenSelect: boolean;
  setIsOpenSelect: Dispatch<SetStateAction<boolean>>;
  setAction: Dispatch<SetStateAction<string>>;
};

export default function CountrySelect({
  countries,
  isOpenSelect,
  setAction,
  setIsOpenSelect,
  value,
}: Props) {
  return (
    <Select
      value={value}
      onValueChange={setAction}
      onOpenChange={() => setIsOpenSelect(!isOpenSelect)}
    >
      <SelectTrigger id="country" className="relative h-11 peer">
        <label
          className={cn(
            "text-sm text-gray-500 absolute left-2 bg-white px-2",
            value
              ? "-top-2 bg-white px-2 text-xs"
              : "text-sm peer-focus:top-1 peer-focus:text-xs"
          )}
        >
          Куда отправляетесь?
        </label>
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        {countries.map((c) => (
          <SelectItem key={c} value={c}>
            {c}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
