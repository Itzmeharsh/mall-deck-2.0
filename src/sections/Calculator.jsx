import { useState } from 'react'
import { motion } from 'framer-motion'

const categories = [
  { label: 'Luxury / Designer', multiplier: 1800, color: '#C9A84C' },
  { label: 'Fashion & Apparel', multiplier: 950, color: '#E8C97A' },
  { label: 'Food & Beverage', multiplier: 1200, color: '#E85D4A' },
  { label: 'Electronics & Tech', multiplier: 1400, color: '#4A90D9' },
  { label: 'Health & Beauty', multiplier: 1100, color: '#7BC67A' },
  { label: 'Entertainment', multiplier: 800, color: '#A78BFA' },
]

const nationalAvgPSF = 380

export default function Calculator() {
  const [sqft, setSqft] = useState(2000)
  const [category, setCategory] = useState(categories[0])

  const moaRevenue = sqft * category.multiplier
  const nationalRevenue = sqft * nationalAvgPSF
  const uplift = Math.round(((moaRevenue - nationalRevenue) / nationalRevenue) * 100)
  const extraRevenue = moaRevenue - nationalRevenue
  const footTraffic = Math.round(sqft * 22)

  return (
    <section id="calculator" style={{
      position: 'relative', width: '100vw', height: '100vh',
      background: '#080808', display: 'flex', flexDirection: 'column',
      justifyContent: 'center', padding: '72px 72px 24px',
      overflow: 'hidden', boxSizing: 'border-box'
    }}>
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'url(/images/interior.jpg)',
        backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.05
      }} />
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: '2px',
        background: 'linear-gradient(90deg, transparent, #C9A84C, transparent)'
      }} />

      <div style={{ position: 'relative', zIndex: 1 }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '28px' }}
        >
          <p style={{ color: '#C9A84C', fontSize: '11px', letterSpacing: '0.3em', textTransform: 'uppercase', marginBottom: '8px' }}>
            The MOA Advantage
          </p>
          <h2 style={{ fontSize: 'clamp(26px, 3vw, 44px)', fontWeight: 800, lineHeight: 1.1, letterSpacing: '-0.02em' }}>
            See what your brand <span style={{ color: '#C9A84C' }}>earns here.</span>
          </h2>
          <p style={{ fontSize: '13px', color: '#555', marginTop: '8px', lineHeight: 1.6 }}>
            Plug in your store size and category to see projected revenue at MOA vs. national average.
          </p>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', alignItems: 'start' }}>
          {/* Left controls */}
          <motion.div
            initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div style={{ marginBottom: '24px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                <label style={{ fontSize: '12px', color: '#888', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Store Size</label>
                <span style={{ fontSize: '15px', fontWeight: 700, color: '#C9A84C' }}>{sqft.toLocaleString()} sq ft</span>
              </div>
              <input type="range" min="500" max="20000" step="500" value={sqft}
                onChange={e => setSqft(Number(e.target.value))}
                style={{ width: '100%', accentColor: '#C9A84C', height: '4px' }}
              />
              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '4px' }}>
                <span style={{ fontSize: '10px', color: '#444' }}>500 sq ft</span>
                <span style={{ fontSize: '10px', color: '#444' }}>20,000 sq ft</span>
              </div>
            </div>

            <div>
              <label style={{ fontSize: '12px', color: '#888', letterSpacing: '0.1em', textTransform: 'uppercase', display: 'block', marginBottom: '10px' }}>
                Store Category
              </label>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                {categories.map(c => (
                  <button key={c.label} onClick={() => setCategory(c)} style={{
                    padding: '10px 14px', borderRadius: '3px', cursor: 'pointer',
                    background: category.label === c.label ? `${c.color}20` : '#141414',
                    border: `1px solid ${category.label === c.label ? c.color : 'rgba(255,255,255,0.08)'}`,
                    color: category.label === c.label ? c.color : '#666',
                    fontSize: '11px', fontWeight: category.label === c.label ? 700 : 400,
                    textAlign: 'left', transition: 'all 0.2s'
                  }}>
                    {c.label}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right results */}
          <motion.div
            initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div style={{ marginBottom: '12px' }}>
              <div style={{
                background: '#141414', border: `1px solid ${category.color}40`,
                borderLeft: `4px solid ${category.color}`,
                borderRadius: '4px', padding: '20px 24px', marginBottom: '10px'
              }}>
                <div style={{ fontSize: '11px', color: category.color, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '6px', fontWeight: 600 }}>
                  At Mall of America
                </div>
                <div style={{ fontSize: 'clamp(26px, 3vw, 40px)', fontWeight: 800, color: '#fff' }}>
                  ${moaRevenue.toLocaleString()}
                </div>
                <div style={{ fontSize: '11px', color: '#555', marginTop: '2px' }}>Projected annual revenue</div>
              </div>

              <div style={{
                background: '#0D0D0D', border: '1px solid rgba(255,255,255,0.06)',
                borderRadius: '4px', padding: '16px 24px', marginBottom: '10px'
              }}>
                <div style={{ fontSize: '11px', color: '#444', letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '6px' }}>
                  National Mall Average
                </div>
                <div style={{ fontSize: '26px', fontWeight: 700, color: '#444' }}>
                  ${nationalRevenue.toLocaleString()}
                </div>
              </div>
            </div>

            <div style={{
              background: `${category.color}12`,
              border: `1px solid ${category.color}30`,
              borderRadius: '4px', padding: '16px 24px',
              display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px'
            }}>
              {[
                { val: `+${uplift}%`, label: 'Revenue uplift' },
                { val: footTraffic.toLocaleString(), label: 'Annual store visits' },
                { val: `+$${extraRevenue.toLocaleString()}`, label: 'Extra revenue/year' },
                { val: '40M+', label: 'Visitors past your door' },
              ].map(s => (
                <div key={s.label}>
                  <div style={{ fontSize: '22px', fontWeight: 800, color: category.color }}>{s.val}</div>
                  <div style={{ fontSize: '10px', color: '#555', textTransform: 'uppercase', letterSpacing: '0.1em', marginTop: '2px' }}>{s.label}</div>
                </div>
              ))}
            </div>

            <p style={{ fontSize: '10px', color: '#2a2a2a', marginTop: '8px', lineHeight: 1.6 }}>
              * Based on MOA reported avg sales PSF vs. ICSC national benchmarks. For illustration purposes.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}