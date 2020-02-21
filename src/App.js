import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { AuthContextProvider, withAuth } from './context/AuthContext'
import ProtectedRoute from './Router/ProtectedRoute';

// pages
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Complaint from './pages/Complaint'
import Template from './Template';

function App() {
  return (
    <AuthContextProvider>
      <BrowserRouter>
        <Route path='/' component={Login} />
        <Route path='/login' component={Login} />
        <Template>
          <Switch>
            <ProtectedRoute path='/dashboard' component={Dashboard} />
            <ProtectedRoute path='/complaint' component={Complaint} />
          </Switch>
        </Template>
      </BrowserRouter>
    </AuthContextProvider>
  );
}

export default App
