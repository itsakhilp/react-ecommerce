import React, { useContext } from 'react'
import HeroSection from './components/HeroSection'
import { useProductContext } from './context/ProductContext'


const About = () => {

    const {name} = useProductContext()
    const data = {
      myname : "@K-commerce"
    }
  return (
      <>
      {name}
      <HeroSection myData={data}/>
      </>
  )
}

export default About