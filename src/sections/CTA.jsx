import { motion } from 'framer-motion'
import { useState } from 'react'

const paths = [
    {
        icon: '🏪',
        title: 'Retail Leasing',
        color: '#C9A84C',
        desc: 'Luxury, flagship, mid-tier, F&B, or pop-up. Find your space in America\'s most visited mall.',
        action: 'Inquire About Leasing',
        details: ['500+ existing tenants', 'All tier sizes available', 'Flexible lease terms', 'Dedicated leasing team']
    },
    {
        icon: '🤝',
        title: 'Brand Sponsorship',
        color: '#4A90D9',
        desc: 'Reach 40M annual visitors through naming rights, digital displays, activations, and more.',
        action: 'Explore Partnerships',
        details: ['Naming rights available', 'Digital & physical inventory', 'Custom activation packages', 'Audience targeting by zone']
    },
    {
        icon: '🎤',
        title: 'Event Booking',
        color: '#E85D4A',
        desc: 'Book MOA\'s world-class venues for concerts, launches, conventions, and brand moments.',
        action: 'Book a Venue',
        details: ['4 major venue spaces', 'Up to 20,000 capacity', 'Full AV & production support', 'On-site hotel & catering']
    },
]

export default function CTA() {
    const [selected, setSelected] = useState(null)
    const [submitted, setSubmitted] = useState(false)
    const [form, setForm] = useState({ name: '', company: '', email: '', message: '' })

    const handleSubmit = () => {
        if (!form.name || !form.email) return
        setSubmitted(true)
    }

    return (
        <section id="cta" style={{
            
            width: '100vw', height: '100vh', background: '#0D0D0D',
            display: 'flex', flexDirection: 'column', justifyContent: 'center',
            padding: '80px 80px 60px', overflow: 'hidden'
        }}>
            <div style={{
                position: 'absolute', inset: 0, zIndex: 0,
                backgroundImage: 'url(/images/hero.jpg)',
                backgroundSize: 'cover', backgroundPosition: 'center', opacity: 0.06
            }} />
            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                style={{ marginBottom: '48px', textAlign: 'center' }}
            >
                <p style={{ color: '#C9A84C', fontSize: '12px', letterSpacing: '0.3em', textTransform: 'uppercase', marginBottom: '12px' }}>
                    Let's Build Something
                </p>
                <h2 style={{ fontSize: 'clamp(32px, 4vw, 56px)', fontWeight: 800, lineHeight: 1.1, letterSpacing: '-0.02em' }}>
                    Your brand belongs here.
                </h2>
                <p style={{ fontSize: '16px', color: '#666', marginTop: '16px' }}>
                    Choose how you want to be part of Mall of America.
                </p>
            </motion.div>

            {!submitted ? (
                <div style={{ display: 'grid', gridTemplateColumns: selected ? '1fr 1fr' : 'repeat(3, 1fr)', gap: '24px', transition: 'all 0.4s' }}>
                    {/* Path cards */}
                    <div style={{ display: 'grid', gridTemplateColumns: selected ? '1fr' : 'repeat(3, 1fr)', gap: '20px', gridColumn: selected ? '1' : '1 / -1' }}>
                        {paths.map((p, i) => (
                            <motion.div key={p.title}
                                initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.1 * i }}
                                onClick={() => setSelected(selected === p.title ? null : p.title)}
                                style={{
                                    background: selected === p.title ? `${p.color}15` : '#141414',
                                    border: `1px solid ${selected === p.title ? p.color : p.color + '33'}`,
                                    borderTop: `3px solid ${p.color}`,
                                    borderRadius: '4px', padding: '28px 24px',
                                    cursor: 'pointer', transition: 'all 0.3s'
                                }}
                            >
                                <div style={{ fontSize: '36px', marginBottom: '14px' }}>{p.icon}</div>
                                <div style={{ fontSize: '18px', fontWeight: 700, color: '#fff', marginBottom: '10px' }}>{p.title}</div>
                                <p style={{ fontSize: '13px', color: '#666', lineHeight: 1.6, marginBottom: '16px' }}>{p.desc}</p>
                                <div style={{ marginBottom: '20px' }}>
                                    {p.details.map(d => (
                                        <div key={d} style={{ fontSize: '12px', color: '#888', padding: '4px 0', borderBottom: '1px solid rgba(255,255,255,0.04)' }}>
                                            · {d}
                                        </div>
                                    ))}
                                </div>
                                <div style={{
                                    fontSize: '12px', color: p.color, fontWeight: 700,
                                    letterSpacing: '0.1em', textTransform: 'uppercase'
                                }}>
                                    {selected === p.title ? '✓ Selected' : p.action + ' →'}
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Contact form — appears when a path is selected */}
                    {selected && (
                        <motion.div
                            initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.4 }}
                            style={{
                                background: '#141414', border: '1px solid rgba(201,168,76,0.2)',
                                borderRadius: '4px', padding: '32px 28px',
                                display: 'flex', flexDirection: 'column', gap: '14px'
                            }}
                        >
                            <div style={{ fontSize: '14px', fontWeight: 700, color: '#C9A84C', marginBottom: '4px', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                                Get In Touch
                            </div>
                            {[
                                { key: 'name', placeholder: 'Your Name', type: 'text' },
                                { key: 'company', placeholder: 'Company / Brand', type: 'text' },
                                { key: 'email', placeholder: 'Email Address', type: 'email' },
                            ].map(f => (
                                <input key={f.key} type={f.type} placeholder={f.placeholder}
                                    value={form[f.key]}
                                    onChange={e => setForm({ ...form, [f.key]: e.target.value })}
                                    style={{
                                        background: '#1A1A1A', border: '1px solid rgba(255,255,255,0.1)',
                                        borderRadius: '3px', padding: '12px 16px', color: '#fff',
                                        fontSize: '13px', outline: 'none', width: '100%'
                                    }}
                                />
                            ))}
                            <textarea placeholder="Tell us about your goals..."
                                value={form.message}
                                onChange={e => setForm({ ...form, message: e.target.value })}
                                rows={3}
                                style={{
                                    background: '#1A1A1A', border: '1px solid rgba(255,255,255,0.1)',
                                    borderRadius: '3px', padding: '12px 16px', color: '#fff',
                                    fontSize: '13px', outline: 'none', width: '100%', resize: 'none',
                                    fontFamily: 'inherit'
                                }}
                            />
                            <button onClick={handleSubmit} style={{
                                background: '#C9A84C', color: '#0A0A0A', border: 'none',
                                borderRadius: '3px', padding: '14px', fontSize: '13px',
                                fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase',
                                cursor: 'pointer', marginTop: '4px'
                            }}>
                                Submit Inquiry
                            </button>
                            <p style={{ fontSize: '11px', color: '#444', textAlign: 'center' }}>
                                A leasing specialist will respond within 24 hours.
                            </p>
                        </motion.div>
                    )}
                </div>
            ) : (
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    style={{ textAlign: 'center', padding: '60px' }}
                >
                    <div style={{ fontSize: '64px', marginBottom: '24px' }}>✓</div>
                    <h3 style={{ fontSize: '32px', fontWeight: 800, color: '#C9A84C', marginBottom: '16px' }}>
                        We'll be in touch.
                    </h3>
                    <p style={{ fontSize: '16px', color: '#666', maxWidth: '400px', margin: '0 auto' }}>
                        Thank you, {form.name}. A Mall of America specialist will reach out to {form.email} within 24 hours.
                    </p>
                </motion.div>
            )}
        </section>
    )
}