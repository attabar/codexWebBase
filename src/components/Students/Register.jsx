import React, { useState } from 'react'
import './css/Register.css';
import logo from '../img/logo.jpg';
const Register = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
    })

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]:value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Submitted: " + formData);  
    }

  return (
    <div className='register-container'>
        <img className='register-logo' src={logo} alt="" />
      <h2>Sign Up for Our Online Tech School</h2>
      <form onSubmit={handleSubmit}>
      <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          </label>
          <label>
          Confirm Password:
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />
        </label>
        <button className='submit-button' type="submit">Sign Up</button>
      </form>
    </div>
  )
}

export default Register