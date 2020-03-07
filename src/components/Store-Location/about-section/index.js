import React, { Component } from 'react'
import './index.css'

const AboutSection = () => {
  return (
    <div className='container-fluid about-parent-container'>
      <div className='row'>
        <div className='col'>
          <div>
            <span className='about-para-heading'>
              Plumbing, Heating & Air Conditioning Services Since 2003
            </span>
          </div>
          <div className=' pt-3'>
            <span className='about-para'>
              With three generations and more than thirty years and of
              experience in the industry, Hawthorne Plumbing, Heating & Cooling
              is the business that smart homeowners choose for their residential
              plumbing, air conditioning and heating services in the greater Las
              Vegas Valley.
            </span>
          </div>
          <div className=' pt-3'>
            <span className='about-para'>
              Using our state-of-the-art dispatching and scheduling system, our
              fleet of well-stocked trucks are only minutes from your home in
              most cases as we cover the entire valley. Our professional and
              friendly team of plumbing and HVAC technicians are there to
              provide the very best quality service, repair, installation and
              preventive maintenance in the city. We are open 24/7 365 days a
              year. Schedule your Las Vegas plumbing service and see the
              difference for yourself?
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutSection
