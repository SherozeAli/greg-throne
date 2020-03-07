import React, { Component } from 'react'
import './index.css'
import { Card, Button, CardTitle, CardText } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const HiringCard = ({ iconName, cardText }) => {
  return (
    <div className='conatiner'>
      <Card body className='text-center hiring-card mt-4'>
        <CardTitle className='mb-4 hiring-icons'>
          <FontAwesomeIcon icon={iconName} size='4x' />
        </CardTitle>
        <CardText className='hiring-card-text'>{cardText}</CardText>
      </Card>
    </div>
  )
}

export default HiringCard
