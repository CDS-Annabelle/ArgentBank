import React from 'react';
import styles from './ContentSignin.module.scss';


export const ContentSignin = () => {

    return (
      <main className={styles.bgDark}>
      <section className={styles.formContent}>
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form>
          <div className={styles.inputWrapper}>
            <label htmlFor="username">Username</label>
            <input type="text" id="username" />
          </div>
          <div className={styles.inputWrapper}>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
          </div>
          <div className={styles.inputRemember}>
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <button type='submit' className={styles.signInButton}>Sign In</button>
        </form>
      </section>
    </main>
  )
}

export default ContentSignin;