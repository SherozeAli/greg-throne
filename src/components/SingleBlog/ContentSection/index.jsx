/* eslint-disable global-require */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Link } from 'gatsby'
import './index.css'

const ContentSection = () => (
  <div className="single-blog-wrapper row">
    <div className="col-12">
      <div className="row">
        <div className="col-12">
          <Link to="/">
            <img className="img-fluid" src={require('../../../../static/blog-images/Earth-day.jpeg')} alt="Earth-Day" />
          </Link>
          <h2 className="single-blog-title pt-3">
            <Link to="/">
              EARTH DAY: 6 PLUMBING IDEAS TO CONSERVE WATER
            </Link>
          </h2>
        </div>
      </div>

      <div className="row">
        <div className="col-12">
          <ul className="single-blog-meta">
            <li>
              <Link to="/">Blog Categories </Link>
            </li>
            <li>
              <Link to="/">Energy Conservation</Link>
            </li>
            <li>
              <Link to="/">
                / By hawthornephc
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="row">
        <div className="col-12">
          <ul className="single-blog-share">
            <li><a href="#"><i className="fa fa-facebook" aria-hidden="true" /></a></li>
            <li><a href="#"><i className="fa fa-twitter" aria-hidden="true" /></a></li>
            <li><a href="#"><i className="fa fa-instagram" aria-hidden="true" /></a></li>
            <li><a href="#"><i className="fa fa-linkedin" aria-hidden="true" /></a></li>
          </ul>
        </div>
      </div>

      <div className="row">
        <div className="col-12">
          <hr />

          <p className="single-blog-content">
            Earth Day’s Inception began on April 22, 1969.  Since then our awareness of the
            need for conversation of our greatest resources have dramatically improved. We
            owe it to ourselves and future generations to leave our world a better place than
            we found it.
            <br />
            The good news is that there are benefits to this consciousness that have both
            health and financial benefits.
            <br />
            Those of us that live in the west in areas such as Nevada and California are no
            strangers to the somewhat stringent requirements of Water conservation.
          </p>
        </div>
      </div>
    </div>
  </div>
)

export default ContentSection
