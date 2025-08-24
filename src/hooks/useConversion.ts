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

  // By doing it in this method, the API will only ever be queried if the from, to and amount have truthy values
  // They are set as dependencies of the useEffect, so this will rerun whenever those values change
  const queryParams = `&from=${from}&to=${to}&amount=${amount}`;

  useEffect(() => {
    if (!from || !to || !amount) return;

    const fetchCurrencies = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(`https://api.currencybeacon.com/v1/convert?api_key=${apiKey}${queryParams}`);
        const rawData = await response.json();
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
  }, [amount, from, queryParams, to]);
  
  return { loading, error, conversionResult };
}