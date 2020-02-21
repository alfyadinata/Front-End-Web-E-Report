import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import { AuthContextProvider } from './context/AuthContext'
import ProtectedRoute from './Router/ProtectedRoute';

// pages
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Complaint from './pages/Complaint'

function App() {
  return (
    <AuthContextProvider>
      <BrowserRouter>
        <Route path='/' component={Login} />
        <Route path='/login' component={Login} />
        <ProtectedRoute path='/dashboard' component={Dashboard} />
        <ProtectedRoute path='/dashboard' component={Dashboard} />
        <ProtectedRoute path='/complaint' component={Complaint} />
      </BrowserRouter>
    </AuthContextProvider>
    // <BrowserRouter>

    //     <Template />
    //     <Router />
    //     <Login />

    // </BrowserRouter>
  );
}

export default App;
