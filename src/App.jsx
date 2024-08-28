import React from 'react';
import { Navigate, Route, Routes } from "react-router-dom";
import Home from './home/Home';
import Courses from './courses/Courses';
import Contact from './components/Contact';
import Signup from './components/Signup';
import Login from './components/Login';
import { Toaster } from 'react-hot-toast';
import { UseAuth } from './context/AuthProvider';
import BookSearch from './components/About';
import AboutUs from './components/AboutUs';
import ReviewUs from './components/ReviewUs';
import PrivacyPolicy from './components/PrivacyPolicy';

function App() {
  const [authUser, setAuthUser] = UseAuth(); // Ensure correct hook usage
  console.log(authUser);
  
  return (
    <>
      <div className='dark:bg-slate-900 dark:text-white'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/course" element={authUser ? <Courses /> : <Navigate to="/signup" />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/explore" element={<BookSearch/>} /> 
          <Route path="/about-us" element={<AboutUs/>} /> 
          <Route path="/review-us" element={<ReviewUs/>} /> 
          <Route path="/PrivacyPolicy" element={<PrivacyPolicy/>} /> 
        </Routes>
        <Toaster />
      </div>
    </>
  );
}

export default App;
