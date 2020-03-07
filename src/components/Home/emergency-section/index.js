import React, { Component } from 'react'
import './index.css'
import EmergencyCard from './emergency-card/index'
import {
  faLocationArrow,
  faClock,
  faPhone,
  faMapMarkerAlt
} from '@fortawesome/free-solid-svg-icons'

const EmergencySection = () => {
  return (
    <div className='container-fluid emergency-section-container '>
      <div className='container '>
        <div className='row text-center pt-3'>
          <div className='col-sm'>
            <span className='emergency-header-text '>
              Hawthorne Plumbing, Heating & Cooling
            </span>
          </div>
        </div>
        <div className='row text-center pt-3'>
          <div className='col-sm'>
            <span className='emergency-subHeader-text '>
              Emergency service available 24/7
            </span>
          </div>
        </div>
        <div class='row align-items-center pt-5'>
          <div class='col-sm'>
            <EmergencyCard
              cardIcon={'fa fa-location-arrow'}
              cardTitle='LAS VEGAS AND HENDER​​​​​SON'
              cardText='4570 W Post Rd.,  Suite 800 Las Vegas, NV 89118'
            />
          </div>
          <div class='col-sm'>
            <EmergencyCard
              cardIcon={'fa fa-location-arrow'}
              cardTitle='LAS VEGAS AND HENDER​​​​​SON'
              cardText='4690 LONGLEY LN #31 RENO, NV 89502'
            />
          </div>
          <div class='col-sm'>
            <EmergencyCard
              cardIcon={'fa fa-clock-o'}
              cardTitle='REGULAR HOURS'
              cardText='AVAILABLE 24/7'
            />
          </div>
        </div>

        <div class='row align-items-center pt-5'>
          <div class='col-sm'>
            <EmergencyCard
              cardIcon={'fa fa-phone'}
              cardTitle='PHONE:'
              cardText='(702) 871-1005'
            />
          </div>
          <div class='col-sm'>
            <EmergencyCard
              cardIcon={'fa fa-phone'}
              cardTitle='PHONE:'
              cardText='(775) 857-3333'
            />
          </div>
          <div class='col-sm'>
            <EmergencyCard
              cardIcon={'fa fa-phone'}
              cardTitle='SERVICE AREA:'
              cardText='Reno, Las Vegas and surrounding areas'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default EmergencySection
