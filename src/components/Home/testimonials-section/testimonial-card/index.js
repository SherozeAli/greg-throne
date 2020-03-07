import './index.css'
import React, { Component } from 'react'
import {
  Card,
  Button,
  CardHeader,
  CardFooter,
  CardBody,
  CardTitle,
  CardText
} from 'reactstrap'
const TestimonialCard = ({ cardDesc, peopleName }) => {
  return (
    <div>
      <Card className='testimonial-card mt-3'>
        <CardBody>
          <CardTitle className='text-center'>
            <h4 className='testimonial-card-desc'>{cardDesc}</h4>
          </CardTitle>
          <CardText className='text-red text-center '>{peopleName}</CardText>
        </CardBody>
      </Card>
    </div>
  )
}

export default TestimonialCard
