import React from 'react'
import styles from './Hero.module.scss'
import heroImage1024 from '../../assets/images/bank-tree-1024.jpeg'
import heroImage768 from '../../assets/images/bank-tree-768.jpeg'
import heroImage468 from '../../assets/images/bank-tree-468.jpeg'
import heroImageDefault from '../../assets/images/bank-tree.jpeg'

const Hero = () => {
  return (
    <div className={styles.hero}>
      <img
        srcSet={`${heroImage1024} 1024w, ${heroImage768} 768w, ${heroImage468} 468w, ${heroImageDefault}`}
        sizes="(max-width: 1024px) 1024px, (max-width: 768px) 768px, (max-width: 468px) 468px, 100vw"
        alt="No Fees Argent Bank"
        className={styles.heroImage}
      />
      <section className={styles.content}>
        <h2 className={styles.srOnly}>Promoted Content</h2>
        <p className={styles.subtitle}>No fees.</p>
        <p className={styles.subtitle}>No minimum deposit.</p>
        <p className={styles.subtitle}>High interest rates.</p>
        <p className={styles.textPromoted}>
          Open a savings account with Argent Bank today!
        </p>
      </section>
    </div>
  )
}

export default Hero
