import React from 'react'
import { withAuth } from '../context/AuthContext'
import { Redirect } from 'react-router-dom'
import Template from '../Template'

class AuthLoading extends React.Component {
    render() {
        if (this.props.isLoggedIn) {
            return <Template />
        }
        return (
            <Redirect push to='/login' />
        )
    }
}

export default withAuth(AuthLoading)