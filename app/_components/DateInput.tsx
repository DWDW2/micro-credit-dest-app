import React, { useState, useEffect, ChangeEvent } from "react";
import { Input } from "@/components/ui/input";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { CheckCircle2, XCircle } from "lucide-react";

interface DateInputProps {
  value: string;
  onChange: (date: string) => void;
}

const DateInput: React.FC<DateInputProps> = ({ value, onChange }) => {
  const [localDate, setLocalDate] = useState<string>("");
  const [isValid, setIsValid] = useState<boolean>(true);
  const [showFeedback, setShowFeedback] = useState<boolean>(false);

  useEffect(() => {
    if (value) {
      const [year, month, day] = value.split("-");
      setLocalDate(`${day}.${month}.${year}`);
    } else {
      setLocalDate("");
    }
  }, [value]);

  const validateDate = (input: string): boolean => {
    const regex = /^(\d{2})\.(\d{2})\.(\d{4})$/;
    if (!regex.test(input)) return false;

    const [, day, month, year] = input.match(regex) || [];
    const dateObj = new Date(
      parseInt(year),
      parseInt(month) - 1,
      parseInt(day)
    );
    return (
      dateObj.getFullYear() === parseInt(year) &&
      dateObj.getMonth() === parseInt(month) - 1 &&
      dateObj.getDate() === parseInt(day)
    );
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    let input = e.target.value;

    input = input.replace(/\D/g, "");

    if (input.length > 2) {
      input = input.slice(0, 2) + "." + input.slice(2);
    }
    if (input.length > 5) {
      input = input.slice(0, 5) + "." + input.slice(5);
    }

    input = input.slice(0, 10);

    setLocalDate(input);
    setShowFeedback(input.length === 10);

    if (input.length === 10) {
      const isValidDate = validateDate(input);
      setIsValid(isValidDate);
      if (isValidDate) {
        const [day, month, year] = input.split(".");
        onChange(`${year}-${month}-${day}`);
      } else {
        onChange("");
      }
    } else {
      onChange("");
    }
  };

  return (
    <div className="max-w-sm mx-auto mt-1">
      <div className="relative">
        <Input
          type="text"
          placeholder="DD.MM.YYYY"
          value={localDate}
          onChange={handleChange}
          className={
            showFeedback
              ? isValid
                ? "pr-10 border-green-500"
                : "pr-10 border-red-500"
              : ""
          }
          maxLength={10}
        />
        {showFeedback && (
          <span className="absolute inset-y-0 right-0 flex items-center pr-3">
            {isValid ? (
              <CheckCircle2 className="h-5 w-5 text-green-500" />
            ) : (
              <XCircle className="h-5 w-5 text-red-500" />
            )}
          </span>
        )}
      </div>
      {showFeedback && !isValid && (
        <Alert className="mt-2 bg-red-100">
          <AlertDescription>
            Invalid date. Please check the format DD.MM.YYYY
          </AlertDescription>
        </Alert>
      )}
    </div>
  );
};

export default DateInput;
