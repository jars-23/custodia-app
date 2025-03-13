import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const InputComponent = ({ type, placeholder, value, onChange, required, icon }) => {
  return (
    <div style={{ position: "relative", width: "100%", marginBottom: "10px" }}>
      {icon && (
        <FontAwesomeIcon
          icon={icon}
          style={{
            position: "absolute",
            left: "18px",
            top: "50%",
            transform: "translateY(-50%)",
            color: "#002d7c",
          }}
        />
      )}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        style={{
          width: "100%",
          padding: icon ? "10px 10px 10px 43px" : "10px",
          border: "1px solid #ccc",
          borderRadius: "20px",
          fontSize: "16px",
        }}
      />
    </div>
  );
};

export default InputComponent;