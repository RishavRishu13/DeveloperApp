import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {registerUser} from '../../actions/authActions'
import TextFieldGroup from '../common/TextFieldGroup'
import { Redirect } from 'react-router'
import styled from 'styled-components'
import './Register.css'

function Register(){
  const dispatch = useDispatch()
  const [name,setName] = React.useState("")
  const [email,setEmail] = React.useState('')
  const [password,setPassword] = React.useState('')
  const [password2,setPassword2] = React.useState('')
  const selectErrors = useSelector(state=>state.errors)
  var errors = selectErrors
 
  function onChangeName(event) {
    setName(event.target.value);
  }
  function onChangeEmail(event) {
    setEmail(event.target.value);
  }
  function onChangePassword(event) {
    setPassword(event.target.value);
  }
  function onChangePassword2(event) {
    setPassword2(event.target.value);
  }
  function onSubmit(event){
    event.preventDefault();
    const newUser = {
      name:name,
      email:email,
      password:password,
      password2:password2
    }
    dispatch(registerUser(newUser))
    Redirect('/')
  }

  return(
        <div className="register">
          <div className="registerContainer">
          <p className="sign" align="center">Sign Up</p>
          <form  onSubmit={onSubmit}>
          <TextFieldGroup
                  type = "text"
                  errors = {errors.name}
                  placeholder = "Username"
                  name = "username"
                  value = {name}
                  onChange = {onChangeName}
                />
                <TextFieldGroup
                  type = "email"
                  errors = {errors.email}
                  placeholder = "Email"
                  name = "Email"
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
                <TextFieldGroup
                  type = "password"
                  errors = {errors.password2}
                  placeholder = "Confirm Password"
                  name = "password2"
                  value = {password2}
                  onChange = {onChangePassword2}
                />
              <input 
              type="submit"/>
          </form>
        </div>
        </div>
    )
}
export default Register;