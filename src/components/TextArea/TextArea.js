const TextArea = ({
  id,
  name,
  placeholder,
  onChange,
  value,
  label,
  className,
}) => {
  return (
    <div className="textarea-container d-flex flex-column">
      {label && <label htmlFor={id}>{label}</label>}
      <textarea
        id={id}
        name={name}
        className={className}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      ></textarea>
    </div>
  );
};

export default TextArea;
