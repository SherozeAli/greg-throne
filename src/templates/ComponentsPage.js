import React from 'react'
import { graphql } from 'gatsby'

// import Layout from '../components/Layout.js'
import Gallery from '../components/Gallery'

// Export Template for use in CMS preview
export const ComponentsPageTemplate = ({
  title,
  subtitle,
  featuredImage,
  section1,
  section2,
  video,
  videoPoster,
  videoTitle,
  body,
  gallery
}) => (
    <main>

      <section className="section">
        <div className="container">
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>Our gallery component</h2>
          <Gallery images={gallery} />
        </div>
      </section>

      <section className="section">
        <div className="container">
        </div>
      </section>

      <section className="BackgroundVideo-section section">

      </section>

      <section className="section">
        <div className="container">
        </div>
      </section>

      <section className="section">
        <div className="container">

        </div>
      </section>
    </main>
  )

const ComponentsPage = ({ data: { page } }) => (
  // <Layout
  //   meta={page.frontmatter.meta || false}
  //   title={page.frontmatter.title || false}
  // >
  <ComponentsPageTemplate {...page} {...page.frontmatter} body={page.html} />
  // </Layout>
)

export default ComponentsPage

export const pageQuery = graphql`
  query ComponentsPage($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      ...Meta
      ...Gallery
      html
      frontmatter {
        title
        template
        subtitle
        featuredImage
        section1
        section2
        video
        videoPoster
        videoTitle
       
      }
    }
  }
`
