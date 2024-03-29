import React from "react"
import PropTypes from "prop-types"
import Image from "gatsby-image"
import { FaGithubSquare, FaShareSquare } from "react-icons/fa"



const Project = ({description, title, deployed, stack, github, index, screenshot, id }) => {
  return (
  <article key={id} className="project">
    <Image fluid={screenshot.childImageSharp.fluid} className="project-img" />
    <div className="project-info">
      <span className="project-number">0{index+1}.</span>
      <h3>{title}</h3>
      <p className="project-desc">{description}</p>
      <div className="project-stack">
        {stack.map(item => {
          return <span key={item.id}>{item.tech}</span>
        })}
      </div>
      <div className="project-links">
        <a href={github}>
          <FaGithubSquare className="project-icon" />
        </a>
        <a href={deployed}>
          <FaShareSquare className="project-icon" />
        </a>
      </div>
    </div>
  </article>
  )
}

// Project.propTypes = {
//   title: PropTypes.string.isRequired,
//   github: PropTypes.string.isRequired, 
//   url: PropTypes.string.isRequired, 
//   description: PropTypes.string.isRequired, 
//   image: PropTypes.object.isRequired,
//   stack: PropTypes.arrayOf(PropTypes.object).isRequired
// }

export default Project
