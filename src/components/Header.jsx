import React from 'react'
import heroImg from '../../src/images/illustration-hero.svg'

const Header = () => {
  return (
    <div className="header container">
      <div className="left-header flex flex-col">
        <h1 className="common-h1">A Simple Bookmark Manager</h1>
        <p className="common-para">A clean and simple interface to organize your favourite websites. Open a new
          browser tab and see your sites load instantly. Try it for free.</p>

        <div className="header-btn-container flex">
          <button className="btn get-in-chrome-btn">Get it on Chrome</button>
          <button className="btn get-in-firefox-btn">Get it on Firefox</button>
        </div>
      </div>

      <div className="right-header">
        <img src={heroImg} alt="" className="hero-img" />
      </div>
    </div>
  )
}

export default Header