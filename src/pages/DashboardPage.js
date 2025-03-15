import React, { useState } from "react";
import { faBoxesPacking, faHandshake, faCartFlatbed} from "@fortawesome/free-solid-svg-icons";
import "../assets/css/pages/DashboardPage.css";
import CardComponent from "../components/CardComponent.js";

const DashboardPage = () => {

  const [TS, setTS] = useState("68"); 
  const [PR, setPR] = useState("36"); 
  const [DR, setDR] = useState("32"); 

  return (
    <div className="dashboard">

      {/* Titulo de la vista */}
      <div className="row d-flex justify-content-center">
        <div className="col-md-12">
          <label className="primaryTitle">Mi panel</label>
        </div>
        <div className="col-md-12 mb-3">
          <label className="secondTitle">Bienvenido al módulo de custodia, tienes asociados los siguientes procesos:</label>
        </div>

        <CardComponent icon={faBoxesPacking} number={TS} text={"Total de solicitudes"} classcard={"green--modify"} classicon={"green"}></CardComponent>
        <CardComponent icon={faHandshake} number={PR} text={"Préstamos realizados"} classcard={"yellow--modify"} classicon={"yellow"}></CardComponent>
        <CardComponent icon={faCartFlatbed} number={DR} text={"Devoluciones realizadas"} classcard={"red--modify"} classicon={"red"}></CardComponent>

      </div>

      
      
      {/* <div className="cards">
        <div className="card green">
          <h2>65</h2>
          <p>Total de Solicitudes</p>
        </div>
        <div className="card yellow">
          <h2>35</h2>
          <p>Préstamos</p>
        </div>
        <div className="card red">
          <h2>30</h2>
          <p>Devoluciones</p>
        </div>
      </div> */}
    </div>
  );

};

export default DashboardPage;