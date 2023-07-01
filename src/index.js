import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Switch, Route, Routes } from 'react-router-dom';

// component
import Header from './Component/Header';
import Footer from './Component/Footer';
import HomeGuest from './Component/HomeGuest';
import About from './Component/About';
import Terms from './Component/Terms';
// import Ourapp from './Component/Ourapp';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' exact Component={HomeGuest}></Route>
        <Route path='/terms' Component={Terms}></Route>
        <Route path='/about-us' Component={About}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  </>
); 