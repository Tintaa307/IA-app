import React from "react"
import "./footer.css"
import { motion } from "framer-motion"

const Footer = () => {
  return (
    <footer className="container-footer">
      <div className="container-content">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.7,
            type: "spring",
            bounce: 0.6,
            delay: 0.8,
          }}
          className="container-logo"
        >
          <div className="logo">
            <h6>AI</h6>
          </div>
          <span>GymJs</span>
        </motion.div>
        <div className="container-slogan">
          <h6>Go on, try it now!</h6>
        </div>
        <div className="container-redes">
          <div className="red">
            <i class="ri-twitter-fill"></i>
          </div>
          <div className="red">
            <i class="ri-facebook-fill"></i>
          </div>
          <div className="red">
            <i class="ri-instagram-line"></i>
          </div>
          <div className="red">
            <i class="ri-github-fill"></i>
          </div>
        </div>
        <div className="container-recommends">
          <div className="recommend">
            <h6>Changelog</h6>
          </div>
          <div className="recommend">
            <h6>Press Kit</h6>
          </div>
          <div className="recommend">
            <h6>FAQ</h6>
          </div>
          <div className="recommend">
            <h6>Licese Manager</h6>
          </div>
        </div>
        <div className="container-copy">
          <h5>Design by Tintaa</h5>
          <h6>Copyright © 2020 GymJs.</h6>
        </div>
      </div>
    </footer>
  )
}

export default Footer
