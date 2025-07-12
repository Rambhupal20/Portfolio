import React from 'react'
import './About.css'

const About = () => {
  return (
    <div>
        <div>
            <div className='About-container'>
                <div className='about'>
                    <h1 className='about-me'>About Me:</h1>
                <p className='About-content'>I’m P.RAMBHUPAL REDDY, a Mechanical Engineering graduate with a strong interest in software development. I enjoy building user-friendly web applications and exploring how technology can solve real-world problems. With skills in HTML, CSS, JavaScript, and Python, I’m constantly working on new projects to improve my knowledge and contribute meaningfully to the tech world.</p>
                </div>
                <div className='about-image-card'>
                    <img src="/photo 11.jpg" alt="my photo" className="image" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default About