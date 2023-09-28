import {useState,useEffect} from 'react'
import axios from 'axios'
import BlogCardItem from '../blogCardItem'
import './index.css'

const BlogItems = () => {
    const [blogList,setBlogList] = useState([])
    useEffect(() => {
        axios.get("http://localhost:5555/blogs")
        .then((response) => {
            setBlogList(response.data);
        })
        .catch((error) => {
            console.log(error);
        })
    },[]);
  return (
    <div>
        <h1 className='blog-list-heading'>Our Blogs</h1>
        <div className='blog-card-container'>
        {blogList.map((blog) => (
            <BlogCardItem key = {blog._id} details = {blog} />
        ))}
        </div>
    </div>
  )
}

export default BlogItems