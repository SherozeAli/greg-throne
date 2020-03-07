import React, { Component } from 'react'
import './index.css'
import ServiceCard from './service-card/index'
import { Button } from 'reactstrap'
const ServiceSection = () => {
  return (
    <div className='container-fluid service-section-container '>
      <div className='container'>
        <div className='row text-center pt-3'>
          <div className='col-sm'>
            <span className='main-heading-40  text-white'>
              Professional Plumbing & Air At Your Convenience
            </span>
          </div>
        </div>
        <div className='row text-center '>
          <div className='col-sm'>
            <span className='main-heading-40  text-white'>
              We Can Tackle Any Issue You've Got!
            </span>
          </div>
        </div>
        <div class='row align-items-center pt-5'>
          <div class='col-xl col-lg col-md-6'>
            <ServiceCard cardText='PLUMBING' />
          </div>
          <div class='col-xl col-lg-6 col-md-6'>
            <ServiceCard cardText='HEATING' />
          </div>
          <div class='col-xl col-lg-6 col-md-6'>
            <ServiceCard cardText='AIR CONDITIONING' />
          </div>
          <div class='col-xl col-lg-6 col-md-6'>
            <ServiceCard cardText='WATER FILTERATION' />
          </div>
        </div>
        <div className='row text-center pt-5'>
          <div className='col-sm '>
            <Button className='p-3 background-red-dark ' size='lg'>
              <h3>SEE ALL SERVICES</h3>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServiceSection
