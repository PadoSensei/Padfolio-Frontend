import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Title from "../components/Title"
import Image from "gatsby-image"
import ReactMarkdown from "react-markdown";
import SEO from '../components/SEO'


const About = ({
  data:
    {about: {nodes}, 
  },

  
}) => {
  const {title, stack, biography, linkedIn, cv_link, headshot} = nodes[0]
  return (
    <Layout>
      <SEO title="About" description="About Padraig" />
      <section className="about-page">
        <div className="section-center about-center">
          <Image fluid={headshot.childImageSharp.fluid} className="about-img"/>
          <article className="about-text">
            <Title title={title} />
            <ReactMarkdown>{biography}</ReactMarkdown>
            <div className="about-stack">
              {stack.map((item)=>{
                return <span key={item.id}>{item.tech}</span>
              })}
            </div>
            <div className="button-box">
                <a href={linkedIn}  className="btn center-btn">Jump to my LinkedIn</a>
                <a href={cv_link}  className="btn center-btn">Have a look at my CV</a>
            </div>
          </article>
        </div>
      </section>
    </Layout>
  )
}

export const query = graphql`
  {
    about: allStrapiAbout {
      nodes {
        biography
        title
        cv_link
        linkedIn
        stack {
          tech
          id
        }
        headshot {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
export default About
