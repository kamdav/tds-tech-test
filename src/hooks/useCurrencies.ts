import { useEffect, useState } from "react";

const apiKey = import.meta.env.VITE_CURRENCY_API_KEY;

export const useCurrencies = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [currencies, setCurrencies] = useState<string[]>([]);

  useEffect(() => {
    const fetchCurrencies = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(`https://api.currencybeacon.com/v1/currencies?api_key=${apiKey}`);
        const data = await response.json();
        setCurrencies(data);
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