import React from "react";
import { Search, Notifications, ArrowDropDown } from "@mui/icons-material";
import "./Navbar.css";

const Navbar = () => {
  return (
    <header>
      <div className="navbar">
        <div className="container">
          <div className="left">
            <img
              src="https://tec.utpl.edu.ec/themes/tec/images/logo.png"
              alt="logo"
            />
            <span className="active">Inicio</span>
            <span>Series</span>
            <span>Películas</span>
            <span>Popular</span>
            <span>Mi lista</span>
          </div>
          <div className="right">
            <Search className="icon" />
            <span>ABC</span>
            <Notifications className="icon" />
            <img
              src="https://images.unsplash.com/photo-1491349174775-aaafddd81942?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
            <div className="profile">
              <ArrowDropDown className="icon" />
              <div className="options">
                <span>Opciones</span>
                <span>Cerrar Sesión</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
