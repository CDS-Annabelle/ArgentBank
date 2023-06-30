import React from 'react';
import styles from './Login.module.scss';
import ContentSignin from '../../components/ContentSignin/ContentSignin';


const Login = () => {
    return(
        <div className={styles.bgDark}>
            <ContentSignin/>
        </div>
    )
}

export default Login