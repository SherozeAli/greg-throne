import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faWrench,
  faSun,
  faSnowflake,
  faUserCog,
  faBuilding,
  faHandHoldingHeart
} from '@fortawesome/free-solid-svg-icons'

import './index.css'
const GuaranteeSection = () => {
  return (
    <div class='container guarantee-container'>
      <div class='row mt-md-4'>
        <div class='col-lg-6 col-lg-6 '>
          <div>
            <span className='main-heading-40'>
              Plumbing, Heating & x Cooling Experts In Reno And Las Vegas, NV
            </span>
          </div>
          <div>
            <h2>Your Satisfaction Is Our Guarantee!</h2>
          </div>

          <p className='gurantee-para pt-5'>
            Call your Las Vegas plumbing, heating and cooling experts when you
            want better comfort in your home or business! Because we genuinely
            care about our customers, Hawthorne Plumbing, Heating & Cooling
            always arrives in the nick of time to handle every request on time.
            All jobs completed by our trained and professional technicians are
            backed by a 100% workmanship guarantee. Same-day service is offered
            throughout Southern Highland, Las Vegas, Henderson, North Las Vegas,
            the Lakes, Summerland, and beyond. In Northern Nevada, same-day
            services are offered in Reno and Sparks and surrounding cities.
          </p>
          <p className='gurantee-para pt-4'>
            We offer free in-home replacement estimates. We also offer FREE 3rd
            party senior check service, that way you can make sure that your
            loved ones are doing well no matter where you are. From routine air
            conditioner maintenance and emergency heating system repairs to
            everything in between, Hawthorne Plumbing, Heating & Cooling is your
            #1 choice for plumbing, heating and cooling service in Reno and Las
            Vegas.
          </p>
        </div>
        <div class='col-lg-6 col-md-12  '>
          <div class='row'>
            <div className='row card-dark  text-light text-center background-red mx-auto'>
              <div className='col align-self-center'>
                <FontAwesomeIcon icon={faWrench} className='mb-3' size='4x' />
                <h3 className='text-center'>Plumbing</h3>
              </div>
            </div>
            <div className='row card-light  text-red text-center background-red mx-auto'>
              <div className='col align-self-center'>
                <FontAwesomeIcon icon={faSun} className='mb-3' size='4x' />
                <h4 className='text-center'>Heating</h4>
              </div>
            </div>
          </div>
          <div class='row mt-5'>
            <div className='row card-light   text-red  text-center background-red mx-auto'>
              <div className='col align-self-center'>
                <FontAwesomeIcon
                  icon={faSnowflake}
                  className='mb-3'
                  size='4x'
                />
                <h4 className='text-center'>Air Conditioning</h4>
              </div>
            </div>
            <div className='row card-dark  text-light text-center background-red mx-auto'>
              <div className='col align-self-center'>
                <FontAwesomeIcon icon={faUserCog} className='mb-3' size='4x' />
                <h4 className='text-center'>Drain Cleaning</h4>
              </div>
            </div>
          </div>
          <div class='row mt-5'>
            <div className='row card-dark   text-light text-center background-red mx-auto'>
              <div className='col align-self-center'>
                <FontAwesomeIcon icon={faBuilding} className='mb-3' size='4x' />
                <h4 className='text-center'>Commercial Services</h4>
              </div>
            </div>
            <div className='row card-light    text-red  text-center background-red mx-auto'>
              <div className='col align-self-center'>
                <FontAwesomeIcon
                  icon={faHandHoldingHeart}
                  className='mb-3'
                  size='4x'
                />
                <h4 className='text-center'>Water Filtering</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GuaranteeSection
