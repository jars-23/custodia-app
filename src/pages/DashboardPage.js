import React, { useState } from "react";
import { faBoxesPacking, faHandshake, faCartFlatbed} from "@fortawesome/free-solid-svg-icons";
import "../assets/css/pages/DashboardPage.css";
import CardComponent from "../components/CardComponent.js";
import TitleComponent from "../components/TitleComponent.js";

const DashboardPage = () => {

  const [TS, setTS] = useState("68"); 
  const [PR, setPR] = useState("36"); 
  const [DR, setDR] = useState("32"); 

  return (
    <div id="dashboard">

      {/* Titulo de la vista */}
      <div className="row d-flex justify-content-center">

        <TitleComponent title={"Mi panel"} subtitle={"Bienvenido al módulo de custodia, actualmente tienes asociado(s):"}></TitleComponent>
        <CardComponent icon={faHandshake} number={PR} text={"Préstamos realizados"} classcard={"yellow--modify"} classicon={"yellow"}></CardComponent>
        <CardComponent icon={faCartFlatbed} number={DR} text={"Devoluciones realizadas"} classcard={"red--modify"} classicon={"red"}></CardComponent>
        <CardComponent icon={faBoxesPacking} number={TS} text={"Solicitudes totales"} classcard={"green--modify"} classicon={"green"}></CardComponent>

      </div>
    </div>
  );

};

export default DashboardPage;