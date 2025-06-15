export const Button = ({
  children,
  onClick,
  className = '',
  disabled,
}: {
  children?: React.ReactNode;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
}) => {
  return (
    <button
      onClick={onClick}
      className={`theme p-2 rounded  font-mono font-bold ${className} ${
        disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'
      }`}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
