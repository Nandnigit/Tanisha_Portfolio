import React from 'react'
import './Project.css'
import image1 from './df5.png'
function Project() {
  return (
    <>
     <div className='project_page'>
        <div className='project_inner_div'>
            <div><h1> My Projects</h1></div>
            <div className='Projects_list'>
        <div className='Residential'>
            <h2>Residential</h2>
            <div>
                <img src={image1} alt='project_image' height='300' width={300}></img>
                <img src={image1} alt='project_image' height='300' width={300}></img>
                <img src={image1} alt='project_image' height='300' width={300}></img>
            </div>

        </div>

        <div className='Commercial'>
            <h2>Commercial</h2>
            <div>
                <img src={image1} alt='project_image' height='300' width={300}></img>
                <img src={image1} alt='project_image' height='300' width={300}></img>
                <img src={image1} alt='project_image' height='300' width={300}></img>
            </div>
        </div>

        <div className='D_Views'>
            <h2>3D views</h2>
            <div>
                <img src={image1} alt='project_image' height='300' width={300}></img>
                <img src={image1} alt='project_image' height='300' width={300}></img>
                <img src={image1} alt='project_image' height='300' width={300}></img>
            </div>
        </div>
        
 
        </div>
        </div>
        </div> 
    </>
  )
}

export default Project
