import React from 'react';
import MainContainer from '../components/MainContainer';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutPageContainer from '../components/AboutPageContainer';
import NavContainer from './NavContainer';

export default function App(){

  return (
    <div>
    <Router>
    <NavContainer/>
      <Routes>
          <Route path="/" element={<MainContainer/>}></Route>
          <Route path="/about" element={<AboutPageContainer/>}> </Route>
      </Routes>
    </Router>
    </div>
  );
};