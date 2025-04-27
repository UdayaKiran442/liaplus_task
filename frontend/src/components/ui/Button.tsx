const Button = ({ children, loading, onClick }: { children: React.ReactNode, loading?: boolean, onClick?: () => void }) => {
  return (
    <button onClick={onClick} className={`w-full py-2 text-lg font-semibold bg-black text-white rounded-lg shadow-md transition-all duration-200 mb-3 ${loading ? "opacity-50 cursor-not-allowed" : ""}`}>
      {loading ? "Loading..." : children}
    </button>
  );
};

export default Button;
