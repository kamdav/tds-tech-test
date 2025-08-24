type InputProps = {
  title: string;
  inputName: string;
  onChange?: (value: string) => void;
  value?: string;
}

export const Input: React.FC<InputProps> = ({
  title,
  inputName,
  onChange,
  value
}: InputProps) => {
  const onInputChange = (e: { target: { value: string; }; }) => {
    onChange?.(e.target.value);
  }

  return <>
    <label htmlFor={inputName}>{title}</label>
    <input
      type="text"
      id={inputName}
      name={inputName}
      onChange={onInputChange}
      value={value}
    />
  </>
}