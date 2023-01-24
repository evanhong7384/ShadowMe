import React from "react";
import { Link } from "@reach/router";

import "./NavBar.css";

/**
 * The navigation bar at the top of all pages. Takes no props.
 */
const NavBar = (props) => {
  return (
    <>
    <nav className="NavBar-container">
      <div className="NavBar-title u-inlineBlock">ShadowMe</div>
      <div className="NavBar-linkContainer u-inlineBlock">
      <Link to="/" className="NavBar-link">
        Home
      </Link>
      <Link to="/search" className="NavBar-link">
        Search
      </Link>
      <Link to="/messages" className="NavBar-link">
        Messages
      </Link>
      <Link to="/profile_edit" className="NavBar-link">
        Profile
      </Link>
      </div>
    </nav>
    </>
  );
};

export default NavBar;
