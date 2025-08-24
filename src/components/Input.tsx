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
  // Instead of maintaining a state within these components, we instead lift the state up, so the
  // value can immediately update our useConversion hook, any also prevent multiple unnecessary rerenders.
  // Additionally, this function is practically the same in both components, I would stronger consider moving it
  // into the /utils directory for reuse
  const onInputChange = (e: { target: { value: string; }; }) => {
    onChange?.(e.target.value);
  }

  return (
    <>
      <label htmlFor={inputName}>{title}</label>
      <input
        type="text"
        id={inputName}
        name={inputName}
        onChange={onInputChange}
        value={value}
      />
    </>
  )
}