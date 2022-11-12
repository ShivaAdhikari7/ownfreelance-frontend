const Button = ({ type, onClick, label, className }) => {
  return (
    <button
      className={`btn d-inline-block ${className && className}`}
      type={type || 'button'}
      onClick={onClick}
    >
      {label}
    </button>
  );
};
export default Button;
