import styles from '@/styles/proyectsCard.module.css'
import Image from 'next/image'
import { memo } from 'react'

function ProyectsCardInner({ card }) {
  return (
    <article className={styles.card}>
      <div className={styles.imageWrapper}>
        <Image
          src={card.image.url}
          alt={card.image.alt}
          fill
          className={styles.image}
          sizes="(max-width: 768px) 100vw, 400px"
        />
      </div>
      
      <div className={styles.content}>
        <h3 className={styles.title}>{card.tittle}</h3>
        <p className={styles.description}>{card.description}</p>
        
        <div className={styles.technologies}>
          {card.icons?.slice(0, 5).map((icon, index) => (
            <div key={index} className={styles.techIcon}>
              <Image
                src={icon.url}
                alt={icon.alt}
                width={icon.size.w}
                height={icon.size.h}
                sizes={`${icon.size.w}px`}
              />
            </div>
          ))}
        </div>
        
        {card.git && card.git.length > 0 && (
          <div className={styles.links}>
            {card.git.map((url, index) => (
              <a
                key={index}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                View Code
              </a>
            ))}
          </div>
        )}
      </div>
    </article>
  )
}

export default memo(ProyectsCardInner)
