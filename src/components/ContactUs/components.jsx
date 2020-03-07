/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-irregular-whitespace */
import React from 'react'
import {
  Container, Row, Col, Button,
} from 'reactstrap'

const Parallax = () => (
  <Container fluid>
    <Row className="justify-content-center contact-parallax">
      <Col className="my-auto text-center contact-hero-section" style={{ color: 'white' }}>
        <h1>
          <strong>​GET STARTED TODAY!</strong>
        </h1>
        <h2>Serving the Reno and Las Vegas Areas for Over 20 Years!</h2>
      </Col>
    </Row>
  </Container>
)

const ContentCol = () => (
  <div className="m-4 contact-content-wrap">
    <h1 className="mt-5 mb-3">
      <strong>​Contact Hawthorne Plumbing, Heating & Cooling</strong>
    </h1>
    <h2 className="my-3">We've Got Your Plumbing & HVAC Needs Covered!</h2>
    <p className="mt-5">
      We've Got Your Plumbing & HVAC Needs Covered! Have a plumbing, heating or
      cooling emergency? Just call and we'll be there ASAP! Submit a request at
      your earliest convenience—Hawthorne Plumbing, Heating & Cooling makes it
      easy! Give our team a ring, lock in an appointment date using our online
      scheduling tool, or complete our contact form when you're ready.
    </p>
    <p className="mt-4">
      <strong>Schedule an Appointment </strong>
      We're available to answer your
      questions 24/7.
    </p>
    <h3 className="mt-4 mb-2">
      <strong>For Las Vegas, NV and Surrounding Areas</strong>
    </h3>
    <h4 className="mt-3 mb-3">
      <strong>How to Reach Us</strong>
    </h4>

    <h3>
      <a href="tel:(702) 871-1005"> (702) 871-1005 </a>
    </h3>

    <h4>
      4570 W Post Rd.
      {' '}
      <br />
      {' '}
      Suite #800, Las Vegas, NV 89118
    </h4>
    <h3>
      <a
        href="https://www.google.com/maps?f=q&hl=en&z=15&q=4570+W+Post+Rd.,Las+Vegas,NV,89118"
        target="_blank"
      >
        Map & Directions [+]
      </a>
    </h3>

    <h3 className="mt-5">
      <strong>For Reno, NV and Surrounding Areas </strong>
    </h3>
    <h4 className="mt-2">
      <strong>How to Reach Us</strong>
    </h4>

    <h3>
      <a href="tel:(775) 857-3333">(775) 857-3333</a>
    </h3>
    <h4>4690 Longley Ln #31, Reno, NV 89502</h4>
    <h3>
      <a
        target="_blank"
        href="https://www.google.com/maps/place/Hawthorne+Plumbing,+Heating+%26+Cooling/@39.4894132,-119.7511397,14.56z/
                            data=!4m8!1m2!2m1!1shawthorne!3m4!1s0x80993fe6df1c3619:0xba13daa83e1203a1!8m2!3d39.488239!4d-119.758755"
      >
        Map & Directions [+]
      </a>
    </h3>
  </div>
)

const ContactForm = () => (
  <div style={{ backgroundColor: '#BA0000' }} className="p-4 pb-5">
    <Row>
      <Col className="text-center pt-2 pb-3" style={{ color: '#ffffff' }}>
        <h1>Contact us</h1>
      </Col>
    </Row>
    <form className="mt-4">
      <div className="form-group ">
        <input
          type="text"
          className="form-control form-control-lg "
          id="name"
          aria-describedby="name"
          placeholder="Name"
        />
      </div>
      <div className="form-group">
        <input
          type="email"
          className="form-control form-control-lg"
          id="email"
          aria-describedby="email"
          placeholder="Email"
        />
      </div>
      <div className="form-group">
        <input
          type="password"
          className="form-control form-control-lg"
          id="passowrd"
          placeholder="Password"
        />
      </div>
      <div className="form-group">
        <textarea
          type="text"
          id="message"
          name="message"
          rows="2"
          className="form-control form-control-lg"
          placeholder="Service needed"
        />
      </div>
      <Button color="primary" className="large-button" block>
        Submit
      </Button>
    </form>
  </div>
)

