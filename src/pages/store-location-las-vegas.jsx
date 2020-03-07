import React, { Component } from 'react'
import Layout from '../components/Layout/index'
import SEO from '../components/SEO/index'
import StoreLocationLasVegas from '../components/Store-Location-las-vegas/index'

const LasVegas = () => {
  return (
    <Layout>
      <SEO title='las-vegas' />
      <div>
        <StoreLocationLasVegas />
      </div>
    </Layout>
  )
}

export default LasVegas
