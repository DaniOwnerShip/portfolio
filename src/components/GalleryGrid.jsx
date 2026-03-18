'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from '@/styles/gallery.module.css'

export default function GalleryGrid({ images }) {
  const [selectedIndex, setSelectedIndex] = useState(null)

  const openLightbox = (index) => {
    setSelectedIndex(index)
  }

  const closeLightbox = () => {
    setSelectedIndex(null)
  }

  const goToPrevious = useCallback(() => {
    if (selectedIndex === null) return
    setSelectedIndex((selectedIndex - 1 + images.length) % images.length)
  }, [selectedIndex, images.length])

  const goToNext = useCallback(() => {
    if (selectedIndex === null) return
    setSelectedIndex((selectedIndex + 1) % images.length)
  }, [selectedIndex, images.length])

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedIndex === null) return
      
      if (e.key === 'Escape') {
        closeLightbox()
      } else if (e.key === 'ArrowLeft') {
        goToPrevious()
      } else if (e.key === 'ArrowRight') {
        goToNext()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [selectedIndex, goToPrevious, goToNext])

  if (!images || images.length === 0) {
    return (
      <div className={styles.container}>
        <div className={styles.empty}>No images found in gallery</div>
      </div>
    )
  }

  return (
    <>
      <div className={styles.container}>
        <header className={styles.header}>
          <Link href="/#projects" className={styles.backLink}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
            Back to Projects
          </Link>
          <h1 className={styles.title}>Gallery</h1>
          <p className={styles.subtitle}>{images.length} photos</p>
        </header>

        <div className={styles.grid}>
          {images.map((image, index) => (
            <button
              key={image.id}
              className={styles.imageWrapper}
              onClick={() => openLightbox(index)}
              aria-label={`View image ${index + 1}`}
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className={styles.image}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className={styles.overlay}>
                <span className={styles.imageNumber}>{index + 1}</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {selectedIndex !== null && (
        <div className={styles.lightbox} onClick={closeLightbox}>
          <button 
            className={styles.closeBtn} 
            onClick={closeLightbox}
            aria-label="Close lightbox"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>

          <button 
            className={`${styles.navBtn} ${styles.prevBtn}`}
            onClick={(e) => { e.stopPropagation(); goToPrevious(); }}
            aria-label="Previous image"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M15 18l-6-6 6-6"/>
            </svg>
          </button>

          <div className={styles.lightboxContent} onClick={(e) => e.stopPropagation()}>
            <Image
              src={images[selectedIndex].src}
              alt={images[selectedIndex].alt}
              width={1200}
              height={800}
              className={styles.lightboxImage}
              priority
              sizes="90vw"
            />
          </div>

          <button 
            className={`${styles.navBtn} ${styles.nextBtn}`}
            onClick={(e) => { e.stopPropagation(); goToNext(); }}
            aria-label="Next image"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M9 18l6-6-6-6"/>
            </svg>
          </button>

          <div className={styles.counter}>
            {selectedIndex + 1} / {images.length}
          </div>
        </div>
      )}
    </>
  )
}
