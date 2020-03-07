import React, { Component } from 'react'
import './index.css'
import { Button } from 'reactstrap'
import RepairImg from '../../../images/repair-img.png'
const RepairSection = () => {
  return (
    <div className='container-fluid repair-container'>
      <div className='row'>
        <div className='col-xl-6 repair-left-container '>
          <div>
            <span className='repair-header-text'>Plumbing and AC Repairs</span>
          </div>
          <div>
            <span className='repair-para-text '>
              From getting a new water heater installed or adding a new smart
              thermostat or even repairing that leaky faucet that keeps you up
              at night; apples to apples, Hawthorne Plumbing, Heating & Cooling
              is the best plumber you you'll find.
            </span>
          </div>
          <div className=' pt-3'>
            <span className='repair-para-text  '>
              Our team of plumbers and A/C techs are certified and up-to-date on
              all plumbing and HVAC codes and practices. They attend regular
              training and educational courses.
            </span>
          </div>
          <div className='col-xl-12 pt-3 text-center'>
            <Button className='repair-button' size='lg'>
              <h3>Schedule Service</h3>
            </Button>
          </div>
        </div>
        <div className='col-xl-6 repair-right-container'>
          <div>
            <span className='repiar-right-para-text'>
              Hawthorne Plumbing, Heating Cooling is passionate about having
              integrity and professionalism, in the Air Conditioning and
              Plumbing industry. We also believe in a shared responsibility and
              giving back to our community
            </span>
          </div>
          <div className='col-6 offset-3 text-center'>
            <img className='repair-img' src={RepairImg} alt='img1' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default RepairSection
