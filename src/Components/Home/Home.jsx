import React from 'react'
import './Home.css'
import image from './Tanisha_Image.jpg'
import About from '../About/About'
import Project from '../Project/Project'

function Home() {
  return (
    <>
      <div className='home_page'>
        <div className='home_inner_div'>
            <div className='home_content'>
            {/* <h4> Hello, I am Tanisha</h4>
            <p>I'm a Interior Designer</p> */}
            <div className="container">
  <p>Hello !! I'm</p>
  <section className="animation">
    <div className="first"><div>Tanisha Jain</div></div>
    <div className="second"><div>Interior Designer...</div></div>
    <div className="third"><div>Creative Thinker...</div></div>
  </section>
</div>
            </div>
            <div className='home_image'>
               <img src={image} alt='image' height='350'></img> 
            </div>
        </div>
      </div>
      <About/>
      <Project/>
      

      
    </>
  )
}

export default Home
