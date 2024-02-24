import React from 'react';
import MainContainer from '../components/MainContainer';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavContainer from './NavContainer';
import FeaturesPageContainer from './FeaturesPageContainer'

export default function App(){

  return (
    <div>
    <Router>
    <NavContainer/>
      <Routes>
          <Route path="/" element={<MainContainer/>}></Route>
          <Route path="/about" element={<FeaturesPageContainer/>}></Route>
      </Routes>
    </Router>
    </div>
  );
};