"use client";
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { format, parse } from "date-fns";
import { ru } from "date-fns/locale";
import axios from "axios";
import { toast } from "react-hot-toast";
import { Checkbox } from "@/components/ui/checkbox";

interface TravelInsuranceDialogProps {
  countryId: number;
  insuranceSumId: number;
  startDate: Date;
  endDate: Date;
  country: string;
}

interface OrderResponse {
  order_id: number;
  total_cost: number;
  pay_link: string;
}

const TravelInsuranceDialog: React.FC<TravelInsuranceDialogProps> = ({
  countryId,
  insuranceSumId,
  startDate,
  endDate,
  country,
}) => {
  const [iin, setIIN] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [isValid, setIsValid] = useState<boolean | null>(null);
  const [fullNameInLatin, setFullNameInLatin] = useState("");
  const [documentNumber, setDocumentNumber] = useState("");
  const [issueDate, setIssueDate] = useState("");
  const [issuedBy, setIssuedBy] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orderResponse, setOrderResponse] = useState<OrderResponse | null>(
    null
  );
  const [checkVal, setCheckVal] = useState<boolean>(true);
  const formattedDateStart = format(startDate, "d MMMM yyyy", { locale: ru });
  const formattedDateEnd = format(endDate, "d MMMM yyyy", { locale: ru });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = {
      country_id: countryId,
      insurance_sum_id: insuranceSumId,
      start_date: format(startDate, "yyyy-MM-dd"),
      end_date: format(endDate, "yyyy-MM-dd"),
      nomad_customer: {
        iin,
        phone_number: phoneNumber,
        email,
        address,
      },
      passport: {
        full_name_in_latin: fullNameInLatin,
        document_number: documentNumber,
        issue_date: issueDate,
        issued_by: issuedBy,
      },
    };

    try {
      const response = await axios.post(
        "https://bestoffer.kz/api/mst/nomad/order",
        formData
      );
      console.log("Order submitted successfully:", response.data);
      setOrderResponse(response.data);
      toast.success("Страховка успешно оформлена!");
      // Handle successful submission (e.g., close dialog)
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error("Error submitting order:", error.response?.data);
        if (error.response?.status === 422) {
          const errorData = error.response.data;
          console.log("Validation errors:", errorData);
          toast.error(
            "Пожалуйста, проверьте введенные данные и попробуйте снова."
          );
        } else {
          toast.error(
            "Произошла ошибка при оформлении страховки. Пожалуйста, попробуйте позже."
          );
        }
      } else {
        console.error("An unexpected error occurred:", error);
        toast.error(
          "Произошла неожиданная ошибка. Пожалуйста, попробуйте позже."
        );
      }
    } finally {
      setIsSubmitting(false);
    }
  };
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setIIN(value);

    if (value.length === 12) {
      const valid = validateIIN(value);
      setIsValid(valid);
    } else {
      setIsValid(null);
    }
  };
  function validateIIN(iin: string) {
    if (iin.length !== 12) {
      return false;
    }

    // Convert the IIN into an array of numbers
    const digits = iin.split("").map(Number);

    const weights1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

    // First cycle sum
    const sum1 = digits
      .slice(0, 11)
      .reduce((sum, digit, index) => sum + digit * weights1[index], 0);

    // Calculate mod 11 for the first cycle
    let controlDigit = sum1 % 11;

    // If control digit is 10, use the second cycle of weights
    if (controlDigit === 10) {
      const weights2 = [3, 4, 5, 6, 7, 8, 9, 10, 11, 1, 2];
      const sum2 = digits
        .slice(0, 11)
        .reduce((sum, digit, index) => sum + digit * weights2[index], 0);
      controlDigit = sum2 % 11;
    }

    // If the control digit is still 10, the IIN is invalid
    if (controlDigit === 10) {
      console.log("invalid iin");
      return false;
    }

    // Compare the calculated control digit with the last digit of the IIN
    return controlDigit === digits[11];
  }
  const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value.replace(/\D/g, "");
    if (input.length === 0) {
      setPhoneNumber("");
    } else {
      let formattedNumber = "+7 (" + input.substring(1, 4);
      if (input.length > 4) {
        formattedNumber += ") " + input.substring(4, 7);
      }
      if (input.length > 7) {
        formattedNumber += "-" + input.substring(7, 9);
      }
      if (input.length > 9) {
        formattedNumber += "-" + input.substring(9, 11);
      }
      setPhoneNumber(formattedNumber);
    }
  };

  return (
    <DialogContent className="sm:max-w-[425px] p-0 overflow-hidden flex flex-col max-h-[90vh]">
      <DialogHeader className="p-6 pb-2">
        <DialogTitle className="text-xl font-bold">
          Оформление страховки
        </DialogTitle>
      </DialogHeader>
      <form
        onSubmit={handleSubmit}
        className="space-y-4 p-6 pt-0 flex-1 overflow-y-auto"
      >
        <div className="space-y-4">
          <div className="flex flex-col space-y-4">
            <Label className="text-sm font-medium">
              Страна: <span className="font-bold">{country}</span>
            </Label>
            <Label className="text-sm font-medium">
              Уезжаете: <span className="font-bold">{formattedDateStart}</span>
            </Label>
            <Label className="text-sm font-medium">
              Возвращаетесь:{" "}
              <span className="font-bold">{formattedDateEnd}</span>
            </Label>
          </div>
          <div>
            <div>
              <Label htmlFor="iin" className="text-sm font-medium">
                ИИН
              </Label>
              <Input
                id="iin"
                value={iin}
                onChange={handleInputChange}
                placeholder="000000000000"
                className="mt-1"
              />
              {isValid === null ? (
                <p>Please enter a 12-digit IIN.</p>
              ) : isValid ? (
                <p style={{ color: "green" }}>IIN is valid.</p>
              ) : (
                <p style={{ color: "red" }}>IIN is invalid.</p>
              )}
            </div>
          </div>
          <div>
            <Label htmlFor="phone" className="text-sm font-medium">
              Номер телефона
            </Label>
            <Input
              id="phone"
              value={phoneNumber}
              onChange={handlePhoneNumberChange}
              placeholder="+7 (___) ___-__-__"
              className="mt-1"
            />
            {phoneError && <p className="text-red-500">{phoneError}</p>}
          </div>
          <div>
            <Label htmlFor="email" className="text-sm font-medium">
              Email для получения полиса
            </Label>
            <Input
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              className="mt-1"
              placeholder="example@gmail.com"
            />
          </div>
          <div>
            <Label htmlFor="address" className="text-sm font-medium">
              Адрес проживания
            </Label>
            <Input
              id="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="mt-1"
              placeholder="Город, улица, дом, квартира"
            />
          </div>
          <div>
            <Label htmlFor="fullName" className="text-sm font-medium">
              Имя и Фамилия как в Паспорте (на латинице)
            </Label>
            <Input
              id="fullName"
              value={fullNameInLatin}
              onChange={(e) => setFullNameInLatin(e.target.value)}
              className="mt-1"
              placeholder="Aigul Amanzholova"
            />
          </div>
          <div>
            <Label htmlFor="passportNumber" className="text-sm font-medium">
              Номер паспорта
            </Label>
            <Input
              id="passportNumber"
              value={documentNumber}
              onChange={(e) => setDocumentNumber(e.target.value)}
              placeholder="N12312312"
              className="mt-1"
            />
          </div>
          <div>
            <Label htmlFor="passportDate" className="text-sm font-medium">
              Дата выдачи паспорта
            </Label>
            <div className="relative mt-1">
              <Input
                id="passportDate"
                value={issueDate}
                onChange={(e) => setIssueDate(e.target.value)}
                type="date"
                className="pr-10"
              />
            </div>
          </div>
          <div>
            <Label htmlFor="passportAuthority" className="text-sm font-medium">
              Кем выдан паспорт
            </Label>
            <Input
              id="passportAuthority"
              value={issuedBy}
              onChange={(e) => setIssuedBy(e.target.value)}
              className="mt-1"
            />
          </div>
          <div className="flex flex-row space-x-3 items-center">
            <Checkbox
              checked={checkVal}
              onClick={() => setCheckVal(!checkVal)}
            />
            <span className="text-xs text-gray-500">
              Отправляя заявку, вы соглашаетесь на сбор и обработку своих
              персональных данных
            </span>
          </div>
        </div>

        {orderResponse ? (
          <div className="space-y-4">
            <p>Номер заказа: {orderResponse.order_id}</p>
            <p>Общая стоимость: {orderResponse.total_cost} тенге</p>
            <Button
              type="button"
              className="w-full"
              onClick={() => window.open(orderResponse.pay_link, "_blank")}
            >
              Оплатить
            </Button>
          </div>
        ) : (
          <Button
            type="submit"
            className="w-full mt-6"
            disabled={isSubmitting || !checkVal}
          >
            {isSubmitting ? "Оформление..." : "Оформить страховку"}
          </Button>
        )}
      </form>
    </DialogContent>
  );
};

export default TravelInsuranceDialog;
