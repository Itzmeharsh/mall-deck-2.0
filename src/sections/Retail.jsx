import { motion } from 'framer-motion'

const tiers = [
  {
    tier: 'Luxury & Premium',
    color: '#C9A84C',
    stores: ['Coach', 'Michael Kors', 'Tory Burch', 'Kate Spade', 'Pandora', 'Swarovski'],
    desc: 'High-net-worth shoppers from across the Midwest and beyond.'
  },
  {
    tier: 'Global Flagships',
    color: '#E8C97A',
    stores: ['Nike', 'Adidas', 'Apple', 'Lego', 'H&M', 'Zara'],
    desc: 'World-class flagships treating MOA as a primary market.'
  },
  {
    tier: 'Dining & Lifestyle',
    color: '#A07830',
    stores: ['Cheesecake Factory', 'Twin City Grill', 'Rainforest Café', 'Crayola Experience', 'SEA LIFE Aquarium', 'Smashburger'],
    desc: 'Food and lifestyle concepts that extend dwell time.'
  },
  {
    tier: 'Pop-Up & Flex',
    color: '#888',
    stores: ['Seasonal concepts', 'Brand activations', 'Limited-run flagships', 'Holiday pop-ups', 'Artist collabs', 'Test & learn formats'],
    desc: 'High-visibility short-term formats to test, launch, or activate.'
  },
]

const leaseStats = [
  { value: '96%', label: 'Occupancy' },
  { value: '500+', label: 'Tenants' },
  { value: '$800', label: 'Avg PSF' },
  { value: '3x', label: 'Nat\'l Avg' },
]

export default function Retail() {
  return (
    <section id="retail" style={{
      position: 'relative',
      width: '100vw', height: '100vh',
      background: '#0A0A0A',
      display: 'flex', flexDirection: 'column', justifyContent: 'center',
      padding: '72px 72px 24px',
      overflow: 'hidden', boxSizing: 'border-box'
    }}>
      {/* Background */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 0,
        backgroundImage: 'url(/images/interior.jpg)',
        backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.06
      }} />

      <div style={{ position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}
        >
          <div>
            <p style={{ color: '#C9A84C', fontSize: '11px', letterSpacing: '0.3em', textTransform: 'uppercase', marginBottom: '8px' }}>
              Retail Environment
            </p>
            <h2 style={{ fontSize: 'clamp(24px, 3vw, 40px)', fontWeight: 800, lineHeight: 1.1, letterSpacing: '-0.02em' }}>
              The right brands.<br />
              <span style={{ color: '#C9A84C' }}>The right audience.</span>
            </h2>
          </div>
          <div style={{ display: 'flex', gap: '24px' }}>
            {leaseStats.map((s, i) => (
              <motion.div key={s.label}
                initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + i * 0.1 }}
                style={{ textAlign: 'right' }}
              >
                <div style={{ fontSize: '24px', fontWeight: 800, color: '#C9A84C' }}>{s.value}</div>
                <div style={{ fontSize: '10px', color: '#666', letterSpacing: '0.08em', textTransform: 'uppercase' }}>{s.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Tier cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '12px', marginBottom: '16px' }}>
          {tiers.map((t, i) => (
            <motion.div key={t.tier}
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 * i }}
              style={{
                background: '#141414',
                border: `1px solid ${t.color}33`,
                borderTop: `3px solid ${t.color}`,
                borderRadius: '4px', padding: '16px'
              }}
            >
              <div style={{ fontSize: '11px', fontWeight: 700, color: t.color, marginBottom: '10px', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                {t.tier}
              </div>
              <div style={{ marginBottom: '10px' }}>
                {t.stores.map(s => (
                  <div key={s} style={{
                    fontSize: '11px', color: '#ccc', padding: '3px 0',
                    borderBottom: '1px solid rgba(255,255,255,0.05)'
                  }}>{s}</div>
                ))}
              </div>
              <p style={{ fontSize: '11px', color: '#555', lineHeight: 1.5 }}>{t.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Image strip */}
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '8px', marginBottom: '14px' }}
        >
          {['/images/hero.jpg', '/images/interior.jpg', '/images/luxury.jpg', '/images/rides.jpg', '/images/events.jpg'].map((src, i) => (
            <div key={i} style={{
              height: '64px', borderRadius: '3px', overflow: 'hidden',
              border: '1px solid rgba(255,255,255,0.06)'
            }}>
              <img src={src} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.7 }} />
            </div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          style={{
            background: 'rgba(201,168,76,0.08)', border: '1px solid rgba(201,168,76,0.2)',
            borderRadius: '4px', padding: '14px 20px',
            display: 'flex', alignItems: 'center', justifyContent: 'space-between'
          }}
        >
          <div>
            <span style={{ fontSize: '12px', color: '#fff', fontWeight: 600 }}>Interested in a leasing opportunity? </span>
            <span style={{ fontSize: '12px', color: '#666' }}>Spaces available across all tiers.</span>
          </div>
          <div style={{ fontSize: '11px', color: '#C9A84C', letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: 600, whiteSpace: 'nowrap', marginLeft: '24px' }}>
            Inquire → Slide 7
          </div>
        </motion.div>
      </div>
    </section>
  )
}