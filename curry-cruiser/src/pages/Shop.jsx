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

import React, { useState } from "react";
import styled from "styled-components";
import { Map, GoogleApiWrapper } from "google-maps-react";
import background from "../assets/background4.jpg";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 10vh;
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
  flex: 1;
  background-color: red;
  color: #fff;
  display: flex;
`;

const MapAndScheduleContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  //   align-items: center;
  width: 100vw;
`;

const ScheduleContainer = styled.div`
  height: 100vh;
  flex: 1;
  width: 50vw;
  background: url(${background});
    background-size: cover;
    background-position: center;

  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ScheduleItem = styled.div`
  font-size: 2rem;
  color: #fff;
  text-align: center;
  margin: 1rem;
  cursor: pointer;

  &:hover {
    color: #000;
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
  height: "100vh",
  width: "50%",
};

const defaultCenter = {
  lat: 37.774929,
  lng: -122.419416,
};

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
      name: "Event1",
      lat: 37.774929,
      lng: -122.419416,
    },
    {
      name: "Event2",
      lat: 42.774929,
      lng: -100.419416,
    },
    {
      name: "Event3",
      lat: 16.774929,
      lng: -189.419416,
    },
    {
      name: "Event4",
      lat: 40.774929,
      lng: -140.419416,
    },
    {
      name: "Event5",
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

  return (
    <Container>
      <MapAndScheduleContainer>
        <MapContainer>
          <Map
            google={google}
            zoom={14}
            style={mapStyles}
            initialCenter={currentLocation}
            center={selectedLocation || currentLocation}
          />
        </MapContainer>
        <ScheduleContainer>
            <ScheduleItem>
                Current Location : 2354 Mission St, San Francisco, CA 94110
            </ScheduleItem>
          <ScheduleItemContainer>
            {upcomingLocations.map((item) => (
              <ScheduleItem onClick={() => onSelect(item)}>
                {item.name}
              </ScheduleItem>
            ))}
          </ScheduleItemContainer>
        </ScheduleContainer>
      </MapAndScheduleContainer>
    </Container>
  );
};

export default GoogleApiWrapper({
  apiKey: "AIzaSyDD8PaeczYvDLgoV_PX6od7FlDqpVAOzrg",
})(Shop);
