import React, { useState } from 'react'
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap'
import './index.css'

const items = [
  {
    data: (
      <div class='card slider-card'>
        <div class='card-body'>
          <div className='d-flex align-items-center justify-content-around'>
            <img
              src='https://www.w3schools.com/howto/img_avatar.png'
              alt='Avatar'
              className='avatar'
            />
            <h6>Lana Swanson</h6>
          </div>
          <div className='d-flex ml-2 mt-2'>
            <span class='fa fa-star checked' />
            <span class='fa fa-star checked' />
            <span class='fa fa-star checked' />
            <span class='fa fa-star checked' />
          </div>
          <div className='ml-2 mt-2'>
            <span>excellent job</span>
          </div>
        </div>
      </div>
    ),
    id: 1
  },
  {
    data: (
      <div class='card slider-card'>
        <div class='card-body'>
          <div className='d-flex align-items-center justify-content-around'>
            <img
              src='https://www.w3schools.com/howto/img_avatar.png'
              alt='Avatar'
              className='avatar'
            />
            <h6>Michael Woods</h6>
          </div>
          <div className='d-flex ml-2 mt-2'>
            <span class='fa fa-star checked' />
            <span class='fa fa-star checked' />
            <span class='fa fa-star checked' />
            <span class='fa fa-star checked' />
          </div>
          <div className='ml-2 mt-2'>
            <span>
              great service from Nick,Charles,Ivan and of course Shane
            </span>
          </div>
        </div>
      </div>
    ),
    id: 2
  },
  {
    data: (
      <div class='card slider-card'>
        <div class='card-body'>
          <div className='d-flex align-items-center justify-content-around'>
            <img
              src='https://www.w3schools.com/howto/img_avatar.png'
              alt='Avatar'
              className='avatar'
            />
            <h6>Judy Brown</h6>
          </div>
          <div className='d-flex ml-2 mt-2'>
            <span class='fa fa-star checked' />
            <span class='fa fa-star checked' />
            <span class='fa fa-star checked' />
            <span class='fa fa-star checked' />
          </div>
          <div className='ml-2 mt-2'>
            <span>
              Technician was on time, did an excellent job! Actually showed me
              what was wrong with my clogged
            </span>
          </div>
        </div>
      </div>
    ),
    id: 2
  }
]

const HeroSection = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [animating, setAnimating] = useState(false)

  const next = () => {
    if (animating) return
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1
    setActiveIndex(nextIndex)
  }

  const previous = () => {
    if (animating) return
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1
    setActiveIndex(nextIndex)
  }

  const goToIndex = newIndex => {
    if (animating) return
    setActiveIndex(newIndex)
  }

  const slides = items.map(item => {
    return (
      <CarouselItem
        className='d-flex justify-content-center'
        className='custom-tag'
        tag='div'
        key={item.id}
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
      >
        <div className='w-100 d-flex justify-content-center'>{item.data}</div>
        <CarouselCaption
          className='text-danger'
          captionText={item.caption}
          captionHeader={item.caption}
        />
      </CarouselItem>
    )
  })

  return (
    <div>
      <style>
        {`.custom-tag {
                    width:100%;
              }`}
      </style>
      <Carousel activeIndex={activeIndex} next={next} previous={previous}>
        {slides}
        <CarouselControl
          direction='prev'
          directionText='Previous'
          onClickHandler={previous}
        />
        <CarouselControl
          direction='next'
          directionText='Next'
          onClickHandler={next}
        />
      </Carousel>
    </div>
  )
}

export default HeroSection
