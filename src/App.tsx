import { useState } from 'react';
import './App.css'
import { CurrencySelect } from './components/CurrencySelect';
import { Input } from './components/input'
import { useCurrencies } from './hooks/useCurrencies';
import { useConversion } from './hooks/useConversion';

function App() {
  const [amountFrom, setAmountFrom] = useState<string>("");
  const [currencyFrom, setCurrencyFrom] = useState<string>("");
  const [currencyTo, setCurrencyTo] = useState<string>("");

  const { loading: currenciesLoading, error: currenciesError, currencies } = useCurrencies();
  const { loading: conversionLoading, error: conversionError, conversionResult } = useConversion({
    from: currencyFrom,
    to: currencyTo,
    amount: amountFrom
  });

  if (currenciesLoading || conversionLoading) {
    // I would consider a visual loading state on the input fields in the case that the query is taking too long
  }

  if (currenciesError || conversionError) {
    // I would consider throwing up an error message somewhere around the currency conversion elements to make the user aware
    // that there has been an error, and what type of error it may be
  }

  return (
    <div>
      <h1>Currency Conversion</h1>

      <div className="conversion-wrapper">
        <div className="input-wrapper">
          <Input
            title="From Amount:"
            inputName="fromAmount"
            onChange={(value) => setAmountFrom(value)}
          />
          <CurrencySelect
            title="Currency"
            selectName="fromCurrency"
            currencies={currencies}
            onChange={(value) => setCurrencyFrom(value)}
          />
        </div>

        <div className="input-wrapper">
          <Input
            title="Converted Amount:"
            inputName="convertedAmount"
            value={conversionResult?.value?.toFixed(2) || ""}
          />
          <CurrencySelect
            title="Currency"
            selectName="toCurrency"
            currencies={currencies}
            onChange={(value) => setCurrencyTo(value)}
          />
        </div>
      </div>
    </div>
  )
}

export default App
