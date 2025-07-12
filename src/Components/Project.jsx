import React from 'react'
import './Project.css'

const Project = () => {
  return (
    <div className='project'>
        <div>
            <h1 className='project-title'>Project</h1>
            <p className='project-content'>Explore my latest work and personal projects. Each project represents my passion for creating meaningful and innovative solutions.</p>
            <div className='projects-cards'>
                <div className='project-card'>
                    <img src="https://i.ytimg.com/vi/eD6Z5_oadDc/sddefault.jpg" alt="" className='project-image'/>
                    <h1 className='project-name'>Food Site</h1>
                    <p className='about-project'>"A responsive food ordering website designed to browse menus, place orders, and enjoy a smooth user experience."</p>
                    <p >Tools</p>
                    <div className='tools-container'>
                    <p className='project-tools'>HTML</p>
                    <p className='project-tools'>CSS</p>
                    <p className='project-tools'>Java Script</p>
                    </div>
                </div>
                <div className='project-card'>
                    <img src="https://miro.medium.com/v2/resize:fit:1400/1*5kkYTEmKWakEUzf4DWp6QQ.png" alt="" className='project-image'/>
                    <h1 className='project-name'>My-TODO</h1>
                    <p className='about-project'>"A simple and responsive ToDo app built to help users manage daily tasks efficiently with add, delete, and mark-as-done features."</p>
                    <p >Tools</p>
                    <div className='tools-container'>
                    <p className='project-tools'>React Js</p>
                    <p className='project-tools'>CSS</p>
                    <p className='project-tools'>Java Script</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Project