'use client'

import styles from '@/styles/proyectsDisplay.module.css'
import cardsData from '@/data/cards.json'
import Link from 'next/link'
import dynamic from 'next/dynamic'

const ProyectsCard = dynamic(() => import('./proyectsCard'), {
  ssr: false,
  loading: () => <div className={styles.cardSkeleton} />
})

export default function ProyectsDisplay() {
  return (
    <section className={styles.projects} id="projects">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        
        {cardsData.map((section, index) => (
          <div key={section.category} className={styles.categorySection}>
            <h3 className={styles.categoryTitle}>{section.category}</h3>
            <div className={styles.grid}>
              {section.items.map((card) => (
                <ProyectsCard key={card.name} card={card} />
              ))}
            </div>
          </div>
        ))}
        
        <div className={styles.galleryLink}>
          <Link href="/gallery">
            View Gallery
          </Link>
        </div>
      </div>
    </section>
  )
}
