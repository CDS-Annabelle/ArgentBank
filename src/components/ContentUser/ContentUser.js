import styles from './ContentUser.module.scss';
import React from "react";


const ContentUser = () => {

    return(
        <main className={styles.mainUser}>
            <div className={styles.headerProfil}>
                <h1 className={styles.headerProfilName}>Welcome back<br /></h1>

                
                    <button className={styles.editButton}>Edit Name</button> 
                    : <div className={styles.editProfil}>
                        <div className={styles.editProfilInputs}>
                            <div className={styles.editProfilInputsFirstName}>
                                <label htmlFor="firstName"/>
                                <input type="text" id="firstName" placeholder='firstName'/>
                            </div>
                            <div className={styles.inputEditProfil}>
                                <label htmlFor="lastName"/>
                                <input type="text" id="lastName" placeholder='lastName'/>
                            </div>
                        </div>
                        <div className={styles.applyButtons}>
                            <button className={styles.endFormButton}>Save</button>
                            <button className={styles.endFormButton}>Cancel</button>
                        </div>
                    </div>
            </div>

            <h2 className={styles.srOnly}>Accounts</h2>
            <section className={styles.account}>
                <div className={styles.accountContentWrapper}>
                <h3 className={styles.accountTitle}>Argent Bank Checking (x8349)</h3>
                <p className={styles.accountAmount}>$2,082.79</p>
                <p className={styles.accountAmountDescription}>Available Balance</p>
                </div>
                <div className={styles.accountContentWrapperCta}>
                <button className={styles.transactionButton}>View transactions</button>
                </div>
            </section>
            <section className={styles.account}>
                <div className={styles.accountContentWrapper}>
                <h3 className={styles.accountTitle}>Argent Bank Savings (x6712)</h3>
                <p className={styles.accountAmount}>$10,928.42</p>
                <p className={styles.accountAmountDescription}>Available Balance</p>
                </div>
                <div className={styles.accountContentWrapperCta}>
                <button className={styles.transactionButton}>View transactions</button>
                </div>
            </section>
            <section className={styles.account}>
                <div className={styles.accountContentWrapper}>
                <h3 className={styles.accountTitle}>Argent Bank Credit Card (x8349)</h3>
                <p className={styles.accountAmount}>$184.30</p>
                <p className={styles.accountAmountDescription}>Current Balance</p>
                </div>
                <div className={styles.accountContentWrapperCta}>
                <button className={styles.transactionButton}>View transactions</button>
                </div>
            </section>
        </main>
    )
}

export default ContentUser;