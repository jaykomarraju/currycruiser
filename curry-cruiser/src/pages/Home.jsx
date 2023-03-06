// This is the Curry Cruiser Home Page 
// It's background is in ../assets/background1.jpg
// The main text is the Title of the Food truck: Curry Cruiser
// The subtext is the tagline: "Authentic Indian fast food on the go"
// The button is the "Order Now" button
// use styled components to style the page

import React from 'react';
import styled from 'styled-components';
import background1 from '../assets/background1.jpg';

const Container = styled.div`
padding-top: 10vh;
    background-image: url(${background1});
    background-size: cover;
    background-position: center;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Title = styled.h1`
    font-size: 5rem;
    color: #fff;
    text-align: center;
`;

const Subtitle = styled.h2`
    font-size: 2rem;
    color: #fff;
    text-align: center;
`;

const Button = styled.button`
    font-size: 1.5rem;
    color: #fff;
    background-color: #000;
    border: none;
    padding: 1rem 2rem;
    border-radius: 5px;
    margin-top: 2rem;
    cursor: pointer;

    &:hover {
        background-color: #fff;
        color: #000;
        cursor: pointer;
    }
`;



const Home = () => {
    return (
        <Container>
            <Title>Curry Cruiser</Title>
            <Subtitle>Authentic Indian fast food on the go</Subtitle>
            <Button>Order Now</Button>
        </Container>

    );
    }

export default Home;