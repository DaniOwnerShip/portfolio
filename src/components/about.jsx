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
              src="/me.jpg"
              alt="Daniel Orcha"
              width={280}
              height={280}
              className={styles.image}
              sizes="(max-width: 768px) 200px, 280px"
              priority
            />
          </div>

          <div className={styles.text}>
            <h3>Industrial Software Developer | Bridging OT & IT</h3>

            <p>
              With over 15 years of experience in critical industrial environments, I bridge the gap between Operational Technology (OT) and Information Technology (IT). I integrate control systems (PLC/SCADA) with modern full-stack ecosystems to digitize and automate industrial processes.
            </p>  <p>
              I began exploring computing with a ZX Spectrum, and since 2010, I have deepened my expertise through a postgraduate degree in Industrial Automation. From microcontrollers and C/C++ to full-stack web development, AI, and cloud solutions, I apply Industry 4.0 principles and SOLID design patterns to every project.
            </p><p>
              Currently, I’m exploring specialized AI agents, Spec-Driven Development (SDD), and the complete stack with MCP servers.
            </p>
 

            <div className={styles.highlights}>
              <div className={styles.highlight}>
                <span className={styles.highlightNumber}>15+</span>
                <span className={styles.highlightLabel}>Years Experience</span>
              </div>
              <div className={styles.highlight}>
                <span className={styles.highlightNumber}>50+</span>
                <span className={styles.highlightLabel}>Projects Completed</span>
              </div>
              <div className={styles.highlight}>
                <span className={styles.highlightNumber}>OT/IT</span>
                <span className={styles.highlightLabel}>Expertise</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
