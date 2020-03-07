import React, { Component } from 'react'
import './index.css'
import { Card, Button, CardTitle, CardText } from 'reactstrap'

const ServiceCard = ({ cardText }) => {
  return (
    <div>
      <Card body className=' service-card text-center mt-3'>
        <CardText>{cardText}</CardText>
      </Card>
    </div>
  )
}

export default ServiceCard
