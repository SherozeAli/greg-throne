/* eslint-disable react/jsx-filename-extension */
import React from 'react'
import './index.css'
import BreadCrumb from '../Common/bread-crumb/index'
import BlogsListing from './blogs-listing/index'
import BlogSidebar from '../BlogsSidebar'

const Blogs = () => (
  <>
    <BreadCrumb />
    <section id='blogs-section' className='mt-5 mb-5'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-8'>
            <BlogsListing />
          </div>

          <div className='col-md-4 pl-md-5'>
            <BlogSidebar />
          </div>
        </div>
      </div>
    </section>
  </>
)

export default Blogs
