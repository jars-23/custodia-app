import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../assets/css/components/SidebarComponent.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faScrewdriverWrench, faChevronCircleDown, faChevronCircleUp, faPowerOff } from "@fortawesome/free-solid-svg-icons";

const SidebarComponent = () => {

  const [open, setOpen] = useState(false); 

  return (
    <aside className="sidebar">
      <div className="logo">
        <img src="/img/logo-entidad.png" height="150px" alt="Logo de Entidad" />
      </div>
      <ul>
        <li><h6 className="mt-2" style={{fontSize:"13px", fontWeight: "bold", color: "#babfc9", margin: "0px", paddingLeft: "11px"}}>Módulos generales</h6></li>
        <li className="mt-2">
          <Link to="/dashboard"> <FontAwesomeIcon className="pe-3" icon={faHome}/>Inicio</Link>
        </li>
        <li>
          <button className="submenu-btn" onClick={() => setOpen(!open)}>
            <FontAwesomeIcon className="pe-3" icon={faScrewdriverWrench}/>
            Administración
            <FontAwesomeIcon className="chevron" icon={open ? faChevronCircleUp : faChevronCircleDown} />
          </button>
          {open && (
            <ul className="submenu">
              <li><Link to="/groups/list">Grupos</Link></li>
              <li><Link to="/groups/add">Servicios</Link></li>
              <li><Link to="/groups/add">Tipo de ETL</Link></li>
              <li><Link to="/groups/add">Tipo de prestamos</Link></li>
              <li><Link to="/groups/add">Tipo de productos</Link></li>
            </ul>
          )}
        </li>
        <hr className="m-2" style={{color: "#7599ca"}}/>
        <li><h6 className="mt-2" style={{fontSize:"13px", fontWeight: "bold", color: "#babfc9", margin: "0px", paddingLeft: "11px"}}>Extra</h6></li>
        <li><Link to="/"><FontAwesomeIcon className="pe-3" icon={faPowerOff}/> Cerrar Sesión</Link></li>
      </ul>
    </aside>
  );
};

export default SidebarComponent;
