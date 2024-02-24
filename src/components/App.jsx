import React from 'react';
import MainContainer from '../components/MainContainer';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutPageContainer from '../components/AboutPageContainer';

export default function App(){

  return (
    <Router>
      <Routes>
          <Route path="/" element={<MainContainer/>}></Route>
          <Route path="/about" element={<AboutPageContainer/>}> </Route>
      </Routes>
    </Router>
  );
};