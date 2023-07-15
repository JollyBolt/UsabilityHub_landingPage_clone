import React from 'react'
import Header from './components/Header'
import Partners from './components/Partners'
import Hero from './components/Hero'
import Msgbox from './components/Msgbox'
import Services from './components/Services'
import Footer from './components/Footer'
import GettingStarted from './components/GettingStarted'
import Testimonials from './components/Testimonials'
import Examples from './components/Examples'
import Pricing from './components/Pricing'

const App = () => {
  return (
    <>
    <Header/>
    <Hero/>
    <Partners/>
    <Services/>
    <Testimonials/>
    <Examples/>
    <Pricing/>
    <GettingStarted/>
    <Footer/>
    <Msgbox/>
    </>
  )
}

export default App