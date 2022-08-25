import React, { Component, useEffect, useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {loginUser} from '../../actions/authActions'
import TextFieldGroup from '../common/TextFieldGroup'
import './Login.css'

function Login(){


  const [email,setEmail] = React.useState('')
  const [password,setPassword] = React.useState('')
  var [errors, setErrors] = React.useState({
    email:'',
    password:''
  })

  function onChangeEmail(event){
    setEmail(event.target.value)
  }
  function onChangePassword(event){
    setPassword(event.target.value)
  }
  const dispatch = useDispatch()
  const selectErrors = useSelector(state=>state.errors)
  errors = selectErrors

  function onSubmit(event){
    event.preventDefault();
    const newUser = {
      email:email,
      password:password
    }
    dispatch(loginUser(newUser))
  }

  return(
    <div className="login">
          <div className="loginContainer">
            <p className="sign" align="center">Login</p>
            <form onSubmit={onSubmit}>
                <TextFieldGroup
                  type = "email"
                  errors = {errors.email}
                  placeholder = "Email Address"
                  name = "email"
                  value = {email}
                  onChange = {onChangeEmail}
                />
                <TextFieldGroup
                  type = "password"
                  errors = {errors.password}
                  placeholder = "Password"
                  name = "password"
                  value = {password}
                  onChange = {onChangePassword}
                />
                <input 
                type="submit"/>
            </form>
        </div>
    </div>
  )
}

export default Login;