import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Projects from "../components/Projects"
//import SEO from '../components/SEO'

const ProjectsPage = ({
  data:{allStrapiProjects: {nodes:projects}}
}) => {
  return (
    <Layout>
      <section className="projects-page">
        <Projects projects={projects} title="all projects" />
      </section>
    </Layout>
  )
}

export const query = graphql`
  {
    allStrapiProjects {
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

export default ProjectsPage
