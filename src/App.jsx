import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Deatil from "./components/detail";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/detail/:id" element={<Deatil />} />
    </Routes>
  );
}

export default App;
