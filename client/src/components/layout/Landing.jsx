import React from 'react'
import LandingOne from '../common/Landing1'
import LandingTwo from '../common/Landing2'
import LandingThree from '../common/Landing3'
import './Landing.css'

const Landing = () => {
  return (
    <div className="landingPage">
      <LandingOne/>
      <div className="right">
        <LandingThree/>
        <LandingTwo/>
      </div>
    </div>
  )
}

export default Landing;