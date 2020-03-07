import React, { Component } from 'react'
import './index.css'
import HiringCard from './hiring-card/index.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faStar,
  faClock,
  faUsers,
  faCogs,
  faClipboardCheck,
  faCog,
  faUserSecret
} from '@fortawesome/free-solid-svg-icons'

const HiringSection = () => {
  return (
    <div className='container-fluid hiring-section-parent'>
      <div className='container'>
        <div className='row text-center pt-3'>
          <div className='col-sm'>
            <span className='hiring-header-text tect-white '>
              Why Hire Our Team of Pros?
            </span>
          </div>
        </div>
        <div class='row align-items-center pt-5'>
          <div class='col-sm'>
            <HiringCard cardText='Same-Day Services' iconName={faStar} />
          </div>
          <div class='col-sm'>
            <HiringCard cardText='24/7 Emergency Service' iconName={faClock} />
          </div>
          <div class='col-sm'>
            <HiringCard cardText='Family Owned & Operated' iconName={faUsers} />
          </div>
          <div class='col-sm'>
            <HiringCard
              cardText='Green and Energy-Efficient'
              iconName={faCogs}
            />
          </div>
        </div>

        <div class='row align-items-center pt-2'>
          <div class='col-sm'>
            <HiringCard
              cardText='2-Year Warranty on All Approved Repairs'
              iconName={faClipboardCheck}
            />
          </div>
          <div class='col-sm'>
            <HiringCard
              cardText='Residential and Commercial Services'
              iconName={faCogs}
            />
          </div>
          <div class='col-sm'>
            <HiringCard
              cardText="We'll Leave Your Property Cleaner Than We Found It!"
              iconName={faUserSecret}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HiringSection
