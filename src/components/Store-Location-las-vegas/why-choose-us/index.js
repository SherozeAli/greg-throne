import React, { Component } from 'react'
import './index.css'
import wcuImg from '../../../images/wcu-img.png'
import emergencyServiceImg from '../../../images/bg-service.jpg'

const WhyChooseUs = () => {
  return (
    <div className='container-fluid wcu-container'>
      <div className='row wcu-align'>
        <div className='col-xl-12 text-center'>
          <span className='wcu-header-text'>WHY CHOOSE US</span>
        </div>
        <div className='col-xl-4 col-md-4 col-sm-12'>
          <ul class='fa-ul wcu-ul-list'>
            <li>
              <span class='fa-li'>
                <i class='fa fa-star'></i>
              </span>
              100% Satisfaction Guaranteed
            </li>
            <li>
              <span class='fa-li'>
                <i class='fa fa-star'></i>
              </span>
              A True 24/7 Service Company
            </li>
            <li>
              <span class='fa-li'>
                <i class='fa fa-star'></i>
              </span>
              ClearCut™ Pricing. You know the price upfront.
            </li>
            <li>
              <span class='fa-li'>
                <i class='fa fa-star'></i>
              </span>
              All technicians are drug tested and background checked
            </li>
            <li>
              <span class='fa-li'>
                <i class='fa fa-star'></i>
              </span>
              Professionally trained skilled technicians
            </li>
            <li>
              <span class='fa-li'>
                <i class='fa fa-star'></i>
              </span>
              Phones answered 24/7 by a live person
            </li>
          </ul>
        </div>
        <div className='col-xl-4 col-md-4 col-sm-12'>
          <ul class='fa-ul wcu-ul-list'>
            <li>
              <span class='fa-li'>
                <i class='fa fa-star'></i>
              </span>
              We do the job right the first time
            </li>
            <li>
              <span class='fa-li'>
                <i class='fa fa-star'></i>
              </span>
              Never and overtime charge
            </li>
            <li>
              <span class='fa-li'>
                <i class='fa fa-star'></i>
              </span>
              Breakdown Free guarantee
            </li>
            <li>
              <span class='fa-li'>
                <i class='fa fa-star'></i>
              </span>
              No lemon guarantee
            </li>
            <li>
              <span class='fa-li'>
                <i class='fa fa-star'></i>
              </span>
              On time or your service call is free
            </li>
            <li>
              <span class='fa-li'>
                <i class='fa fa-star'></i>
              </span>
              Free written estimates on equipment
            </li>
            <li>
              <span class='fa-li'>
                <i class='fa fa-star'></i>
              </span>
              Senior Check Program
            </li>
          </ul>
        </div>
        <div className='col-xl-4 col-md-4 col-sm-12'>
          <ul class='fa-ul wcu-ul-list'>
            <li>
              <span class='fa-li'>
                <i class='fa fa-star'></i>
              </span>
              Special rates to Military and First Responders
            </li>
            <li>
              <span class='fa-li'>
                <i class='fa fa-star'></i>
              </span>
              2 year minimum warranty on all recommended repairs
            </li>
            <li>
              <span class='fa-li'>
                <i class='fa fa-star'></i>
              </span>
              Licensed, bonded and insured
            </li>
            <li>
              <span class='fa-li'>
                <i class='fa fa-star'></i>
              </span>
              Over 30 years experience
            </li>
            <li>
              <span class='fa-li'>
                <i class='fa fa-star'></i>
              </span>
              Risk Free guarantee
            </li>
            <li>
              <span class='fa-li'>
                <i class='fa fa-star'></i>
              </span>
              Neat and Clean
            </li>
          </ul>
        </div>
      </div>
      <div className='container'>
        <div className='row text-center'>
          <div className='col-12'>
            <img className='wcu-img-styling' src={wcuImg} alt='why choose us' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default WhyChooseUs
