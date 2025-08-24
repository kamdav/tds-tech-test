import './App.css'
import { CurrencySelect } from './components/CurrencySelect';
import { Input } from './components/input'
import { useCurrencies } from './hooks/useCurrencies';

function App() {
  const { loading, error, currencies } = useCurrencies();

  if (loading) {
    return <div>...Loading</div>;
  }

  if (error) {
    return <div>An error occured, please try again</div>;
  }

  // console.log(currencies)

  return (
    <div>
      <h1>Currency Conversion</h1>
      <Input
        title="From Amount:"
        inputName="fromAmount"
      />
      <CurrencySelect
        title="Currency"
        selectName="fromCurrency"
        currencies={currencies}
      />
      <Input
        title="To Amount:"
        inputName="toAmount"
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
