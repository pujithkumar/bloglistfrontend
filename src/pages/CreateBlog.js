import React,{useState} from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import Cookies from 'js-cookie';
import './CreateBlog.css';

const CreateBlog = () => {
    const [title,setTitle] = useState('');
    const [caption,setCaption] = useState('');
    const [description,setDescription] = useState('');
    const navigate = useNavigate();
    const jwt_token = Cookies.get('jwt_token');
    if (jwt_token === undefined){
        navigate("/login");
    }
    const postBlog = () => {
        const data = {title,caption,description};
        axios.post('http://localhost:5555/blogs/create',data)
        .then(() => {
            navigate('/')
        })
        .catch((error) => {
            alert('An error Occurred. Please Check Console');
            console.log(error);
        })
    }

  return (
    <div className='create-blog-con'>
        <div className='create-blog-con'>
        <h1>Bring out your creativity and innovative thoughts</h1>
        <h1>Write</h1>
        <div className='blog-create-card'>
            <div className='input-field'>
                <label htmlFor = "title" className = "title">Title</label>
                <input type = "text" value = {title} onChange = {(e) => setTitle(e.target.value)} className='input-field' />
            </div>
            <div className='input-field'>
                <label htmlFor = "caption" className='caption'>Caption</label>
                <input type = "text" value = {caption} onChange = {(e) => setCaption(e.target.value)} className='input-field' />
            </div>
            <div className='input-field'>
                <label htmlFor = "description" className='desc'>Description</label>
                <textarea rows = "7" cols = "20" onChange = {(e) => setDescription(e.target.value)} className='mobile-field' />
                <textarea rows = "7" cols = "90" onChange = {(e) => setDescription(e.target.value)} className='input-field' />
            </div>
            <div className='btn-container'>
            <button className='btn btn-primary' onClick = {postBlog}>Upload</button>
            </div>
        </div>
    </div>
    </div>
  )
}

export default CreateBlog