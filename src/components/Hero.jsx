import styles from '@/styles/hero.module.css';

export default function Hero({ onContactClick }) {
  return (
    <section className={styles.hero} id="hero">

      <div className={styles.content}>
        <h1 className={styles.name}>Daniel Orcha</h1>
        <h2 className={styles.title}>Industrial Software Engineer</h2>
        <h3 className={styles.title}>Building real-time systems for industrial operations</h3>
        <p className={styles.subtitle}>15+ years in industrial and energy environments</p>

        <div className={styles.cta}>
          <a href="#projects" className="btn btn-primary">
            View Projects
          </a>

          <button
            type="button"
            className="btn btn-secondary"
            onClick={onContactClick}>
            Contact Me
          </button>
        </div>
      </div>

      <div className={styles.scrollIndicator}>
        <span>Scroll to explore</span>
        <div className={styles.scrollArrow} />
      </div>

    </section>
  );
}
