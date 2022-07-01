import React from "react"
import "./nav.css"
import { motion } from "framer-motion"

const Nav = () => {
  return (
    <header className="header-container">
      <nav className="nav-container">
        <div className="container-list">
          <ul className="list-nav">
            <motion.li
              initial={{ y: -10, opacity: 0 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                type: "spring",
                bounce: 0.6,
                delay: 1,
              }}
            >
              Home
            </motion.li>
            <motion.li
              initial={{ y: -10, opacity: 0 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                type: "spring",
                bounce: 0.6,
                delay: 1.2,
              }}
            >
              Docs
            </motion.li>
            <motion.li
              initial={{ y: -10, opacity: 0 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                type: "spring",
                bounce: 0.6,
                delay: 1.4,
              }}
            >
              Blogs
            </motion.li>
            <motion.li
              initial={{ y: -10, opacity: 0 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                type: "spring",
                bounce: 0.6,
                delay: 1.6,
              }}
            >
              Contact
            </motion.li>
          </ul>
        </div>
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
          <motion.h6>GymJs</motion.h6>
        </motion.div>
      </nav>
    </header>
  )
}

export default Nav
