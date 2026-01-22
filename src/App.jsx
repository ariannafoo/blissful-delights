// import { useState } from 'react'
// import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route } from "react-router-dom";

import NavBar from "./components/layout/NavBar.jsx";
import Footer from "./components/layout/Footer.jsx";

import Home from "./pages/Home.jsx"
import Contact from "./pages/Contact.jsx"

function App() {

  return (
      <div>
          <NavBar></NavBar>

          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/contact" element={<Contact />}/>
          </Routes>

          <Footer></Footer>
      </div>
  )
}

export default App;
