import React, { Component } from 'react'
import baseApi from '../config/baseApi'
// import { Redirect } from 'react-router-dom'
import Axios from 'axios'

const axiosReq  =   Axios.create()
const AuthContext = React.createContext()

axiosReq.interceptors.request.use((config) => {
    const token = localStorage.getItem('token')
    config.headers.Authorization = `Bearer ${token}`
    return config

})

export class AuthContextProvider extends Component {

    constructor () {
        super()
        this.state = {
            user: localStorage.getItem('user') || '',   
            token: localStorage.getItem('token') || '',
            isLoggedIn: (localStorage.getItem('token') === null ? false : true )
        }
    }

    initUser    =   ()  => {
        return baseApi.get('/profile')
        .then(res => {
            console.log(res.data.user)
            this.setState({
                user: res.data.user
            })
        })
    }

    login   =   (credentials) => {
        return baseApi.post('/auth/signin', credentials)
                .then(res => {
                    // console.info(res)
                    const {token} = res.data
                //    console.info(token)
                    localStorage.setItem('token', token)
                    
                    this.setState({
                        token,
                        isLoggedIn:true
                    })
                    
                    //  return console.log(res)
                })
                .catch(err => {
                    alert('Invalid Email or Password')
                })
    }

    logout  =   ()  => {
        localStorage.removeItem('token')

        this.setState({
            isLoggedIn:false
        })

        // return console.log('logout')
    }
    
    render() {
        return (
            <AuthContext.Provider value={{
                login: this.login,
                logout: this.logout,
                initUser: this.initUser,
                ...this.state
            }}>
                {this.props.children}
            </AuthContext.Provider>
        )
    }
}

// HOC



export const withAuth  = (WrappedComponent) => {
    return class extends Component {
        render() {
            return (
                <AuthContext.Consumer>

                    {(context) => (
                        <WrappedComponent { ... this.props } {... context} />
                    )}
                </AuthContext.Consumer>
            )
        }
    }
}