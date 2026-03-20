import styles from '@/styles/caseStudy.module.css';

export default function CaseStudy() {
    return (
        <section className={styles.caseStudy} id="case-study">
            <div className={styles.container}>

                <div className={styles.header}>
                    <h2 className={styles.title}>Selected Case Study</h2>
                    <p className={styles.subtitle}>
                        Industrial Traceability System (Camera → SCADA → Business Logic)
                    </p>
                </div>

                <div className={styles.content}>

                    <div className={styles.block}>
                        <h3>Context</h3>
                        <p>
                            Industrial traceability system designed to connect vision systems (FS40 cameras)
                            with SCADA platforms and higher-level business logic in Ignition environments.
                        </p>
                    </div>

                    <div className={styles.block}>
                        <h3>Challenge</h3>
                        <p>
                            Bridging heterogeneous industrial data sources with real-time constraints, including vision systems, barcode/DataMatrix identification, and PLC-driven signals, ensuring reliable data flow from edge devices to operational systems without losing consistency or traceability.
                        </p>
                    </div>

                    <div className={styles.block}>
                        <h3>Architecture</h3>
                        <p>
                            Multi-layer pipeline integrating camera events, PLC/industrial signals,
                            and SCADA systems, normalized into structured data models for traceability
                            and operational monitoring.
                        </p>
                    </div>

                    <div className={styles.block}>
                        <h3>Outcome</h3>
                        <p>
                            A scalable traceability architecture capable of connecting industrial vision systems
                            with supervisory platforms, enabling consistent data visibility across operational layers.
                        </p>
                    </div>

                    <div className={styles.tags}>
                        {[
                            'Industrial Systems',
                            'SCADA',
                            'Ignition',
                            'Traceability',
                            'Real-time Data',
                            'System Architecture'
                        ].map((tag) => (
                            <span key={tag} className={styles.tag}>
                                {tag}
                            </span>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}