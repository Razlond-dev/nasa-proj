import React, { useEffect, useState } from "react";
import { useGlobalContext } from "../../context";
import Loader from "../Loader/Loader";
import "./SateliteImage.css";

const API_KEY = "DkyWGNI9D3U4VeX35dskyAmLMuyuqZjWAHwxqiIo";
// const url =
//   "https://api.nasa.gov/planetary/earth/assets?lon=-95.33&lat=29.78&date=2018-01-01&&dim=0.10&api_key=";
const url = "https://api.nasa.gov/planetary/earth/assets?lon=";

export default function SateliteImage() {
  const [loading, setLoading] = useState(true);
  const [src, setSrc] = useState("");

  const { coords } = useGlobalContext();

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `${url}${coords[0].toFixed(2)}&lat=${coords[1].toFixed(
          2
        )}&dim=0.1&api_key=${API_KEY}`
      );
      const data = await response.json();
      setSrc(data.url);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [coords]);

  return (
    <div className="satelite-container" style={{ position: "relative" }}>
      {loading ? <Loader /> : null}
        <img
          className="satelite-image"
          style={loading ? { display: 'none' } : {}}
          src={src}
          alt=''
          onLoad={() => setLoading(false)}
        />
    </div>
  );
}
