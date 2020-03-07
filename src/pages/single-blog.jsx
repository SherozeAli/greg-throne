/* eslint-disable react/jsx-filename-extension */
import React from 'react'
import Layout from '../components/Layout/index'
import SEO from '../components/SEO/index'
import SinglePost from '../components/SingleBlog/index'


const Blog = () => (
  <Layout>
    <SEO title="Blogs" />
    <SinglePost />
  </Layout>
)

export default Blog
