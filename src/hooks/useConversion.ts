import { useEffect, useState } from "react";
import type { Conversion } from "../types/currencies";

const apiKey = import.meta.env.VITE_CURRENCY_API_KEY;

export type ConversionProps = {
  from: string
  to: string
  amount: string;
};

export const useConversion = ({
  from,
  to,
  amount
}: ConversionProps) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [conversionResult, setConversionResult] = useState<Conversion | null>(null);

  const queryParams = `&from=${from}&to=${to}&amount=${amount}`;

  useEffect(() => {
    const fetchCurrencies = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(`https://api.currencybeacon.com/v1/convert?api_key=${apiKey}${queryParams}`);
        const rawData = await response.json();
        console.log(123, rawData)
        setConversionResult(rawData);
      } catch (error) {
        // I would consider logging here to Sentry if there's any error
        console.log("An error occured: ", error)
        setError("Failed to process conversion")
      } finally {
        setLoading(false);
      }
    }

    fetchCurrencies();
  }, [queryParams]);
  
  return { loading, error, conversionResult };
}