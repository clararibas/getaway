import React from 'react';
import Routes from './routes/index';
import {AuthProvider} from './hooks/Auth';
import { BrowserRouter as Router } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes/>
      </Router>
    </AuthProvider>
  );
}

export default App;