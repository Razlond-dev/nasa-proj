import React, { useEffect, useState } from "react";
import "./SearchForm.css";

const TOKEN =
  "pk.eyJ1IjoicmF6bG9uZCIsImEiOiJja242MjJzYzQwOXZyMnhxcWJsbGt3NWQ2In0.1-BS7yrw3i1Y8tJVcLz7Eg";
const url = "https://api.mapbox.com/geocoding/v5/mapbox.places/";

export default function SearchForm({setData}) {
  const [inputValue, setInputValue] = useState("");
  const [display, setDisplay] = useState(false);
  const [options, setOptions] = useState([]);

  
  const displayFeatures = (features) => {
    let feat = features.map((item, index) => {
      return (
        <div
        onClick={() => setData(item.geometry.coordinates)}
        className="option"
        key={index}
        tabIndex="0"
        >
          <span>{item.place_name}</span>
        </div>
      )
    })
    setDisplay(true)
    
    return feat
  }

  useEffect( async() => {
    setDisplay(false)
    try {
      const response = await fetch(
        `${url}${inputValue}.json?access_token=${TOKEN}`
      );
      const data = await response.json();
      const { features } = await data;
      
      setOptions(displayFeatures(features)) 

    } catch (error) {
      console.log(error);
    }
  }, [inputValue]);

  return (
    <form>
      <div className="">
        <label htmlFor="location">search your location</label>
        <input
          className="form-control"
          type="text"
          id="location"
          onChange={(e) => setInputValue(e.target.value)}
          // onInput={(e) => setInputValue(e.target.value)}
        />

        {display && options}

        
      </div>
    </form>
  );
}
