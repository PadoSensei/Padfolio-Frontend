import React from "react"

const Footer = () => {
  return (
    <footer className="footer">
      <div>
        {/* <SocialLinks styleClass="footer-links"></SocialLinks> */}
        <h5>
          copyright&copy;{new Date().getFullYear()}
            <span>
              <a href="https://github.com/PadoSensei">PadoSensei</a>
            </span> All Rights Reserved
        </h5>
      </div>
    </footer>
  )
}

export default Footer
