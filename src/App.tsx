// import axios from 'axios';
// import { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Content from './pages/Content';
import Header from './pages/Header';
// import { url } from './api/api';
import React from "react";

const App: React.FC = () => {

  return (
    <div>
      <Router>
        <Header />
        <Content />
      </Router>
    </div>
  )

}

export default App;
