import styles from '@/styles/skills.module.css';

const skillCategories = [
  {
    name: 'Industrial Control',
    icon: '🏭',
    skills: [
      'PLC (ABB, Siemens, Schneider)',
      'SCADA (ABB, Ignition, WinCC)',
      'HMI Development',
      'Alarm Management',
      'Process Control'
    ]
  },
  {
    name: 'Industrial Data',
    icon: '📊',
    skills: [
      'AVEVA PI System',
      'Data Modeling',
      'Event Frames',
      'Tag Management',
      'KPI Tracking', ,
      'Excel VBA'
    ]
  },
  {
    name: 'OT/IT Integration',
    icon: '🔗',
    skills: [
      'Modbus',
      'OPC UA',
      'PLC Integration',
      'SCADA-Web Integration',
      'Real-Time Data'
    ]
  },
  {
    name: 'Software Systems',
    icon: '💻',
    skills: [
      'Node.js',
      'Next.js',
      'React',
      'REST APIs',
      'WebSockets',
      'Electron'
    ]
  },
  {
    name: 'Embedded & Edge',
    icon: '📡',
    skills: [
      'C / C++',
      'ESP32',
      'PIC',
      'Firmware',
      'Sensor Integration'
    ]
  },
  {
    name: 'Data & AI',
    icon: '🤖',
    skills: [
      'Python',
      'Machine Learning',
      'TensorFlow / Keras',
      'Computer Vision',
      'Data Processing'
    ]
  }
];

export default function Skills() {
  return (
    <section className={styles.skills} id="skills">
      <div className="container">
        <h2 className="section-title">Skills & Technologies</h2>

        <div className={styles.grid}>
          {skillCategories.map((category) => (
            <div key={category.name} className={styles.category}>
              <h3 className={styles.categoryName}>
                {category.icon}{category.name}
              </h3>
              <ul className={styles.skillList}>
                {category.skills.map((skill) => (
                  <li key={skill} className={styles.skill}>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
