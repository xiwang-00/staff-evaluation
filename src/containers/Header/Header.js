import React from 'react'
import SignInButton from '../../components/SingInButton'
import classes from "./header.module.scss"
import Logo from "../../assets/images/nt-logo.svg"
import MiniLogo from "../../assets/images/mini-logo.svg"
import { Link } from 'react-router-dom'
function Header() {
    return (
        <div className={classes.header}>
            <div className="container">
                <div className={classes.header__inner}>
                    <Link to="/">
                        <img className={classes.logo} src={Logo} alt='site logo' width="213" height="42" />
                        <img className={classes.logo__mini} src={MiniLogo} alt='site logo' width="60" height="40" />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Header