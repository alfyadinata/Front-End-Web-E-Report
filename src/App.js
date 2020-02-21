import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Login from './pages/Login';

function App() {
  return (
    <BrowserRouter>

        {/* <Template /> */}
        {/* <Router /> */}
        <Login />

    </BrowserRouter>
  );
}

export default App;
