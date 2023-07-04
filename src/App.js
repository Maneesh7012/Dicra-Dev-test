import React from "react";
import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import Map from "./components/Map/Map";

function App() {
  const location = useLocation();
  console.log(location);
  return (
    <div>
      <Routes>
            <Route path="/" element={<Map />} />
      </Routes>
       
    </div>
  );
}

export default App;