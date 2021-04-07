import React from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import { useGlobalContext } from "../../context";

function ChangeView(center) {
  const map = useMap()
  map.panTo(center.center);
  return null
  }

export default function Map() {  

  const { coords } = useGlobalContext()

  let coordsObj = {
    lon: coords[0],
    lat: coords[1]
  }

  return (
    <MapContainer
      center={coordsObj}
      zoom={2}
      scrollWheelZoom={true}
    >
      <ChangeView center={coordsObj} /> 
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={coordsObj}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
}
