import styles from '@/styles/about.module.css'
import Image from 'next/image';

export default function About() {
  return (
    <section className={styles.about} id="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>

        <div className={styles.content}>
          <div className={styles.imageWrapper}>
            <Image
              src="/about.jpg"
              alt="about"
              width={200}
              height={200}
              className={styles.image}
              style={{ height: 'auto' }}
              sizes="(max-width: 768px) 200px, 280px"
              priority
            />
          </div>

          <div className={styles.text}>
            <h3>Industrial Software Engineer focused on OT systems, real-time environments, and industrial data.</h3>

            <p>I have over 15 years of experience in industrial environments, working across Operational Technology (OT) and software systems in mission-critical energy infrastructure.</p>

            <p>My work spans from control room operations and commissioning to SCADA/PLC systems and real-time data platforms, in environments where reliability, safety, and deterministic behavior are essential.</p>

            <p>I design software systems that interact directly with physical processes—bridging OT and IT to improve operations, data usage, and system reliability.</p>

            <p>My background ranges from low-level embedded development (C/C++) to full-stack software systems, with a focus on practical, production-oriented solutions.</p>

            <div className={styles.highlights}>
              <div className={styles.highlight}>
                <span className={styles.highlightNumber}>15+</span>
                <span className={styles.highlightLabel}>Years Experience</span>
              </div>

              <div className={styles.highlight}>
                <span className={styles.highlightNumber}>Industrial</span>
                <span className={styles.highlightLabel}>Systems</span>
              </div>

              <div className={styles.highlight}>
                <span className={styles.highlightNumber}>OT / IT</span>
                <span className={styles.highlightLabel}>Integration</span>
              </div>
            </div>

          </div>


        </div>
      </div>
    </section>
  )
}
