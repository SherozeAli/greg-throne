import React from 'react'
import './index.css'

const JobInformation = () => {
  return (
    <div className='container-area'>
      <div className='row'>
        <div className='col-lg-12 mb-5'>
          <p className='text-center main-heading-40'>
            <strong>
              Have Plumbing & HVAC Needs? <br /> Hire Trusted Experts for the
              Job
            </strong>
          </p>
        </div>
        <div className='col-lg-6 col-md-12 '>
          <p className='h2 font-weight-bold'>No Job Is Too Big or Too Small!</p>
          {/* <ul> */}
          <li className='redTick'>
            We offer same-day service to every customer.
          </li>
          <li className='redTick'>
            We're available 24/7 for emergency service.
          </li>
          <li className='redTick'>
            We take pride in being a family owned and operated company.
          </li>
          <li className='redTick'>
            You're guaranteed a 2-year warranty on all approved repairs.
          </li>
          <li className='redTick'>
            We'll leave your home or business cleaner than we found it!
          </li>
          <li className='redTick'>
            We are a green and energy-efficient company.
          </li>
          <li className='redTick'>
            We offer residential and commercial services.
          </li>
          {/* </ul> */}
        </div>
        <div className='col-lg-6 col-md-12'>
          <form className='form d-flex flex-column'>
            <div className='form-group mb-4'>
              <input
                className='form-control'
                name='name'
                value=''
                placeholder='Name *'
              />
            </div>
            <div className='form-group mb-4'>
              <input
                className='form-control'
                name='email'
                value=''
                placeholder='Email *'
              />
            </div>
            <div className='form-group mb-4'>
              <input
                className='form-control'
                name='phone'
                value=''
                placeholder='Phone *'
              />
            </div>
            <div className='form-group mb-4'>
              <input
                className='form-control'
                name='services'
                value=''
                placeholder='Service Needed *'
              />
            </div>
            <br />
            <button>Send Information</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default JobInformation
