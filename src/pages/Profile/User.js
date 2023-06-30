import React from 'react';
import styles from './User.module.scss';
import ContentUser from '../../components/ContentUser/ContentUser'


const User = () => {
    return(
        <div className={styles.bgDark}>
            <ContentUser/>
        </div>
    )
}

export default User