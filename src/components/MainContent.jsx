'use client'

import { useState } from 'react'
import About from './about'
import ProyectsDisplay from './proyectsDisplay'
import Navbar from './navbar'
import Footer from './footer'
import Hero from './Hero'
import Skills from './Skills'
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
