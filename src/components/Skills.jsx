import styles from '@/styles/skills.module.css';

const skillCategories = [
  {
    name: 'Systems & Architecture',
    icon: '🧠',
    skills: [
      'System Design',
      'Distributed Systems',
      'Event-driven Architectures',
      'Real-time Systems',
      'Industrial Software Architecture'
    ]
  },
  {
    name: 'Industrial & Automation',
    icon: '🏭',
    skills: [
      'PLC (Siemens, ABB)',
      'SCADA / HMI Systems',
      'Modbus / OPC UA',
      'Ignition SCADA',
      'WinCC',
      'Industrial Control Systems'
    ]
  },
  {
    name: 'Software Engineering',
    icon: '💻',
    skills: [
      'Node.js',
      'TypeScript',
      'React / Next.js',
      'REST APIs',
      'Databases (MongoDB, MySQL)',
      'Backend Architecture'
    ]
  },
  {
    name: 'Data & AI Systems',
    icon: '🤖',
    skills: [
      'Python',
      'TensorFlow / Keras',
      'Data Processing',
      'Machine Learning',
      'AI Agents (Exploration)'
    ]
  },
  {
    name: 'Embedded & Edge Systems',
    icon: '📡',
    skills: [
      'C / C++',
      'Microcontrollers (PIC)',
      'IoT Systems',
      'Hardware Integration',
      'Edge Computing'
    ]
  },
  {
    name: 'Tools & Platforms',
    icon: '🔧',
    skills: [
      'Electron',
      'Git',
      'Unity (Exploration)',
      'Blender',
      'Excel VBA',
      'Windows Desktop Apps'
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
              <div className={styles.categoryHeader}>
                <span className={styles.icon}>{category.icon}</span>
                <h3 className={styles.categoryName}>{category.name}</h3>
              </div>
              <ul className={styles.skillList}>
                {category.skills.map((skill) => (
                  <li key={skill} className={styles.skill}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
