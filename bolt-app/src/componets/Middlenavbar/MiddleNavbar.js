import React from "react";

export default function MiddleNav(){
    const backgroundColor = "#e3f2fd";


    return (
        <nav className="navbar" style={{ backgroundColor: backgroundColor }}>
            <p className="navbar-brand" >Here is a list of all bots </p>
            <p className="navbar-brand">click on a bot to display it on the army component</p>
        </nav>
    )
}