import React, { useState } from 'react'
import emailjs from 'emailjs-com'
import './Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact: '',
    message: ''
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!formData.name || !formData.email || !formData.contact || !formData.message) {
      alert('Please fill in all fields.')
      return
    }

    const serviceID = 'service_fk8vujc'       // ✅ replace this
    const templateID = 'template_19dr4t8'     // ✅ replace this
    const publicKey = 'ZJ2LlfH79MV-d-im1'       // ✅ replace this

    const templateParams = {
      from_name: formData.name,
      email: formData.email,
      contact: formData.contact,
      message: formData.message
    }

    emailjs.send(serviceID, templateID, templateParams, publicKey)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text)
        alert('✅ Message sent to your Gmail!')
        setSubmitted(true)
        setFormData({ name: '', email: '', contact: '', message: '' })
      })
      .catch((error) => {
        console.error('FAILED...', error)
        alert('❌ Failed to send message. Please try again.')
      })
  }

  return (
    <div className='contact-bg-container'>
      <div>
        <h1 className='heading'>Get In Touch</h1>
        <p className='content'>
          Looking for freelance or full-time opportunities. Reach out, and let's work on something great!
        </p>

        <form className='text' onSubmit={handleSubmit}>
          <div className='holder'>
            <label className='title'>Name:</label>
            <input
              type='text'
              name='name'
              placeholder='Name'
              className='pop'
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div className='holder'>
            <label className='title'>Mail:</label>
            <input
              type='email'
              name='email'
              placeholder='Mail'
              className='pop'
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className='holder'>
            <label className='title'>Contact No:</label>
            <input
              type='text'
              name='contact'
              placeholder='Contact No'
              className='pop'
              value={formData.contact}
              onChange={handleChange}
            />
          </div>

          <div className='holder'>
            <label className='title'>Message:</label>
            <textarea
              name='message'
              placeholder='Message'
              className='popp'
              value={formData.message}
              onChange={handleChange}
            />
          </div>

          <div>
            <button type='submit' className='button'>Send</button>
          </div>

          {submitted && (
            <p style={{ color: 'lightgreen', marginTop: '10px' }}>
              ✅ Message sent successfully!
            </p>
          )}
        </form>


      </div>
    </div>
  )
}

export default Contact
