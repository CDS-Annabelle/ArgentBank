import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout, isLogin } from '../../data/api'
import logo from '../../assets/images/argentBankLogo.png'
import styles from './Header.module.scss'

const Header = () => {
  const navigate = useNavigate()
  const user = useSelector((state) => state.user)
  const dispatch = useDispatch()

  const handleSignOut = () => {
    dispatch(logout())
    navigate('/')
  }

  return (
    <nav className={styles.mainNav}>
      <Link className={styles.mainNavLogo} to="/">
        <img
          className={styles.mainNavLogoImage}
          alt="Argent Bank Logo"
          src={logo}
        />
        <h1 className={styles.sronly}>Argent Bank</h1>
      </Link>

      <div className={styles.NavRight}>
        {isLogin() ? (
          <>
            <Link className={styles.mainNavItemUser} to="/user">
              <span>
                <i className="fa-solid fa-user" />
              </span>
              <span>{user.user.firstName}</span>
            </Link>
            <span className={styles.mainNavItemSignOut} onClick={handleSignOut}>
              <span>
                <i className="fa-sharp fa-solid fa-right-from-bracket" />
              </span>
              <span className={styles.signOut}>Sign out</span>
            </span>
          </>
        ) : (
          <Link className={styles.mainNavItemSignIn} to="/login">
            <span>
              <i className="fa fa-user-circle" />
            </span>
            <span className={styles.signIn}>Sign in</span>
          </Link>
        )}
      </div>
    </nav>
  )
}

export default Header
