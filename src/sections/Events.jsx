import { motion } from 'framer-motion'

const eventTypes = [
  {
    type: 'Concerts & Live Music',
    icon: '🎵',
    color: '#C9A84C',
    capacity: 'Up to 20,000',
    examples: ['National touring artists', 'Album release shows', 'Festival-format events', 'Holiday concerts'],
    desc: 'The rotunda and common areas transform into world-class concert venues drawing tens of thousands.'
  },
  {
    type: 'Brand Activations',
    icon: '⚡',
    color: '#E85D4A',
    capacity: '5,000 – 15,000 daily',
    examples: ['Product launches', 'Pop-up experiences', 'Sampling campaigns', 'Influencer events'],
    desc: 'Premium floor space across 5.6M sq ft lets brands reach a captive, high-intent audience at scale.'
  },
  {
    type: 'Corporate & Convention',
    icon: '🏛',
    color: '#4A90D9',
    capacity: 'Up to 5,000 delegates',
    examples: ['Corporate retreats', 'Trade shows', 'Award ceremonies', 'Investor summits'],
    desc: 'Connected hotel, airport access, and full AV infrastructure make MOA a turnkey corporate destination.'
  },
  {
    type: 'Seasonal & Holiday',
    icon: '🎄',
    color: '#7BC67A',
    capacity: 'Entire property',
    examples: ['Christmas programming', 'Halloween events', 'Back-to-school activations', 'Summer festivals'],
    desc: 'Year-round programming that turns every season into a reason to visit — and a reason to sponsor.'
  },
]

const venues = [
  { name: 'Rotunda', sqft: '25,000 sq ft', cap: '20,000' },
  { name: 'East Broadway', sqft: '18,000 sq ft', cap: '12,000' },
  { name: 'North Garden', sqft: '12,000 sq ft', cap: '8,000' },
  { name: 'Convention Halls', sqft: '40,000 sq ft', cap: '5,000' },
]

const pastEvents = ['Taylor Swift Listening Party', 'Nike Air Max Launch', 'ESPN College GameDay', 'Marvel Avengers Activation', 'Miss USA Pageant', 'X Games Qualifier']

export default function Events() {
  return (
    <section id="events" style={{
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
  backgroundImage: 'url(/images/events.jpg)',
  backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.08
}} />
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{ marginBottom: '36px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}
      >
        <div>
          <p style={{ color: '#C9A84C', fontSize: '12px', letterSpacing: '0.3em', textTransform: 'uppercase', marginBottom: '12px' }}>
            Events & Platform
          </p>
          <h2 style={{ fontSize: 'clamp(28px, 3.5vw, 48px)', fontWeight: 800, lineHeight: 1.1, letterSpacing: '-0.02em' }}>
            Not just a venue.<br />
            <span style={{ color: '#C9A84C' }}>A global platform.</span>
          </h2>
        </div>

        {/* Venue quick stats */}
        <div style={{ display: 'flex', gap: '16px' }}>
          {venues.map((v, i) => (
            <motion.div key={v.name}
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.1 }}
              style={{
                background: '#1A1A1A', border: '1px solid rgba(201,168,76,0.2)',
                borderRadius: '4px', padding: '12px 16px', textAlign: 'center'
              }}
            >
              <div style={{ fontSize: '16px', fontWeight: 700, color: '#C9A84C' }}>{v.cap}</div>
              <div style={{ fontSize: '11px', color: '#fff', fontWeight: 600, margin: '2px 0' }}>{v.name}</div>
              <div style={{ fontSize: '10px', color: '#555' }}>{v.sqft}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Event type cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px', marginBottom: '28px' }}>
        {eventTypes.map((e, i) => (
          <motion.div key={e.type}
            initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 * i }}
            style={{
              background: '#141414',
              border: `1px solid ${e.color}33`,
              borderTop: `3px solid ${e.color}`,
              borderRadius: '4px', padding: '20px'
            }}
          >
            <div style={{ fontSize: '28px', marginBottom: '10px' }}>{e.icon}</div>
            <div style={{ fontSize: '13px', fontWeight: 700, color: '#fff', marginBottom: '4px' }}>{e.type}</div>
            <div style={{ fontSize: '11px', color: e.color, marginBottom: '12px', fontWeight: 600 }}>{e.capacity}</div>
            <div style={{ marginBottom: '12px' }}>
              {e.examples.map(ex => (
                <div key={ex} style={{
                  fontSize: '11px', color: '#888', padding: '3px 0',
                  borderBottom: '1px solid rgba(255,255,255,0.04)'
                }}>· {ex}</div>
              ))}
            </div>
            <p style={{ fontSize: '11px', color: '#444', lineHeight: 1.6 }}>{e.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Past events ticker */}
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        style={{
          background: '#141414', border: '1px solid rgba(201,168,76,0.15)',
          borderRadius: '4px', padding: '14px 24px',
          display: 'flex', alignItems: 'center', gap: '24px'
        }}
      >
        <span style={{ fontSize: '11px', color: '#C9A84C', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', whiteSpace: 'nowrap' }}>
          Past Events
        </span>
        <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
          {pastEvents.map(e => (
            <span key={e} style={{
              fontSize: '11px', color: '#888',
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: '2px', padding: '4px 10px'
            }}>{e}</span>
          ))}
        </div>
      </motion.div>
    </section>
  )
}