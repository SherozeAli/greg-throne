import React, { Component } from 'react'
import Layout from '../components/Layout/index'
import SEO from '../components/SEO/index'
import StoreLocation from '../components/Store-Location/index'

const Storelocation = () => {
  return (
    <Layout>
      <SEO title='store-location' />
      <div>
        <StoreLocation />
      </div>
    </Layout>
  )
}

export default Storelocation
