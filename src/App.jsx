import { useState } from 'react'
import Navbar from './components/Navbar';
import Home from './components/Home';
import Features from './components/Features';
import About from "./components/About";
import Benifits from './components/Benifits';
import Footer from './components/Footer';

function App() {

  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Features />
      <Benifits />
      <Footer />
    </>
  )
}

export default App
