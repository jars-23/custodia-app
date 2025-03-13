import { useState } from "react";

const RadioButtonComponent = ({ label, name, value, checked, onChange, className}) => {
  
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = () => {
    setIsChecked(!isChecked); 
    onChange(!isChecked ? value : ""); 
  };

  return (
    <div className={`form-check ${className}`}>
      <input className="form-check-input" type="checkbox" name={name} value={value} checked={isChecked} onChange={handleChange} />
      <label className="form-check-label">{label}</label>
    </div>
  );
};
  export default RadioButtonComponent;