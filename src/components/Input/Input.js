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
  autoComplete,
  render,
}) => {
  return (
    <div className="input-container d-flex flex-column mb-2">
      {label && <label htmlFor={id}>{label}</label>}
      <div className="position-relative">
        <input
          id={id}
          type={type}
          placeholder={placeholder}
          name={name}
          min={min && min}
          max={max && max}
          value={value}
          onChange={onChange}
          className={`d-inline-block w-100 ${className ? className : ''}`}
          disabled={disabled && disabled}
          autoComplete={autoComplete ? autoComplete : 'off'}
        />
        {render && render()}
      </div>
    </div>
  );
};
export default Input;
