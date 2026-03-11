import { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const services = [
  { num: '01', title: 'Website Design, SEO & Hosting' },
  { num: '02', title: 'eCommerce Development' },
  { num: '03', title: 'Branding & Visual Identity' },
  { num: '04', title: 'Social Media Management' },
  { num: '05', title: 'Content Creation' },
  { num: '06', title: 'Market Analysis & Strategy' },
  { num: '07', title: 'Online Profile Setup & Handholding' },
]

const steps = [
  { num: '01', name: 'Discover', desc: 'We dive deep into your business, goals, and audience.' },
  { num: '02', name: 'Strategize', desc: 'We build a clear, actionable plan tailored to your growth.' },
  { num: '03', name: 'Build', desc: 'We execute with precision — design, content, and tech.' },
  { num: '04', name: 'Launch & Improve', desc: 'We ship, measure, and keep refining for better results.' },
]

const reasons = [
  { heading: 'Built for Small Business', desc: 'We understand tight budgets and big ambitions.' },
  { heading: 'Strategy First', desc: 'Every decision is backed by clear thinking, not guesswork.' },
  { heading: 'Fast Execution', desc: 'We move quickly without sacrificing quality.' },
  { heading: 'Full-Stack Marketing', desc: 'From branding to SEO — one team, everything covered.' },
  { heading: 'Transparent & Honest', desc: 'No fluff. Just clear communication and real results.' },
]

const sampleWork = [
  { num: '01', title: 'Local Café Rebrand', industry: 'Food & Beverage', tag: 'Branding', year: '2024', problem: 'Inconsistent branding and zero digital presence.', solution: 'Full visual identity + Google profile + social media launch.' },
  { num: '02', title: 'Boutique eCommerce Launch', industry: 'Retail / Fashion', tag: 'Web + eCommerce', year: '2024', problem: 'No online store despite strong local demand.', solution: 'End-to-end eCommerce site with SEO and photography guide.' },
  { num: '03', title: 'Fitness Studio Growth', industry: 'Health & Wellness', tag: 'Social Media', year: '2025', problem: 'Low engagement and declining walk-ins.', solution: 'Content strategy + Instagram overhaul + local ad campaigns.' },
]

const roles = [
  { title: 'Web Development Intern', area: 'Technical', desc: 'Build and maintain client websites under real-world conditions.' },
  { title: 'Marketing / Sales Intern', area: 'Growth', desc: 'Drive campaigns and help small businesses find their audience.' },
  { title: 'Branding & Research Intern', area: 'Creative', desc: 'Shape visual identities and conduct market research for clients.' },
]

const W = { maxWidth: '1100px', margin: '0 auto', padding: '0 clamp(24px, 5vw, 64px)' }

const SectionLabel = ({ children }) => (
  <p style={{
    fontFamily: 'var(--font-body)', fontSize: '0.68rem', fontWeight: 500,
    letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--teal)',
    display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px',
  }}>
    <span style={{ width: '18px', height: '1px', backgroundColor: 'var(--teal)', display: 'inline-block', flexShrink: 0 }} />
    {children}
  </p>
)

