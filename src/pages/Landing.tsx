import React from 'react'
import Navbar from '../components/LandingComp/Navbar'
import Hero from '../components/LandingComp/Hero'
import Delivery from '../components/LandingComp/Delivery'
import Carpool from '../components/LandingComp/Carpool'
import Trust from '../components/LandingComp/Trust'
import Features from '../components/LandingComp/Features'
import CallToAction from '../components/LandingComp/CallToAction'
import Footer from '../components/LandingComp/Footer'

function Landing() {
  return (
    <div className="min-h-screen">
    <Navbar />
    <Hero />
    <Delivery />
    <Carpool />
    <Trust />
    <Features />
    <CallToAction />
    <Footer />
  </div>
  )
}

export default Landing