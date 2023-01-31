import React from "react";
import "../../app/App.css"


export default function MainNav(){
  return(
    <div className=" navigationbar" >
      <nav className="navbar bg-dark" style={{backgoundColor: "#e3f2fd"}}>
        <div className="container-fluid">
          <a href="#home" style={{color: "white"}} className="navbar-brand">Bot-Army</a>
          <form role="search" className="d-flex">
            <input type="search" className="form-control me-2" placeholder="Search..." aria-label="Search"/>
            <button className=" btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>

      </nav>
    </div>
  )}