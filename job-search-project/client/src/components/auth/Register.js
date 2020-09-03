import React, {Fragment, useState} from 'react'
import {connect} from "react-redux"
import {Link, Redirect} from "react-router-dom"
import {register} from "../../actions/auth"
import PropTypes from 'prop-types'

const Register = ({register, isAuthenticated}) => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password2: ''
      });

      const { name, email, password, password2 } = formData;

      const onChange = (e) => {
          setFormData({...formData, [e.target.name]: e.target.value})
      }

      const onSubmit = (e) => {
          e.preventDefault()
         
          if (password !== password2) {
            alert("Passwords not match please try again")
            setFormData({...formData, [e.target.name]: " "})
          }
          else {
            register({name, email, password})
          }
      }

      if(isAuthenticated) {
        return <Redirect to="/" />
      }


    return (
        <div className="login-box">
        <h2>Register</h2>
        <form onSubmit={e => onSubmit(e)}>
        <div className="user-box">
            <input type="text" name="name" value={name} onChange={e =>onChange(e)} required />
            <label>Name</label>
          </div>
          <div className="user-box">
            <input type="text" name="email" value={email} onChange={e =>onChange(e)}required />
            <label>Email</label>
          </div>
          <div className="user-box">
            <input type="password" name="password" value={password} onChange={e =>onChange(e)} required />
            <label>Password</label>
          </div>
          <div className="user-box">
            <input type="password" name="password2" value={password2} onChange={e =>onChange(e)} required />
            <label>Enter Password again</label>
          </div>
          <input type="submit" className="btn btn-primary" value="Register" />
        </form>
      </div>
    )
}

Register.propTypes = {
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, { register }) (Register)
