import styles from '@/styles/projectsDisplay.module.css'
import prod from '@/dataProjects/production.json'
import prot from '@/dataProjects/prototypes.json'
import acad from '@/dataProjects/academy.json'
import lab from '@/dataProjects/lab.json' 
import dynamic from 'next/dynamic'

const allProjects = [prod, prot, acad, lab];

const ProjectsCard = dynamic(() => import('./ProjectsCard'),
  { loading: () => <div className={styles.cardSkeleton} /> })

export default function ProyectsDisplay() {
  return (
    <section className={styles.projects} id="projects">

      <div className="container"> <h2 className="section-title">Projects</h2>
        {allProjects.map((s) => (
          s.map((section, index) => (
            <div key={section.category} className={styles.categorySection}>
              <h3 className={styles.categoryTitle}>{section.category}</h3>
              <h3 className={styles.subtitle}>{section.subtitle}</h3>
              <div className={styles.grid}>
                {section.items.map((card) => (
                  <ProjectsCard key={card.name} card={card} />
                ))}
              </div>
            </div>
          ))
        ))} 

      </div>

    </section>
  )
}