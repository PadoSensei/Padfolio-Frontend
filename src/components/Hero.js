import React from "react"
import Image from "gatsby-image"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"


const Hero = () => {
  
  return (
    <header className="hero">
      <div className="section-center hero-center">
        <article className="hero-info">
          <div className="underline"></div>
          <h1>Hi I'm Padraig!</h1>
          <h4>Full Stack Software Engineer</h4>
          <Link to="./contact" className="btn">
            Contact Me
          </Link>
          {/* <SocialLinks /> */}
        </article>
      </div>
    </header>
  )
}

export default Hero
