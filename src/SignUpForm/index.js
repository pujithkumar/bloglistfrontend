import React, {useState} from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './index.css'

const SignUpForm = () => {
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const navigate = useNavigate();

    const registerUser = (e) => {
        e.preventDefault();
        const body = {name,email,password}
        if(name === "" || email === "" || password === ""){
            alert("Enter your details to register");
            navigate("/signup")
        }
        else{
            axios.post("http://localhost:5555/blogs/registration",body)
            alert("Account Created Successfully");
            navigate('/login')
        }
    }

  return (
    <div className='signup-bg-container'>
        <div>
        <form onSubmit = {registerUser} className='signup-form'>
        <h1>User Registration</h1>
            <div className='signup-input-field'>
                <label htmlFor = "name" className='name-field'>Name</label>
                <span className='icon'>
                    <ion-icon name = "person-outline"></ion-icon>
                </span>
                <input type = "text" value = {name} onChange = {(e) => setName(e.target.value)} />
            </div>
            <div className='signup-input-field'>
                <label htmlFor = "email" className='email-field'>E-mail</label>
                <span className='icon'>
                    <ion-icon name = "mail-outline"></ion-icon>
                </span>
                <input type = "email" value = {email} onChange = {(e) => setEmail(e.target.value)} />   
            </div>
            <div className='signup-input-field'>
                <label htmlFor = "password" className='password-field'>Password</label>
                <span className='icon'>
                    <ion-icon name = "lock-closed-outline"></ion-icon>
                </span>
                <input type = "password" value = {password} onChange = {(e) => setPassword(e.target.value)} />
            </div>
            <input type = "submit" value = "Register" className='btn'/>
        </form>
        </div>
    </div>
  )
}

export default SignUpForm