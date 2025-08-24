import './App.css'
import { Input } from './components/input'
import { Select } from './components/select'
import { useCurrencies } from './hooks/useCurrencies';

function App() {
  const { loading, error, currencies } = useCurrencies();

  if (loading) {
    return <div>...Loading</div>;
  }

  if (error) {
    return <div>An error occured, please try again</div>;
  }

  console.log(currencies)

  return (
    <div>
      <h1>Currency Conversion</h1>
      <Input
        title="From Amount:"
        inputName="fromAmount"
      />
      <Select
        title="Currency"
        selectName="fromCurrency"
      />
      <Input
        title="To Amount:"
        inputName="toAmount"
      />
      <Select
        title="Currency"
        selectName="toCurrency"
      />
    </div>
  )
}

export default App
