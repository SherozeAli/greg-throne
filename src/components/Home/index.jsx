import React from 'react'
import HeroSection from './hero-section/index'
import GuaranteeSection from './guarantee-section/index'
import FormSection from './form-section/index'
import OfferDiscountSection from './offer-discount-section'
import ServicesSection from './services-section/index'
import TestimonialSection from './testimonials-section/index'
import JobInformation from './job-info/index'
import HiringSection from './hiring-section/index'
import EmergencySection from './emergency-section/index'
import ReadMoreSectionSection from './readmore-section/index'
import YoutubeSection from './youtube-section'

const Home = () => (
  <>
    <HeroSection />
    <GuaranteeSection />
    <YoutubeSection />
    <FormSection />
    <OfferDiscountSection />
    <ServicesSection />
    <TestimonialSection />
    <JobInformation />
    <ReadMoreSectionSection />
    <EmergencySection />
    <HiringSection />
  </>
)

export default Home
