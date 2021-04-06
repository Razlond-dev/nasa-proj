import { useEffect, useState } from "react";
import "./App.css";
import Loader from "./Loader/Loader";
import SateliteImage from "./SateliteImage/SateliteImage";

const API_KEY = "DkyWGNI9D3U4VeX35dskyAmLMuyuqZjWAHwxqiIo";
const url =
  "https://api.nasa.gov/planetary/earth/assets?lon=-95.33&lat=29.78&date=2018-01-01&&dim=0.10&api_key=";

function App() {
  const [imageUrl, setImageUrl] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${url}${API_KEY}`);
      const data = await response.json();
      setImageUrl(data.url);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container">
      {loading ? <Loader /> : <SateliteImage src={imageUrl} />}
    </div>
  );
}

export default App;
