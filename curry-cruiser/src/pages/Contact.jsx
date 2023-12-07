// This is the contact section of the website
// It must display the contact information for the food truck
// Contact section: 
// Contact form for inquiries and feedback
// Social media links
// use styled components to style the page

import React from "react";
import styled from "styled-components";
import background1 from "../assets/background5.jpg";

const Container = styled.div`
padding-top: 11vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    // height: 100vh;
    width: 100vw;
    background-color: #fff;
    background-image: url(${background1});
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    padding-bottom: 5vh;

`;

const Title = styled.h1`
    font-size: 5rem;
    color: #b50707;
    text-align: center;
`;

const ContactContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    //   align-items: center;
    width: 100vw;

    @media (max-width: 768px) {
        flex-direction: column;
    }

`;

const ContactFormContainer = styled.div`
    height: 100vh;
    flex: 1;    
    width: 50vw;
    // background-color: blue;
    color: #b50707;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media (max-width: 768px) {
        width: 100vw;
    }

`;

const ContactForm = styled.form`
    display: flex;
    flex-direction: column;

    input {
        margin: 1rem;
        padding: 1rem;
        font-size: 2rem;
        font-family: 'Maven Pro', sans-serif;
        border: 2px solid #b50707;
        background: transparent;
        border-radius: 15px;

        ::placeholder {
            color: white;
            
        }

        @media (max-width: 768px) {
            height: 5vh;
            width: 80vw;
        }
    }

    textarea {
        margin: 1rem;
        padding: 1rem;
        font-family: 'Maven Pro', sans-serif;
        font-size: 2rem;
        border: 2px solid #b50707;
        border-radius: 15px;
        background: transparent;

        ::placeholder {
            color: white;
            opacity: 0.8;
        }

        @media (max-width: 768px) {
            height: 20vh;
            width: 80vw;
        }
    }

    button {
        margin: 1rem;
        padding: 1rem;
        font-size: 2rem;
        opacity: 0.8;
        color: #b50707;
        background-color: #fff;
        border: 2px solid #b50707;
        border-radius: 15px;
        cursor: pointer;
    }

    button:hover {
        background-color: #b50707;
        color: #fff;
    }
`;

const ContactInfoContainer = styled.div`

    // height: 100vh;
    margin-top: 5rem;
    flex: 1;
    width: 50vw;
    // background-color: red;
    // color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media (max-width: 768px) {
        width: 100vw;
    }
`;

const ContactInfo = styled.div`
    font-size: 1.5rem;
    color: white;
    text-align: center;
    text-transform: uppercase;
    margin: 1rem;
    cursor: pointer;
    border-radius: 15px;
        padding: 1rem;
        color: #b50707;

    &:hover {
        background-color: #000;
        border-radius: 15px;
        padding: 1rem;
        color: #b50707;
        font-weight: bold;
        opacity: 0.8;
    }

    @media (max-width: 768px) {
        border-radius: 15px;
    }
`;

const SmallTitle = styled.h1`
    font-size: 3rem;
    color: #b50707;
    font-weight: 500;
    text-align: center;
    // margin-top: -2rem;
`;


const Contact = () => {

    return (
        <Container>
            {/* <Title>Contact</Title> */}
            <ContactContainer>
                <ContactFormContainer>
                    <SmallTitle>Talk to us!</SmallTitle>
                    <ContactForm>
                        <input type="text" placeholder="Name" />
                        <input type="email" placeholder="Email" />
                        <textarea placeholder="Message" />
                        <button>Submit</button>
                    </ContactForm>
                </ContactFormContainer>
                <ContactInfoContainer>
                    <SmallTitle>Contact Info</SmallTitle>
                    <ContactInfo>Phone: 123-456-7890</ContactInfo>
                    <ContactInfo>Email: john.doe@gmail.communities</ContactInfo>
                    <ContactInfo>Address: 1312 Winter Walk Cr, Morrisville</ContactInfo>
                </ContactInfoContainer>
            </ContactContainer>
        </Container>
    );
};


export default Contact;
