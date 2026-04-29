import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

function CountUp({ target, suffix = '', prefix = '' }) {
    const [count, setCount] = useState(0)
    const ref = useRef(null)

    useEffect(() => {
        let start = 0
        const duration = 2000
        const stepTime = 20
        const steps = duration / stepTime
        const increment = target / steps

        const timer = setInterval(() => {
            start += increment
            if (start >= target) {
                setCount(target)
                clearInterval(timer)
            } else {
                setCount(Math.floor(start))
            }
        }, stepTime)

        return () => clearInterval(timer)
    }, [target])

    return <span>{prefix}{count.toLocaleString()}{suffix}</span>
}

const stats = [
    { value: 40, suffix: 'M+', label: 'Annual Visitors', desc: 'More than the entire population of Canada' },
    { value: 5.6, suffix: 'M', prefix: '', label: 'Square Feet', desc: 'Largest mall in the United States' },
    { value: 500, suffix: '+', label: 'Stores & Restaurants', desc: 'Every category, every tier, every brand' },
    { value: 13000, suffix: '+', label: 'Jobs Created', desc: 'The largest single-site employer in Minnesota' },
]

const reasons = [
    { icon: '✈', title: 'Fly-In Destination', desc: '40% of visitors travel from outside Minnesota specifically to visit MOA' },
    { icon: '🏨', title: 'On-Site Hotel', desc: 'Radisson Blu directly connected — guests spend 3x more than day visitors' },
    { icon: '🎢', title: 'Theme Park Inside', desc: 'Nickelodeon Universe — 30+ rides, zero need to go elsewhere' },
    { icon: '📍', title: 'Prime Location', desc: 'Minutes from MSP Airport, serving 35M+ annual passengers' },
]

export default function WhyMOA() {
    return (
        <section id="why-moa" style={{
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
            {/* Background image */}
            <div style={{
                position: 'absolute', inset: 0, zIndex: 0,
                backgroundImage: 'url(/images/interior.jpg)',
                backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.08
            }} />
            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                style={{ marginBottom: '48px' }}
            >
                <p style={{ color: '#C9A84C', fontSize: '12px', letterSpacing: '0.3em', textTransform: 'uppercase', marginBottom: '12px' }}>
                    The Opportunity
                </p>
                <h2 style={{ fontSize: 'clamp(32px, 4vw, 52px)', fontWeight: 800, lineHeight: 1.1, letterSpacing: '-0.02em' }}>
                    Not a mall.<br />
                    <span style={{ color: '#C9A84C' }}>A national destination.</span>
                </h2>
            </motion.div>

            {/* Stats grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px', marginBottom: '40px' }}>
                {stats.map((s, i) => (
                    <motion.div key={s.label}
                        initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 * i }}
                        style={{
                            background: '#1A1A1A', border: '1px solid rgba(201,168,76,0.2)',
                            borderRadius: '4px', padding: '28px 24px'
                        }}
                    >
                        <div style={{ fontSize: 'clamp(32px, 3vw, 48px)', fontWeight: 800, color: '#C9A84C', lineHeight: 1, marginBottom: '8px' }}>
                            <CountUp target={s.value} suffix={s.suffix} prefix={s.prefix || ''} />
                        </div>
                        <div style={{ fontSize: '13px', fontWeight: 600, color: '#fff', marginBottom: '6px', letterSpacing: '0.05em' }}>
                            {s.label}
                        </div>
                        <div style={{ fontSize: '12px', color: '#666', lineHeight: 1.5 }}>
                            {s.desc}
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Reasons grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px' }}>
                {reasons.map((r, i) => (
                    <motion.div key={r.title}
                        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 + 0.1 * i }}
                        style={{
                            background: 'rgba(201,168,76,0.05)',
                            border: '1px solid rgba(201,168,76,0.1)',
                            borderRadius: '4px', padding: '20px'
                        }}
                    >
                        <div style={{ fontSize: '24px', marginBottom: '10px' }}>{r.icon}</div>
                        <div style={{ fontSize: '13px', fontWeight: 600, color: '#fff', marginBottom: '6px' }}>{r.title}</div>
                        <div style={{ fontSize: '12px', color: '#666', lineHeight: 1.5 }}>{r.desc}</div>
                    </motion.div>
                ))}
            </div>
        </section>
    )
}