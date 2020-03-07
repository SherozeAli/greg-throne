import React, { Component } from 'react'
import './index.css'
import Slider from './slider'

const CertifiedReviews = () => {
  return (
    <div className='container-fluid sl-ceritified-container'>
      <div className='row'>
        <div className='col-xl-4 col-md-4 col-lg-4 col-xs-12 d-flex align-align-items-center flex-column'>
          <div className='p-3 card-bg d-flex justify-content-between'>
            <div>
              <p>
                516 <br />
                Cerified
                <br /> Reviews
              </p>
              <div className='w-100 d-flex justify-content-between align-items-center'>
                <span class='fa fa-star checked' />
                <span class='fa fa-star checked' />
                <span class='fa fa-star checked' />
                <span class='fa fa-star checked' />
                <span class='fa fa-star checked' />
                <span className='text-light bold-text'>4.9</span>
              </div>
            </div>
            <div className='certificate-container'>
              <img src={require('../../../images/cerificate-logo.png')} />
            </div>
          </div>
          <br />
          <div className='my-card p-1'>
            <div className='my-card-header p-3 d-flex justify-content-around'>
              <img
                className='rounded-circle'
                src='https://www.w3schools.com/howto/img_avatar.png'
                width='30px'
                height='30px'
                alt='Avatar'
              />
              <span>Donald Schortman</span>
            </div>
            <div className='my-card-body p-3'>
              <span className='checked'>
                <b>5.0 </b>
              </span>
              <span class='fa fa-star checked' />
              <span class='fa fa-star checked' />
              <span class='fa fa-star checked' />
              <span class='fa fa-star checked' />
              <span class='fa fa-star checked' />
              <p className='pt-2'>
                Technician was on time, did an excellent job! Actually showed me
                what was wrong with my clogged line and fixed it. I was
                amazed... more
              </p>
            </div>
          </div>
        </div>
        <div className='col-xl-8 col-md-8 mt-4'>
          <Slider />
        </div>
      </div>
    </div>
  )
}

export default CertifiedReviews
