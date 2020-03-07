import React, { Component } from 'react'
import './index.css'
import {
  faFacebook,
  faTwitter,
  faPinterest
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const Footer = () => {
  return (
    <div class='container-fluid footer-container'>
      <div class='row'>
        <div class='col footer-text text-white'>
          NV Cont Lic.#55763 C-1 Plumbing and Heating $50k limit
        </div>
      </div>
      <div class='row'>
        <div class='col footer-text text-white'>
          NV Cont Lic. #70845 C-21 Refrigeration and Air Conditioning $50k limit
        </div>
      </div>
      <div class='row'>
        <div class='col footer-text text-white'>
          © 2019 All Rights Reserved.
        </div>
        <div class='col-md-auto footer-text text-white'>Connect With Me</div>
        <div class='col-md-auto'>
          <div className='nav-icon-styling'>
            <a href='https://twitter.com/HawthornePHC'>
              <i className='fa fa-twitter icon-color ' aria-hidden='true' />
            </a>
          </div>
          <div className='nav-icon-styling'>
            <a href='https://www.facebook.com/HawthornePHC/'>
              <i className='fa fa-facebook  icon-color' aria-hidden='true' />
            </a>
          </div>
          <div className='nav-icon-styling'>
            <a href='https://www.pinterest.com/hawthornephc/'>
              <i className='fa fa-pinterest icon-color ' aria-hidden='true' />
            </a>
          </div>
          <div className='nav-icon-styling'>
            <a href='https://www.youtube.com/channel/UC6w2r_7MdlreCTggtn8bn7g'>
              <i className='fa fa-youtube icon-color ' aria-hidden='true' />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
