import React, { useState } from 'react'
import styles from './App.module.css'

const FEATURES = [
  { icon: '⚛️', title: 'React 18', desc: 'Concurrent rendering, automatic batching, and the latest React features.' },
  { icon: '⚡', title: 'Vite', desc: 'Blazing fast HMR and optimized production builds out of the box.' },
  { icon: '🎨', title: 'CSS Modules', desc: 'Scoped styles with zero runtime overhead. No class name collisions.' },
  { icon: '🚀', title: 'Hot reload', desc: 'Changes appear instantly in the browser without losing component state.' },
]

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <div className={styles.app}>
      <header className={styles.header}>
        <nav className={styles.nav}>
          <span className={styles.logo}>⚛️ MyApp</span>
          <span className={styles.navBadge}>React + Vite</span>
        </nav>
      </header>

      <main>
        <section className={styles.hero}>
          <div className={styles.heroContent}>
            <div className={styles.badge}>Template ✦</div>
            <h1 className={styles.heroTitle}>
              React app,<br />
              <span className={styles.highlight}>ready to go</span>
            </h1>
            <p className={styles.heroDesc}>
              A minimal React + Vite starter. Edit <code>src/App.jsx</code> to
              start building your app.
            </p>
            <div className={styles.counter}>
              <p className={styles.counterLabel}>Interactive counter</p>
              <div className={styles.counterRow}>
                <button
                  className={styles.btn}
                  onClick={() => setCount(c => Math.max(0, c - 1))}
                >−</button>
                <span className={styles.counterValue}>{count}</span>
                <button
                  className={`${styles.btn} ${styles.btnPrimary}`}
                  onClick={() => setCount(c => c + 1)}
                >+</button>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.features}>
          <h2 className={styles.featuresTitle}>What's included</h2>
          <div className={styles.featuresGrid}>
            {FEATURES.map(f => (
              <article key={f.title} className={styles.featureCard}>
                <div className={styles.featureIcon}>{f.icon}</div>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer className={styles.footer}>
        <p>Built with React {React.version} and Vite</p>
      </footer>
    </div>
  )
}
