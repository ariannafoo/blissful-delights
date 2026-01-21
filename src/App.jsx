// import { useState } from 'react'
// import viteLogo from '/vite.svg'
import './App.css'
import HeroCarousel from "./components/ui/HeroCarousel.jsx";
import NavBar from "./components/NavBar.jsx";
import Collection from "./components/Collection.jsx";
import GalleryPreview from "./components/GalleryPreview.jsx";
import ReviewsSection from "./components/ui/Reviews.tsx";
import Footer from "./components/Footer.jsx";

function App() {

  return (
      <div>
        <NavBar></NavBar>
        <HeroCarousel></HeroCarousel>
          <Collection></Collection>
          <GalleryPreview></GalleryPreview>
          <ReviewsSection></ReviewsSection>
          <Footer></Footer>
      </div>
  )
}

export default App
