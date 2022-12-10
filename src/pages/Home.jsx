import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import ViewAll from '../components/ViewAll'

function Home() {
  return (
    <div className='w-full h-screen border-2 border-black bg-[#ecf0f1]'>
        
        <Header/>
        <Hero/>
        <ViewAll/>
    </div>
  )
}

export default Home