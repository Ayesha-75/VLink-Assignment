import React, { useState } from 'react'
import './SignUp.css'
import { Link } from 'react-router-dom'


const Signup = () => {

    const [formData, setFormData] = useState({
        fullName:'',
        email:'',
        password:''
    })

    const [error, setError] = useState('')
    const [successMessage, setSuccessMessage] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
          ...prev,
          [name]: value
        }));
      };

    // Function to validate email format using regex
    const isValidEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    
        const newErrors = {};
        setSuccessMessage("");
    
        // Validate full name
        if (!formData.fullName.trim()) {
          newErrors.fullName = "Full Name is required";
        }
        if (formData.fullName === " ") {
            newErrors.fullName = 'Enter your Full Name'
        }
    
        // Validate email
        if (!formData.email.trim()) {
          newErrors.email = "Email is required";
        } else if (!isValidEmail(formData.email)) {
          newErrors.email = "Enter a valid email address";
        }
    
        // Validate password
        if (!formData.password) {
          newErrors.password = "Password is required";
        } else if (formData.password.length < 6) {
          newErrors.password = "Password must be at least 6 characters";
        }
    
        setError(newErrors);
        
        localStorage.setItem("user", JSON.stringify(formData));
        
        if (Object.keys(newErrors).length === 0) {
          console.log("Signup Successful", formData);
    
          setSuccessMessage("User registered successfully!");
          setFormData({ fullName: "", email: "", password: "" });
        }
      };

    


  return (
    
    <div className='container'>
        <div className='bottom-container'>
            <h1>Signup</h1>
        <form className='form-container' onSubmit={handleSubmit}>
            <div className='input-container'>
            <label htmlFor='name'>Full Name</label> <br/>
            <input type='text' name="fullName"
            value={formData.fullName}
            className='input' placeholder='Enter Your Name'
            onChange={handleChange}
            />
            {error.fullName && <p style={{ color: "red" }}>{error.fullName}</p>}
            </div>
            <div className='input-container'>
            <label>Email</label> <br/>
            <input className='input' name="email"
            placeholder='Enter Your Email' type='email'
            value={formData.email}
            onChange={handleChange}
            />
            {error.email && <p style={{ color: "red" }}>{error.email}</p>}

            </div>
            <div className='input-container'>
            <label>Password</label> <br/>
            <input className='input' placeholder='Enter Your Password' type='password'
            value={formData.password} name="password"
            onChange={handleChange}
            />
            {error.password && <p style={{ color: "red" }}>{error.password}</p>}

            </div>
            <div className='btn-container'>
                <button type='submit' className='signup-btn'>Register</button>
                {successMessage && (
                        <p style={{ color: "green", marginTop: "15px" }}>{successMessage}</p>
                    )}
            </div>
            <p>Already have an account? <Link to='/login'>Login</Link></p>
            </form>
        </div>
    </div>
  )
}

export default Signup