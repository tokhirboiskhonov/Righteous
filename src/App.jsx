import React from 'react'

// import pages 
import AboutUs from './pages/AboutUs'
import ContactUs from './pages/ContactUs'
import Footer from './pages/Footer'
import Home from './pages/Home'
import Navbar from './pages/Navbar'
import Devider from './ui/Devider'

function App() {
    return (
        <div className='bg-light-white'>
            <Navbar />
            <Home />
            <AboutUs />
            <ContactUs />
            <Devider />
            <Footer />
        </div>
    )
}

export default App