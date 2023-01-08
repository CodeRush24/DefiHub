import React from 'react'
import Features from './components/Features'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from './components/About'
import News from './components/News'
import Community from './components/Community'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
      <div className='font-michroma'>
        <Navbar />
        <Hero />
        <Features />
        <About />
        <News />
        <Community />
        <Footer />
      </div>
    </>
  )
}

export default App
