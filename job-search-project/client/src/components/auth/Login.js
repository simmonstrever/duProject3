import React, { Fragment, useState } from 'react'
import {Link, Redirect} from "react-router-dom"
import { connect} from "react-redux"
import PropTypes from "prop-types"
import {login} from "../../actions/auth"

const Login = ({login, isAuthenticated}) => {
      // set the initial values to nothing
      const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    // ! pull these values out of form data
    const {email, password} = formData;

    // !kind of confused on how this onChange works still
    const onChange = e => setFormData({...formData, [e.target.name]: e.target.value})

    // ! when we submit go here
    const onSubmit = async e => {
        e.preventDefault()
        login(email, password)
    }

    //redirect if logged in 
    if(isAuthenticated) {
      return <Redirect to="/" />
    }

    return (
        <div className="login-box">
        <h2>Login</h2>
        <form onSubmit = {e => onSubmit(e)}>
          <div className="user-box">
            <input type="text" name="name" onChange={e => onChange(e)} required />
            <label>Username</label>
          </div>
          <div className="user-box">
            <input type="password" name="password" required />
            <label>Password</label>
          </div>
          <input type="submit" className="btn btn-primary" value="Register" />
        </form>
      </div>
    )
}

Login.propTypes = {
  login: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool,
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, {login})(Login);
