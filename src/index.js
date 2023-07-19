import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// component
import Header from './Component/Header';
import Footer from './Component/Footer';
import HomeGuest from './Component/HomeGuest';
import Home from './Component/Home';
import About from './Component/About';
import Terms from './Component/Terms';
import { useState } from 'react';
import CreatePost from './Component/CreatePost';


function Index() {


  const [loggedIn, setLoggedIn] = useState(Boolean(localStorage.getItem("complexappToken")));

  return (
    <>
      <BrowserRouter>
        <Header loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
        <Routes>
          <Route path='/' exact Component={loggedIn ? Home : HomeGuest}> </Route>
          <Route path='/create-post' Component={CreatePost}> </Route>
          <Route path='/terms' Component={Terms}></Route>
          <Route path='/about-us' Component={About}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )

};


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Index />
  </React.StrictMode>
);