type SelectProps = {
  title: string;
  selectName: string;
}

export const Select: React.FC<SelectProps> = ({
  title,
  selectName
}: SelectProps) => {
  return <>
    <label htmlFor={selectName}>{title}:</label>
    <select name={selectName}>
      <option value="testOption1">Option 1</option>
      <option value="testOption2">Option 2</option>
    </select>
  </>
}