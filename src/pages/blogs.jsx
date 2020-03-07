/* eslint-disable react/jsx-filename-extension */
import React from 'react'
import Layout from '../components/Layout/index'
import SEO from '../components/SEO/index'
import Blogs from '../components/Blogs/index'

const Blog = () => (
  <Layout>
    <SEO title="Blogs" />
    <Blogs />
  </Layout>
)

export default Blog
