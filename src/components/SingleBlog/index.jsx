/* eslint-disable react/jsx-filename-extension */
import React from 'react'
import './index.css'
import BreadCrumb from '../Common/bread-crumb/index'
import BlogSidebar from '../BlogsSidebar'
import ContentSection from './ContentSection'

const SinglePost = () => (
  <>
    <BreadCrumb />
    <section id="single-blogs-section" className="mt-5 mb-5">
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <ContentSection />
          </div>

          <div className="col-md-4 pl-md-5">
            <BlogSidebar />
          </div>
        </div>
      </div>
    </section>
  </>
)

export default SinglePost
