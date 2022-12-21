const Button = ({ type, onClick, className, children }) => {
  return (
    <button
      className={`btn d-inline-block ${className && className}`}
      type={type || 'button'}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
export default Button;
