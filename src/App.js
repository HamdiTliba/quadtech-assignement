import { useEffect, useState } from "react";
import axios from "axios";
import datalist from "./components/datalist";
import summary from "./components/summary";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  // const [shows, setShows] = useState([]);
  // const [data, setData] = useState([]);
  const url = "https://api.tvmaze.com/search/shows?q=all";
  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        // setData(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <Router>
      <Routes>
        <Route path="/shows/:id" element={<datalist />} />
        <Route path="/" element={<summary />} />
      </Routes>
    </Router>
  );
}

export default App;
