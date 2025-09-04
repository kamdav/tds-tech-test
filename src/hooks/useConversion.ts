import { useEffect, useState } from "react";
import type { Conversion } from "../types/currencies";
import type { ConversionObject } from "../App";

const apiKey = import.meta.env.VITE_CURRENCY_API_KEY;

export type ConversionProps = {
  from: string
  to: string
  amount: string;
  setState: React.Dispatch<React.SetStateAction<ConversionObject[]>>
};

export const useConversion = ({
  from,
  to,
  amount,
  setState
}: ConversionProps) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [conversionResult, setConversionResult] = useState<Conversion | null>(null);

  // By doing it in this method, the API will only ever be queried if the from, to and amount have truthy values
  // They are set as dependencies of the useEffect, so this will rerun whenever those values change

  useEffect(() => {
    if (!from || !to || !amount) return;

    const queryParams = `&from=${from}&to=${to}&amount=${amount}`;

    const fetchCurrencies = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(`https://api.currencybeacon.com/v1/convert?api_key=${apiKey}${queryParams}`);
        const rawData = await response.json();
        console.log('rawData: ', rawData)
        setConversionResult(rawData);

        if (setState) {
          setState((prev) => {
            const newValue = [
              {
                amountToConvert: rawData.amount,
                convertedAmount: rawData.value,
                currencyFrom: rawData.from,
                currencyTo: rawData.to
              },
              ...prev,
            ];

            return newValue;
          })
        }
      } catch (error) {
        // I would consider logging here to Sentry if there's any error
        console.log("An error occured: ", error)
        setError("Failed to process conversion")
      } finally {
        setLoading(false);
      }
    }

    fetchCurrencies();
  }, [amount, from, to, setState]);
  
  return { loading, error, conversionResult };
}