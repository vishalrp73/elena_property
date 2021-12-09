import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import "./navbar.css";
import nav from "../../img/navbar/nav.png";
import { FaSearch } from 'react-icons/fa';
import { useHistory } from 'react-router-dom';


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

  const history = useHistory();

  const pushNav = () => {
    history.push('/');
    window.location.reload(false);
  }

  return (
    <>
      <Nav>
        <Logo>
          <NavLink to={"/"} onClick = {() => pushNav()}>
            <div>
              <img src={nav} alt="Logo" style={{width: "100px"}} />
            </div>
          </NavLink>
        </Logo>
        <Menu>
          <div className="nav">
            <NavLink to={"/"} onClick = {() => pushNav()}>
              <li>Management</li>
            </NavLink>

            <NavLink to={"/"} onClick = {() => pushNav()}>
              <li>About Us</li>
            </NavLink>

            <NavLink to={"/"} onClick = {() => pushNav()}>Property Search</NavLink>
            <NavLink to={"/"} onClick = {() => pushNav()}>FAQ</NavLink>
            <NavLink to={"/"} onClick = {() => pushNav()}>Contact Us</NavLink>
            <NavLink to={"/"} onClick = {() => pushNav()}><FaSearch/></NavLink>
          </div>
        </Menu>
      </Nav>
    </>
  );
};

export default Navbar;
