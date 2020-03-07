import React, { Component } from 'react'
import './index.css'
import ReadMoreCard from './readmore-card/index'
const ReadMoreSection = () => {
  return (
    <div className='container-fluid pb-5 backgroung-grey '>
      <div className='container'>
        <div className='row text-center pt-3'>
          <div className='col-sm'>
            <h1 className='main-heading-40 '>
              What's New with Hawthorne Plumbing, Heating & Cooling?
            </h1>
          </div>
        </div>

        <div class='row align-items-center pt-4'>
          <div class='col-xl-4 col-lg-6 col-md-12 col-sm-12'>
            <ReadMoreCard
              cardTitle='Earth Day: 6 Plumbing Ideas to Conserve Water'
              cardDesc='Earth Day’s Inception began on April 22, 1969.  Since then our awareness of the need for conversation of our greatest'
            />
          </div>
          <div class=' col-xl-4 col-lg-6 col-md-12'>
            <ReadMoreCard
              cardTitle='TOP 5 BASIC PLUMBING TIPS EVERY HOMEOWNER SHOULD KNOW'
              cardDesc='If you are like most Americans, your home is one of your most valuable assets. And, once you have it,'
            />
          </div>
          <div class='col-xl-4 col-lg-6 col-md-12'>
            <ReadMoreCard
              cardTitle='How to Stay Dry… by Keeping Your Sump Pump Clean'
              cardDesc='Multiple regions have experienced record rainfall this summer, and those storms likely left more than a few flooded basements in'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ReadMoreSection
