import React from 'react'
import './index.css'

const NavBar = () => (
  <div id='ts-header' className='container-fluid  '>
    <div className='container-fluid'>
      <div className='row  align-items-center'>
        <div className='col-md-4 align-icons'>
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
        <div className='col-md-4 text-white nav-welcome-text   lato-font'>
          <span>We're Available 24/7</span>
        </div>

        <div className='col-md-4'>
          <div className='col-md-12  nav-service-text'>
            <span className='text-white  lato-font pr-3'>Services Areas</span>
          </div>
          <div className='text-grey-light col-md-12  nav-service-text'>
            <span className=' lato-font'>
              <a
                className='text-grey-light nav-bar-hover-loc'
                href='/store-location-las-vegas'
              >
                Las Vegas{' '}
              </a>
              |{' '}
              <a
                className='text-grey-light nav-bar-hover-loc'
                href='/store-location-reno'
              >
                Reno
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default NavBar
