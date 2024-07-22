import React from 'react'
import Header from '../../Componet/Header'
import { Hero } from '../../Componet/Hero'
import { About } from '../../Componet/About'
import { Footer } from '../../Componet/Footer'
import { TrustBadges } from '../../Componet/TrustPage'
import { BenefitsAndCTA } from '../../Componet/Benefit'

const LandingPage = () => {
  return (
    <>
    
    <Header />
    <Hero />
<About />
    <BenefitsAndCTA />
    <TrustBadges />
    <Footer />
    
    </>
  )
}

export default LandingPage