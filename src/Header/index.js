import React from 'react'
import { Link,useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie'
import './index.css'

const Header = () => {
    const navigate = useNavigate();

    const onWriteBlog = () => {
        const jwt_token =  Cookies.get('jwt_token');
        console.log(jwt_token);
        if (jwt_token === undefined){
            navigate("/login")
        }
        else{
            navigate("/blogs/create")
        }
    }
    const onClickLogOut = () => {
        Cookies.remove('jwt_token');
        navigate("/login");
    }

  return (
        <>
        <nav className='navbar'>
            <div className='nav-logo-container'>
                <img src = "https://th.bing.com/th/id/OIP.-1b-Ad4A6UQsX9K8A15qyQHaHa?pid=ImgDet&rs=1" alt = "blog"  className='blog-logo'/>
                <p className='nav-title'>BlogList.com</p>
            </div>
            <div className='nav-items-container'>
                <ul className='nav-link-items'>
                <li className='nav-item'>
                    <Link to = "/blogs/create" className='nav-item' onClick = {onWriteBlog}>Write Blog</Link>
                </li>
                    <li className='nav-item'>
                        <Link to = "https://medium.com" className='nav-item'>Other Blogs</Link>
                    </li>
                    <button className='logout-btn' onClick = {onClickLogOut}>Log Out</button>
                    <Link to = "/signup">
                    <button className='logout-btn'>Sign Up</button>
                    </Link>
                </ul>
            </div>
        </nav>
        <hr />
        </>
  )
}

export default Header