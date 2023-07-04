import React from 'react'
import styles from './SignIn.module.scss'
import ContentSignin from '../../components/ContentSignIn/ContentSignIn'

const SignIn = () => {
  return (
    <div className={styles.bgDark}>
      <ContentSignin />
    </div>
  )
}

export default SignIn
