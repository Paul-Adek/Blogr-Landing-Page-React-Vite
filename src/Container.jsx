import React from 'react'
import Header from './components/Header'
import SectionOne from './components/SectionOne'
import SectionTwo from './components/SectionTwo'
import SectionThree from './components/SectionThree'
import Footer from './components/Footer'

function Container() {
  return (
    <div className='grid grid-cols-12 grid-rows-[auto_1fr_auto] h-screen font-altOverpass bg-white'>
      <Header />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <Footer />
    </div>
  )
}

export default Container