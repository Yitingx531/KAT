import React from 'react';
import MainContainer from '../components/MainContainer';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavContainer from './NavContainer';
import AboutPageContainer from './AboutPageContainer'

export default function App(){

  return (
    <div>
    <Router>
      <NavContainer/>
      <Routes>
          <Route path="/" element={<MainContainer/>}></Route>
          <Route path="/about" element={<AboutPageContainer/>}></Route>
      </Routes>
    </Router>
    </div>
  );
};