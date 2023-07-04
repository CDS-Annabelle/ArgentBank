import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Error.module.scss'

const Error = () => {
  return (
    <div className={styles.errorContainer}>
      <h1 className={styles.errorTitle}>404</h1>
      <div className={styles.text404}>
        Oups, la page que vous avez demandé n'existe pas
      </div>
      <NavLink to="/" className={styles.linkHome}>
        Retourner sur la page d'accueil
      </NavLink>
    </div>
  )
}

export default Error
