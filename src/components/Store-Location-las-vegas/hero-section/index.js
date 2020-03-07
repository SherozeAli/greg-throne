import React, { Component } from 'react'
import './index.css'
import { Button } from 'reactstrap'

const HeroSection = () => {
  return (
    <div className='container-fluid store-location-hero-img-las-vegas'>
      <div className='row text-center'>
        <div className='col-md-12'>
          <h1 className='text-white sl-hero-header-text '>
            Las Vegas Plumbing & Air Conditioning
          </h1>
          <h1 className='text-white sl-hero-header-text'>Repair And Install</h1>
        </div>
      </div>
      <div className='container'>
        <div class='row justify-content-around text-center'>
          <div class='col-xl-4 col-sm-12 col-md-6 pt-3'>
            <Button className='sl-hero-button' size='lg'>
              Contact Us: (702) 871-1005
            </Button>
          </div>
          <div className='col-xl-4 col-sm-12 col-md-6 pt-3'>
            <Button className='sl-hero-button' size='lg'>
              Request A Service Online
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
