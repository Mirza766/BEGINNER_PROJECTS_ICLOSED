import React from "react";
import { NavLink,Link } from "react-router-dom";
function Header(){
    return(
<nav>
      <Link to='/'>Add Experience</Link>
      {"               |               "}
      <Link to='/experience'>View Experience</Link>
    </nav>
    )
}

export default Header