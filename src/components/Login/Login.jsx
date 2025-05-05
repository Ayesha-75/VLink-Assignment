import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Login.css'


const Login = () => {

  const [formData, setFormData] =useState({email:'',password:''})
  const [error, setError] = useState("")
  const [loginSuccess, setLoginSuccess] = useState(false)

  const handleChange = e=> {
    const {name,value} = e.target;
    setFormData(prev => ({...prev, [name]:value}))
  }

  const handleSubmit = e => {
    e.preventDefault()
    setError("")

    const storedUser = JSON.parse(localStorage.getItem("user"))

    if(!storedUser){
      setError("No user found. Please register")
      return
    }

    if(storedUser.email === formData.email && storedUser.password === formData.password){
      setLoginSuccess(true)
    }else{
      setError("Invalid email or password")
    }

    setFormData({email:"", password:""})
  }

  return (

    <div className='container'>
    <div className='bottom-container'>
            <h1>Login Page</h1>
    <form onSubmit={handleSubmit} className='form-container'>
        
        <div className='input-container'>
        <label>Email</label> <br/>
        <input className='input' 
        value={formData.email}
        onChange={handleChange}
        name='email'
        placeholder='Enter Your Email' type='text'/>
        </div>
        <div className='input-container'>
        <label>Password</label> <br/>
        <input value={formData.password}
        onChange={handleChange} name='password' className='input' placeholder='Enter Your Password' type='password'/>
        </div>
        <div className='btn-container'>
            <button type='submit' className='btn'>Login</button>
        </div>
        {error && <p style={{color:"red"}}>{error}</p>}
        {loginSuccess && <p style={{ color: "green" }}>Login successful!</p>}
    </form>
    <p>Don't have an account? <Link to='/signup'>Signup</Link></p>
    </div>
    </div>
  )
}

export default Login