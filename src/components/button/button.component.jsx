import "./button.styles.css";

const Button = ({ label, className, addTask }) => (
  <button 
  className={className} 
  onClick={addTask}>
    {label}
  </button>
);

export default Button;
