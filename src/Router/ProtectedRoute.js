import React from 'react'
import {Route, Redirect } from 'react-router-dom'
import { withAuth } from '../context/AuthContext'


function ProtectedRoute(props) {
    const { component: Component, ...rest} = props
    console.log(props.isLoggedIn)
    return (
        props.isLoggedIn === true ? <Route {...rest} component={Component} />
                        : <Redirect push to='/login' />
    )
}

export default withAuth(ProtectedRoute)