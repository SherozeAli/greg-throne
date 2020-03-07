/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable global-require */
import React from 'react'
import { Link } from 'gatsby'
import blogData from './blogs-data.json'
import './index.css'

const BlogsListing = () => (
  <div className="blog-wrapper row">
    {blogData.blog.map((blog) => (
      <div className="col-12" key={blog.id}>
        <div className="row">
          <div className="col-12">
            <Link to={blog.slug}>
              <img className="img-fluid" src={require('../../../../static/blog-images/Earth-day.jpeg')} alt="Earth-Day" />
            </Link>
            <h2 className="blog-title pt-3">
              <Link to={blog.slug}>
                {blog.title}
              </Link>
            </h2>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <ul className="blog-meta">
              <li>
                <Link to="/">Blog Categories </Link>
              </li>
              <li>
                <Link to="/">{blog.category}</Link>
              </li>
              <li>
                <Link to="/">
                  / By
                  {blog.author}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <ul className="blog-share">
              <li><a href={blog.facebook}><i className="fa fa-facebook" aria-hidden="true" /></a></li>
              <li><a href={blog.twitter}><i className="fa fa-twitter" aria-hidden="true" /></a></li>
              <li><a href={blog.instagram}><i className="fa fa-instagram" aria-hidden="true" /></a></li>
              <li><a href={blog.linkedin}><i className="fa fa-linkedin" aria-hidden="true" /></a></li>
            </ul>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <hr />

            <p className="blog-content">
              {blog.content}
            </p>

            <Link className="read-more" to={blog.slug}>
              Read More
              <i className="fa fa-arrow-right ml-2" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>
    ))}
  </div>
)

export default BlogsListing
