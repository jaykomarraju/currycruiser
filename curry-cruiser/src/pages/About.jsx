// This is the about section of the website
// It's background is in ../assets/background2.jpg
// The about descriptions is as follows:
// Curry Cruiser is an Indian Cuisine Food Truck that uses fresh, locally sourced ingredients to serve authentic Indian dishes. We carefully select the best quality produce and meats from local suppliers to ensure the highest quality and flavor of our food while supporting local communities and promoting sustainability. Our chefs use traditional Indian spices and cooking techniques to create a diverse menu of flavorful and healthy dishes suitable for vegetarians, vegans, and meat lovers. Come aboard the Curry Cruiser to experience the true taste of India!
// use styled components to style the page
// Also include a description of each team members
// Include a picture of each team member found in
// ../assets/team1.png - Name: John Doe - Role: CEO
// , ../assets/team2.png - Name: Jane Doe - Role: CFO
// , ../assets/team3.png - Name: John Smith - Role: CTO

import React from "react";
import styled from "styled-components";
import background2 from "../assets/background2.jpg";
import team1 from "../assets/team1.png";
import team2 from "../assets/team2.png";
import team3 from "../assets/team3.png";

const Container = styled.div`
  padding-top: 11vh;
  background-image: url(${background2});
  background-size: cover;
  background-position: center;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 4rem;
  padding-top: 20px;
  text-transform: uppercase;
  color: #b50707;
  font-weight: 500;
  text-align: center;
`;

const AboutDescription = styled.h2`
  font-size: 2rem;
  font-weight: 400;
  color: #b50707;
  padding-left: 80px;
  padding-right: 80px;
  text-align: center;

    @media (max-width: 768px) {
    font-size: 1.5rem;
    padding-left: 35px;
    padding-right: 35px;
    }

`;

const TeamMemberName = styled.h2`
  font-size: 2rem;
  color: #fff;
  text-align: center;

    @media (max-width: 768px) {
    font-size: 1.5rem;
    }
`;

const TeamMemberRole = styled.h2`
  font-size: 2rem;
  color: #b50707;
  text-align: center;

    @media (max-width: 768px) {
    font-size: 1.5rem;
    }

`;

const TeamMemberImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  margin: 10px;
`;

const TeamMemberCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const TeamMemberContainer = styled.div`
  display: flex;
  flex-direction: grid;
  justify-content: center;
  align-items: center;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 50px;

    @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    }
`;

const About = () => {
  return (
    <Container>
      <Title>About Us</Title>
      <AboutDescription>
        Curry Cruiser is an Indian Cuisine Food Truck that uses fresh, locally
        sourced ingredients to serve authentic Indian dishes. We carefully
        select the best quality produce and meats from local suppliers to ensure
        the highest quality and flavor of our food while supporting local
        communities and promoting sustainability. Our chefs use traditional
        Indian spices and cooking techniques to create a diverse menu of
        flavorful and healthy dishes suitable for vegetarians, vegans, and meat
        lovers. Come aboard the Curry Cruiser to experience the true taste of
        India!
      </AboutDescription>
      <Title>Team Members</Title>
      <TeamMemberContainer>
        <TeamMemberCard>
          <TeamMemberImage src={team1} />
          <TeamMemberName>John Doe</TeamMemberName>
          <TeamMemberRole>CEO</TeamMemberRole>
        </TeamMemberCard>
        <TeamMemberCard>
          <TeamMemberImage src={team2} />
          <TeamMemberName>Jane Doe</TeamMemberName>
          <TeamMemberRole>CFO</TeamMemberRole>
        </TeamMemberCard>
        <TeamMemberCard>
          <TeamMemberImage src={team3} />
          <TeamMemberName>John Smith</TeamMemberName>
          <TeamMemberRole>CTO</TeamMemberRole>
        </TeamMemberCard>
      </TeamMemberContainer>
    </Container>
  );
};

export default About;
