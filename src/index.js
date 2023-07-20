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
import ViewSinglePost from "./Component/ViewSinglePost"
import Axios from 'axios';
import FlashMessages from './Component/FlashMessages';
Axios.defaults.baseURL = 'http://localhost:8080';



function Index() {


  const [loggedIn, setLoggedIn] = useState(Boolean(localStorage.getItem("complexappToken")));
  const [flashMessages, setFlashMessages] = useState([])

  function addFlashMessage(msg) {
    setFlashMessages(prev => prev.concat(msg))
  }

  return (
    <>
      <BrowserRouter>
      <FlashMessages messages={flashMessages} />
        <Header loggedIn={loggedIn} setLoggedIn={setLoggedIn} />
        <Routes>
          <Route path='/' exact Component={loggedIn ? Home : HomeGuest}> </Route>
          <Route path='/post/:id' Component = {ViewSinglePost}> </Route>
          <Route path='/create-post' Component={CreatePost} addFlashMessage={addFlashMessage} > </Route>
          <Route path='/about-us' Component={About}></Route>
          <Route path='/terms' Component={Terms}></Route>
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