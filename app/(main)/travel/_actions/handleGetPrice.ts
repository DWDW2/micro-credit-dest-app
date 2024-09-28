import { APIResponse } from "@/app/(main)/travel/_types/Calc.types";
import axios, { AxiosResponse } from "axios";
import { format } from "date-fns";

interface PriceResponse {
  results: APIResponse[];
  errors: string[];
}

interface RequestData {
  age: number;
  country: string;
  start_date: string;
  end_date: string;
}

export const handleGetPrice = async (
  age: string,
  country: string,
  startDate: Date,
  endDate: Date
): Promise<PriceResponse> => {
  if (!startDate || !endDate || !country || !age) {
    throw new Error("Please select both start and end dates.");
  }

  const endpoints = [
    "https://bestoffer.kz/api/mst/amanat",
    "https://bestoffer.kz/api/mst/interteach",
    "https://bestoffer.kz/api/mst/asko",
    "https://bestoffer.kz/api/mst/freedom",
    "https://bestoffer.kz/api/mst/nomad",
    "https://bestoffer.kz/api/mst/jusan",
  ];

  const requestData: RequestData = {
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

    const responses = await Promise.all(requests.map((p) => p.catch((e) => e)));

    const successfulResponses = responses.filter(
      (response): response is AxiosResponse<APIResponse> =>
        !(response instanceof Error)
    );
    const errors = responses.filter(
      (response): response is Error => response instanceof Error
    );

    const allResults = successfulResponses.map((response) => response.data);

    const errorMessages = errors.map((err) => {
      if (axios.isAxiosError(err)) {
        if (err.code === "ECONNABORTED") {
          return `Request timeout: ${err.config?.url}`;
        }
        return err.message;
      }
      return err.toString();
    });

    return {
      results: allResults,
      errors: errorMessages,
    };
  } catch (err) {
    const errorMessage = axios.isAxiosError(err)
      ? err.message
      : "An unexpected error occurred.";
    return {
      results: [],
      errors: [errorMessage],
    };
  }
};
