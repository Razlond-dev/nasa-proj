import { useEffect, useState } from "react";
import "./App.css";
import Loader from "./Components/Loader/Loader";
import SateliteImage from "./Components/SateliteImage/SateliteImage";
import SearchForm from "./Components/SearchForm/SearchForm";

const API_KEY = "DkyWGNI9D3U4VeX35dskyAmLMuyuqZjWAHwxqiIo";
// const url =
//   "https://api.nasa.gov/planetary/earth/assets?lon=-95.33&lat=29.78&date=2018-01-01&&dim=0.10&api_key=";
const url =
  "https://api.nasa.gov/planetary/earth/assets?lon=";

function App() {
  const [imageUrl, setImageUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [params, setParams] = useState({})

  const fetchData = async () => {
    console.log(params);
    setLoading(true);
    try {
      const response = await fetch(`${url}${params[0].toFixed(2)}&lat=${params[1].toFixed(2)}&dim=0.025&api_key=${API_KEY}`);
      const data = await response.json();
      setImageUrl(data.url);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
  console.log(loading);
  useEffect(() => {
    fetchData();
  }, [params]);

  return (
    <div className="container d-flex">
      {loading ? <Loader /> : <SateliteImage src={imageUrl} />}
      <SearchForm setData={params => setParams(params)} />
    </div>
  );
}

export default App;
