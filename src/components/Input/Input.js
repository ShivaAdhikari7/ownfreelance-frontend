const Input = ({
  id,
  label,
  type,
  placeholder,
  name,
  min,
  max,
  value,
  onChange,
  className,
  disabled,
}) => {
  return (
    <div className="input-container d-flex flex-column">
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        name={name}
        min={min && min}
        max={max && max}
        value={value}
        onChange={onChange}
        className={`d-inline-block ${className && className}`}
        disabled={disabled && disabled}
      />
    </div>
  );
};
export default Input;