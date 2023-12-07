// This is the Menu section of the website
// It must display all the menu items for this food truck
// It must display the menu items in a grid
// It must display menu item and price
// When the user hover over the menu item, it must display the description of the menu item
// use styled components to style the page

import React from "react";
import styled from "styled-components";
import background1 from "../assets/background3.jpg";

const Container = styled.div`
// padding-top: 10vh;
padding-top: 10vh;
    background-image: url(${background1});
    background-size: cover;
    background-position: center;
    width:100vw;
    min-height: 100vh;
    background-attachment: fixed;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

`;

const Title = styled.h1`

    font-size: 5rem;
    color: #b50707;
    text-align: center;
`;

const MenuContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 4px solid #fff;
    border-radius: 15px;
    width: 80vw;
    margin: 2rem 0;

    @media (max-width: 768px) {
        width: 90vw;
        
    }
`;

const MenuTitle = styled.h1`
    font-size: 3rem;
    text-transform: uppercase;
    font-weight: 500;
    color: #b50707;
    text-align: center;

    @media (max-width: 768px) {
        font-size: 2rem;
    }

`;

const ItemTitle = styled.h2`
    font-size: 2rem;
    font-weight: 500;
    color: #b50707;
    text-align: left;

    @media (max-width: 768px) {
        font-size: 1.5rem;
    }

`;

const ItemPrice = styled.h2`
    font-size: 2rem;
    color: #000;
    text-align: center;

    @media (max-width: 768px) {
        font-size: 1.5rem;
    }

    
`;

const ItemDescription = styled.h2`
    font-size: 1.5rem;
    color: white;
    font-weight: 500;
    text-align: center;
    padding-left: 1.8rem;
    padding-right: 1.8rem;
    display: none;

    @media (max-width: 768px) {
        font-size: 0.8rem;

    }

`;

const ItemTitleAndPriceFlex = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 70vw;
    align-items: center;
    margin: 1rem 0;
`;


// when the user hovers over the menu item, it must display the description of the menu item
const ItemContainer = styled.div`
    display: flex;

    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 1rem 0;

    &:hover {
        // background-color: #fff;
        // color: #000;
        // cursor: pointer;
    }

    &:hover ${ItemDescription} {
        display: block;
    }

    @media (max-width: 768px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin: 1rem 0;
    }

    
`;


const Menu = () => {

    const menuItems = [
        {
            title: "Chicken Tikka Masala",
            price: "$10",
            description: "Chicken marinated in yogurt and spices, then grilled in the tandoor. Served in a creamy tomato sauce."
        },
        {
            title: "Chicken Curry",
            price: "$10",
            description: "Chicken marinated in yogurt and spices, then grilled in the tandoor. Served in a creamy tomato sauce."
        },
        {
            title: "Chicken Tikka Masala",
            price: "$10",
            description: "Chicken marinated in yogurt and spices, then grilled in the tandoor. Served in a creamy tomato sauce."
        },
        {
            title: "Chicken Curry",
            price: "$10",
            description: "Chicken marinated in yogurt and spices, then grilled in the tandoor. Served in a creamy tomato sauce."
        },
        {
            title: "Chicken Tikka Masala",
            price: "$10",
            description: "Chicken marinated in yogurt and spices, then grilled in the tandoor. Served in a creamy tomato sauce."
        }
    ];

    return (
        <Container>
            {/* <Title>Curry Cruiser</Title> */}
            <MenuContainer>
                <MenuTitle>Menu</MenuTitle>
                {menuItems.map((item, index) => {
                    return (
                        <ItemContainer key={index}>
                            <ItemTitleAndPriceFlex><ItemTitle>{item.title}</ItemTitle><ItemPrice>{item.price}</ItemPrice></ItemTitleAndPriceFlex>
                            <ItemDescription>{item.description}</ItemDescription>
                        </ItemContainer>
                    );
                }
                )}
            </MenuContainer>
        </Container>
    );
};


export default Menu;
