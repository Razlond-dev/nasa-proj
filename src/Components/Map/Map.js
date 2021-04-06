import React, { useEffect, useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";

function ChangeView(center, zoom) {
  const map = useMap()
  map.panTo(center.center);
  return null
  }

export default function Map({ center, zoom }) {  

  return (
    <MapContainer
      center={center}
      zoom={2}
      scrollWheelZoom={true}
    >
      <ChangeView center={center} zoom={zoom} /> 
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={center}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
}
