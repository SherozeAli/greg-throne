import React, { Component } from 'react'
import './index.css'
import TestimonialCard from './testimonial-card/index'
import { Button } from 'reactstrap'

const data = [{ peopleName: 'Test', description: 'test' }]
const TestimonialSection = () => {
  return (
    <div className='container testimonial-main-container'>
      <div className='row text-center'>
        <div className='col-sm'>
          <span className='testimonial-header-text  text-center'>
            When It Comes to Total Comfort, Vegas Has Lucked Up with Hawthorne
            Plumbing, Heating & Cooling.
          </span>
        </div>
      </div>
      <div class='row align-items-center first-row-testimonial'>
        <div class='col-sm'>
          <TestimonialCard
            peopleName='Steve'
            cardDesc='“I will recommend and use Hawthorne’s service in the future!”'
          />
        </div>
        <div class='col-sm'>
          <TestimonialCard
            peopleName='Roberts'
            cardDesc='“We will definitely call them again if we are in need of plumbing services”'
          />
        </div>
        <div class='col-sm'>
          <TestimonialCard
            peopleName='Chris'
            cardDesc='“The Best Customer Service!”'
          />
        </div>
        <div class='col-sm'>
          <TestimonialCard
            peopleName='Jenny'
            cardDesc='“Excellent service. Very knowledgeable and efficient.”'
          />
        </div>
        <div class='col-sm'>
          <TestimonialCard
            peopleName='Janet'
            cardDesc='“Nice to find an honest company that treats their customers right”'
          />
        </div>
      </div>
      <div class='row align-items-center second-row-testimonial '>
        <div class='col-sm'>
          <TestimonialCard
            peopleName='Sal'
            cardDesc='“Well organized, Well officiant and Well-trained men”'
          />
        </div>
        <div class='col-sm'>
          <TestimonialCard
            peopleName='James'
            cardDesc='“Excellent Service And Knowledgeable Staff”'
          />
        </div>
        <div class='col-sm'>
          <TestimonialCard
            peopleName='Jody'
            cardDesc='“Saved the Day! I highly recommend them!”'
          />
        </div>
        <div class='col-sm'>
          <TestimonialCard
            peopleName='Steve'
            cardDesc='“Came in and handled a very difficult plumbing issue”'
          />
        </div>
        <div class='col-sm'>
          <TestimonialCard
            peopleName='Illene'
            cardDesc='“Very good and respectful technician”'
          />
        </div>
      </div>

      <div className='row text-center pt-5'>
        <div className='col-sm'>
          <Button className='testimonial-button p-3 background-red' size='lg'>
            READ MORE REVIEWS
          </Button>
        </div>
      </div>
    </div>
  )
}

export default TestimonialSection
