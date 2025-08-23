import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const LeafletMap = () => {
  const position = [8.890653, 38.809294]; // Addis Ababa City coordinates

  return (
    <MapContainer center={position} zoom={13} style={{ height: "400px", width: "100%" }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position}>
        <Popup>
         AASTU bLOCK-16<br />.
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default LeafletMap;
