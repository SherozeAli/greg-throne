import React, { Component } from 'react'
import './index.css'
import { Col, Button } from 'reactstrap'
const OfferDiscountSection = () => {
  return (
    <div className='offer-container background-red container-fluid'>
      <div className='container col-sm-12 col-lg-8 offer-inner-container p-5 background-light'>
        <div class='row text-center'>
          <div class='col-md offer-main-heading'>
            Weekend appointments. 24/7 Emergency Service.
          </div>
        </div>

        <div class='row text-center'>
          <div class='col pt-3'>
            <h3>Online Specials</h3>
          </div>
        </div>
        <div class='row text-center pt-3'>
          <div class='col-sm off-percent-text text-red-dark pt-4'>10% OFF</div>
        </div>
        <div class='row text-center'>
          <div class='col p-5  text-red'>
            <h2>Senior and Military Discount</h2>
          </div>
        </div>
        <div className='text-center pt-3 '>
          <Button
            className='p-3 background-red-dark offer-section-button'
            size='lg'
          >
            <h2>MORE DEALS</h2>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default OfferDiscountSection
