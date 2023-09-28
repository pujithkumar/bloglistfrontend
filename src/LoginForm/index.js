import React, {useState} from 'react'
import axios from 'axios';
import Cookies from 'js-cookie';
import { Link, useNavigate, redirect } from 'react-router-dom';
import './index.css'

const LoginForm = () => {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const navigate = useNavigate();

    const loginUser = async(e) => {
        e.preventDefault();
        const loginData = await axios.post("http://localhost:5555/blogs/login",{email,password})
        if (loginData.statusText === "OK") {
            onSubmitSuccess(loginData.data);
            alert("Login Successful");
            navigate('/')
        }
        else{
            alert("Please check your credentials");
            redirect("/login");
        }
        setEmail('');
        setPassword('');
    }

    const onSubmitSuccess = (jwtToken) => {
        Cookies.set("jwt_token",JSON.stringify(jwtToken), {
            expires: 1,
            path : "/"
        });
        navigate("/")
    }
    

   
  return (
    <div className='login-bg-container'>
        <form onSubmit = {loginUser} className='login-form'>
        <h1>Login User</h1>
            <div className='login-input-field'>
                <label htmlFor = "email" className='email-field'>E-mail</label>
                <span className='icon'>
                    <ion-icon name = "mail-outline"></ion-icon>
                </span>
                <input type = "email" value = {email} onChange = {(e) => setEmail(e.target.value)} />
            </div>
            <div className='login-input-field'>
                <label htmlFor = "password" className='password-field'>Password</label>
                <span className='icon'>
                <ion-icon name = "lock-closed-outline"></ion-icon>
                </span>
                <input type = "password" value = {password} onChange = {(e) => setPassword(e.target.value)} />
            </div>
            <p className='acc-set'>Don't have an Account? <Link to = "/signup"><span className='sign-acc'>Sign Up Here</span></Link></p>
            <input type = "submit" value = "Submit" className='btn' />
        </form>
    </div>
  )
}

export default LoginForm