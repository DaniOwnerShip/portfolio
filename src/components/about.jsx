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
            <h3>Bridging the gap between Operational Technology (OT) & modern IT ecosystems.</h3>

            <p>
              15+ years of experience working in mission-critical industrial environments, operating across both Operational Technology (OT) and modern software systems.
            </p>

            <p>
              I’ve contributed to large-scale energy infrastructures at companies like NextEra Energy, Saeta Yield, and Abengoa, working with SCADA/PLC systems, industrial data platforms, and real-time control environments where reliability is non-negotiable.
            </p>

            <p>
              I specialize in turning complex systems into software that is understandable, maintainable, and reliable—bridging the gap between physical processes and scalable digital architectures.
            </p>

            <p>
              My background spans from low-level C/C++ and embedded systems to full-stack development, and I’m currently exploring AI-driven architectures and modern development workflows to build the next generation of intelligent systems.
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
