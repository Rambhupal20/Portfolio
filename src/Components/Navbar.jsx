import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className="bg-container">
      <div className="List-items">
        <ul className="head">PORTFOLIO</ul>
        <ul><a href="#home" >Home</a></ul>
        <ul><a href="#about" >About</a></ul>
        <ul><a href="#projects" >Projects</a></ul>
        <ul><a href="#skills" >Skills</a></ul>
        <ul><a href="#contact" >Contact</a></ul>
        <ul><a href="https://drive.google.com/drive/folders/1wpJVYV5yjt_YXBimCYJRF6XQoaAZ3e2-" className="nav-link" target='_blank'>Resume</a></ul>
      </div>
    </div>
  )
}

export default Navbar
