import React from "react";
import { NavLink } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <>
      <nav>
        <div className="nav-wrapper ">
          <NavLink to="/" className="brand-logo ">
            jobshop.it
          </NavLink>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <a href="/">Offers</a>
            </li>
            <li>
              <a href="/">Brands</a>
            </li>
            <li>
              <NavLink to="/signin">Sign in</NavLink>
            </li>
            <li>
              <NavLink to="/signup">Sign up</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
