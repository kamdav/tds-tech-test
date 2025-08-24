import { useState } from 'react';
import './App.css'
import { CurrencySelect } from './components/CurrencySelect';
import { Input } from './components/input'
import { useCurrencies } from './hooks/useCurrencies';

function App() {
  const [amountFrom, setAmountFrom] = useState<string>("");
  const [amountConverted, setAmountConverted] = useState<string>("");
  console.log(123, amountFrom)

  const { loading, error, currencies } = useCurrencies();

  if (loading) {
    // I would instead consider a visual loading state on the input fields in the case that the query is taking too long
    console.log('...loading');
  }

  if (error) {
    // I would consider throwing up an error message somewhere around the currency conversion elements to make the user aware
    // that there has been an error, and what type of error it may be
    console.log('...an error occured');
  }

  // console.log(currencies)

  return (
    <div>
      <h1>Currency Conversion</h1>
      <Input
        title="From Amount:"
        inputName="fromAmount"
        onChange={(value) => setAmountFrom(value)}
      />
      <CurrencySelect
        title="Currency"
        selectName="fromCurrency"
        currencies={currencies}
      />
      <Input
        title="Converted Amount:"
        inputName="convertedAmount"
        value={amountConverted}
      />
      <CurrencySelect
        title="Currency"
        selectName="toCurrency"
        currencies={currencies}
      />
    </div>
  )
}

export default App
