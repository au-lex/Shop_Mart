import React from 'react'
import Header from '../../Componet/Header'
import { Hero } from '../../Componet/Hero'
import { About } from '../../Componet/About'
// import { Footer } from '../../Componet/Footer'
import { TrustBadges } from '../../Componet/TrustPage'
import { BenefitsAndCTA } from '../../Componet/Benefit'
import FaqComponent from '../../Componet/Faq'
import Footer from '../../Componet/Footer'

const LandingPage = () => {
  return (
    <>
    <div className="bg bg-[#f7f6f0]">

    <Header />
    <Hero />
<About />
    <BenefitsAndCTA />
    <TrustBadges />
    <FaqComponent/>
    {/* <Footer /> */}
    <Footer />
    
    </div>
    </>
  )
}

export default LandingPage