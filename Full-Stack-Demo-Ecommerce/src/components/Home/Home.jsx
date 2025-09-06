import React from 'react'
import Navbar from '../Shared/Navbar/Navbar'
import Hero from '../Hero/Hero'
import './Home.css'
import TopProducts from '../TopProducts/TopProducts'
import Footer from '../Shared/Footer/Footer'

function Home() {
  return (
    <div className='bg-brand bg-brand-container'>
        <Navbar />
        <div className='container mt-4 hero-container my-4'>
            <Hero />
        </div>

        <div className='container my-4'>
            <TopProducts />
        </div>
        <Footer />
    </div>
  )
}

export default Home
