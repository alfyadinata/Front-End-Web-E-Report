import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { AuthContextProvider, } from './context/AuthContext'
import ProtectedRoute from './Router/ProtectedRoute';

// pages
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Complaint from './pages/Complaint'
import Template from './Template';
import Category from './pages/Category';

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
            <ProtectedRoute path='/category'  component={Category}  />
          </Switch>
        </Template>
      </BrowserRouter>
    </AuthContextProvider>
  );
}

export default App
