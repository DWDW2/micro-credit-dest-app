import { ru } from "date-fns/locale";
import React, { Dispatch, SetStateAction } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
type Props = {
  date: Date | undefined;
  setDate: Dispatch<SetStateAction<Date | undefined>>;
};

export default function DayPickerDropdown({ date, setDate }: Props) {
  const currentYear = new Date().getFullYear();
  const fromYear = 2000;
  const toYear = currentYear;
  return (
    <DayPicker
      mode="single"
      locale={ru}
      selected={date}
      onSelect={setDate}
      captionLayout="dropdown"
      fromYear={fromYear}
      toYear={toYear}
    />
  );
}
