import { useEffect, useState } from "react";
import type { Currency } from "../types/currencies";

const apiKey = import.meta.env.VITE_CURRENCY_API_KEY;

export const useCurrencies = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [currencies, setCurrencies] = useState<Currency[]>([]);

  useEffect(() => {
    const fetchCurrencies = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(`https://api.currencybeacon.com/v1/currencies?api_key=${apiKey}`);
        const rawData = await response.json();
        // Had some difficulty with the data and using array methods, which I've resolved by wrapping it around Object.values()
        const data: Currency[] = Object.values(rawData);
        // I noticed one or more of the items were not a currency related object, so I've removed that from the stored state array
        const sanitisedData = data.filter((item) => item.name);
        setCurrencies(Object.values(sanitisedData));
      } catch (error) {
        // I would consider logging here to Sentry if there's any error
        console.log("An error occured: ", error)
        setError("Failed to fetch currencies")
      } finally {
        setLoading(false);
      }
    }

    fetchCurrencies();
  }, []);
  
  return { loading, error, currencies };
}