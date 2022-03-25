import React from 'react'
import { Link } from 'react-router-dom'
import classes from "./signInButton.module.scss"
function SignInButton() {
  return (
    <Link className={classes.signin__button} to="/" >Kirish</Link>
  )
}

export default SignInButton