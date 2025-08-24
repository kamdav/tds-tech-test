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
  const selectRef = useRef<HTMLSelectElement>(null);
  
  useEffect(() => {
    if (selectRef.current) {
      // We set the initial value here using ref instead of state, preventing any need for rerendering in this
      // particular component, as the onChange will trigger a rerender on the parent component instead
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
      {/* This specifically references 'currencies', making this component less reusable. With a bit more refactoring
      we could make this more generic and therefore more reusable */}
      {currencies?.map((currencyObject) => {
        return <option
          // We have 2 selects meaning the ID is already getting used and therefore we can't simply use the ID as the key
          // instead I've combined it with the element name to ensure a unique identifier
          key={`${currencyObject.id}${selectName}`}
          value={currencyObject.short_code}
        >
          {currencyObject.short_code}
        </option>
      })}
    </select>
  </>
}