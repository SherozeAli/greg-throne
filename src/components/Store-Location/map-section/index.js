import React, { Component } from 'react'
import './index.css'
import SimpleMap from '../components/map/index'
const MapSection = () => {
  return (
    <div className='container-fluid sl-map-container'>
      <div className='container'>
        <div className='row'>
          <div className='col-xl-6 col-md-12 col-sm-12'>
            <div className='map-container'>
              <SimpleMap />
            </div>
          </div>
          <div className='col-xl-6 col-md-12 col-sm-12'>
            <div className='map-line-height-text'>
              <div className='map-container-header-text pt-2'>
                <span>You can count on us.</span>
              </div>
              <div className='map-container-para-text pt-3'>
                <span>
                  Hawthorne Plumbing, Heating & Cooling provides 24/7 Plumbing,
                  Air Conditioning & Heating repair, installation, and
                  maintenance in Reno, Sparks and throughout the Washoe Valley
                  and Lake Tahoe.
                </span>
              </div>
              <div className='map-container-para-text'>
                <span>
                  You can rest assured that not only we will be there when we
                  say we will, but we will get the repair done correctly,
                  efficiently, and at the price quoted.
                </span>
              </div>
              <div className='map-container-footer-text pt-4'>
                <span>Hawthorne Plumbing, Heating & Cooling</span>
              </div>
              <div className='map-container-footer-text pt-2'>
                <span>4690 Longley Ln #31</span>
              </div>
              <div className='map-container-footer-text pt-2'>
                <span> Reno, NV 89502</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MapSection
