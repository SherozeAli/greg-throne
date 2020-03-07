import React, { Component } from 'react'
import './index.css'
import {
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText
} from 'reactstrap'
import emergencyServiceImg from '../../../images/bg-service.jpg'
const EmergencyService = () => {
  return (
    <div className='container-fluid sl-emergency-container'>
      <div className='row text-center'>
        <div className='col-xl-3 col-md-6 col-sm-12'>
          <div className='sl-form-container'>
            <Form>
              <div className='row text-center'>
                <div className='col'>
                  <Label
                    className='text-white sl-form-header '
                    for='exampleEmail '
                  >
                    Schedule Your Service
                  </Label>
                </div>
              </div>
              <FormGroup>
                <Input
                  type='email'
                  name='email'
                  id='exampleEmail'
                  placeholder='First Name'
                />
              </FormGroup>
              <FormGroup>
                <Input
                  type='email'
                  name='email'
                  id='exampleEmail'
                  placeholder='Last Name'
                />
              </FormGroup>
              <FormGroup>
                <Input
                  type='email'
                  name='email'
                  id='exampleEmail'
                  placeholder='Email'
                />
              </FormGroup>
              <FormGroup>
                <Input
                  placeholder='Message'
                  type='textarea'
                  name='text'
                  id='exampleText'
                />
              </FormGroup>
              <Button className='sl-form-button p-2 ' size='lg' block>
                Get in touch!
              </Button>
            </Form>
          </div>
        </div>
        <div className='col-xl-6 col-md-6 col-sm-12 pt-4'>
          <div className='col es-header-text '>
            <span>Emergency Services</span>
          </div>
          <div className='col es-sub-header-text '>
            <span>Need Service Now?</span>
          </div>
          <div className='col es-para-text pt-2'>
            <span>
              Hawthorne Plumbing, Heating & Cooling strives for 100% customer
              satisfaction. We are committed to providing our customers with
              outstanding customer service from our phone representatives and
              our tradespeople.
            </span>
          </div>
          <div className='col es-call-text pt-3'>
            <span>
              Call us at (702) 871-1005 for after hour appointments or immediate
              assistance
            </span>
          </div>
          <div className='col es-answer-text pt-3'>
            <span>We Answer Your Call 24/7</span>
          </div>
        </div>

        <div className='col-xl-3 col-md-6 col-sm-12'>
          <div className='sl-workmanship-container d-flex flex-column align-items-center'>
            <div className='col sl-round-img-container'>
              <img
                className='sl-ImgStyling'
                src={emergencyServiceImg}
                alt='service'
              />
            </div>
            <div className='col'>
              <span className='sl-workmanship-header'>Providing Quality</span>
            </div>
            <div className='col'>
              <span className='sl-workmanship-sub-header'>Workmanship</span>
            </div>
            <div className='col'>
              <span className='sl-workmanship-para'>
                Our team of technicians are certified and continually trained to
                be up to date on all national and local practices and codes.
                Only a select few who apply at Hawthorne PHC will pass our
                testing and qualification standards.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EmergencyService
