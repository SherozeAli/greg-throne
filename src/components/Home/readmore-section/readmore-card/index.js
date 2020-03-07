import React, { Component } from 'react'
import './index.css'
import {
  Card,
  CardBody,
  Button,
  CardTitle,
  CardText,
  CardImg
} from 'reactstrap'
import bg from '../../../../images/bg-form.jpg'
const ReadMoreCard = ({ cardTitle, cardDesc }) => {
  return (
    <div>
      <Card className='readmore-card mt-4'>
        <CardImg
          className='readmore-card-img'
          top
          src={bg}
          alt='Card image cap'
        />
        <CardBody>
          <CardTitle className='readmore-card-title'>{cardTitle}</CardTitle>
          <CardText className='readmore-card-desc'>{cardDesc}</CardText>
          <CardText className='readmore-text'>
            <CardText className='font-weight-bold pt-5'>Read More></CardText>
          </CardText>
        </CardBody>
      </Card>
    </div>
  )
}

export default ReadMoreCard
