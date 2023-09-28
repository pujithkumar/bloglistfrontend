import React from 'react';
import { Routes, Route} from 'react-router-dom';
import HomePage from './Homepage';
import CreateBlog from './pages/CreateBlog';
import BlogDetails from './blogDetails';
import SignUpForm from './SignUpForm';
import LoginForm from './LoginForm';

const App = () => (
  <Routes>
    <Route exact path = "/login" element = {<LoginForm />} />
    <Route exact path = "/signup" element = {<SignUpForm />} />
    <Route exact path = "/" element = {<HomePage />} />
    <Route exact path = "/blogs/details/:id" element = {<BlogDetails />} />
    <Route exact path = "/blogs/create" element = {<CreateBlog />} />
  </Routes>
)

export default App