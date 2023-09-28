import React,{useState,useEffect} from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './index.css'

const BlogDetails = () => {
    const [blog,setBlog] = useState({});
    const {id} = useParams();
    useEffect(() => {
        axios.get(`http://localhost:5555/blogs/${id}`)
        .then((response) => {
            setBlog(response.data);
        })
        .catch((error) => {
            console.log(error);
        })
    },[id])

  return (
    <div className='blog-card-con'>
        <div className='blog-display-card'>
        <div className='blog-item'>
            <span className='blog-title'>{blog.title}</span>
        </div>
        <div className='blog-item'>
            <span className='blog-caption'>{blog.caption}</span>
        </div>
        <div className='blog-item'>
            <span className='blog-description'>{blog.description}</span>
        </div>
    </div>
    </div>
  )
}

export default BlogDetails