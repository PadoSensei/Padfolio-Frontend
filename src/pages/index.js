import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Services from "../components/Services"
import Projects from "../components/Projects"
import SEO from '../components/SEO'

export default ({data}) => {
  const { allStrapiProjects: {
    nodes: projects
  }} = data
  
  return (
    <Layout>
      <SEO title="Home" description="Homepage"/>
      <Hero />
      <Services />
      <Projects projects={projects} title="featured project" showLink/>
    </Layout>
  )
}
export const query = graphql`
  {
    allStrapiProjects(filter: {featured: {eq: true}}) {
      nodes {
        deployed
        id
        description
        featured
        github
        screenshot {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        title
        stack {
          id
          tech
        }
      }
    }
  }
`