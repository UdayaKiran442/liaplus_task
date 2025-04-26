const Button = ({ children }: { children: React.ReactNode }) => {
  return (
    <button className="bg-black text-white p-2 rounded-md">
      {children}
    </button>
  );
};

export default Button;
