/* eslint-disable jsx-a11y/iframe-has-title */
import React from 'react'

const YoutubeSection = () => (
  <div className='container youtube-container '>
    <div className='row'>
      <div className='col'>
        <div className='col-xl-6 col-lg-12 col-md-12 text-center'>
          <div
            className='video'
            style={{
              position: 'relative',
              paddingBottom: '56.25%',
              paddingTop: 25,
              height: 0
            }}
          >
            <iframe
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%'
              }}
              src='https://www.youtube.com/embed/AhFlDeZLNFQ'
              frameBorder='0'
            />
          </div>
        </div>
        <div className='pt-4 col-xl-6 col-lg-12 col-md-12 text-center'>
          <h4 className='text-center'>
            Contact Hawthorne Plumbing, Heating & Cooling to schedule your
            repair or maintenance! Call us at (844) 236-0190 for fastest service
          </h4>
        </div>
      </div>
    </div>
  </div>
)

export default YoutubeSection
