import React from 'react';
import { BrowserRouter } from "react-router-dom"

import Routes from "./routes"
import Navbar from './Components/Navbar'

import "./main.css"

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes />

    </BrowserRouter>
  );
}

export default App;