const Home = () => {
  const navigate = useNavigate()
  const cursorRef = useRef(null)
  const cursorDotRef = useRef(null)

  useEffect(() => {
    const cursor = cursorRef.current
    const dot = cursorDotRef.current
    const move = (e) => {
      gsap.to(cursor, { x: e.clientX, y: e.clientY, duration: 0.5, ease: 'power3.out' })
      gsap.to(dot, { x: e.clientX, y: e.clientY, duration: 0.08 })
    }
    window.addEventListener('mousemove', move)

    gsap.timeline({ delay: 0.2 })
      .fromTo('.h-tag', { opacity: 0, y: 8 }, { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' })
      .fromTo('.h-line1', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }, '-=0.2')
      .fromTo('.h-line2', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }, '-=0.55')
      .fromTo('.h-sub', { opacity: 0 }, { opacity: 1, duration: 0.7 }, '-=0.3')
      .fromTo('.h-btns', { opacity: 0, y: 10 }, { opacity: 1, y: 0, duration: 0.5 }, '-=0.3')
      .fromTo('.h-stats', { opacity: 0 }, { opacity: 1, duration: 0.6 }, '-=0.2')

    gsap.utils.toArray('.reveal').forEach(el => {
      gsap.fromTo(el, { opacity: 0, y: 28 }, {
        opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
        scrollTrigger: { trigger: el, start: 'top 90%' },
      })
    })

    return () => window.removeEventListener('mousemove', move)
  }, [])

  return (
    <div style={{ backgroundColor: 'var(--bg-primary)', cursor: 'none' }}>

      {/* Custom cursor */}
      <div ref={cursorRef} style={{
        position: 'fixed', zIndex: 99999, pointerEvents: 'none',
        width: '28px', height: '28px', borderRadius: '50%',
        border: '1px solid var(--teal)', transform: 'translate(-50%,-50%)', opacity: 0.5,
      }} />
      <div ref={cursorDotRef} style={{
        position: 'fixed', zIndex: 99999, pointerEvents: 'none',
        width: '3px', height: '3px', borderRadius: '50%',
        backgroundColor: 'var(--teal)', transform: 'translate(-50%,-50%)',
      }} />

      {/* ── HERO ── */}
      <section style={{
        minHeight: '100vh',
        display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
        borderBottom: '1px solid var(--border)',
        padding: 'clamp(120px, 12vw, 160px) clamp(24px, 5vw, 64px) clamp(48px, 5vw, 72px)',
        maxWidth: '1100px', margin: '0 auto', width: '100%', boxSizing: 'border-box',
        position: 'relative',
      }}>

        {/* Fading dot grid */}
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'radial-gradient(circle, var(--border) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
          maskImage: 'radial-gradient(ellipse 70% 80% at 50% 40%, black 10%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(ellipse 70% 80% at 50% 40%, black 10%, transparent 80%)',
          pointerEvents: 'none',
          zIndex: 0,
        }} />

        {/* Subtle teal glow */}
        <div style={{
          position: 'absolute',
          top: '25%', left: '0',
          width: '500px', height: '400px',
          background: 'radial-gradient(ellipse, var(--teal-glow) 0%, transparent 70%)',
          pointerEvents: 'none',
          zIndex: 0,
        }} />

        <div style={{ position: 'relative', zIndex: 1 }}>
          <div className="h-tag" style={{ opacity: 0, marginBottom: '36px' }}>
            <SectionLabel>PR & Marketing Agency — Est. Visakhapatnam</SectionLabel>
          </div>

          <div className="h-line1" style={{ opacity: 0 }}>
            <h1 style={{
              fontFamily: 'var(--font-display)', fontSize: 'clamp(2.8rem, 7vw, 6.5rem)',
              fontWeight: 300, letterSpacing: '-0.04em', lineHeight: 1.0,
              color: 'var(--text-primary)', margin: 0,
            }}>Where Strategy</h1>
          </div>

          <div className="h-line2" style={{ opacity: 0, marginBottom: 'clamp(40px, 5vw, 64px)' }}>
            <h1 style={{
              fontFamily: 'var(--font-display)', fontSize: 'clamp(2.8rem, 7vw, 6.5rem)',
              fontWeight: 300, letterSpacing: '-0.04em', lineHeight: 1.0,
              margin: 0, display: 'flex', alignItems: 'baseline', gap: '0.2em', flexWrap: 'wrap',
            }}>
              <span style={{ color: 'var(--text-secondary)' }}>Meets</span>
              <span style={{ color: 'var(--teal)', fontStyle: 'italic' }}>Spark.</span>
            </h1>
          </div>

          <div style={{
            borderTop: '1px solid var(--border)', paddingTop: 'clamp(28px, 3.5vw, 44px)',
            display: 'grid', gridTemplateColumns: '1fr auto', gap: '48px', alignItems: 'end',
          }}>
            <div>
              <p className="h-sub" style={{
                opacity: 0, fontFamily: 'var(--font-body)',
                fontSize: 'clamp(0.9rem, 1.3vw, 1.05rem)', fontWeight: 400, lineHeight: 1.8,
                color: 'var(--text-secondary)', maxWidth: '400px', marginBottom: '28px',
              }}>
                We help small businesses grow with smart strategy, bold design, and marketing that actually works.
              </p>
              <div className="h-btns" style={{ opacity: 0, display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                <button onClick={() => navigate('/contact')} style={{
                  backgroundColor: 'var(--teal)', color: '#0e0e0e',
                  padding: '11px 26px', border: 'none', borderRadius: '100px',
                  cursor: 'pointer', fontFamily: 'var(--font-body)',
                  fontSize: '0.82rem', fontWeight: 500, letterSpacing: '0.02em', transition: 'all 0.2s ease',
                }}
                  onMouseEnter={e => { e.currentTarget.style.backgroundColor = 'var(--teal-dark)'; e.currentTarget.style.transform = 'translateY(-1px)' }}
                  onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'var(--teal)'; e.currentTarget.style.transform = 'translateY(0)' }}
                >Work With Kerna ↗</button>
                <button onClick={() => navigate('/careers')} style={{
                  backgroundColor: 'transparent', color: 'var(--text-secondary)',
                  padding: '11px 22px', border: '1px solid var(--border)',
                  borderRadius: '100px', cursor: 'pointer',
                  fontFamily: 'var(--font-body)', fontSize: '0.82rem', fontWeight: 400, transition: 'all 0.2s ease',
                }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--teal)'; e.currentTarget.style.color = 'var(--teal)' }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text-secondary)' }}
                >Join as Intern</button>
              </div>
            </div>
            <div className="h-stats" style={{ opacity: 0, display: 'flex', gap: '36px' }}>
              {[['7+', 'Services'], ['3', 'Open Roles'], ['12wk', 'Program']].map(([n, l]) => (
                <div key={l} style={{ textAlign: 'right' }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.1rem, 1.8vw, 1.6rem)', fontWeight: 300, letterSpacing: '-0.03em', lineHeight: 1, color: 'var(--text-primary)' }}>{n}</div>
                  <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.58rem', fontWeight: 500, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--text-muted)', marginTop: '5px' }}>{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section style={{ borderBottom: '1px solid var(--border)' }}>
        <div style={{ ...W, padding: 'clamp(64px, 8vw, 112px) clamp(24px, 5vw, 64px)' }}>
          <div className="reveal" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 'clamp(40px, 6vw, 96px)', alignItems: 'start' }}>
            <div>
              <SectionLabel>About Kerna</SectionLabel>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 4vw, 3.2rem)', fontWeight: 400, letterSpacing: '-0.04em', lineHeight: 1.15, color: 'var(--text-primary)' }}>
                Built for businesses<br />that mean business.
              </h2>
            </div>
            <div style={{ paddingTop: '4px' }}>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 'clamp(1rem, 1.4vw, 1.1rem)', color: 'var(--text-secondary)', lineHeight: 1.85, marginBottom: '36px' }}>
                Kerna is a lean, strategy-driven PR and marketing agency for small businesses that want to look professional, move fast, and grow without burning money.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                {[
                  { label: 'Mission', text: 'Smart, affordable marketing for every small business.' },
                  { label: 'Who', text: 'Local businesses, startups, and independent brands.' },
                  { label: 'What We Solve', text: 'Weak presence, scattered branding, confusing marketing.' },
                ].map(({ label, text }, i) => (
                  <div key={label} style={{
                    display: 'grid', gridTemplateColumns: '110px 1fr', gap: '24px',
                    padding: '20px 0',
                    borderTop: '1px solid var(--border)',
                    borderBottom: i === 2 ? '1px solid var(--border)' : 'none',
                  }}>
                    <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.7rem', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-muted)', paddingTop: '3px' }}>{label}</span>
                    <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.97rem', fontWeight: 400, color: 'var(--text-secondary)', lineHeight: 1.75 }}>{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section style={{ borderBottom: '1px solid var(--border)', backgroundColor: 'var(--bg-secondary)' }}>
        <div style={{ ...W, padding: 'clamp(64px, 8vw, 112px) clamp(24px, 5vw, 64px)' }}>
          <div className="reveal" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '48px', flexWrap: 'wrap', gap: '16px' }}>
            <div>
              <SectionLabel>Services</SectionLabel>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 4vw, 3.2rem)', fontWeight: 400, letterSpacing: '-0.04em', lineHeight: 1.15, color: 'var(--text-primary)' }}>What we do.</h2>
            </div>
            <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.7rem', fontWeight: 500, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>07 Services</span>
          </div>
          <div className="reveal">
            {services.map((s, i) => (
              <div key={s.num} style={{
                display: 'grid', gridTemplateColumns: '56px 1fr auto', gap: '24px', alignItems: 'center',
                padding: 'clamp(18px, 2.5vw, 26px) 0',
                borderTop: i === 0 ? '1px solid var(--border)' : 'none',
                borderBottom: '1px solid var(--border)',
                transition: 'padding-left 0.25s ease', cursor: 'default',
              }}
                onMouseEnter={e => {
                  e.currentTarget.style.paddingLeft = '12px'
                  e.currentTarget.querySelector('.sv').style.color = 'var(--teal)'
                  e.currentTarget.querySelector('.sv-arrow').style.opacity = '1'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.paddingLeft = '0'
                  e.currentTarget.querySelector('.sv').style.color = 'var(--text-primary)'
                  e.currentTarget.querySelector('.sv-arrow').style.opacity = '0'
                }}
              >
                <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.7rem', fontWeight: 500, color: 'var(--text-muted)', letterSpacing: '0.1em' }}>{s.num}</span>
                <span className="sv" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.1rem, 2vw, 1.5rem)', fontWeight: 400, color: 'var(--text-primary)', transition: 'color 0.25s ease' }}>{s.title}</span>
                <span className="sv-arrow" style={{ fontSize: '1rem', color: 'var(--teal)', opacity: 0, transition: 'opacity 0.25s ease', flexShrink: 0 }}>→</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section style={{ borderBottom: '1px solid var(--border)' }}>
        <div style={{ ...W, padding: 'clamp(64px, 8vw, 112px) clamp(24px, 5vw, 64px)' }}>
          <div className="reveal" style={{ marginBottom: '48px' }}>
            <SectionLabel>Process</SectionLabel>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 4vw, 3.2rem)', fontWeight: 400, letterSpacing: '-0.04em', lineHeight: 1.15, color: 'var(--text-primary)' }}>How we work.</h2>
          </div>
          <div className="reveal" style={{
            display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '1px', backgroundColor: 'var(--border)', border: '1px solid var(--border)',
          }}>
            {steps.map((step) => (
              <div key={step.num} style={{
                backgroundColor: 'var(--bg-primary)',
                padding: 'clamp(32px, 4vw, 52px) clamp(24px, 3vw, 36px)',
                display: 'flex', flexDirection: 'column', gap: '16px',
                transition: 'background-color 0.25s ease',
              }}
                onMouseEnter={e => e.currentTarget.style.backgroundColor = 'var(--bg-secondary)'}
                onMouseLeave={e => e.currentTarget.style.backgroundColor = 'var(--bg-primary)'}
              >
                <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.7rem', fontWeight: 500, color: 'var(--teal)', letterSpacing: '0.1em' }}>{step.num}</span>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.15rem, 1.8vw, 1.4rem)', fontWeight: 400, color: 'var(--text-primary)', letterSpacing: '-0.02em' }}>{step.name}</h3>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: 'clamp(0.88rem, 1.1vw, 0.97rem)', fontWeight: 400, color: 'var(--text-secondary)', lineHeight: 1.75 }}>{step.desc}</p>
                <span style={{ width: '20px', height: '1px', backgroundColor: 'var(--teal)', marginTop: 'auto', opacity: 0.6 }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY KERNA ── */}
      <section style={{ borderBottom: '1px solid var(--border)', backgroundColor: 'var(--bg-secondary)' }}>
        <div style={{ ...W, padding: 'clamp(64px, 8vw, 112px) clamp(24px, 5vw, 64px)' }}>
          <div className="reveal" style={{ marginBottom: '48px' }}>
            <SectionLabel>Why Us</SectionLabel>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 4vw, 3.2rem)', fontWeight: 400, letterSpacing: '-0.04em', lineHeight: 1.15, color: 'var(--text-primary)' }}>Why choose Kerna.</h2>
          </div>
          <div className="reveal">
            {reasons.map((r, i) => (
              <div key={r.heading} style={{
                display: 'grid', gridTemplateColumns: '1fr clamp(220px, 35%, 400px)', gap: '40px', alignItems: 'start',
                padding: 'clamp(22px, 3vw, 32px) 0',
                borderTop: i === 0 ? '1px solid var(--border)' : 'none',
                borderBottom: '1px solid var(--border)',
                transition: 'all 0.2s ease', cursor: 'default',
              }}
                onMouseEnter={e => { e.currentTarget.style.backgroundColor = 'var(--bg-card)'; e.currentTarget.style.paddingLeft = '10px' }}
                onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.paddingLeft = '0' }}
              >
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.05rem, 1.6vw, 1.3rem)', fontWeight: 400, color: 'var(--text-primary)', letterSpacing: '-0.02em' }}>{r.heading}</h3>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: 'clamp(0.88rem, 1.1vw, 0.97rem)', fontWeight: 400, color: 'var(--text-secondary)', lineHeight: 1.75 }}>{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WORK PREVIEW ── */}
      <section style={{ borderBottom: '1px solid var(--border)' }}>
        <div style={{ ...W, padding: 'clamp(64px, 8vw, 112px) clamp(24px, 5vw, 64px)' }}>

          {/* Header */}
          <div className="reveal" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '48px', flexWrap: 'wrap', gap: '16px' }}>
            <div>
              <SectionLabel>Selected Work</SectionLabel>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 4vw, 3.2rem)', fontWeight: 400, letterSpacing: '-0.04em', lineHeight: 1.15, color: 'var(--text-primary)' }}>Sample projects.</h2>
            </div>
            <button onClick={() => navigate('/work')} style={{
              backgroundColor: 'transparent', color: 'var(--text-secondary)',
              padding: '10px 22px', border: '1px solid var(--border)',
              borderRadius: '100px', cursor: 'pointer', fontFamily: 'var(--font-body)',
              fontSize: '0.85rem', fontWeight: 400, transition: 'all 0.2s ease',
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--teal)'; e.currentTarget.style.color = 'var(--teal)' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text-secondary)' }}
            >View All →</button>
          </div>

          {/* Cards grid */}
          <div className="reveal" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '20px',
          }}>
            {sampleWork.map((w) => (
              <div key={w.title}
                onClick={() => navigate('/work')}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = 'rgba(45,212,191,0.35)'
                  e.currentTarget.style.transform = 'translateY(-4px)'
                  e.currentTarget.querySelector('.wc-arrow').style.opacity = '1'
                  e.currentTarget.querySelector('.wc-arrow').style.transform = 'translate(2px, -2px)'
                  e.currentTarget.querySelector('.wc-num').style.opacity = '0.12'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'var(--border)'
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.querySelector('.wc-arrow').style.opacity = '0'
                  e.currentTarget.querySelector('.wc-arrow').style.transform = 'translate(0, 0)'
                  e.currentTarget.querySelector('.wc-num').style.opacity = '0.06'
                }}
                style={{
                  position: 'relative', overflow: 'hidden',
                  backgroundColor: 'var(--bg-secondary)',
                  border: '1px solid var(--border)',
                  borderRadius: '12px',
                  padding: 'clamp(24px, 3vw, 36px)',
                  cursor: 'pointer',
                  display: 'flex', flexDirection: 'column', gap: '0',
                  transition: 'border-color 0.25s ease, transform 0.3s cubic-bezier(0.16,1,0.3,1)',
                  minHeight: '340px',
                }}
              >
                {/* Ghost number watermark */}
                <span className="wc-num" style={{
                  position: 'absolute', bottom: '-12px', right: '16px',
                  fontFamily: 'var(--font-display)', fontSize: '7rem', fontWeight: 400,
                  color: 'var(--teal)', opacity: 0.06, lineHeight: 1,
                  letterSpacing: '-0.04em', userSelect: 'none', pointerEvents: 'none',
                  transition: 'opacity 0.3s ease',
                }}>{w.num}</span>

                {/* Top row */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '28px' }}>
                  <span style={{
                    fontFamily: 'var(--font-body)', fontSize: '0.65rem', fontWeight: 500,
                    letterSpacing: '0.12em', textTransform: 'uppercase',
                    color: 'var(--text-muted)',
                  }}>{w.year}</span>
                  <span style={{
                    fontFamily: 'var(--font-body)', fontSize: '0.65rem', fontWeight: 500,
                    letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--teal)',
                    border: '1px solid rgba(45,212,191,0.25)', padding: '3px 11px', borderRadius: '100px',
                    backgroundColor: 'rgba(45,212,191,0.06)',
                  }}>{w.tag}</span>
                </div>

                {/* Title */}
                <h3 style={{
                  fontFamily: 'var(--font-display)', fontSize: 'clamp(1.2rem, 1.8vw, 1.5rem)',
                  fontWeight: 400, color: 'var(--text-primary)', letterSpacing: '-0.03em',
                  lineHeight: 1.15, marginBottom: '6px',
                }}>{w.title}</h3>
                <p style={{
                  fontFamily: 'var(--font-body)', fontSize: '0.72rem', fontWeight: 500,
                  letterSpacing: '0.1em', textTransform: 'uppercase',
                  color: 'var(--text-muted)', marginBottom: '24px',
                }}>{w.industry}</p>

                {/* Divider */}
                <div style={{ width: '100%', height: '1px', backgroundColor: 'var(--border)', marginBottom: '24px' }} />

                {/* Problem + Solution stacked */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '18px', flex: 1 }}>
                  {[['Problem', w.problem], ['Solution', w.solution]].map(([lbl, txt]) => (
                    <div key={lbl} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                      <span style={{
                        width: '5px', height: '5px', borderRadius: '50%', flexShrink: 0,
                        backgroundColor: lbl === 'Solution' ? 'var(--teal)' : 'var(--text-muted)',
                        marginTop: '7px',
                      }} />
                      <div>
                        <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.62rem', fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: lbl === 'Solution' ? 'var(--teal)' : 'var(--text-muted)', marginBottom: '4px' }}>{lbl}</p>
                        <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.88rem', fontWeight: 400, color: 'var(--text-secondary)', lineHeight: 1.7 }}>{txt}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Arrow */}
                <span className="wc-arrow" style={{
                  position: 'absolute', top: '20px', right: '20px',
                  color: 'var(--teal)', fontSize: '1rem',
                  opacity: 0, transition: 'opacity 0.2s ease, transform 0.2s ease',
                }}>↗</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CAREERS ── */}
      <section style={{ borderBottom: '1px solid var(--border)', backgroundColor: 'var(--bg-secondary)' }}>
        <div style={{ ...W, padding: 'clamp(64px, 8vw, 112px) clamp(24px, 5vw, 64px)' }}>
          <div className="reveal" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '48px', flexWrap: 'wrap', gap: '16px' }}>
            <div>
              <SectionLabel>Careers</SectionLabel>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 4vw, 3.2rem)', fontWeight: 400, letterSpacing: '-0.04em', lineHeight: 1.15, color: 'var(--text-primary)' }}>Grow with Kerna.</h2>
            </div>
            <button onClick={() => navigate('/careers')} style={{
              backgroundColor: 'transparent', color: 'var(--text-secondary)',
              padding: '10px 22px', border: '1px solid var(--border)',
              borderRadius: '100px', cursor: 'pointer', fontFamily: 'var(--font-body)',
              fontSize: '0.85rem', fontWeight: 400, transition: 'all 0.2s ease',
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--teal)'; e.currentTarget.style.color = 'var(--teal)' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text-secondary)' }}
            >All Roles →</button>
          </div>
          <div className="reveal">
            {roles.map((r, i) => (
              <div key={r.title} style={{
                display: 'grid', gridTemplateColumns: '1fr auto', gap: '24px', alignItems: 'center',
                padding: 'clamp(22px, 3vw, 32px) 0',
                borderTop: i === 0 ? '1px solid var(--border)' : 'none',
                borderBottom: '1px solid var(--border)',
                cursor: 'pointer', transition: 'all 0.2s ease',
              }}
                onClick={() => navigate('/careers')}
                onMouseEnter={e => {
                  e.currentTarget.style.paddingLeft = '12px'
                  e.currentTarget.querySelector('.rt').style.color = 'var(--teal)'
                  e.currentTarget.querySelector('.ra').style.opacity = '1'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.paddingLeft = '0'
                  e.currentTarget.querySelector('.rt').style.color = 'var(--text-primary)'
                  e.currentTarget.querySelector('.ra').style.opacity = '0'
                }}
              >
                <div>
                  <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.7rem', fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted)', display: 'block', marginBottom: '8px' }}>{r.area} · 12 Weeks</span>
                  <h3 className="rt" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.1rem, 1.7vw, 1.35rem)', fontWeight: 400, color: 'var(--text-primary)', letterSpacing: '-0.02em', marginBottom: '6px', transition: 'color 0.2s ease' }}>{r.title}</h3>
                  <p style={{ fontFamily: 'var(--font-body)', fontSize: 'clamp(0.88rem, 1.1vw, 0.97rem)', fontWeight: 400, color: 'var(--text-secondary)', lineHeight: 1.65 }}>{r.desc}</p>
                </div>
                <span className="ra" style={{ color: 'var(--teal)', fontSize: '1.1rem', opacity: 0, transition: 'opacity 0.2s ease', flexShrink: 0 }}>↗</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
          <div className="reveal" style={{
            padding: 'clamp(64px, 8vw, 112px) clamp(24px, 5vw, 64px)',
            borderRight: '1px solid var(--border)',
            display: 'flex', flexDirection: 'column', gap: '32px',
          }}>
            <SectionLabel>Get In Touch</SectionLabel>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 4vw, 3.2rem)', fontWeight: 400, letterSpacing: '-0.04em', lineHeight: 1.15, color: 'var(--text-primary)' }}>
              Ready to spark something?
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {['+91 75696 12318', '+91 99496 86160'].map(num => (
                <a key={num} href={`tel:${num.replace(/\s/g, '')}`} style={{
                  fontFamily: 'var(--font-body)', fontSize: '1.05rem', fontWeight: 400,
                  color: 'var(--text-secondary)', textDecoration: 'none', transition: 'color 0.2s ease',
                }}
                  onMouseEnter={e => e.currentTarget.style.color = 'var(--teal)'}
                  onMouseLeave={e => e.currentTarget.style.color = 'var(--text-secondary)'}
                >{num}</a>
              ))}
              <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.9rem', fontWeight: 400, color: 'var(--text-muted)', marginTop: '4px' }}>Marripalem, Visakhapatnam, AP</p>
            </div>
            <button onClick={() => navigate('/contact')} style={{
              backgroundColor: 'var(--teal)', color: '#0e0e0e',
              padding: '13px 30px', border: 'none', borderRadius: '100px',
              cursor: 'pointer', fontFamily: 'var(--font-body)',
              fontSize: '0.9rem', fontWeight: 500, letterSpacing: '0.02em',
              transition: 'all 0.2s ease', alignSelf: 'flex-start',
            }}
              onMouseEnter={e => { e.currentTarget.style.backgroundColor = 'var(--teal-dark)'; e.currentTarget.style.transform = 'translateY(-1px)' }}
              onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'var(--teal)'; e.currentTarget.style.transform = 'translateY(0)' }}
            >Work With Kerna ↗</button>
          </div>
          <div style={{ minHeight: 'clamp(300px, 40vw, 480px)' }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d282.4389561590316!2d83.24420142282327!3d17.74319497588421!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a39670b3899bbe9%3A0x3fd6768247180757!2sSai%20Sundar%20Residency!5e0!3m2!1sen!2sin!4v1769022633919!5m2!1sen!2sin"
              width="100%" height="100%"
              style={{ border: 0, display: 'block', minHeight: 'clamp(300px, 40vw, 480px)' }}
              allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Kerna Office"
            />
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 640px) { .h-stats { display: none !important; } }
        * { cursor: none !important; }
      `}</style>
    </div>
  )
}

export default Home