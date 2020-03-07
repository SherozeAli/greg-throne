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

const FormSection = () => {
  return (
    <div id='form-section-container'>
      <div className='container col-sm-12 col-lg-8 col-md-10'>
        <div className=' background-light form-container'>
          <Form>
            <div className='container'>
              <div className='row text-center'>
                <div className='col'>
                  <Label
                    className='color-light main-heading-40 '
                    for='exampleEmail '
                  >
                    Request Service Today!
                  </Label>
                </div>
              </div>
              <div className='row text-center'>
                <div className='col'>
                  <Label
                    className='color-light main-heading-40 text-center'
                    for='exampleEmail text-center'
                  >
                    Available 24/7 for Emergencies
                  </Label>
                </div>
              </div>
            </div>
            <FormGroup>
              <Input
                type='email'
                name='email'
                id='exampleEmail'
                placeholder='First Name *'
                bsSize='lg'
              />
            </FormGroup>
            <FormGroup>
              <Input
                type='email'
                name='email'
                id='exampleEmail'
                placeholder='Email *'
                bsSize='lg'
              />
            </FormGroup>
            <FormGroup>
              <Input
                type='email'
                name='email'
                id='exampleEmail'
                placeholder='Phone *'
                bsSize='lg'
              />
            </FormGroup>
            <FormGroup>
              <Input
                placeholder='Service Needed'
                bsSize='lg'
                type='textarea'
                name='text'
                id='exampleText'
              />
            </FormGroup>
            <Button className='background-red p-3 ' size='lg' block>
              Schedule Now !
            </Button>
          </Form>
        </div>
      </div>
    </div>
  )
}

export default FormSection
