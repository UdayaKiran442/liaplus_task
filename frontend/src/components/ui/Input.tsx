interface InputProps {
  type: string;
  placeholder: string;
}

const Input = ({ type, placeholder }: InputProps) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="border border-gray-300 rounded-md p-2 w-full"
    />
  );
};

export default Input;
