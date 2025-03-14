import React from "react";
import "../assets/css/pages/DashboardPage.css";

const DashboardPage = () => {

    return (
        <div className="dashboard">
          <h1>Bienvenido al Módulo de Custodia</h1>
          <div className="cards">
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
          </div>
        </div>
      );

};

export default DashboardPage;