"use client"

import styles from '@/styles/navbar.module.css'
import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Navbar({ data, onContactClick }) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '#hero', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
  ]

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          DO
        </Link>

        <button 
          className={styles.mobileToggle}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`${styles.hamburger} ${mobileMenuOpen ? styles.open : ''}`} />
        </button>

        <div className={`${styles.links} ${mobileMenuOpen ? styles.show : ''}`}>
          {navLinks.map((link) => (
            <a 
              key={link.href} 
              href={link.href} 
              className={styles.link}
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <button 
            type="button"
            className={styles.contactBtn}
            onClick={onContactClick}
          >
            Contact
          </button>
        </div>
      </div>
    </nav>
  )
}
