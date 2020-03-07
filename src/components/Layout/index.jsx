import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Header from '../Header/index'
import Footer from '../Footer/index'
import 'bootstrap/dist/css/bootstrap.css'
import 'font-awesome/css/font-awesome.css'
import './index.css'

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <main>{children}</main>

      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
