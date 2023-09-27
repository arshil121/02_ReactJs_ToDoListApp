import "./input-box.styles.css";

const InputBox = ({ className, placeholder, value, onChange }) => (
  <input
    type="text"
    className={className}
    placeholder={placeholder}
    value={value}
    onChange={onChange}
  />
);

export default InputBox;
