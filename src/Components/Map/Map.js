import React, { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const MapChart = ({ data }) => {
  return (
    <MapContainer
      center={[0, 0]}
      zoom={2}
      style={{ height: "400px"}}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {data.map((item) => (
        <Marker
          key={item.country}
          position={[item.countryInfo.lat, item.countryInfo.long]}
        >
          <Popup>
            {item.country}: <br />
            Cases: {item.cases}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default MapChart;
