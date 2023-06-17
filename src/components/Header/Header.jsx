import React from "react"
import "./Header.css"
import Navbar from "../Navbar/Navbar"
import { Link, animateScroll as scroll } from "react-scroll"

const Header = () => {
  return (
    <div className="header flex flex-col" id="header">
      <Navbar />

      <div className="container flex">
        <div className="header-content">
          <h2 className="text-uppercase text-white op-07 fw-6 ls-2">
            Get inspired for your next tattoo.
          </h2>
          <h1 className="text-white fw-6 header-title">
            We’ve curated a gallery of beautiful tattoos for you to explore.
          </h1>
          <div className="btn-groups flex">
            <Link to="work" smooth={true} duration={500}>
              <button type="button" className="btn-item bg-brown fw-4 ls-2">
                See Our Works
              </button>
            </Link>
            <Link to="contact" smooth={true} duration={500}>
              <button type="button" className="btn-item bg-dark fw-4 ls-2">
                Contact Us
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
