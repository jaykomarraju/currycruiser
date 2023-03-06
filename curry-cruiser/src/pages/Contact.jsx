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
padding-top: 10vh;
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

`;

const Title = styled.h1`
    font-size: 5rem;
    color: #000;
    text-align: center;
`;

const ContactContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    //   align-items: center;
    width: 100vw;
`;

const ContactFormContainer = styled.div`
    height: 100vh;
    flex: 1;    
    width: 50vw;
    // background-color: blue;
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const ContactForm = styled.form`
    display: flex;
    flex-direction: column;

    input {
        margin: 1rem;
        padding: 1rem;
        font-size: 2rem;
        border: 2px solid #000;
        border-radius: 15px;
    }

    textarea {
        margin: 1rem;
        padding: 1rem;

        font-size: 2rem;
        border: 2px solid #000;
        border-radius: 15px;
    }

    button {
        margin: 1rem;
        padding: 1rem;
        font-size: 2rem;
        border: 2px solid #000;
        border-radius: 15px;
        cursor: pointer;
    }

    button:hover {
        background-color: #000;
        color: #fff;
    }
`;

const ContactInfoContainer = styled.div`

    height: 100vh;
    flex: 1;
    width: 50vw;
    // background-color: red;
    // color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const ContactInfo = styled.div`
    font-size: 2rem;
    color: white;
    text-align: center;
    margin: 1rem;
    cursor: pointer;
    border-radius: 15px;
        padding: 1rem;
        color: #fff;

    &:hover {
        background-color: #000;
        border-radius: 15px;
        padding: 1rem;
        color: #fff;
    }
`;

const Contact = () => {

    return (
        <Container>
            {/* <Title>Contact</Title> */}
            <ContactContainer>
                <ContactFormContainer>
                    <ContactForm>
                        <input type="text" placeholder="Name" />
                        <input type="email" placeholder="Email" />
                        <textarea placeholder="Message" />
                        <button>Submit</button>
                    </ContactForm>
                </ContactFormContainer>
                <ContactInfoContainer>
                    <ContactInfo>Phone: 123-456-7890</ContactInfo>
                    <ContactInfo>Email: john.doe@gmail.communities</ContactInfo>
                    <ContactInfo>Address: 123 Main St, New York, NY 10001</ContactInfo>
                </ContactInfoContainer>
            </ContactContainer>
        </Container>
    );
};


export default Contact;
