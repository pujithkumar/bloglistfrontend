import {React,useEffect} from 'react'
import Cookies from 'js-cookie';
import {useNavigate} from 'react-router-dom';
import Header from '../Header';
import BlogItems from '../blogItems'
import './index.css'

const HomePage = () => {
    const navigate = useNavigate();
    useEffect(() => {
        const jwt_token = Cookies.get('jwt_token');
        if (jwt_token !== undefined){
            navigate("/");
        }
        else{
            navigate("/login")
        }
    },[navigate])
    
  return (
    <>
        <div className='bloglist-main-page-container'>
        <Header />
        <div className='main-page-center-container'>
            <div className='main-page-text-section'>
                <h1>Stay Curious.</h1>
                <p>Discover stories, thinking and expertise from writers on any topic.</p>
                <div>Scroll below</div>
            </div>
            <img src = "https://th.bing.com/th/id/OIP.-1b-Ad4A6UQsX9K8A15qyQHaHa?pid=ImgDet&rs=1" alt = "blog" className='blog-image'/>
        </div>
        </div>
    <BlogItems />
    <footer>
        <div className='footer-content'>
            <h3>Pujith Kumar</h3>
            <p>An aspiring Software Developer</p>
            <ul className='socials'>
                <li><a href="https://www.instagram.com/pujith_2004/"><i className='fa fa-instagram'></i></a></li>
                <li><a href="https://www.linkedin.com/in/pujith-pamujula/"><i className='fa fa-linkedin-square'></i></a></li>
                <li><a href="https://www.youtube.com/channel/UCsrMmJbpLS4nhHXboEFkSRw"><i className='fa fa-youtube'></i></a></li>
            </ul>
        </div>
    </footer>
    </>
  )
}

export default HomePage