const fistRow = [
  {
    title: 'Same-Day Service',
    icon: (
      <svg
        className="tcb-icon"
        viewBox="0 0 576 512"
        data-id="icon-star-regular"
        data-name=""
      >
        <path d="M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z" />
      </svg>
    ),
  },
  {
    title: '24/7 Emergency Service',
    icon: (
      <svg
        className="tcb-icon"
        viewBox="0 0 512 512"
        data-id="icon-clock-regular"
        data-name=""
      >
        <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm61.8-104.4l-84.9-61.7c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h32c6.6 0 12 5.4 12 12v141.7l66.8 48.6c5.4 3.9 6.5 11.4 2.6 16.8L334.6 349c-3.9 5.3-11.4 6.5-16.8 2.6z" />
      </svg>
    ),
  },
  {
    title: 'Family Owned & Operated',
    icon: (
      <svg
        className="tcb-icon"
        viewBox="0 0 640 512"
        data-id="icon-users-solid"
        data-name=""
      >
        <path d="M96 224c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm448 0c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm32 32h-64c-17.6 0-33.5 7.1-45.1 18.6 40.3 22.1 68.9 62 75.1 109.4h66c17.7 0 32-14.3 32-32v-32c0-35.3-28.7-64-64-64zm-256 0c61.9 0 112-50.1 112-112S381.9 32 320 32 208 82.1 208 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C179.6 288 128 339.6 128 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zm-223.7-13.4C161.5 263.1 145.6 256 128 256H64c-35.3 0-64 28.7-64 64v32c0 17.7 14.3 32 32 32h65.9c6.3-47.4 34.9-87.3 75.2-109.4z" />
        {' '}
      </svg>
    ),
  },
  {
    title: 'Green and Energy-Efficient',
    icon: (
      <svg
        className="tcb-icon"
        viewBox="0 0 640 512"
        data-id="icon-cogs-regular"
        data-name=""
      >
        <path d="M217.1 478.1c-23.8 0-41.6-3.5-57.5-7.5-10.6-2.7-18.1-12.3-18.1-23.3v-31.7c-9.4-4.4-18.4-9.6-26.9-15.6l-26.7 15.4c-9.6 5.6-21.9 3.8-29.5-4.3-35.4-37.6-44.2-58.6-57.2-98.5-3.6-10.9 1.1-22.7 11-28.4l26.8-15c-.9-10.3-.9-20.7 0-31.1L12.2 223c-10-5.6-14.6-17.5-11-28.4 13.1-40 21.9-60.9 57.2-98.5 7.6-8.1 19.8-9.9 29.5-4.3l26.7 15.4c8.5-6 17.5-11.2 26.9-15.6V61.4c0-11.1 7.6-20.8 18.4-23.3 44.2-10.5 70-10.5 114.3 0 10.8 2.6 18.4 12.2 18.4 23.3v30.4c9.4 4.4 18.4 9.6 26.9 15.6L346.2 92c9.7-5.6 21.9-3.7 29.6 4.4 26.1 27.9 48.4 58.5 56.8 100.3 2 9.8-2.4 19.8-10.9 25.1l-26.6 16.5c.9 10.3.9 20.7 0 31.1l26.6 16.5c8.4 5.2 12.9 15.2 10.9 24.9-8.1 40.5-29.6 71.3-56.9 100.6-7.6 8.1-19.8 9.9-29.5 4.3l-26.7-15.4c-8.5 6-17.5 11.2-26.9 15.6v31.7c0 11-7.4 20.6-18.1 23.3-15.8 3.8-33.6 7.2-57.4 7.2zm-27.6-50.7c18.3 2.9 36.9 2.9 55.1 0v-44.8l16-5.7c15.2-5.4 29.1-13.4 41.3-23.9l12.9-11 38.8 22.4c11.7-14.4 21-30.5 27.6-47.7l-38.8-22.4 3.1-16.7c2.9-15.9 2.9-32 0-47.9l-3.1-16.7 38.8-22.4c-6.6-17.2-15.9-33.3-27.6-47.7l-38.8 22.4-12.9-11c-12.3-10.5-26.2-18.6-41.3-23.9l-16-5.7V80c-18.3-2.9-36.9-2.9-55.1 0v44.8l-16 5.7c-15.2 5.4-29.1 13.4-41.3 23.9l-12.9 11L80.5 143c-11.7 14.4-21 30.5-27.6 47.7l38.8 22.4-3.1 16.7c-2.9 15.9-2.9 32 0 47.9l3.1 16.7-38.8 22.4c6.6 17.2 15.9 33.4 27.6 47.7l38.8-22.4 12.9 11c12.3 10.5 26.2 18.6 41.3 23.9l16 5.7v44.7zm27.1-85.1c-22.6 0-45.2-8.6-62.4-25.8-34.4-34.4-34.4-90.4 0-124.8 34.4-34.4 90.4-34.4 124.8 0 34.4 34.4 34.4 90.4 0 124.8-17.3 17.2-39.9 25.8-62.4 25.8zm0-128.4c-10.3 0-20.6 3.9-28.5 11.8-15.7 15.7-15.7 41.2 0 56.9 15.7 15.7 41.2 15.7 56.9 0 15.7-15.7 15.7-41.2 0-56.9-7.8-7.9-18.1-11.8-28.4-11.8zM638.5 85c-1-5.8-6-10-11.9-10h-16.1c-3.5-9.9-8.8-19-15.5-26.8l8-13.9c2.9-5.1 1.8-11.6-2.7-15.3C591 11.3 580.5 5.1 569 .8c-5.5-2.1-11.8.1-14.7 5.3l-8 13.9c-10.2-1.9-20.7-1.9-30.9 0l-8-13.9c-3-5.1-9.2-7.3-14.7-5.3-11.5 4.3-22.1 10.5-31.4 18.2-4.5 3.7-5.7 10.2-2.7 15.3l8 13.9c-6.7 7.8-12 16.9-15.5 26.8H435c-5.9 0-11 4.3-11.9 10.2-2 12.2-1.9 24.5 0 36.2 1 5.8 6 10 11.9 10h16.1c3.5 9.9 8.8 19 15.5 26.8l-8 13.9c-2.9 5.1-1.8 11.6 2.7 15.3 9.3 7.7 19.9 13.9 31.4 18.2 5.5 2.1 11.8-.1 14.7-5.3l8-13.9c10.2 1.9 20.7 1.9 30.9 0l8 13.9c3 5.1 9.2 7.3 14.7 5.3 11.5-4.3 22.1-10.5 31.4-18.2 4.5-3.7 5.7-10.2 2.7-15.3l-8-13.9c6.7-7.8 12-16.9 15.5-26.8h16.1c5.9 0 11-4.3 11.9-10.2 1.9-12.2 1.9-24.4-.1-36.2zm-107.8 50.2c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm107.8 255.4c-1-5.8-6-10-11.9-10h-16.1c-3.5-9.9-8.8-19-15.5-26.8l8-13.9c2.9-5.1 1.8-11.6-2.7-15.3-9.3-7.7-19.9-13.9-31.4-18.2-5.5-2.1-11.8.1-14.7 5.3l-8 13.9c-10.2-1.9-20.7-1.9-30.9 0l-8-13.9c-3-5.1-9.2-7.3-14.7-5.3-11.5 4.3-22.1 10.5-31.4 18.2-4.5 3.7-5.7 10.2-2.7 15.3l8 13.9c-6.7 7.8-12 16.9-15.5 26.8h-16.1c-5.9 0-11 4.3-11.9 10.2-2 12.2-1.9 24.5 0 36.2 1 5.8 6 10 11.9 10H451c3.5 9.9 8.8 19 15.5 26.8l-8 13.9c-2.9 5.1-1.8 11.6 2.7 15.3 9.3 7.7 19.9 13.9 31.4 18.2 5.5 2.1 11.8-.1 14.7-5.3l8-13.9c10.2 1.9 20.7 1.9 30.9 0l8 13.9c3 5.1 9.2 7.3 14.7 5.3 11.5-4.3 22.1-10.5 31.4-18.2 4.5-3.7 5.7-10.2 2.7-15.3l-8-13.9c6.7-7.8 12-16.9 15.5-26.8h16.1c5.9 0 11-4.3 11.9-10.2 2-12.1 2-24.4 0-36.2zm-107.8 50.2c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z" />
        {' '}
      </svg>
    ),
  },
]

