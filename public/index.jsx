import React from 'react';
import App from './components/App'
import { createRoot } from 'react-dom/client';

import './static/styles.css';

  const root = createRoot(document.getElementById('root'));
  root.render(
        <App />
 );