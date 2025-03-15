import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/SidebarComponent"; 
import "../assets/css/layouts/MainLayout.css";

const MainLayout = () => {
  return (
    <div className="layout-container">
      <Sidebar /> 
      <main className="layout-content">
        <div className="viewcontainer p-5">
          <Outlet /> 
        </div>
      </main>
    </div>
  );
};

export default MainLayout;