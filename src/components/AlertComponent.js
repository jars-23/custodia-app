import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose, faCheck } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import ButtonComponent from "./ButtonComponent";

const AlertComponent = ({ type = "success", message, onClose }) => {
  if (!message) return null; // No renderizar si no hay mensaje

  const alertStyles = {
    success: { background: "#28a745", backgroundicon: "#44c361", icon: faCheck },
    error: { background: "#dc3545", backgroundicon: "#f92f60", icon: faClose},
    warning: { background: "#ffc107", backgroundicon: "#f92f60", icon: "⚠️" },
    info: { background: "#17a2b8", backgroundicon: "#f92f60", icon: "ℹ️" },
  };

  return (
    <div style={styles.overlay}>
      <div style={{ ...styles.modal, backgroundColor: "#fff" }}>

        <div className="row d-flex justify-content-center">
          <div className="col-lg-12">
            <div style={{ ...styles.modalheader, background: alertStyles[type].background }}>
              <span style={{ ...styles.modalicon, backgroundColor: alertStyles[type].backgroundicon }}><FontAwesomeIcon style={styles.iconsvg} icon={alertStyles[type].icon} /> </span>
            </div>
            <p style={styles.modalmessage}>{message}</p>
          </div>
          <div className="col-sm-6 px-4 pb-3">
            <ButtonComponent type="button" className="btnSecondary" label="Aceptar" onClick={onClose} />
          </div>
        </div>

      </div>
    </div>
  );
};

const styles = {
  overlay: {
    position: "fixed",
    top: 0, left: 0, right: 0, bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1000,
  },
  modal: {
    padding: "0px",
    borderRadius: "15px",
    color: "white",
    textAlign: "center",
    width: "500px",
  },
  modalheader: {
    borderTopLeftRadius: "15px", 
    borderTopRightRadius: "15px", 
    height: "100px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  modalicon: {
    height: "70px",   
    width: "70px", 
    borderRadius: "50%", 
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  iconsvg: { fontSize: "40px",},
  modalmessage: { 
    fontSize: "16px", 
    marginBottom: "0px", 
    color: "#000", 
    padding: "35px 30px",},
  button: {
    background: "#fff",
    border: "none",
    padding: "8px 15px",
    cursor: "pointer",
    borderRadius: "5px",
  },
};

export default AlertComponent;
