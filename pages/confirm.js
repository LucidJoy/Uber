import React, { useEffect, useState } from "react";
import tw from "tailwind-styled-components";
import { Router, useRouter } from "next/router";
import Link from "next/link";

import Map from "./components/Map";
import RideSelector from "./components/RideSelector";

const Confirm = () => {
  const router = useRouter();
  const { pickup, dropoff } = router.query;

  console.log(pickup, dropoff);

  const [pickupCoordinates, setPickupCoordinates] = useState();
  const [dropoffCoordinates, setDropoffCoordinates] = useState();

  const getPickupCoordinates = (pickup) => {
    // const pickup = "Santa Monica";

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

  const getDropoffCoordinates = (dropoff) => {
    // const dropoff = "Los Angeles";

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
    getPickupCoordinates(pickup);
    getDropoffCoordinates(dropoff);
  }, [pickup, dropoff]);

  return (
    <Wrapper>
      <Map
        pickupCoordinates={pickupCoordinates}
        dropoffCoordinates={dropoffCoordinates}
      />

      <RideContainer>
        <RideSelector />

        <ConfirmButtonContainer>
          <ConfirmButton>Confirm UberX</ConfirmButton>
        </ConfirmButtonContainer>
      </RideContainer>
    </Wrapper>
  );
};

export default Confirm;

const Wrapper = tw.div`
  h-screen flex flex-col
`;

const RideContainer = tw.div`
flex-1 flex flex-col h-1/2
`;

const ConfirmButtonContainer = tw.div`
  border-t-2
`;

const ConfirmButton = tw.div`
  bg-black text-white my-4 mx-4 py-4 text-center text-xl rounded-lg cursor-pointer
`;
