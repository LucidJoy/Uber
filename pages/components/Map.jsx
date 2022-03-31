import React, { useEffect } from "react";
import tw from "tailwind-styled-components";
import mapboxgl from "!mapbox-gl";

mapboxgl.accessToken =
  "pk.eyJ1IjoibHVjaWRqb3kiLCJhIjoiY2wxY2VvZjFoMDZ4cDNranBocnZ3eTk5MiJ9.9I40XH_HPbhN4tHCDryq4g";

const Map = (props) => {
  console.log(props);

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph",
      center: [-99.29011, 39.39172],
      zoom: 3,
    });

    if (props.pickupCoordinates) {
      addToMap(map, props.pickupCoordinates);
    }

    if (props.dropoffCoordinates) {
      addToMap(map, props.dropoffCoordinates);
    }

    if (props.pickupCoordinates && props.dropoffCoordinates) {
      map.fitBounds([props.dropoffCoordinates, props.pickupCoordinates], {
        padding: 100,
      });
    }
  });

  const addToMap = (map, coordinates) => {
    new mapboxgl.Marker({ color: "black" }).setLngLat(coordinates).addTo(map);
  };

  return <Wrapper id="map">Map</Wrapper>;
};

export default Map;

const Wrapper = tw.div`
  flex flex-col flex-1
`;
