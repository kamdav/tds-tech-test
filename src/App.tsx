import './App.css'
import { Input } from './components/input'
import { Select } from './components/select'

function App() {
  return (
    <div>
      <h1>Hello world</h1>
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
