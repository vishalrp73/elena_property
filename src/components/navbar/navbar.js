import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import "./navbar.css";
import nav from "../../img/navbar/nav.png";
import { FaSearch } from 'react-icons/fa';
import FormDialog from './dialog';


const NavLink = styled(Link)`
  color: #b71234;
  text-decoration: none;
  padding: 0 30px 0 20px;
`;
const Nav = styled.nav`
  padding: 0 20px;
  height: 60px;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  padding-left: 170px;
  width: 50px;
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


const Navbar = () => {
  return (
    <>
      <Nav>
        <Logo>
          <div>
            <img src={nav} alt="Logo" style={{width: "100px"}} />
          </div>
        </Logo>
        <Menu>
          <div className="nav">
            <NavLink to={"/"}>
              <li>Management</li>
            </NavLink>

            <NavLink to={"/"}>
              <li>About Us</li>
            </NavLink>

            <NavLink to={"/"}>Property Search</NavLink>
            <NavLink to={"/"}>FAQ</NavLink>
            <NavLink to={"/"}>Contact Us</NavLink>
            <NavLink to={"/"}><FaSearch/></NavLink>
            <NavLink to={"/"}><FormDialog /></NavLink>
          </div>
        </Menu>
      </Nav>
    </>
  );
};

export default Navbar;
