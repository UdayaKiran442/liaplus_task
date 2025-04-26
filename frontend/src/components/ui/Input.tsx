interface InputProps {
  type: string;
  name: string;
  placeholder: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({ type, name, placeholder, onChange, value }: InputProps) => {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      className="border border-gray-300 rounded-md p-2 w-full"
      onChange={onChange}
      value={value}
    />
  );
};

export default Input;
