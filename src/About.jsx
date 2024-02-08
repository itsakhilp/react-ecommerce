import React from 'react'
import HeroSection from './components/HeroSection'

const About = () => {
    const data = {
      myname : "@K-commerce"
    }
  return (
      <>
      <HeroSection myData={data}/>
      </>
  )
}

export default About