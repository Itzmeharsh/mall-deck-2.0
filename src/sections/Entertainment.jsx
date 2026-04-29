import { motion } from 'framer-motion'

const attractions = [
  {
    name: 'Nickelodeon Universe',
    category: 'Theme Park',
    color: '#C9A84C',
    stats: ['7 Acres Indoor', '30+ Rides', '4 Roller Coasters'],
    desc: 'The largest indoor theme park in the US. Fully enclosed, year-round, and unlike anything else in American retail.',
    icon: '🎢'
  },
  {
    name: 'SEA LIFE Minnesota',
    category: 'Aquarium',
    color: '#4A90D9',
    stats: ['10,000+ Sea Creatures', '300ft Ocean Tunnel', 'Interactive Exhibits'],
    desc: 'A world-class aquarium drawing families and school groups from across the region every single day.',
    icon: '🐠'
  },
  {
    name: 'Crayola Experience',
    category: 'Family Entertainment',
    color: '#E85D4A',
    stats: ['70,000 sq ft', '25+ Activities', 'Exclusive to MOA'],
    desc: 'One of only five locations worldwide. A premium family destination that drives multi-hour dwell time.',
    icon: '🎨'
  },
  {
    name: 'Mini Golf & Bowling',
    category: 'Recreation',
    color: '#7BC67A',
    stats: ['18-Hole Mini Golf', '30 Bowling Lanes', 'Arcade & VR Zone'],
    desc: 'Entertainment options that keep groups engaged long after shopping — extending every visit.',
    icon: '🎳'
  },
]

const highlights = [
  { number: '4+', label: 'Hours avg. dwell time' },
  { number: '12M', label: 'Entertainment visits/yr' },
  { number: '#1', label: 'US indoor theme park' },
  { number: '365', label: 'Days of operation' },
]

export default function Entertainment() {
  return (
    <section id="entertainment" style={{
  position: 'relative',
  width: '100vw',
  height: '100vh',
  background: '#0A0A0A',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  padding: '72px 72px 32px',
  overflow: 'hidden',
  boxSizing: 'border-box'
}}>
       <div style={{
  position: 'absolute', inset: 0, zIndex: 0,
  backgroundImage: 'url(/images/rides.jpg)',
  backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.08
}} />
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{ marginBottom: '40px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}
      >
        <div>
          <p style={{ color: '#C9A84C', fontSize: '12px', letterSpacing: '0.3em', textTransform: 'uppercase', marginBottom: '12px' }}>
            Attractions & Entertainment
          </p>
          <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 48px)', fontWeight: 800, lineHeight: 1.1, letterSpacing: '-0.02em' }}>
            This is what makes<br />
            <span style={{ color: '#C9A84C' }}>us different.</span>
          </h2>
        </div>

        {/* Highlight stats */}
        <div style={{ display: 'flex', gap: '32px' }}>
          {highlights.map((h, i) => (
            <motion.div key={h.label}
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.1 }}
              style={{ textAlign: 'right' }}
            >
              <div style={{ fontSize: '28px', fontWeight: 800, color: '#C9A84C' }}>{h.number}</div>
              <div style={{ fontSize: '11px', color: '#666', letterSpacing: '0.08em', textTransform: 'uppercase' }}>{h.label}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Attraction cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px', marginBottom: '36px' }}>
        {attractions.map((a, i) => (
          <motion.div key={a.name}
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 * i }}
            style={{
              background: '#141414',
              border: `1px solid ${a.color}33`,
              borderTop: `3px solid ${a.color}`,
              borderRadius: '4px', padding: '24px 20px'
            }}
          >
            <div style={{ fontSize: '32px', marginBottom: '12px' }}>{a.icon}</div>
            <div style={{ fontSize: '11px', color: a.color, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '6px', fontWeight: 600 }}>
              {a.category}
            </div>
            <div style={{ fontSize: '16px', fontWeight: 700, color: '#fff', marginBottom: '14px' }}>
              {a.name}
            </div>
            <div style={{ marginBottom: '14px' }}>
              {a.stats.map(s => (
                <div key={s} style={{
                  display: 'inline-block', fontSize: '11px', color: a.color,
                  background: `${a.color}15`, border: `1px solid ${a.color}30`,
                  borderRadius: '2px', padding: '3px 8px', marginRight: '6px',
                  marginBottom: '6px'
                }}>
                  {s}
                </div>
              ))}
            </div>
            <p style={{ fontSize: '12px', color: '#555', lineHeight: 1.6 }}>{a.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Bottom banner */}
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        style={{
          background: 'linear-gradient(90deg, rgba(201,168,76,0.12) 0%, rgba(201,168,76,0.04) 100%)',
          border: '1px solid rgba(201,168,76,0.25)',
          borderRadius: '4px', padding: '18px 28px',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#C9A84C' }} />
          <span style={{ fontSize: '13px', color: '#fff', fontWeight: 600 }}>
            No other mall in America offers this entertainment density under one roof.
          </span>
        </div>
        <span style={{ fontSize: '12px', color: '#C9A84C', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 600, whiteSpace: 'nowrap', marginLeft: '24px' }}>
          Your brand. This stage. →
        </span>
      </motion.div>
    </section>
  )
}