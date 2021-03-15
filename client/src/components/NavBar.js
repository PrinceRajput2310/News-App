import React from "react";
import {Link} from "react-router-dom";
import "../App.css";

export default function NavBar(){
          return (
              <>       
              <nav>

    <div className="nav-wrapper">
      <Link to="/" className="brand-logo">News App</Link>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><Link to ="/politics">Politics</Link></li>
        <li><Link to ="/sports">Sports</Link></li>
        <li><Link to ="/entertainment">Entertainment</Link></li>
      </ul>
    </div>
  </nav>

              </>
          )
}