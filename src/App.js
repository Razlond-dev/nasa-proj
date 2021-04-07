import "./App.css";
import Header from "./Components/Header/Header";
import Map from "./Components/Map/Map";
import SateliteImage from "./Components/SateliteImage/SateliteImage";
import SearchForm from "./Components/SearchForm/SearchForm";

function App() {

  return (
    <>
      <Header />
      <div className="container-fluid p-4 bg-dark text-white">
        <div className="container d-flex">
          <SateliteImage />
          <div
            className="d-flex"
            style={{ flexDirection: "column", justifyContent: "space-between" }}
          >
            <SearchForm />
            <Map />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
