// This is the shop section of the website

// Shop section:
// Map with pin showing current location of Curry Cruiser food truck
// Schedule of upcoming locations and events
// npm install --save @react-google-maps/api

// current location of the food truck
// 37.774929, -122.419416

// upcoming locations and events
// 37.774929, -122.419416
// 42.774929, -100.419416
// 16.774929, -189.419416
// 40.774929, -140.419416
// 12.774929, -200.419416

// use styled components to style the page

// import an open-source contruction icon
// npm install @iconify/react @iconify/icons-mdi
import constructionIcon from "@iconify/icons-mdi/construction";

import React, { useState } from "react";
import styled from "styled-components";
import { Map, GoogleApiWrapper } from "google-maps-react";
import background from "../assets/background4.jpg";

import { IoConstructOutline } from "react-icons/io5";

const UnderConstructionTitle = styled.h1`
  font-size: 3rem;
  color: #fff;
  text-align: center;
  width: 100%;
  height: 100%;
  font-weight: 400;
  padding:30px;
`;

const UnderConstructionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 10vh;
  min-height: 100vh;
  width: 100vw;
  background-color: #fff;
  opacity: 0.5;
`;

const Container = styled.div`
padding-top: 7vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  width: 100vw;
  background-color: #fff;
`;

const Title = styled.h1`
  font-size: 5rem;
  color: #000;
  text-align: center;
`;

const MapContainer = styled.div`
  height: 100vh;
  width: 50vw;
  align-items: center;
  justify-content: center;
  display: flex;
  padding-top: 30vh;
  flex: 1;
  background-color: #b50707;
  color: #fff;
  display: flex;

  @media (max-width: 768px) {
    width: 100vw;
  }
`;

const MapAndScheduleContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  //   align-items: center;
  width: 100vw;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const ScheduleContainer = styled.div`
  height: 100vh;
  flex: 1;

  padding:80px 0px;
  width: 50vw;
  background: url(${background});
    background-size: cover;
    background-position: center;

  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    width: 100vw;
  }
`;
const CurrentLocation = styled.div`
  font-size: 1.5rem;
  color: #b50707;
  font-weight: 400;
  text-align: center;
  margin: 0.85rem;
  text-transform: uppercase;
  cursor: pointer;

  &:hover {
    font-weight: 500;
    cursor: pointer;
  }
`;


const ScheduleItem = styled.div`
  font-size: 1.5rem;
  color: #b50707;
  text-align: center;
  margin: 1rem;
  cursor: pointer;

  &:hover {
    color: #b50707;
    font-weight: 500;
    cursor: pointer;
  }
`;

const ScheduleItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const mapStyles = {
  height: "100%",
  width: "100%",

};

const defaultCenter = {
  lat: 37.774929,
  lng: -122.419416,
};

const ScheduleDate = styled.div`
  font-size: 1.5rem;
  color: #fff;
  text-align: center;
  margin: 0.85rem;
  text-transform: uppercase;
  cursor: pointer;

  &:hover {
    font-weight: 500;
    cursor: pointer;
  }
`;




const Shop = () => {
  // the map with the current location of the food truck should be displayed to the right of the screen on a map
  // the schedule of upcoming locations and events should be displayed to the left of the screen
  // when the user clicks on an event, the map should update to show the location of the event and the event should be highlighted

  const [currentLocation, setCurrentLocation] = useState({
    lat: 37.774929,
    lng: -122.419416,
  });

  const [upcomingLocations, setUpcomingLocations] = useState([
    {
      name: "UNC Indian Night!",
      date: "March 28, 2023",
      lat: 37.774929,
      lng: -122.419416,
    },
    {
      name: "NC State Garba Party!",
      date: "March 31, 2023",
      lat: 42.774929,
      lng: -100.419416,
    },
    {
      name: "Duke Diwali Celebration!",
      date: "April 3rd, 2023",
      lat: 16.774929,
      lng: -189.419416,
    },
    {
      name: "Cary Holi Gala!",
      date: "April 8th, 2023",
      lat: 40.774929,
      lng: -140.419416,
    },
    {
      name: "Morrisville Main Stop.",
      date: "Every Day!",
      lat: 12.774929,
      lng: -200.419416,
    },
  ]);

  const [selectedLocation, setSelectedLocation] = useState(null);

  const onSelect = (item) => {
    setSelectedLocation(item);
    console.log(item);
  };

  const google = window.google;

  const Rower = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  `;

  const Columner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 30vh;
  
  `;


  return (
    <Container>
      <MapAndScheduleContainer>
        
        <ScheduleContainer>
            <CurrentLocation>
                Current Location : Raleigh St, Chapel Hill, NC 27514
            </CurrentLocation>
          <ScheduleItemContainer>
            {upcomingLocations.map((item) => (
              <Rower>
              <ScheduleItem onClick={() => onSelect(item)}>
                {item.name}
              </ScheduleItem>
              <ScheduleDate>{item.date}</ScheduleDate></Rower>
            ))}
          </ScheduleItemContainer>
        </ScheduleContainer>
        <MapContainer>
          {/* <Map
            google={google}
            zoom={14}
            style={mapStyles}
            initialCenter={currentLocation}
            center={selectedLocation || currentLocation}
          /> */}
          <Columner>
          <UnderConstructionTitle>
            We are building the map...
          </UnderConstructionTitle>
          <IoConstructOutline size={100} color="#fcbc5c" />
          </Columner>

        </MapContainer>
      </MapAndScheduleContainer>
    </Container>
  );
};

export default GoogleApiWrapper({
  apiKey: "AIzaSyDD8PaeczYvDLgoV_PX6od7FlDqpVAOzrg",
})(Shop);
