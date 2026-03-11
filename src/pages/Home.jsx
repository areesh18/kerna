import { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const services = [
  { num: '01', title: 'Website Design, SEO & Hosting', tags: ['Web', 'SEO'] },
  { num: '02', title: 'eCommerce Development', tags: ['Web', 'Commerce'] },
  { num: '03', title: 'Branding & Visual Identity', tags: ['Brand', 'Design'] },
  { num: '04', title: 'Social Media Management', tags: ['Social', 'Content'] },
  { num: '05', title: 'Content Creation', tags: ['Copy', 'Visual'] },
  { num: '06', title: 'Market Analysis & Strategy', tags: ['Strategy', 'Data'] },
  { num: '07', title: 'Online Profile Setup & Handholding', tags: ['Local', 'Setup'] },
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

const Home = () => {
  const navigate = useNavigate()
  const cursorRef = useRef(null)
  const cursorDotRef = useRef(null)

  useEffect(() => {
    // Custom cursor
    const cursor = cursorRef.current
    const dot = cursorDotRef.current
    const moveCursor = (e) => {
      gsap.to(cursor, { x: e.clientX, y: e.clientY, duration: 0.6, ease: 'power3.out' })
      gsap.to(dot, { x: e.clientX, y: e.clientY, duration: 0.1 })
    }
    window.addEventListener('mousemove', moveCursor)

    // Hero entrance
    const tl = gsap.timeline({ delay: 0.2 })
    tl.fromTo('.hero-tag', { opacity: 0, y: 12 }, { opacity: 1, y: 0, duration: 0.5, ease: 'power3.out' })
      .fromTo('.hero-h1-1', { opacity: 0, y: '100%' }, { opacity: 1, y: '0%', duration: 1, ease: 'power4.out' }, '-=0.1')
      .fromTo('.hero-h1-2', { opacity: 0, y: '100%' }, { opacity: 1, y: '0%', duration: 1, ease: 'power4.out' }, '-=0.8')
      .fromTo('.hero-h1-3', { opacity: 0, y: '100%' }, { opacity: 1, y: '0%', duration: 1, ease: 'power4.out' }, '-=0.8')
      .fromTo('.hero-body', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' }, '-=0.4')
      .fromTo('.hero-ctas', { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' }, '-=0.3')
      .fromTo('.hero-meta', { opacity: 0 }, { opacity: 1, duration: 0.8 }, '-=0.2')

    // Scroll animations
    gsap.utils.toArray('.reveal-up').forEach(el => {
      gsap.fromTo(el,
        { opacity: 0, y: 56 },
        { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 88%' } }
      )
    })

    gsap.utils.toArray('.reveal-line').forEach((el, i) => {
      gsap.fromTo(el,
        { opacity: 0, x: -20 },
        { opacity: 1, x: 0, duration: 0.7, ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 90%' },
          delay: i * 0.04 }
      )
    })

    return () => window.removeEventListener('mousemove', moveCursor)
  }, [])

  const W = { maxWidth: '1400px', margin: '0 auto', padding: '0 clamp(24px, 5vw, 80px)' }

  return (
    <div style={{ backgroundColor: 'var(--bg-primary)', cursor: 'none' }}>

      {/* Custom cursor */}
      <div ref={cursorRef} style={{
        position: 'fixed', zIndex: 99999, pointerEvents: 'none',
        width: '40px', height: '40px', borderRadius: '50%',
        border: '1px solid var(--teal)',
        transform: 'translate(-50%, -50%)',
        transition: 'opacity 0.3s',
        mixBlendMode: 'difference',
      }} className="cursor-ring" />
      <div ref={cursorDotRef} style={{
        position: 'fixed', zIndex: 99999, pointerEvents: 'none',
        width: '5px', height: '5px', borderRadius: '50%',
        backgroundColor: 'var(--teal)',
        transform: 'translate(-50%, -50%)',
      }} />

      {/* ━━━━━━━ HERO ━━━━━━━ */}
<section style={{
  minHeight: '100vh',
  display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
  padding: 'clamp(120px, 14vw, 160px) clamp(24px, 5vw, 80px) clamp(80px, 8vw, 120px)',
  position: 'relative', overflow: 'hidden',
  textAlign: 'center',
}}>
  {/* Top meta bar */}
  <div className="hero-tag" style={{
    position: 'absolute', top: 'clamp(100px, 10vw, 130px)', left: 0, right: 0,
    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
    padding: '0 clamp(24px, 5vw, 80px)', opacity: 0,
  }}>
    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
      <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--teal)', display: 'inline-block' }} />
      <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--text-secondary)' }}>PR & Marketing Agency</span>
    </div>
    <span style={{ fontFamily: 'var(--font-body)', fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>Est. Visakhapatnam</span>
  </div>

  {/* Centered headline */}
  <div style={{ maxWidth: '900px', width: '100%' }}>
    <div style={{ overflow: 'hidden', marginBottom: '8px' }}>
      <h1 className="hero-h1-1" style={{
        fontFamily: 'var(--font-display)', fontSize: 'clamp(3rem, 8vw, 7rem)',
        fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1.0,
        color: 'var(--text-primary)', opacity: 0,
      }}>Where Strategy</h1>
    </div>
    <div style={{ overflow: 'hidden', marginBottom: '32px' }}>
      <h1 className="hero-h1-2" style={{
        fontFamily: 'var(--font-display)', fontSize: 'clamp(3rem, 8vw, 7rem)',
        fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1.0,
        color: 'var(--teal)', opacity: 0,
      }}>Meets Spark.</h1>
    </div>

    <p className="hero-body" style={{
      opacity: 0, fontFamily: 'var(--font-body)',
      fontSize: 'clamp(1rem, 1.6vw, 1.15rem)',
      color: 'var(--text-secondary)', lineHeight: 1.75,
      maxWidth: '520px', margin: '0 auto 40px',
    }}>
      We help small businesses grow with smart strategy, bold design, and marketing that actually works.
    </p>

    <div className="hero-ctas" style={{
      opacity: 0, display: 'flex', gap: '12px',
      justifyContent: 'center', flexWrap: 'wrap',
    }}>
      <button onClick={() => navigate('/contact')} style={{
        backgroundColor: 'var(--teal)', color: '#0e0e0e',
        padding: '14px 32px', border: 'none', borderRadius: '100px',
        cursor: 'pointer', fontFamily: 'var(--font-body)',
        fontSize: '0.9rem', fontWeight: 700, letterSpacing: '0.01em',
        transition: 'all 0.3s ease',
      }}
        onMouseEnter={e => { e.currentTarget.style.backgroundColor = 'var(--teal-dark)'; e.currentTarget.style.transform = 'translateY(-2px)' }}
        onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'var(--teal)'; e.currentTarget.style.transform = 'translateY(0)' }}
      >Work With Kerna ↗</button>
      <button onClick={() => navigate('/careers')} style={{
        backgroundColor: 'transparent', color: 'var(--text-primary)',
        padding: '14px 28px', border: '1px solid var(--border)',
        borderRadius: '100px', cursor: 'pointer',
        fontFamily: 'var(--font-body)', fontSize: '0.9rem',
        fontWeight: 600, transition: 'all 0.3s ease',
      }}
        onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--teal)'; e.currentTarget.style.color = 'var(--teal)' }}
        onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text-primary)' }}
      >Join as Intern</button>
    </div>
  </div>

  {/* Side stats */}
  <div className="hero-meta" style={{
    opacity: 0, position: 'absolute',
    right: 'clamp(24px, 5vw, 80px)', top: '50%',
    transform: 'translateY(-50%)',
    display: 'flex', flexDirection: 'column', gap: '28px', alignItems: 'flex-end',
  }}>
    {[['7+', 'Services'], ['3', 'Open Roles'], ['12wk', 'Program']].map(([n, l]) => (
      <div key={l} style={{ textAlign: 'right' }}>
        <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', fontWeight: 800, color: 'var(--text-primary)', letterSpacing: '-0.04em', lineHeight: 1 }}>{n}</div>
        <div style={{ fontFamily: 'var(--font-body)', fontSize: '0.62rem', fontWeight: 600, color: 'var(--text-muted)', letterSpacing: '0.12em', textTransform: 'uppercase', marginTop: '2px' }}>{l}</div>
      </div>
    ))}
  </div>
</section>

      {/* ━━━━━━━ ABOUT ━━━━━━━ */}
      <section style={{ borderTop: '1px solid var(--border)' }}>
        <div style={{ ...W, padding: 'clamp(64px, 8vw, 120px) clamp(24px, 5vw, 80px)' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 'clamp(48px, 8vw, 120px)',
            alignItems: 'start',
          }}>
            <div className="reveal-up">
              <p style={{
                fontFamily: 'var(--font-body)', fontSize: '0.7rem', fontWeight: 700,
                letterSpacing: '0.16em', textTransform: 'uppercase',
                color: 'var(--teal)', marginBottom: '24px',
                display: 'flex', alignItems: 'center', gap: '8px',
              }}>
                <span style={{ display: 'inline-block', width: '24px', height: '1px', backgroundColor: 'var(--teal)' }} />
                About Kerna
              </p>
              <h2 style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(3rem, 6vw, 6rem)',
                fontWeight: 400, letterSpacing: '-0.01em',
                lineHeight: 0.92, color: 'var(--text-primary)',
              }}>
                BUILT FOR<br />
                BUSINESSES<br />
                THAT MEAN<br />
                <span style={{
                  color: 'var(--teal)',
                  WebkitTextStroke: '0px',
                }}>BUSINESS.</span>
              </h2>
            </div>

            <div className="reveal-up" style={{ paddingTop: 'clamp(0px, 4vw, 48px)' }}>
              <p style={{
                fontFamily: 'var(--font-body)',
                fontSize: 'clamp(1rem, 1.4vw, 1.15rem)',
                color: 'var(--text-secondary)', lineHeight: 1.8,
                marginBottom: '20px',
              }}>
                Kerna is a lean, strategy-driven PR and marketing agency built for small businesses
                that want to look professional, move fast, and grow without burning money.
              </p>
              <p style={{
                fontFamily: 'var(--font-body)',
                fontSize: 'clamp(1rem, 1.4vw, 1.15rem)',
                color: 'var(--text-secondary)', lineHeight: 1.8,
                marginBottom: '48px',
              }}>
                We combine clear strategy with creative execution to help local brands build a
                strong digital presence — from websites and branding to social media and content.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                {[
                  { label: 'Mission', text: 'To make smart, affordable marketing accessible to small businesses.' },
                  { label: 'Who We Work With', text: 'Local businesses, startups, and independent brands.' },
                  { label: 'What We Solve', text: 'Confusing marketing, weak online presence, scattered branding.' },
                ].map(({ label, text }, i) => (
                  <div key={label} style={{
                    display: 'grid', gridTemplateColumns: '140px 1fr',
                    gap: '24px', padding: '20px 0',
                    borderTop: '1px solid var(--border)',
                    borderBottom: i === 2 ? '1px solid var(--border)' : 'none',
                  }}>
                    <span style={{
                      fontFamily: 'var(--font-body)', fontSize: '0.72rem',
                      fontWeight: 700, letterSpacing: '0.1em',
                      textTransform: 'uppercase', color: 'var(--text-muted)',
                      paddingTop: '3px',
                    }}>{label}</span>
                    <p style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.7,
                    }}>{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ━━━━━━━ SERVICES ━━━━━━━ */}
      <section style={{ borderTop: '1px solid var(--border)', backgroundColor: 'var(--bg-secondary)' }}>
        <div style={{ ...W, padding: 'clamp(64px, 8vw, 120px) clamp(24px, 5vw, 80px)' }}>
          <div className="reveal-up" style={{ marginBottom: '56px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '24px' }}>
            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(3rem, 6vw, 6rem)',
              fontWeight: 400, letterSpacing: '-0.01em',
              lineHeight: 0.92, color: 'var(--text-primary)',
            }}>
              WHAT<br />WE <span style={{ color: 'var(--teal)' }}>DO.</span>
            </h2>
            <span style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(4rem, 10vw, 10rem)', fontWeight: 400,
              color: 'var(--text-primary)', opacity: 0.05,
              letterSpacing: '-0.02em', lineHeight: 1, userSelect: 'none',
            }}>07</span>
          </div>

          <div>
            {services.map((s, i) => (
              <div key={s.num} className="reveal-line" style={{
                display: 'grid',
                gridTemplateColumns: '56px 1fr auto',
                gap: 'clamp(16px, 3vw, 48px)',
                alignItems: 'center',
                padding: 'clamp(16px, 2vw, 24px) 0',
                borderBottom: '1px solid var(--border)',
                borderTop: i === 0 ? '1px solid var(--border)' : 'none',
                transition: 'all 0.3s ease',
                cursor: 'default',
              }}
                onMouseEnter={e => {
                  e.currentTarget.style.paddingLeft = '16px'
                  e.currentTarget.querySelector('.svc-title').style.color = 'var(--teal)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.paddingLeft = '0'
                  e.currentTarget.querySelector('.svc-title').style.color = 'var(--text-primary)'
                }}
              >
                <span style={{
                  fontFamily: 'var(--font-body)', fontSize: '0.72rem',
                  fontWeight: 600, color: 'var(--text-muted)',
                  letterSpacing: '0.08em',
                }}>{s.num}</span>
                <h3 className="svc-title" style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(1.4rem, 2.5vw, 2.2rem)',
                  fontWeight: 400, color: 'var(--text-primary)',
                  letterSpacing: '-0.01em',
                  transition: 'color 0.3s ease',
                }}>{s.title}</h3>
                <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', justifyContent: 'flex-end' }}>
                  {s.tags.map(tag => (
                    <span key={tag} style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.68rem', fontWeight: 600,
                      color: 'var(--text-muted)',
                      border: '1px solid var(--border)',
                      padding: '3px 10px', borderRadius: '100px',
                      letterSpacing: '0.06em',
                    }}>{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━━━━━ HOW WE WORK ━━━━━━━ */}
      <section style={{ borderTop: '1px solid var(--border)' }}>
        <div style={{ ...W, padding: 'clamp(64px, 8vw, 120px) clamp(24px, 5vw, 80px)' }}>
          <div className="reveal-up" style={{ marginBottom: '64px' }}>
            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(3rem, 6vw, 6rem)',
              fontWeight: 400, letterSpacing: '-0.01em',
              lineHeight: 0.92, color: 'var(--text-primary)',
            }}>
              HOW WE <span style={{ color: 'var(--teal)' }}>WORK.</span>
            </h2>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            borderLeft: '1px solid var(--border)',
          }}>
            {steps.map((step) => (
              <div key={step.num} className="reveal-up" style={{
                padding: 'clamp(32px, 4vw, 48px) clamp(24px, 3vw, 40px)',
                borderRight: '1px solid var(--border)',
                borderBottom: '1px solid var(--border)',
                borderTop: '1px solid var(--border)',
                position: 'relative', overflow: 'hidden',
                transition: 'background-color 0.4s ease',
              }}
                onMouseEnter={e => e.currentTarget.style.backgroundColor = 'var(--bg-secondary)'}
                onMouseLeave={e => e.currentTarget.style.backgroundColor = 'transparent'}
              >
                <span style={{
                  position: 'absolute', bottom: '-20px', right: '-8px',
                  fontFamily: 'var(--font-display)',
                  fontSize: '7rem', fontWeight: 400,
                  color: 'var(--text-primary)', opacity: 0.04,
                  lineHeight: 1, userSelect: 'none', pointerEvents: 'none',
                }}>{step.num}</span>
                <div style={{
                  width: '28px', height: '28px',
                  border: '1px solid var(--border)',
                  borderRadius: '50%',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: '32px',
                }}>
                  <span style={{
                    width: '8px', height: '8px', borderRadius: '50%',
                    backgroundColor: 'var(--teal)',
                  }} />
                </div>
                <h3 style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(1.8rem, 3vw, 2.8rem)',
                  fontWeight: 400, color: 'var(--text-primary)',
                  letterSpacing: '-0.01em', lineHeight: 1,
                  marginBottom: '16px',
                }}>{step.name}</h3>
                <p style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.88rem', color: 'var(--text-secondary)',
                  lineHeight: 1.7,
                }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━━━━━ WHY KERNA ━━━━━━━ */}
      <section style={{ borderTop: '1px solid var(--border)', backgroundColor: 'var(--bg-secondary)' }}>
        <div style={{ ...W, padding: 'clamp(64px, 8vw, 120px) clamp(24px, 5vw, 80px)' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 'clamp(48px, 8vw, 120px)',
            alignItems: 'start',
          }}>
            <div className="reveal-up" style={{ position: 'sticky', top: '120px' }}>
              <p style={{
                fontFamily: 'var(--font-body)', fontSize: '0.7rem', fontWeight: 700,
                letterSpacing: '0.16em', textTransform: 'uppercase',
                color: 'var(--teal)', marginBottom: '24px',
                display: 'flex', alignItems: 'center', gap: '8px',
              }}>
                <span style={{ display: 'inline-block', width: '24px', height: '1px', backgroundColor: 'var(--teal)' }} />
                Why Us
              </p>
              <h2 style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(3rem, 6vw, 6rem)',
                fontWeight: 400, letterSpacing: '-0.01em',
                lineHeight: 0.92, color: 'var(--text-primary)',
              }}>
                WHY<br />CHOOSE<br /><span style={{ color: 'var(--teal)' }}>KERNA.</span>
              </h2>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {reasons.map((r, i) => (
                <div key={r.heading} className="reveal-line" style={{
                  padding: 'clamp(24px, 3vw, 36px) 0',
                  borderBottom: '1px solid var(--border)',
                  borderTop: i === 0 ? '1px solid var(--border)' : 'none',
                  display: 'grid', gridTemplateColumns: '28px 1fr',
                  gap: '20px', alignItems: 'start',
                  transition: 'all 0.3s ease', cursor: 'default',
                }}
                  onMouseEnter={e => {
                    e.currentTarget.querySelector('.reason-dot').style.backgroundColor = 'var(--teal)'
                    e.currentTarget.querySelector('.reason-dot').style.transform = 'scale(1.5)'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.querySelector('.reason-dot').style.backgroundColor = 'var(--border)'
                    e.currentTarget.querySelector('.reason-dot').style.transform = 'scale(1)'
                  }}
                >
                  <div className="reason-dot" style={{
                    width: '8px', height: '8px', borderRadius: '50%',
                    backgroundColor: 'var(--border)',
                    marginTop: '8px', flexShrink: 0,
                    transition: 'all 0.3s ease',
                  }} />
                  <div>
                    <h3 style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: 'clamp(1.4rem, 2.5vw, 2rem)',
                      fontWeight: 400, color: 'var(--text-primary)',
                      letterSpacing: '-0.01em', marginBottom: '8px',
                    }}>{r.heading}</h3>
                    <p style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.7,
                    }}>{r.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ━━━━━━━ WORK PREVIEW ━━━━━━━ */}
      <section style={{ borderTop: '1px solid var(--border)' }}>
        <div style={{ ...W, padding: 'clamp(64px, 8vw, 120px) clamp(24px, 5vw, 80px)' }}>
          <div className="reveal-up" style={{
            display: 'flex', justifyContent: 'space-between',
            alignItems: 'flex-end', marginBottom: '56px',
            flexWrap: 'wrap', gap: '24px',
          }}>
            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(3rem, 6vw, 6rem)',
              fontWeight: 400, letterSpacing: '-0.01em',
              lineHeight: 0.92, color: 'var(--text-primary)',
            }}>
              SAMPLE<br /><span style={{ color: 'var(--teal)' }}>WORK.</span>
            </h2>
            <button onClick={() => navigate('/work')} style={{
              backgroundColor: 'transparent', color: 'var(--text-secondary)',
              padding: '12px 24px', border: '1px solid var(--border)',
              borderRadius: '100px', cursor: 'pointer',
              fontFamily: 'var(--font-body)', fontSize: '0.85rem',
              fontWeight: 600, transition: 'all 0.3s ease',
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--teal)'; e.currentTarget.style.color = 'var(--teal)' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text-secondary)' }}
            >View All →</button>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1px', backgroundColor: 'var(--border)' }}>
            {sampleWork.map((w) => (
              <div key={w.title} className="reveal-up" style={{
                backgroundColor: 'var(--bg-primary)',
                padding: 'clamp(28px, 3vw, 40px)',
                cursor: 'pointer',
                transition: 'background-color 0.3s ease',
                display: 'flex', flexDirection: 'column', gap: '0',
              }}
                onClick={() => navigate('/work')}
                onMouseEnter={e => e.currentTarget.style.backgroundColor = 'var(--bg-card)'}
                onMouseLeave={e => e.currentTarget.style.backgroundColor = 'var(--bg-primary)'}
              >
                <div style={{
                  height: '180px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: '28px',
                  position: 'relative', overflow: 'hidden',
                }}>
                  <span style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '9rem', fontWeight: 400,
                    color: 'var(--teal)', opacity: 0.07,
                    letterSpacing: '-0.04em',
                    userSelect: 'none',
                  }}>{w.num}</span>
                  <span style={{
                    position: 'absolute',
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.68rem', fontWeight: 700,
                    letterSpacing: '0.12em', textTransform: 'uppercase',
                    color: 'var(--teal)',
                    border: '1px solid rgba(45,212,191,0.3)',
                    padding: '4px 12px', borderRadius: '100px',
                  }}>{w.tag}</span>
                </div>
                <div style={{
                  display: 'flex', justifyContent: 'space-between',
                  alignItems: 'center', marginBottom: '12px',
                }}>
                  <span style={{
                    fontFamily: 'var(--font-body)', fontSize: '0.68rem',
                    fontWeight: 600, color: 'var(--text-muted)',
                    letterSpacing: '0.1em', textTransform: 'uppercase',
                  }}>{w.industry}</span>
                  <span style={{
                    fontFamily: 'var(--font-body)', fontSize: '0.68rem',
                    color: 'var(--text-muted)',
                  }}>{w.year}</span>
                </div>
                <h3 style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(1.4rem, 2.5vw, 2rem)',
                  fontWeight: 400, color: 'var(--text-primary)',
                  letterSpacing: '-0.01em', lineHeight: 1,
                  marginBottom: '20px',
                }}>{w.title}</h3>
                <div style={{
                  borderTop: '1px solid var(--border)',
                  paddingTop: '20px', marginTop: 'auto',
                  display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px',
                }}>
                  {[['Problem', w.problem], ['Solution', w.solution]].map(([lbl, txt]) => (
                    <div key={lbl}>
                      <p style={{
                        fontFamily: 'var(--font-body)', fontSize: '0.62rem',
                        fontWeight: 700, color: 'var(--teal)',
                        letterSpacing: '0.12em', textTransform: 'uppercase',
                        marginBottom: '6px',
                      }}>{lbl}</p>
                      <p style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: 1.6,
                      }}>{txt}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━━━━━ CAREERS PREVIEW ━━━━━━━ */}
      <section style={{ borderTop: '1px solid var(--border)', backgroundColor: 'var(--bg-secondary)' }}>
        <div style={{ ...W, padding: 'clamp(64px, 8vw, 120px) clamp(24px, 5vw, 80px)' }}>
          <div className="reveal-up" style={{
            display: 'flex', justifyContent: 'space-between',
            alignItems: 'flex-end', marginBottom: '56px',
            flexWrap: 'wrap', gap: '24px',
          }}>
            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(3rem, 6vw, 6rem)',
              fontWeight: 400, letterSpacing: '-0.01em',
              lineHeight: 0.92, color: 'var(--text-primary)',
            }}>
              GROW WITH<br /><span style={{ color: 'var(--teal)' }}>KERNA.</span>
            </h2>
            <button onClick={() => navigate('/careers')} style={{
              backgroundColor: 'transparent', color: 'var(--text-secondary)',
              padding: '12px 24px', border: '1px solid var(--border)',
              borderRadius: '100px', cursor: 'pointer',
              fontFamily: 'var(--font-body)', fontSize: '0.85rem',
              fontWeight: 600, transition: 'all 0.3s ease',
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--teal)'; e.currentTarget.style.color = 'var(--teal)' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--text-secondary)' }}
            >All Roles →</button>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column' }}>
            {roles.map((r, i) => (
              <div key={r.title} className="reveal-line" style={{
                display: 'grid',
                gridTemplateColumns: '1fr auto',
                gap: '32px', alignItems: 'center',
                padding: 'clamp(24px, 3vw, 36px) 0',
                borderTop: i === 0 ? '1px solid var(--border)' : 'none',
                borderBottom: '1px solid var(--border)',
                cursor: 'pointer',
                transition: 'padding-left 0.4s cubic-bezier(0.16,1,0.3,1)',
              }}
                onClick={() => navigate('/careers')}
                onMouseEnter={e => {
                  e.currentTarget.style.paddingLeft = '20px'
                  e.currentTarget.querySelector('.role-title').style.color = 'var(--teal)'
                  e.currentTarget.querySelector('.role-arrow').style.opacity = '1'
                  e.currentTarget.querySelector('.role-arrow').style.transform = 'translate(0, 0)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.paddingLeft = '0'
                  e.currentTarget.querySelector('.role-title').style.color = 'var(--text-primary)'
                  e.currentTarget.querySelector('.role-arrow').style.opacity = '0'
                  e.currentTarget.querySelector('.role-arrow').style.transform = 'translate(-8px, 4px)'
                }}
              >
                <div>
                  <span style={{
                    fontFamily: 'var(--font-body)', fontSize: '0.68rem',
                    fontWeight: 700, letterSpacing: '0.12em',
                    textTransform: 'uppercase', color: 'var(--text-muted)',
                    display: 'block', marginBottom: '8px',
                  }}>{r.area} · 12 Weeks</span>
                  <h3 className="role-title" style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(1.6rem, 3vw, 2.8rem)',
                    fontWeight: 400, color: 'var(--text-primary)',
                    letterSpacing: '-0.01em', lineHeight: 1,
                    transition: 'color 0.3s ease',
                  }}>{r.title}</h3>
                  <p style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.88rem', color: 'var(--text-secondary)',
                    lineHeight: 1.6, marginTop: '8px', maxWidth: '480px',
                  }}>{r.desc}</p>
                </div>
                <span className="role-arrow" style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '2.5rem', color: 'var(--teal)',
                  opacity: 0,
                  transform: 'translate(-8px, 4px)',
                  transition: 'all 0.4s cubic-bezier(0.16,1,0.3,1)',
                  userSelect: 'none',
                }}>↗</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━━━━━ CONTACT STRIP ━━━━━━━ */}
      <section style={{ borderTop: '1px solid var(--border)' }}>
        <div style={{ ...W, padding: 'clamp(64px, 8vw, 120px) clamp(24px, 5vw, 80px)' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 'clamp(48px, 8vw, 100px)',
            alignItems: 'start',
          }}>
            <div className="reveal-up">
              <p style={{
                fontFamily: 'var(--font-body)', fontSize: '0.7rem', fontWeight: 700,
                letterSpacing: '0.16em', textTransform: 'uppercase',
                color: 'var(--teal)', marginBottom: '24px',
                display: 'flex', alignItems: 'center', gap: '8px',
              }}>
                <span style={{ display: 'inline-block', width: '24px', height: '1px', backgroundColor: 'var(--teal)' }} />
                Get In Touch
              </p>
              <h2 style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(3rem, 6vw, 6rem)',
                fontWeight: 400, letterSpacing: '-0.01em',
                lineHeight: 0.92, color: 'var(--text-primary)',
                marginBottom: '40px',
              }}>
                READY TO<br /><span style={{ color: 'var(--teal)' }}>SPARK</span><br />SOMETHING?
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '36px' }}>
                {['+91 75696 12318', '+91 99496 86160'].map(num => (
                  <a key={num} href={`tel:${num.replace(/\s/g, '')}`} style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(1.2rem, 2vw, 1.8rem)',
                    fontWeight: 400, letterSpacing: '-0.01em',
                    color: 'var(--text-secondary)', textDecoration: 'none',
                    transition: 'color 0.3s ease',
                  }}
                    onMouseEnter={e => e.currentTarget.style.color = 'var(--teal)'}
                    onMouseLeave={e => e.currentTarget.style.color = 'var(--text-secondary)'}
                  >{num}</a>
                ))}
                <p style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.6,
                }}>Marripalem, Visakhapatnam, AP</p>
              </div>
              <button onClick={() => navigate('/contact')} style={{
                backgroundColor: 'var(--teal)', color: '#0e0e0e',
                padding: '14px 32px', border: 'none',
                borderRadius: '100px', cursor: 'pointer',
                fontFamily: 'var(--font-body)', fontSize: '0.88rem',
                fontWeight: 700, letterSpacing: '0.02em',
                transition: 'all 0.3s ease',
              }}
                onMouseEnter={e => { e.currentTarget.style.backgroundColor = 'var(--teal-dark)'; e.currentTarget.style.transform = 'translateY(-2px)' }}
                onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'var(--teal)'; e.currentTarget.style.transform = 'translateY(0)' }}
              >Work With Kerna ↗</button>
            </div>

            <div className="reveal-up" style={{
              borderRadius: '8px', overflow: 'hidden',
              border: '1px solid var(--border)', height: 'clamp(300px, 40vw, 480px)',
            }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d282.4389561590316!2d83.24420142282327!3d17.74319497588421!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a39670b3899bbe9%3A0x3fd6768247180757!2sSai%20Sundar%20Residency!5e0!3m2!1sen!2sin!4v1769022633919!5m2!1sen!2sin"
                width="100%" height="100%"
                style={{ border: 0, display: 'block' }}
                allowFullScreen="" loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Kerna Office Location"
              />
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .hero-meta { display: none !important; }
        }
        @media (max-width: 640px) {
          .hero-body { grid-template-columns: 1fr !important; }
          .hero-ctas { justify-content: flex-start !important; }
        }
        * { cursor: none !important; }
      `}</style>
    </div>
  )
}

export default Home