import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { isLogin, fetchUserData, updateName } from '../../data/api'
import styles from './ContentUser.module.scss'
import Account from '../Account/Account'

const ContentUser = () => {
  const [editMode, setEditMode] = useState(false)
  const user = useSelector((store) => store.user.user)
  const [firstName, setFirstName] = useState(user.firstName || '')
  const [lastName, setLastName] = useState(user.lastName || '')
  const [userName, setUserName] = useState(user.userName || '')

  useEffect(() => {
    const loadData = async () => {
      await fetchUserData()
    }
    loadData()
  }, [])

  useEffect(() => {
    setFirstName(user.firstName)
    setLastName(user.lastName)
    setUserName(user.userName)
  }, [user])

  if (!isLogin()) {
    return <div>not authenticated!</div>
  }

  const handleCancel = () => {
    setEditMode(false)
  }

  const handleSave = () => {
    updateName(userName)
    setEditMode(false)
  }

  return (
    <main className={styles.mainUser}>
      <div className={styles.headerProfil}>
        {editMode ? (
          <div className={styles.editProfil}>
            <h1 className={styles.headerProfilName}>Welcome back</h1>
            <div className={styles.formInput}>
              <div className={styles.editProfilInputs}>
                User name
                <input
                  className={styles.profilInputs}
                  type="text"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                />
              </div>
              <div className={styles.editProfilInputs}>
                First name
                <input
                  className={styles.profilInputs}
                  type="text"
                  value={firstName}
                  disabled
                />
              </div>
              <div className={styles.editProfilInputs}>
                Last name
                <input
                  className={styles.profilInputs}
                  type="text"
                  value={lastName}
                  disabled
                />
              </div>
            </div>
            <div className={styles.applyButtons}>
              <div className={styles.contentButton}>
                <button
                  type="button"
                  className={styles.userButton}
                  onClick={handleSave}
                >
                  Save
                </button>
              </div>
              <div className={styles.contentButton}>
                <button
                  type="button"
                  className={styles.userButton}
                  onClick={handleCancel}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        ) : (
          <>
            <h1>
              <div className={styles.welcome}>Welcome back</div>
              <div className={styles.userName}>
                {user.firstName} {user.lastName}!
              </div>
            </h1>
            <button
              type="button"
              className={styles.userButton}
              onClick={() => setEditMode(true)}
            >
              Edit Name
            </button>
          </>
        )}
      </div>
      <Account />
    </main>
  )
}

export default ContentUser
