import React, { useState, useEffect } from 'react';
import { Link, useLocation } from "react-router-dom";
import logo from '../static/tempImages/logo.png';

export default function NavContainer(){
    const location = useLocation();
    const [shouldScrollToBottom, setShouldScrollToBottom] = useState(false);

    useEffect(() => {
      if (shouldScrollToBottom && location.pathname === '/') {
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: 'smooth',
        });
        setShouldScrollToBottom(false); // Reset scroll trigger
      }
    }, [location, shouldScrollToBottom]);

    return (
        <div className='navContainer'>
          <img id='image-logo-main' src={logo} />
          <div id="links">
            <Link to='/' className='nav-link'>Home</Link>
            <Link to='/about' className='nav-link'>About</Link>
            <Link to='https://github.com/oslabs-beta/K8sDependencyTracker' target="_blank" className='nav-link'>GitHub</Link>
            <Link to='/' className='nav-link' onClick={() => setShouldScrollToBottom(true)}>Team</Link>
            <Link to='https://medium.com/@mhart1992/how-to-track-k8s-api-versioning-aac19f85e94d' target="_blank" className='nav-link'>Medium</Link>
          </div>
        </div>
      )
  };