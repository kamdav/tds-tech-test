import { useEffect, useRef } from "react";
import type { Currency } from "../types/currencies";

type SelectProps = {
  title: string;
  selectName: string;
  currencies: Currency[];
  onChange: (value: string) => void;
}

export const CurrencySelect: React.FC<SelectProps> = ({
  title,
  selectName,
  currencies,
  onChange
}: SelectProps) => {
  // if (!currencies) return;

  const selectRef = useRef<HTMLSelectElement>(null);
  
  useEffect(() => {
    if (selectRef.current) {
      // Set the initial value
      onChange(selectRef.current.value)
    }
  }, [onChange])

  const onSelectChange = (e: { target: { value: string; }; }) => {
    onChange?.(e.target.value);
  }

  return <>
    <label htmlFor={selectName}>{title}</label>
    <select
      id={selectName}
      name={selectName}
      onChange={onSelectChange}
      ref={selectRef}
    >
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