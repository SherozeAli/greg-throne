/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react'
import './index.css'

const BlogSidebar = () => (
  <>
    <div className="row">
      <div className="col-12 p-0">
        <form action="" method="get" className="search-form">
          <input type="text" id="search-field" className="search-field" placeholder="Search" name="s" />
          <button type="submit" id="search-button" className="search-button">
            <i className="fa fa-search" aria-hidden="true" />
          </button>
        </form>
      </div>
    </div>

    <div className="row blog-archives mt-5">
      <div className="col-12">
        <p className="archive-title">Archives</p>
        <ul className="archives-list">
          <li><a href="#">April 2019</a></li>
          <li><a href="#">February 2019</a></li>
          <li><a href="#">January 2019</a></li>
          <li><a href="#">December 2018</a></li>
          <li><a href="#">November 2018</a></li>
          <li><a href="#">October 2018</a></li>
          <li><a href="#">September 2018</a></li>
          <li><a href="#">August 2018</a></li>
          <li><a href="#">March 2018</a></li>
          <li><a href="#">November 2017</a></li>
          <li><a href="#">May 2017</a></li>
          <li><a href="#">October 2016</a></li>
          <li><a href="#">September 2016</a></li>
          <li><a href="#">August 2016</a></li>
          <li><a href="#">July 2016</a></li>
          <li><a href="#">June 2016</a></li>
          <li><a href="#">May 2016</a></li>
        </ul>
      </div>
    </div>

    <div className="row blog-categories mt-5">
      <div className="col-12">
        <p className="categories-title">Categories</p>
        <ul className="categories-list">
          <li><a href="#">Blog Categories</a></li>
          <li><a href="#">Energy Conservation</a></li>
        </ul>
      </div>
    </div>
  </>
)

export default BlogSidebar
