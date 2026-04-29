import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="hero" style={{
      position: 'relative', height: '100vh', width: '100vw',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      overflow: 'hidden', boxSizing: 'border-box'
    }}>
      {/* Background */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'url(/images/hero.jpg)',
        backgroundSize: 'cover', backgroundPosition: 'center',
        transform: 'scale(1.05)'
      }} />

      {/* Overlays */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(135deg, rgba(10,10,10,0.88) 0%, rgba(10,10,10,0.45) 50%, rgba(10,10,10,0.88) 100%)'
      }} />
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0, height: '35%',
        background: 'linear-gradient(to top, #0a0a0a 0%, transparent 100%)'
      }} />

      {/* Gold top line */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: '2px',
        background: 'linear-gradient(90deg, transparent, #C9A84C, transparent)'
      }} />

      {/* Side accents */}
      <div style={{ position: 'absolute', left: '48px', top: '28%', width: '1px', height: '100px', background: 'linear-gradient(to bottom, transparent, #C9A84C, transparent)' }} />
      <div style={{ position: 'absolute', right: '48px', top: '28%', width: '1px', height: '100px', background: 'linear-gradient(to bottom, transparent, #C9A84C, transparent)' }} />

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', padding: '0 24px', maxWidth: '860px' }}>

        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', marginBottom: '20px' }}
        >
          <div style={{ height: '1px', width: '36px', background: '#C9A84C' }} />
          <p style={{ color: '#C9A84C', fontSize: '11px', letterSpacing: '0.35em', textTransform: 'uppercase', fontWeight: 500 }}>
            Bloomington, Minnesota · Est. 1992
          </p>
          <div style={{ height: '1px', width: '36px', background: '#C9A84C' }} />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          style={{
            fontSize: 'clamp(44px, 8vw, 88px)', fontWeight: 800,
            lineHeight: 0.95, letterSpacing: '-0.03em', marginBottom: '24px', color: '#fff'
          }}
        >
          America's<br />
          <span style={{ color: 'transparent', WebkitTextStroke: '2px #C9A84C' }}>Greatest</span><br />
          Destination
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          style={{
            fontSize: '15px', color: '#999', maxWidth: '480px',
            margin: '0 auto 36px', lineHeight: 1.8
          }}
        >
          5.6 million sq ft. 500+ stores. 40 million visitors per year.
          One platform for the world's most ambitious brands.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '48px' }}
        >
          <button style={{
            padding: '14px 40px', background: '#C9A84C', color: '#0A0A0A',
            border: 'none', borderRadius: '2px', fontSize: '11px',
            fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase',
            cursor: 'pointer', transition: 'all 0.2s'
          }}
          onMouseEnter={e => e.target.style.background = '#E8C97A'}
          onMouseLeave={e => e.target.style.background = '#C9A84C'}
          >
            Partner With Us
          </button>
          <button style={{
            padding: '14px 40px', background: 'transparent', color: '#fff',
            border: '1px solid rgba(255,255,255,0.25)', borderRadius: '2px',
            fontSize: '11px', fontWeight: 500, letterSpacing: '0.2em',
            textTransform: 'uppercase', cursor: 'pointer', transition: 'all 0.2s'
          }}
          onMouseEnter={e => { e.target.style.borderColor = '#C9A84C'; e.target.style.color = '#C9A84C' }}
          onMouseLeave={e => { e.target.style.borderColor = 'rgba(255,255,255,0.25)'; e.target.style.color = '#fff' }}
          >
            Explore the Property
          </button>
        </motion.div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
          style={{
            display: 'flex', justifyContent: 'center',
            border: '1px solid rgba(201,168,76,0.15)',
            borderRadius: '2px', overflow: 'hidden'
          }}
        >
          {[
            { value: '40M+', label: 'Annual Visitors' },
            { value: '5.6M', label: 'Square Feet' },
            { value: '500+', label: 'Stores & Dining' },
            { value: '#1', label: 'US Shopping Mall' },
          ].map((s, i) => (
            <div key={s.label} style={{
              textAlign: 'center', padding: '14px 28px', flex: 1,
              borderRight: i < 3 ? '1px solid rgba(201,168,76,0.15)' : 'none',
              background: 'rgba(201,168,76,0.04)'
            }}>
              <div style={{ fontSize: '20px', fontWeight: 800, color: '#C9A84C' }}>{s.value}</div>
              <div style={{ fontSize: '10px', color: '#555', letterSpacing: '0.12em', textTransform: 'uppercase', marginTop: '3px' }}>{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}