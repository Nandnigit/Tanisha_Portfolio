import React from 'react'
// import Image from './Tanisha_Image.jpg'
import resume from './Resume.pdf'
// import image3 from './image3_cropped_via_10015_io.png'
import './About.css'

function About() {
  return (
    <>
    <div className='About_full_page'>
     <div className='About_Page'>
      
      <div className='About_part2'>
      <h1 className='wrapper'><div className='typing'>About Me</div></h1>
      <p>Creative interior designer intern with strong drive to design for commercial and residential properties. Possesses strong attention to detail in colours and materials. Willing to go extra mile to complete projects</p>
      <h2>Skills</h2>
      <ul>
        <li>PhotoShop</li>
        <li>AutoCAD</li>
        <li>SketchUp</li>
        <li>V-Ray</li>
        <li>Lumion</li>
        <li>Team Management</li>
        <li>Communication</li>
        <li>Leadership</li>
      </ul>
      <h3>
        For More Information, You can visit to my <a href={resume} target="_blank">Resume</a>
      </h3>
      </div>
      
     </div>
     </div>
    </>
  )
}

export default About
