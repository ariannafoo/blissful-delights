// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import HeroCarousel from "./components/ui/HeroCarousel.jsx";
import NavBar from "./components/NavBar.jsx";

function App() {

  return (
      <div>
        <NavBar></NavBar>
        <HeroCarousel></HeroCarousel>
      </div>
  )
}

export default App
