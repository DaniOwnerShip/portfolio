import styles from '@/styles/hero.module.css';

export default function Hero({ onContactClick }) {
  return (
    <section className={styles.hero} id="hero">
      <div className={styles.content}>
        <h1 className={styles.name}>Daniel Orcha</h1>
        <p className={styles.title}>Industrial Software Developer</p>
        <p className={styles.subtitle}>Making complex systems understandable, reliable, and usable</p>
        
        <div className={styles.cta}>
          <a href="#projects" className="btn btn-primary">
            View Projects
          </a>
          <button 
            type="button"
            className="btn btn-secondary"
            onClick={onContactClick}
          >
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
