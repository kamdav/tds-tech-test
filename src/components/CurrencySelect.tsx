import type { Currency } from "../types/currencies";

type SelectProps = {
  title: string;
  selectName: string;
  currencies: Currency[]
}

export const CurrencySelect: React.FC<SelectProps> = ({
  title,
  selectName,
  currencies
}: SelectProps) => {
  if (!currencies) return;

  return <>
    <label htmlFor={selectName}>{title}</label>
    <select id={selectName} name={selectName}>
      {currencies?.map((currencyObject) => {
        return <option
          key={`${currencyObject.id}${selectName}`}
          value={currencyObject.short_code}
        >
          {currencyObject.short_code}
        </option>
      })}
    </select>
  </>
}