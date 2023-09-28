import React from 'react'
import {Link} from 'react-router-dom';
import {IoEyeSharp} from 'react-icons/io5'

const BlogCardItem = (props) => {
    const {details} = props
    const {_id,title,caption} = details


  return (
        <div className='blog-card'>
            <h1>{title}</h1>
            <p>{caption}</p>
            <Link to = {`blogs/details/${_id}`} className='blog-card-item'>
                <IoEyeSharp />
            </Link>
        </div>
  )
}

export default BlogCardItem