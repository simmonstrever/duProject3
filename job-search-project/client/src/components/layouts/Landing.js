import React from 'react'
import { Link, Redirect } from "react-router-dom"
// import {connect} from "react-redux"
// import  PropTypes from "prop-types"

export const Landing = ({isAuthenticated}) => {
//   if(isAuthenticated) {
//      return <Redirect to="/dashboard" />
//   }

    return (
        // <section className="container">
        <section className="landing">
        <div className="dark-overlay">
          <div className="landing-inner">
            <h1 className="x-large">The Layover</h1>
            <p className="lead">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vestibulum mauris aliquam turpis vulputate facilisis. Integer sagittis elit scelerisque sollicitudin lacinia. Morbi non aliquet tortor. Sed viverra ornare lectus, sit amet vehicula neque malesuada eu.
            </p>
            <div className="buttons">
              <Link to="/register" className="btn btn-primary">Sign Up</Link>
              <Link to="/login" className="btn btn-light">Login</Link>
            </div>
          </div>
        </div>
      </section>
    //   </section>
    )
}

// Landing.propTypes = {
//   isAuthenticated: PropTypes.bool,
// }

// const mapStateToProps = state => {
//   isAuthenticated:state.auth.isAuthenticated
// }

export default Landing