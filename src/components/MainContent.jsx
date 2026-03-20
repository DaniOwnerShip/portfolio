'use client'

import { useState } from 'react'
import About from './About'
import ProyectsDisplay from './ProyectsDisplay'
import Navbar from './Navbar'
import Footer from './Footer'
import Hero from './Hero'
import Skills from './Skills'
import CaseStudy from './CaseStudy'
import ContactModal from './ContactModal'

export default function MainContent({ data }) {
  const [contactModalOpen, setContactModalOpen] = useState(false)

  return (
    <>
      <Navbar 
        data={data} 
        onContactClick={() => setContactModalOpen(true)} 
      />
      <main>
        <Hero onContactClick={() => setContactModalOpen(true)} />
        <About />
        <Skills />
        <ProyectsDisplay />
        <CaseStudy />
      </main>
      <Footer data={data} />
      
      <ContactModal 
        isOpen={contactModalOpen} 
        onClose={() => setContactModalOpen(false)} 
        data={data} 
      />
    </>
  )
}
