import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Banner from './static/Banner';
import Navbar from './static/Navbar';
import Abouts from './static/Abouts';
import Features from './static/Features';
import Showcase from './static/Showcase';
import Work from './static/Work';
import Testimonial from './static/Testimonial';
import Plan from './static/Plan';
import Team from './static/Team';
import Touch from './static/Touch';
import Footer from './static/Footer';
import './static/style.css';



function App() {
  return (
    <div>
      <div className='bgImage'>
        <Navbar />
        <Banner />
        <Abouts />
        <Features />
        <Showcase />
        <Work />
        <Testimonial />
        <Plan />
        <Team />
        <Touch />
        <Footer />
      </div>
    </div>
  )
}

export default App
