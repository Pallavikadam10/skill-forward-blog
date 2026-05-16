import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import AboutPlatform from './components/AboutPlatform'
import Contribution from './components/Contribution'
import SkillsAcquired from './components/SkillsAcquired'
import GenerateVariations from './components/GenerateVariations'
import TechnicalChallenges from './components/TechnicalChallenges'
import TechStack from './components/TechStack'
import Learnings from './components/Learnings'
import { FutureImprovements, FinalThoughts } from './components/FutureAndFinal'
import { CTA, Footer } from './components/CTAAndFooter'

export default function App() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    setDarkMode(prefersDark)
  }, [])

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode)
  }, [darkMode])

  return (
    <div className="min-h-screen bg-main transition-colors duration-300">
      <Navbar darkMode={darkMode} toggleDark={() => setDarkMode(v => !v)} />
      <main>
        <Hero />
        <AboutPlatform />
        <Contribution />
        <div id="skills-acquired">
          <SkillsAcquired />
        </div>
        <div id="variations">
          <GenerateVariations />
        </div>
        <TechnicalChallenges />
        <TechStack />
        <Learnings />
        <FutureImprovements />
        <FinalThoughts />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
