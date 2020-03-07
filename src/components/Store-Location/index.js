import React, { Component } from 'react'
import './index.css'
import HeroSection from './hero-section/index'
import AboutSection from './about-section/index'
import HorizontalRule from './horizontal-rule/index'
import GuranteeSection from './guarantee-section/index'
import CertifiedReviews from './certified-reviews/index'
import EmergencyService from './emergency-service/index'
import MapSection from './map-section/index'
import WhyChooseUs from './why-choose-us/index'
import AreasWeService from './areas-we-service/index'
import RepairSection from './repair-section/index'

const StoreLocation = () => {
  return (
    <div>
      <HeroSection />
      <HorizontalRule />
      <AboutSection />
      <HorizontalRule />
      <HorizontalRule />
      <GuranteeSection />
      <HorizontalRule />
      <CertifiedReviews />
      <HorizontalRule />

      <EmergencyService />
      <HorizontalRule />

      <MapSection />
      <HorizontalRule />
      <WhyChooseUs />
      <HorizontalRule />

      <AreasWeService />
      <HorizontalRule />
      <RepairSection />
      <HorizontalRule />
    </div>
  )
}

export default StoreLocation
