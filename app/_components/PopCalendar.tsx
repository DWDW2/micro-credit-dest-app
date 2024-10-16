"use client";
import React, { Dispatch, SetStateAction } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { format, isBefore, isEqual } from "date-fns";
import toast from "react-hot-toast";
import { cn } from "@/lib/utils";
import { ru } from "date-fns/locale";

type Props = {
  setDate: Dispatch<SetStateAction<Date | undefined>>;
  date: Date | undefined;
  desc: string;
  startDate?: Date | undefined;
};

export default function PopCalendar({ setDate, date, desc, startDate }: Props) {
  const today = new Date();

  const handleSelect = (selectedDate: Date | undefined) => {
    if (selectedDate) {
      if (isBefore(selectedDate, today) || isEqual(selectedDate, today)) {
        toast.error("Выберите дату позже сегодняшнего дня");
        return;
      }
      if (startDate) {
        if (isEqual(selectedDate, startDate)) {
          toast.error("Вы не можете выбрать тот же день");
          return;
        }
        if (isBefore(selectedDate, startDate)) {
          toast.error("Выберите дату позже начальной даты");
          return;
        }
      }
    }
    setDate(selectedDate);
  };

  return (
    <div className="relative w-full">
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            className={cn(
              "peer w-full text-left h-11 font-normal flex flex-row justify-between relative hover:bg-white",
              date && "text-muted-foreground"
            )}
          >
            <span
              className={cn(
                "absolute left-3 text-gray-500 transition-all duration-300",
                date
                  ? "-top-2 bg-white px-2 text-xs"
                  : "text-sm peer-focus:top-1 peer-focus:text-xs"
              )}
            >
              {desc}
            </span>
            <span>
              {date ? format(date, "d MMMM yyyy", { locale: ru }) : ""}
            </span>
            <CalendarIcon className="mr-2 h-4 w-4" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0">
          <Calendar
            mode="single"
            locale={ru}
            selected={date}
            onSelect={handleSelect}
            disabled={(date) =>
              isBefore(date, today) ||
              isEqual(date, today) ||
              (startDate
                ? isBefore(date, startDate) || isEqual(date, startDate)
                : false)
            }
            initialFocus
            required
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}
