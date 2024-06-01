import React from 'react'
import logo from "../../../logo.png";
import {Link} from "react-router-dom";
import { IoMdSearch } from "react-icons/io";

const Header = () => {
  return (
    <nav className="navBar">
    
    <img src={logo} alt="" />
    <div className="linkss">
        <Link to="/shows">TV Shows</Link>
        <Link to="/movies">Movies</Link>
        <Link to="/recent">Recently Addeed</Link>
        <Link to="/list">My List</Link>
    </div>

    <IoMdSearch/>
    </nav>
  );
};

export default Header;