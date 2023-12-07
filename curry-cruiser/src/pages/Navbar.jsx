import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../assets/logo.png';

const NavWrapper = styled.nav`
  background-color: #fff;
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
    position: fixed;
`;

const NavLogo = styled(Link)`
  font-size: 2rem;
  font-weight: 700;
  color: #333;
  text-decoration: none;
`;

const NavList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0;
//   margin-top: -1rem;
  padding: 0;
  position: fixed;
  top: 4rem;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: #fff;
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
  transition: transform 0.3s ease-in-out;
`;

const NavItem = styled.li`
  margin: 1rem 0;
`;

const NavLogoImg = styled.img`
    width: 30%;
    // height: 10rem;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;

    @media (max-width: 1024px) {
        width: 40%;
    }

    @media (max-width: 768px) {
        width: 50%;
    }
`;

const NavLink = styled(Link)`
  font-size: 1.5rem;
  font-weight: 500;
  color: #333;
  text-decoration: none;
  transition: color 0.2s ease-in-out;

  &:hover {
    color: #777;
  }
`;


const Hamburger = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 2rem;
  height: 2rem;
  background-color: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  &:focus {
    outline: none;
  }

  span {
    width: 2rem;
    height: 0.25rem;
    background-color: #333;
    transition: all 0.2s ease-in-out;
    position: relative;
    transform-origin: 0.5px;

    &:first-child {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }

    &:nth-child(2) {
      opacity: ${({ open }) => open ? '0' : '1'};
      transform: ${({ open }) => open ? 'translateX(20px)' : 'translateX(0)'};
    }

    &:nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`;

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <NavWrapper>
        <NavLogo to="/">
            <NavLogoImg src={logo} alt="logo" />
        </NavLogo>
      <Hamburger open={open} onClick={() => setOpen(!open)}>
        <span></span>
        <span></span>
        <span></span>
      </Hamburger>
      <NavList open={open}>
        <NavItem>
          <NavLink to="/" onClick={() => setOpen(false)}>Home</NavLink>
        </NavItem>
        <NavItem>
            <NavLink to="/about" onClick={() => setOpen(false)}>About</NavLink>
        </NavItem>
        <NavItem>
            <NavLink to="/menu" onClick={() => setOpen(false)}>Menu</NavLink>
        </NavItem>
        <NavItem>
            <NavLink to="/shop" onClick={() => setOpen(false)}>Truck</NavLink>
        </NavItem>
        <NavItem>
            <NavLink to="/contact" onClick={() => setOpen(false)}>Contact</NavLink>
        </NavItem>
        </NavList>
    </NavWrapper>
    );
};

export default Navbar;
