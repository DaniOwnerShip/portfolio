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
            <h3>Bridging the gap between <strong>Operational Technology (OT)</strong> & modern IT ecosystems.</h3>

            <p>
              With over <strong>15 years of experience</strong> in mission-critical industrial environments, I specialize in the intersection of <strong>OT and modern software</strong>. I don't just connect systems; I architect robust, scalable bridges that transform raw industrial data into <strong>actionable business intelligence</strong>.
            </p>

            <p>
              My track record includes contributing to the design and optimization of systems for global energy leaders like <strong>NextEra Energy</strong>, <strong>Saeta Yield</strong>, and <strong>Abengoa</strong>. Having <strong>operated mission-critical control panels</strong>, I bring a unique perspective to <strong>SCADA/PLC integrations</strong> and data platforms like <strong>AVEVA PI System</strong>—where reliability is non-negotiable.
            </p>

            <p>
              I began my journey on a <strong>ZX Spectrum</strong>, forging a foundation in low-level <strong>C/C++</strong>, and later completed a <strong>Postgraduate degree in Industrial Automation</strong>. Today, I leverage that mindset to build high-performance <strong>full-stack and desktop applications (Next.js, Node.js, Electron)</strong>, while exploring how to <strong>reliably integrate AI agents</strong> and MCP-based architectures into industrial workflows.
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
