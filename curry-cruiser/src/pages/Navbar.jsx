// This is the top of the page NAVBAR
// It must display the name of the food truck: Curry Cruiser
// It must have links to the Home, About, Menu, Shop and Contact pages
// use styled components to style the page

import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 10vh;
    width: 100vw;
    background-color: #fff;
    padding: 0 2rem;
    position: fixed;
    z-index: 1;
`;



const Logo = styled.h1`
    font-size: 2rem;
    color: #000;
    text-align: center;
`;

const Links = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 50vw;
    margin: 0 2rem;
`;

const LinkItem = styled(Link)`
    font-size: 1.5rem;
    color: #000;
    text-align: center;
    text-decoration: none;
    margin: 0 1rem;
`;

const Navbar = () => {

    return (
        <Container>
            <LinkItem to="/">
            <Logo>Curry Cruiser</Logo></LinkItem>
            <Links>
                <LinkItem to="/">Home</LinkItem>
                <LinkItem to="/about">About</LinkItem>
                <LinkItem to="/menu">Menu</LinkItem>
                <LinkItem to="/shop">Shop</LinkItem>
                <LinkItem to="/contact">Contact</LinkItem>
            </Links>
        </Container>
    )
}

export default Navbar;
