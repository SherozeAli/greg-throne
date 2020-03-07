/* eslint-disable react/jsx-filename-extension */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Breadcrumb, BreadcrumbItem } from 'reactstrap'
import './index.css'

const BreadCrumb = () => (
  <section id="blogs-bread-crumb">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <Breadcrumb>
            <BreadcrumbItem>
              YOU ARE HERE
            </BreadcrumbItem>

            <BreadcrumbItem>
              <a href="#">Home</a>
            </BreadcrumbItem>

            <BreadcrumbItem active>Blogs</BreadcrumbItem>
          </Breadcrumb>
        </div>
      </div>
    </div>
  </section>
)

export default BreadCrumb
