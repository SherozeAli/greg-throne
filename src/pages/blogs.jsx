/* eslint-disable react/jsx-filename-extension */
import React from 'react'
import Layout from '../components/Layout/index'
import SEO from '../components/SEO/index'
import BlogIndex from '../components/Blogs'

const Blog = () => (
  <Layout>
    <SEO title='Blogs' />
    <BlogIndex />
  </Layout>
)

export default Blog
