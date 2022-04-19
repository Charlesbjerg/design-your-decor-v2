import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import LandingImage from "../components/cms/LandingImage"
import ContentCenter from "../components/cms/ContentCenter"
import ImageCard from "../components/cms/ImageCard"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="Design Your Decor: Homepage" />
      <LandingImage />
      <ContentCenter />
      <div className="grid md:grid-cols-2">
        <ImageCard title="Packages" 
                   content="Professional design packages that are inspired by your personality and preferences from £40."
                   image="kitchen.jpg"
                   link="/our-services/"
                   linkText="See Packages" />
        <ImageCard title="Individuals" 
                   content="A range of bespoke individual design tools for you to select for your convivence from £25."
                   image="paint-samples.jpg"
                   link="/our-services/"
                   linkText="See Individuals" />
      </div>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
        }
      }
    }
  }
`
