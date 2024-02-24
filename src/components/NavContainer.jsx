import React from 'react';
import { Link } from "react-router-dom";
import logo from '../static/tempImages/logo.png';

export default function NavContainer(){
 
    return (
        <div className='navContainer'>
          <div id='logo_container'>
          <img id='image-logo-main' src={logo} />
          </div>
          <Link to='/about' className='nav-link'>About</Link>
          <Link to='/features' className='nav-link'>Features</Link>
          <Link to='https://github.com/oslabs-beta/K8sDependencyTracker' className='nav-link'>GitHub</Link>
          <Link to='/team' className='nav-link'>Team</Link>
          <Link to='https://medium.com/@mhart1992/how-to-track-k8s-api-versioning-aac19f85e94d' className='nav-link'>Media</Link>
        </div>
      )
  };