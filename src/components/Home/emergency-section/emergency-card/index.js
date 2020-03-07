import React, { Component } from 'react'
import './index.css'
import { Card, Button, CardTitle, CardText } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const EmergencyCard = ({ cardText, cardTitle, cardIcon }) => {
  return (
    <div>
      <div>
        <Card
          body
          outline
          color='secondary'
          className='emergency-card text-center mt-3'
        >
          <div className='d-flex justify-content-center'>
            <div className='emergency-card-icon'>
              <a href='https://www.pinterest.com/hawthornephc/'>
                <i
                  className={cardIcon + ' ' + 'icon-color'}
                  aria-hidden='true'
                />
              </a>
            </div>
          </div>
          <CardTitle className='emergency-card-title '>{cardTitle}</CardTitle>
          <CardText className='emergency-card-text '>{cardText}</CardText>
        </Card>
      </div>
    </div>
  )
}

export default EmergencyCard
