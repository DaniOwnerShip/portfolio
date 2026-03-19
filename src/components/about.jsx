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
              With over 15 years of experience in critical industrial environments, I work across both Operational Technology (OT) and modern software systems. I don’t just connect systems—I design architectures that allows industrial processes to be reliably understood and used by software.
            </p>

            <p>
              I bring hands-on experience from large-scale energy plants—including NextEra Energy, Saeta Yield, and Abengoa—working with SCADA/PLC systems, alarm management, and data platforms like AVEVA PI System. I’ve operated within complex industrial environments where control systems, data infrastructure, and software must work together under real constraints.
            </p>

            <p>
              I focus on making complex systems understandable, reliable, and usable through well-designed software, with a strong emphasis on reliability, maintainability, and real-world constraints.
            </p>

            <p>
              I started programming on a ZX Spectrum, and over time evolved from low-level C/C++ and embedded systems to full-stack development. Currently, I’m exploring AI agents, Spec-Driven Development (SDD), and MCP-based architectures.
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