const secondRow = [
  {
    title: '2-Year Warranty on All Approved Repairs',
    icon: (
      <svg
        className="tcb-icon"
        viewBox="0 0 384 512"
        data-id="icon-clipboard-check-regular"
        data-name=""
      >
        <path d="M269.3 225.8c-3.9-3.9-10.2-3.9-14.1-.1l-88 87.3-38.1-38.5c-3.9-3.9-10.2-3.9-14.1-.1l-23.6 23.4c-3.9 3.9-3.9 10.2-.1 14.1l68.5 69.1c3.9 3.9 10.2 3.9 14.1.1l118.6-117.6c3.9-3.9 3.9-10.2.1-14.1l-23.3-23.6zM336 64h-80c0-35.3-28.7-64-64-64s-64 28.7-64 64H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zM192 48c8.8 0 16 7.2 16 16s-7.2 16-16 16-16-7.2-16-16 7.2-16 16-16zm144 408c0 4.4-3.6 8-8 8H56c-4.4 0-8-3.6-8-8V120c0-4.4 3.6-8 8-8h40v32c0 8.8 7.2 16 16 16h160c8.8 0 16-7.2 16-16v-32h40c4.4 0 8 3.6 8 8v336z" />
        {' '}
      </svg>
    ),
  },
  {
    title: 'Residential and Commercial Services',
    icon: (
      <svg
        className="tcb-icon"
        viewBox="0 0 512 512"
        data-id="icon-cog-solid"
        data-name=""
      >
        {' '}
        <path d="M444.788 291.1l42.616 24.599c4.867 2.809 7.126 8.618 5.459 13.985-11.07 35.642-29.97 67.842-54.689 94.586a12.016 12.016 0 0 1-14.832 2.254l-42.584-24.595a191.577 191.577 0 0 1-60.759 35.13v49.182a12.01 12.01 0 0 1-9.377 11.718c-34.956 7.85-72.499 8.256-109.219.007-5.49-1.233-9.403-6.096-9.403-11.723v-49.184a191.555 191.555 0 0 1-60.759-35.13l-42.584 24.595a12.016 12.016 0 0 1-14.832-2.254c-24.718-26.744-43.619-58.944-54.689-94.586-1.667-5.366.592-11.175 5.459-13.985L67.212 291.1a193.48 193.48 0 0 1 0-70.199l-42.616-24.599c-4.867-2.809-7.126-8.618-5.459-13.985 11.07-35.642 29.97-67.842 54.689-94.586a12.016 12.016 0 0 1 14.832-2.254l42.584 24.595a191.577 191.577 0 0 1 60.759-35.13V25.759a12.01 12.01 0 0 1 9.377-11.718c34.956-7.85 72.499-8.256 109.219-.007 5.49 1.233 9.403 6.096 9.403 11.723v49.184a191.555 191.555 0 0 1 60.759 35.13l42.584-24.595a12.016 12.016 0 0 1 14.832 2.254c24.718 26.744 43.619 58.944 54.689 94.586 1.667 5.366-.592 11.175-5.459 13.985L444.788 220.9a193.485 193.485 0 0 1 0 70.2zM336 256c0-44.112-35.888-80-80-80s-80 35.888-80 80 35.888 80 80 80 80-35.888 80-80z" />
        {' '}
      </svg>
    ),
  },
  {
    title: 'We\'ll Leave Your Property Cleaner Than We Found It!',
    icon: (
      <svg
        className="tcb-icon"
        viewBox="0 0 448 512"
        data-id="icon-user-secret-light"
        data-name=""
      >
        {' '}
        <path d="M383.9 308.3l23.9-62.6c4-10.5-3.7-21.7-15-21.7h-43.2c1.5-7.8 2.4-15.8 2.4-24 0-7.2-.9-14.2-2.2-21.1 40.5-9.8 66.2-24.2 66.2-40.2 0-16.5-27-31.2-69.3-41-8.9-33.6-27.4-67.9-41.3-85.4-6.3-8-15.7-12.3-25.3-12.3-9.5 0-12.3 2.4-41.8 17.2-12.8 6.4-24.3 2.1-28.6 0C179.9 2.3 177.3 0 167.9 0c-9.6 0-18.9 4.3-25.2 12.2-13.9 17.5-32.4 51.8-41.3 85.4C59 107.4 32 122.2 32 138.7c0 16.1 25.7 30.5 66.2 40.2-1.3 6.9-2.2 13.9-2.2 21.1 0 8.2.9 16.2 2.4 24H56.3c-11.5 0-19.2 11.7-14.7 22.3l25.8 60.2C27.3 329.8 0 372.7 0 422.4v44.8C0 491.9 20.1 512 44.8 512h358.4c24.7 0 44.8-20.1 44.8-44.8v-44.8c0-48.4-25.8-90.4-64.1-114.1zM128 200c0-2.7.3-5.3.6-7.9 1.3.8 5.1 3.3 5.8 5.4 3.9 11.9 7 24.6 16.5 33.4 8 7.4 47 25.1 64-25 2.8-8.4 15.4-8.4 18.3 0 16 47.4 53.9 34.4 64 25 9.5-8.8 12.7-21.5 16.5-33.4.7-2.1 4.4-4.6 5.8-5.4.3 2.6.6 5.2.6 7.9 0 52.9-43.1 96-96 96S128 252.9 128 200zm-.7-75.5c.7-2.7 12.3-57 40.5-92.5 28.7 14.4 37.7 20.5 56.2 20.5 18.6 0 27.7-6.3 56.2-20.5l.1.1c28.1 35.4 39.7 89.6 40.4 92.4 21.4 4.9 35.8 7.9 51 14.2-24.3 9.9-75.4 21.3-147.7 21.3s-123.4-11.4-147.7-21.3c15.2-6.3 29.9-9.3 51-14.2zM44.8 480c-7.1 0-12.8-5.7-12.8-12.8v-44.8c0-36.5 19.2-69.5 51.4-88.2L108 320l-27.4-64h28.9c4.7 9.6 64.3 108.5 64.3 108.5L142.9 480H44.8zm131.2 0l32-120-21.9-38.4c12.1 3.8 24.6 6.4 37.9 6.4s25.9-2.6 37.9-6.4L240 360l32 120h-96zm240-12.8c0 7.1-5.7 12.8-12.8 12.8h-98.1l-30.8-115.5s59.6-98.9 64.3-108.5h31l-25 65.6 22.5 13.9c30.6 18.9 48.9 51.4 48.9 86.9v44.8z" />
        {' '}
      </svg>
    ),
  },
]

const WhyHire = () => (
  <>
    <Col>
      <Row>
        <Col className="text-center text-white my-5">
          <h1>Why Hire Our Team of Pros?</h1>
        </Col>
      </Row>
      <Row className="">
        {fistRow.map(({ icon, title }) => (
          <Col xs="12" md="3">
            <div
              className="text-center py-5 px-2 m-5"
              style={{ backgroundColor: 'white', borderRadius: 10 }}
            >
              <div className="icon-container">{icon}</div>
              <h4 className="why-hire-h4">{title}</h4>
            </div>
          </Col>
        ))}
        {secondRow.map(({ icon, title }) => (
          <Col xs="12" md="4">
            <div
              className="text-center py-5 px-3 m-5"
              style={{ backgroundColor: 'white', borderRadius: 10 }}
            >
              <div className="icon-container">{icon}</div>
              <h4 className="why-hire-h4">{title}</h4>
            </div>
          </Col>
        ))}
      </Row>
    </Col>
  </>
)
export {
  Parallax, ContentCol, ContactForm, WhyHire,
}
