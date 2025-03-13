import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

const ButtonComponent = ({ label, icon, onClick, loadlabel = "Cargando...", type = "button", className = "", loading }) => {
  return (
    <button
      type={type}
      className={`w-100 d-flex align-items-center justify-content-center gap-2 ${className}`}
      onClick={type === "button" ? onClick : undefined}
      disabled={loading} 
      style={{ padding: "8px 16px" }}
    >
      {loading ? (
        <FontAwesomeIcon icon={faSpinner} spin />
      ) : (
        icon && <FontAwesomeIcon icon={icon} />
      )}
      <span>{loading ? loadlabel : label}</span>
    </button>
  );
};

export default ButtonComponent;