const Button = ({ children }: { children: React.ReactNode }) => {
  return (
    <button className="w-full py-2 text-lg font-semibold bg-black text-white rounded-lg shadow-md transition-all duration-200 mb-3">
      {children}
    </button>
  );
};

export default Button;
