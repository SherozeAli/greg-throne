import React, { useState } from 'react'

import { Button } from 'reactstrap'

import './index.css'

const HeroSection = () => {
  return (
    <div className='container-fluid home-hero'>
      <div className='row home-main-row'>
        <div className='col-xl-4 col-md-6 offset-md-2'>
          <div className='col'>
            <span className='home-hero-header'>
              NEED PLUMBING & HVAC SERVICE?
            </span>
          </div>
          <div className='col'>
            <div className='home-hero-horizontal-rule'></div>
          </div>
          <div className='row text-center'>
            <div className='col home-hero-sub-header-container '>
              <span className='home-hero-sub-header '>
                WE DO SERVICE RIGHT!
              </span>
            </div>
          </div>
          <div className='col home-hero-para-container '>
            <span className='home-hero-para'>
              Top-quality workmanship is what we're known for.
            </span>
          </div>
          <div className='col-sm '>
            <Button className='p-2 home-hero-button ' size='lg'>
              <span className='home-btn-text'>REQUEST SERVICE</span>
            </Button>
          </div>
          <div className='col home-hero-para-container '>
            <span className='home-hero-para'>
              For Service Right Away Call Us!
            </span>
          </div>
          <div className='col-sm '>
            <Button className='p-2 home-hero-button ' size='lg'>
              <span className='home-btn-text'>Call: (844) 236-0190</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
