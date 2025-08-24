type InputProps = {
  title: string;
  inputName: string;
}

export const Input: React.FC<InputProps> = ({
  title,
  inputName
}: InputProps) => {
  return <>
    <label htmlFor={inputName}>{title}</label>
    <input type="text" id={inputName} name={inputName} />
  </>
}