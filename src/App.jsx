import { useState, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import './index.css'
import Hero from './sections/Hero'
import WhyMOA from './sections/WhyMOA'
import Retail from './sections/Retail'
import Entertainment from './sections/Entertainment'
import Events from './sections/Events'
import CTA from './sections/CTA'
import Nav from './components/Nav'
import Calculator from './sections/Calculator'
const sections = [Hero, WhyMOA, Retail, Entertainment, Calculator, Events, CTA]
const sectionLabels = ['Home', 'Why MOA', 'Retail', 'Entertainment', 'Calculator', 'Events', 'Contact']

export default function App() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(1)

  const goTo = (index) => {
    if (index === current) return
    setDirection(index > current ? 1 : -1)
    setCurrent(index)
  }

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') goTo(Math.min(current + 1, sections.length - 1))
      if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') goTo(Math.max(current - 1, 0))
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [current])

  const Section = sections[current]

  const variants = {
    enter: (dir) => ({ opacity: 0, y: dir > 0 ? 60 : -60, scale: 0.98 }),
    center: { opacity: 1, y: 0, scale: 1 },
    exit: (dir) => ({ opacity: 0, y: dir > 0 ? -60 : 60, scale: 0.98 }),
  }

  return (
    <div style={{ width: '100vw', height: '100vh', overflow: 'hidden', background: '#0a0a0a', position: 'relative' }}>
      <Nav current={current} goTo={goTo} labels={sectionLabels} total={sections.length} />

      <AnimatePresence mode="wait" custom={direction}>
        <motion.div
          key={current}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0 }}
        >
          <Section />
        </motion.div>
      </AnimatePresence>

      {/* Left arrow */}
      {current > 0 && (
        <button onClick={() => goTo(current - 1)} style={{
          position: 'fixed', left: '24px', top: '50%', transform: 'translateY(-50%)',
          background: 'rgba(201,168,76,0.1)', border: '1px solid rgba(201,168,76,0.4)',
          color: '#C9A84C', width: '48px', height: '48px', borderRadius: '50%',
          fontSize: '20px', cursor: 'pointer', zIndex: 200,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          transition: 'all 0.2s'
        }}>‹</button>
      )}

      {/* Right arrow */}
      {current < sections.length - 1 && (
        <button onClick={() => goTo(current + 1)} style={{
          position: 'fixed', right: '24px', top: '50%', transform: 'translateY(-50%)',
          background: 'rgba(201,168,76,0.1)', border: '1px solid rgba(201,168,76,0.4)',
          color: '#C9A84C', width: '48px', height: '48px', borderRadius: '50%',
          fontSize: '20px', cursor: 'pointer', zIndex: 200,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          transition: 'all 0.2s'
        }}>›</button>
      )}

      {/* Slide counter */}
      <div style={{
        position: 'fixed', bottom: '32px', right: '32px', zIndex: 200,
        fontSize: '12px', color: '#444', letterSpacing: '0.15em'
      }}>
        <span style={{ color: '#C9A84C', fontWeight: 700 }}>{String(current + 1).padStart(2, '0')}</span>
        <span> / {String(sections.length).padStart(2, '0')}</span>
      </div>

      {/* Dot indicators */}
      <div style={{
        position: 'fixed', bottom: '32px', left: '50%', transform: 'translateX(-50%)',
        display: 'flex', gap: '8px', zIndex: 200
      }}>
        {sections.map((_, i) => (
          <button key={i} onClick={() => goTo(i)} style={{
            width: i === current ? '24px' : '8px', height: '8px',
            borderRadius: '4px', border: 'none', cursor: 'pointer',
            background: i === current ? '#C9A84C' : 'rgba(255,255,255,0.2)',
            transition: 'all 0.3s ease', padding: 0
          }} />
        ))}
      </div>

      {/* Keyboard hint */}
      <div style={{
        position: 'fixed', bottom: '32px', left: '32px', zIndex: 200,
        fontSize: '11px', color: '#333', letterSpacing: '0.1em'
      }}>
        ← → NAVIGATE
      </div>
    </div>
  )
}