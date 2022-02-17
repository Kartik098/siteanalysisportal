import React from "react";
import "./navbar.css"



function Navbar() {
    return (
        <>
            <div className="navbar">
               <ul>
               <li><a href="/">Home</a></li>
                <li><a href="/">Resiliency Calculator</a></li>
                <li><a href="/">EV System</a></li>
                <li><a href="/">How to</a></li>
               </ul>
            <div>
                <button className="myprofile">My profile</button>
            </div>
            </div>
        </>
    );
}

export default Navbar 