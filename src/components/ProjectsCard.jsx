import styles from '@/styles/projectsCard.module.css'
import Image from 'next/image'
import { useState } from 'react';


function ProyectsCardInner({ card }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleReadMore = () => setIsExpanded(!isExpanded);

  return (
    <article className={styles.card}>

      <div className={styles.imageWrapper}>
        <Image src={card.image.url} alt={card.image.alt} fill className={styles.image} sizes="(max-width: 768px) 100vw, 400px" />
      </div>

      <div className={styles.content}>
        <h3 className={styles.title}>{card.type}</h3>
        <h3 className={styles.title}>{card.title}</h3>
        <div className={`${styles.description} ${!isExpanded ? styles.isTruncated : ''}`}>
          {!isExpanded ? (card.description.summary) : (
            <div className={styles.expandedContent}>
              <p><strong>Context:</strong>  {card.description.context}</p>
              <p><strong>Challenge:</strong> {card.description.challenge}</p>
              <p><strong>Solution:</strong> {card.description.solution}</p>
              <p><strong>Focus:</strong> {card.description.focus}</p>
            </div>)}
        </div>

        <button onClick={toggleReadMore} className={styles.readMoreBtn}> {isExpanded ? 'Hide details ↑' : 'Show details →'} </button>

        {card.tags.length > 0 && (
          <div className={styles.technologies}>
            {card.tags.map((tag, index) => (
              <span key={index} className={styles.tag}>{tag}</span>
            ))}
          </div>
        )}

        {card.links.length > 0 && (
          <div className={styles.links}>
            {card.links.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                {link.label}
              </a>
            ))}
          </div>
        )}

      </div>

    </article >
  )
}



export default ProyectsCardInner