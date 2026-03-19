import styles from '@/styles/skills.module.css';

const skillCategories = [
  {
    name: 'Frontend',
    icon: '⚛️',
    skills: ['React', 'Next.js', 'TypeScript', 'CSS', 'HTML']
  },
  {
    name: 'Backend',
    icon: '🖥️',
    skills: ['Node.js', 'REST APIs', 'MongoDB', 'MySQL', 'Express']
  },
  {
    name: 'Industrial',
    icon: '🏭',
    skills: ['PLC', 'SCADA', 'Modbus', 'OPC UA', 'Siemens', 'ABB' , 'Ignition']
  },
  {
    name: 'IoT & Embedded',
    icon: '📡',
    skills: ['PIC Microcontrollers', 'C/C++', 'IoT', 'Eagle', 'Multisim']
  },
  {
    name: 'AI & Data',
    icon: '🤖',
    skills: ['TensorFlow', 'Keras', 'Python', 'Data Analysis']
  },
  {
    name: 'Automation',
    icon: '⚙️',
    skills: ['Robotics', 'KUKA', 'RobotStudio', 'WinCC', 'FluidSim']
  },
  {
    name: 'Tools',
    icon: '🔧',
    skills: ['Git', 'Unity', 'Blender', 'VBA', 'Excel']
  },
  {
    name: 'Desktop',
    icon: '🖱️',
    skills: ['Electron', 'Visual Basic', 'C++', '.NET']
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
