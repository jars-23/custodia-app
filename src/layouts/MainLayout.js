import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/SidebarComponent"; 
import "../assets/css/layouts/MainLayout.css";

const MainLayout = () => {
  return (
    <div className="layout-container">
      <Sidebar /> {/* Menú lateral fijo */}
      <main className="layout-content">
        <Outlet /> {/* Aquí se renderizan las páginas */}
      </main>
    </div>
  );
};

export default MainLayout;