// This is the footer of the application

import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
    background-color: #fff;
    // color: #000;
    padding-top: 3rem;
    padding-bottom: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    opacity: 0.85;  
    `;


const Footer = () => {
    return (
        <FooterContainer>
        <span style={{ color: '#000', textAlign: 'center', fontSize: '1.125rem' }}>
            <p>
            &copy; {new Date().getFullYear()} Curry Cruiser | All rights reserved |
            Terms Of Service | Privacy
            </p>
        </span>
        </FooterContainer>
    );
    }

export default Footer;