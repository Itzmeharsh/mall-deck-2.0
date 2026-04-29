export default function Nav({ current, goTo, sectionIds }) {
    const labels = ['Home', 'Why MOA', 'Retail', 'Entertainment', 'Calculator', 'Events', 'Contact']

    return (
        <nav style={{
            position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100,
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            padding: '0 48px', height: '64px',
            background: 'rgba(10,10,10,0.85)',
            backdropFilter: 'blur(12px)',
            borderBottom: '1px solid rgba(201,168,76,0.15)',
        }}>
            <div style={{ fontWeight: 700, fontSize: '16px', letterSpacing: '0.15em', color: '#C9A84C' }}>
                MALL OF AMERICA
            </div>
            <div style={{ display: 'flex', gap: '28px' }}>
                {labels.map((label, i) => (
                    <button key={label} onClick={() => goTo(i)} style={{
                        background: 'none', border: 'none', cursor: 'pointer',
                        color: current === i ? '#C9A84C' : '#888',
                        fontSize: '12px', letterSpacing: '0.1em',
                        fontWeight: current === i ? 600 : 400,
                        textTransform: 'uppercase',
                        transition: 'color 0.2s',
                        borderBottom: current === i ? '1px solid #C9A84C' : '1px solid transparent',
                        paddingBottom: '2px'
                    }}>
                        {label}
                    </button>
                ))}
            </div>
        </nav>
    )
}