import React, { Component } from 'react'
import './index.css'
import { Button } from 'reactstrap'

const HeroSection = () => {
  return (
    <div className='container-fluid store-location-hero-img'>
      <div className='row text-center'>
        <div className='col-md-12'>
          <span className='text-white sl-hero-header-text '>
            Reno Plumbing & Heating
          </span>
          <h1 className='text-white sl-hero-header-text'>Repair And Install</h1>
        </div>
      </div>
      <div className='container'>
        <div class='row justify-content-around text-center'>
          <div class='col-xl-4 col-sm-12 col-md-6 pt-3'>
            <Button className='sl-hero-button' size='lg'>
              Contact Us: (775) 857-3333
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
