import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import "./navbar.css";
import nav from "../../img/navbar/nav.png";
import { FaSearch } from "react-icons/fa";
import { useHistory } from "react-router-dom";

// styling the navlinks
const NavLink = styled(Link)`  
  color: #b71234;
  text-decoration: none;
  padding: 0 30px 0 20px;
`;
const Nav = styled.nav`
  padding: 0 20px;
  height: 70px;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  line-height: 30px;
  align-items: center;
`;

// anchoring the logo onto a specific spot
const Logo = styled.div`
  padding-left: 170px;
  width: 150px;
`;

const Menu = styled.ul`
  list-style: none;
  display: flex;
  height: 100%;
  padding-bottom: 5px;
  li:nth-child(3) {
    margin: 0px 40px;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

// Routing to home page 

const Navbar = () => {
  const history = useHistory();

  const pushNav = () => {
    history.push("/");
    window.location.reload(false);
  };

// routing to property page (in or out?)
  const pushNav1 = () => {
    history.push("/property/16");
    window.location.reload(false);
  };

  return (
    <>
    {/* there are styles applied to whole navbar on navbar.css but it pulls stuff from syled.nav */}
      <Nav> 
      {/* Navbar logo - top left */}
        <Logo>
          <NavLink to={"/"} onClick={() => pushNav()}>
            <div>
              <img src={nav} alt="Logo" style={{ width: "120px" }} />
            </div>
          </NavLink>
        </Logo>
        {/* Menu Items */}
        <Menu>
          <div className="nav">
            <NavLink to={"/"} onClick={() => pushNav()}>
              <li>Management</li>
            </NavLink>

            <NavLink to={"/"} onClick={() => pushNav()}>
              <li>About Us</li>
            </NavLink>

            <NavLink to={"/property/16"} onClick={() => pushNav1()}>
              Property Search
            </NavLink>
            <NavLink to={"/"} onClick={() => pushNav()}>
              FAQ
            </NavLink>
            <NavLink to={"/"} onClick={() => pushNav()}>
              Contact Us
            </NavLink>
            {/* Search link, no function yet it just takes you to homepage */}
            <NavLink to={"/"} onClick={() => pushNav()}>
              <FaSearch />
            </NavLink>
          </div>
        </Menu>
      </Nav>
    </>
  );
};

export default Navbar;
