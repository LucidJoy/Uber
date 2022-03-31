import React, { useEffect, useState } from "react";
import tw from "tailwind-styled-components";

import Map from "./components/Map";

const Confirm = () => {
  const [pickupCoordinates, setPickupCoordinates] = useState();
  const [dropoffCoordinates, setDropoffCoordinates] = useState();

  const getPickupCoordinates = () => {
    const pickup = "Santa Monica";

    fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${pickup}.json?` +
        new URLSearchParams({
          access_token:
            "pk.eyJ1IjoibHVjaWRqb3kiLCJhIjoiY2wxY2VvZjFoMDZ4cDNranBocnZ3eTk5MiJ9.9I40XH_HPbhN4tHCDryq4g",
          limit: 1,
        })
    )
      .then((res) => res.json())
      .then((data) => {
        // PICKUP COORDINATES
        setPickupCoordinates(data.features[0].center);
      });
  };

  const getDropoffCoordinates = () => {
    const dropoff = "Los Angeles";

    fetch(
      `https://api.mapbox.com/geocoding/v5/mapbox.places/${dropoff}.json?` +
        new URLSearchParams({
          access_token:
            "pk.eyJ1IjoibHVjaWRqb3kiLCJhIjoiY2wxY2VvZjFoMDZ4cDNranBocnZ3eTk5MiJ9.9I40XH_HPbhN4tHCDryq4g",
          limit: 1,
        })
    )
      .then((res) => res.json())
      .then((data) => {
        // DROPOFF COORDINATES
        setDropoffCoordinates(data.features[0].center);
      });
  };

  useEffect(() => {
    getPickupCoordinates();
    getDropoffCoordinates();
  }, []);

  return (
    <Wrapper>
      <Map
        pickupCoordinates={pickupCoordinates}
        dropoffCoordinates={dropoffCoordinates}
      />

      <RideContainer>
        {pickupCoordinates}
        {dropoffCoordinates}
      </RideContainer>
    </Wrapper>
  );
};

export default Confirm;

const Wrapper = tw.div`
  h-screen flex flex-col
`;

const RideContainer = tw.div`
  flex-1
`;
