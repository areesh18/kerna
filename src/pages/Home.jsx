import { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const services = [
  {
    icon: '🌐',
    title: 'Website Design, SEO & Hosting',
    desc: 'Beautiful, fast websites built to rank and convert — fully hosted and managed.',
  },
  {
    icon: '🛒',
    title: 'eCommerce Website Development',
    desc: 'Full-featured online stores that make selling simple and scaling seamless.',
  },
  {
    icon: '🎨',
    title: 'Branding & Visual Identity',
    desc: 'Logos, palettes, and brand systems that make you unforgettable.',
  },
  {
    icon: '📱',
    title: 'Social Media Management',
    desc: 'Consistent, on-brand content and strategy across every platform.',
  },
  {
    icon: '✍️',
    title: 'Content Creation',
    desc: 'Copy, visuals, and storytelling that actually connects with your audience.',
  },
  {
    icon: '📊',
    title: 'Market Analysis & Strategy',
    desc: 'Data-backed insights to help you outmaneuver the competition.',
  },
  {
    icon: '📍',
    title: 'Online Profile Setup & Handholding',
    desc: 'Google Maps, local listings, and platform setup — we guide you every step.',
  },
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
  {
    title: 'Local Café Rebrand',
    industry: 'Food & Beverage',
    problem: 'Inconsistent branding and zero digital presence.',
    solution: 'Full visual identity + Google profile + social media launch.',
    tag: 'Branding',
  },
  {
    title: 'Boutique eCommerce Launch',
    industry: 'Retail / Fashion',
    problem: 'No online store despite strong local demand.',
    solution: 'End-to-end eCommerce site with SEO and product photography guide.',
    tag: 'Web + eCommerce',
  },
  {
    title: 'Fitness Studio Growth Campaign',
    industry: 'Health & Wellness',
    problem: 'Low social engagement and declining walk-ins.',
    solution: 'Content strategy + Instagram overhaul + local ad campaigns.',
    tag: 'Social Media',
  },
]

const roles = [
  {
    title: 'Web Development Intern',
    desc: 'Build and maintain client websites under real-world conditions.',
  },
  {
    title: 'Marketing / Sales Intern',
    desc: 'Drive campaigns and help small businesses find their audience.',
  },
  {
    title: 'Branding & Research Intern',
    desc: 'Shape visual identities and conduct market research for clients.',
  },
]

// Reusable section label
const SectionLabel = ({ text }) => (
  <span style={{
    display: 'inline-block',
    fontSize: '0.75rem',
    fontWeight: 700,
    letterSpacing: '0.14em',
    textTransform: 'uppercase',
    color: 'var(--teal)',
    backgroundColor: 'rgba(45,212,191,0.1)',
    padding: '5px 14px',
    borderRadius: '20px',
    marginBottom: '16px',
    fontFamily: 'var(--font-body)',
  }}>{text}</span>
)

const Home = () => {
  const navigate = useNavigate()
  const heroRef = useRef(null)
  const aboutRef = useRef(null)
  const servicesRef = useRef(null)
  const stepsRef = useRef(null)
  const reasonsRef = useRef(null)
  const workRef = useRef(null)
  const careersRef = useRef(null)
  const contactRef = useRef(null)

  useEffect(() => {
    // Hero animation
    const tl = gsap.timeline()
    tl.fromTo('.hero-label', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' })
      .fromTo('.hero-headline', { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }, '-=0.3')
      .fromTo('.hero-sub', { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' }, '-=0.4')
      .fromTo('.hero-ctas', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' }, '-=0.3')

    // Scroll animations
    const sections = [
      { ref: aboutRef, cls: '.about-content' },
      { ref: servicesRef, cls: '.service-card' },
      { ref: stepsRef, cls: '.step-item' },
      { ref: reasonsRef, cls: '.reason-item' },
      { ref: workRef, cls: '.work-card' },
      { ref: careersRef, cls: '.career-card' },
      { ref: contactRef, cls: '.contact-content' },
    ]

    sections.forEach(({ cls }) => {
      gsap.fromTo(cls,
        { opacity: 0, y: 50 },
        {
          opacity: 1, y: 0, duration: 0.7, stagger: 0.12, ease: 'power3.out',
          scrollTrigger: { trigger: cls, start: 'top 85%' }
        }
      )
    })
  }, [])

  const btnPrimary = {
    backgroundColor: 'var(--teal)',
    color: '#1a1a1a',
    padding: '14px 28px',
    borderRadius: '8px',
    border: 'none',
    fontFamily: 'var(--font-body)',
    fontSize: '0.95rem',
    fontWeight: 600,
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  }

  const btnSecondary = {
    backgroundColor: 'transparent',
    color: 'var(--text-primary)',
    padding: '14px 28px',
    borderRadius: '8px',
    border: '1px solid var(--border)',
    fontFamily: 'var(--font-body)',
    fontSize: '0.95rem',
    fontWeight: 600,
    cursor: 'pointer',
    transition: 'all 0.3s ease',
  }

  return (
    <div style={{ backgroundColor: 'var(--bg-primary)' }}>

      {/* ── HERO ── */}
      <section ref={heroRef} style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        paddingTop: '100px',
      }}>
        {/* Gradient bg */}
        <div style={{
          position: 'absolute', inset: 0, zIndex: 0,
          background: 'radial-gradient(ellipse 80% 60% at 60% 40%, rgba(45,212,191,0.08) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0, height: '1px',
          background: 'linear-gradient(90deg, transparent, var(--teal), transparent)',
          opacity: 0.3,
        }} />

        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>
          <div style={{ maxWidth: '780px' }}>
            <div className="hero-label" style={{ opacity: 0 }}>
              <SectionLabel text="PR & Marketing Agency" />
            </div>
            <h1 className="hero-headline" style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(2.8rem, 7vw, 5.5rem)',
              fontWeight: 800,
              lineHeight: 1.08,
              letterSpacing: '-0.03em',
              color: 'var(--text-primary)',
              marginBottom: '24px',
              opacity: 0,
            }}>
              Where Strategy<br />
              Meets <span style={{ color: 'var(--teal)' }}>Spark.</span>
            </h1>
            <p className="hero-sub" style={{
              fontSize: 'clamp(1rem, 2vw, 1.2rem)',
              color: 'var(--text-secondary)',
              lineHeight: 1.7,
              maxWidth: '560px',
              marginBottom: '40px',
              opacity: 0,
              fontFamily: 'var(--font-body)',
            }}>
              We help small businesses grow with smart strategy, bold design,
              and marketing that actually works.
            </p>
            <div className="hero-ctas" style={{
              display: 'flex', gap: '16px', flexWrap: 'wrap', opacity: 0,
            }}>
              <button style={btnPrimary}
                onClick={() => navigate('/contact')}
                onMouseEnter={e => e.currentTarget.style.backgroundColor = 'var(--teal-dark)'}
                onMouseLeave={e => e.currentTarget.style.backgroundColor = 'var(--teal)'}
              >
                Work With Kerna →
              </button>
              <button style={btnSecondary}
                onClick={() => navigate('/careers')}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = 'var(--teal)'
                  e.currentTarget.style.color = 'var(--teal)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'var(--border)'
                  e.currentTarget.style.color = 'var(--text-primary)'
                }}
              >
                Join as an Intern
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section ref={aboutRef} style={{
        padding: '100px 24px',
        backgroundColor: 'var(--bg-secondary)',
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div className="about-content" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '64px',
            alignItems: 'start',
          }}>
            <div>
              <SectionLabel text="About Kerna" />
              <h2 style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
                fontWeight: 700,
                lineHeight: 1.2,
                letterSpacing: '-0.02em',
                color: 'var(--text-primary)',
                marginBottom: '20px',
              }}>
                Built for businesses<br />that mean <span style={{ color: 'var(--teal)' }}>business.</span>
              </h2>
              <p style={{
                color: 'var(--text-secondary)',
                fontSize: '1rem',
                lineHeight: 1.8,
                marginBottom: '16px',
              }}>
                Kerna is a lean, strategy-driven PR and marketing agency built for small businesses
                that want to look professional, move fast, and grow without burning money.
              </p>
              <p style={{
                color: 'var(--text-secondary)',
                fontSize: '1rem',
                lineHeight: 1.8,
              }}>
                We combine clear strategy with creative execution to help local brands build a
                strong digital presence — from websites and branding to social media and content.
              </p>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              {[
                { label: 'Mission', text: 'To make smart, affordable marketing accessible to small businesses and help them punch above their weight.' },
                { label: 'Who We Work With', text: 'Local businesses, startups, and independent brands.' },
                { label: 'What We Solve', text: 'Confusing marketing, weak online presence, and scattered branding.' },
              ].map(({ label, text }) => (
                <div key={label} style={{
                  padding: '24px',
                  backgroundColor: 'var(--bg-card)',
                  borderRadius: '12px',
                  border: '1px solid var(--border)',
                  borderLeft: '3px solid var(--teal)',
                }}>
                  <h4 style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '0.8rem',
                    fontWeight: 700,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: 'var(--teal)',
                    marginBottom: '8px',
                  }}>{label}</h4>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.7 }}>{text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section ref={servicesRef} style={{ padding: '100px 24px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <SectionLabel text="What We Do" />
            <h2 style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
              fontWeight: 700,
              letterSpacing: '-0.02em',
              color: 'var(--text-primary)',
            }}>
              Services built to <span style={{ color: 'var(--teal)' }}>grow you</span>
            </h2>
          </div>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '24px',
          }}>
            {services.map((s) => (
              <div key={s.title} className="service-card" style={{
                padding: '32px',
                backgroundColor: 'var(--bg-card)',
                borderRadius: '16px',
                border: '1px solid var(--border)',
                transition: 'transform 0.3s ease, border-color 0.3s ease',
                cursor: 'default',
              }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-4px)'
                  e.currentTarget.style.borderColor = 'var(--teal)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.borderColor = 'var(--border)'
                }}
              >
                <span style={{ fontSize: '2rem', display: 'block', marginBottom: '16px' }}>{s.icon}</span>
                <h3 style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.05rem',
                  fontWeight: 600,
                  color: 'var(--text-primary)',
                  marginBottom: '10px',
                }}>{s.title}</h3>
                <p style={{
                  color: 'var(--text-secondary)',
                  fontSize: '0.9rem',
                  lineHeight: 1.7,
                }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW WE WORK ── */}
      <section ref={stepsRef} style={{
        padding: '100px 24px',
        backgroundColor: 'var(--bg-secondary)',
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <SectionLabel text="Our Process" />
            <h2 style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
              fontWeight: 700,
              letterSpacing: '-0.02em',
              color: 'var(--text-primary)',
            }}>
              How we <span style={{ color: 'var(--teal)' }}>work</span>
            </h2>
          </div>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '32px',
          }}>
            {steps.map((step) => (
              <div key={step.num} className="step-item" style={{
                padding: '36px 28px',
                backgroundColor: 'var(--bg-card)',
                borderRadius: '16px',
                border: '1px solid var(--border)',
                position: 'relative',
                overflow: 'hidden',
              }}>
                <span style={{
                  position: 'absolute', top: '20px', right: '20px',
                  fontFamily: 'var(--font-heading)',
                  fontSize: '3.5rem',
                  fontWeight: 900,
                  color: 'rgba(45,212,191,0.07)',
                  lineHeight: 1,
                  userSelect: 'none',
                }}>{step.num}</span>
                <div style={{
                  width: '40px', height: '3px',
                  backgroundColor: 'var(--teal)',
                  borderRadius: '2px',
                  marginBottom: '20px',
                }} />
                <h3 style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.2rem',
                  fontWeight: 700,
                  color: 'var(--text-primary)',
                  marginBottom: '10px',
                }}>{step.name}</h3>
                <p style={{
                  color: 'var(--text-secondary)',
                  fontSize: '0.9rem',
                  lineHeight: 1.7,
                }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY KERNA ── */}
      <section ref={reasonsRef} style={{ padding: '100px 24px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <SectionLabel text="Why Us" />
            <h2 style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
              fontWeight: 700,
              letterSpacing: '-0.02em',
              color: 'var(--text-primary)',
            }}>
              Why choose <span style={{ color: 'var(--teal)' }}>Kerna</span>
            </h2>
          </div>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '24px',
          }}>
            {reasons.map((r, i) => (
              <div key={r.heading} className="reason-item" style={{
                padding: '32px',
                backgroundColor: 'var(--bg-card)',
                borderRadius: '16px',
                border: '1px solid var(--border)',
                display: 'flex',
                gap: '20px',
                alignItems: 'flex-start',
                transition: 'border-color 0.3s ease',
              }}
                onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--teal)'}
                onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}
              >
                <span style={{
                  width: '32px', height: '32px', borderRadius: '50%',
                  backgroundColor: 'rgba(45,212,191,0.15)',
                  color: 'var(--teal)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: 'var(--font-heading)',
                  fontSize: '0.8rem',
                  fontWeight: 700,
                  flexShrink: 0,
                }}>0{i + 1}</span>
                <div>
                  <h3 style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1rem',
                    fontWeight: 600,
                    color: 'var(--text-primary)',
                    marginBottom: '6px',
                  }}>{r.heading}</h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.7 }}>{r.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WORK PREVIEW ── */}
      <section ref={workRef} style={{
        padding: '100px 24px',
        backgroundColor: 'var(--bg-secondary)',
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '48px', flexWrap: 'wrap', gap: '16px' }}>
            <div>
              <SectionLabel text="Sample Work" />
              <h2 style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
                fontWeight: 700,
                letterSpacing: '-0.02em',
                color: 'var(--text-primary)',
              }}>
                Work we're <span style={{ color: 'var(--teal)' }}>proud of</span>
              </h2>
            </div>
            <button onClick={() => navigate('/work')} style={{
              ...btnSecondary, fontSize: '0.875rem', padding: '10px 20px',
            }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'var(--teal)'
                e.currentTarget.style.color = 'var(--teal)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'var(--border)'
                e.currentTarget.style.color = 'var(--text-primary)'
              }}
            >View All Work →</button>
          </div>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '24px',
          }}>
            {sampleWork.map((w) => (
              <div key={w.title} className="work-card" style={{
                backgroundColor: 'var(--bg-card)',
                borderRadius: '16px',
                border: '1px solid var(--border)',
                overflow: 'hidden',
                transition: 'transform 0.3s ease, border-color 0.3s ease',
                cursor: 'pointer',
              }}
                onClick={() => navigate('/work')}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-4px)'
                  e.currentTarget.style.borderColor = 'var(--teal)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.borderColor = 'var(--border)'
                }}
              >
                <div style={{
                  height: '180px',
                  background: 'linear-gradient(135deg, rgba(45,212,191,0.15) 0%, rgba(45,212,191,0.03) 100%)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  borderBottom: '1px solid var(--border)',
                }}>
                  <span style={{
                    fontSize: '0.75rem', fontWeight: 700,
                    letterSpacing: '0.1em', textTransform: 'uppercase',
                    color: 'var(--teal)',
                    backgroundColor: 'rgba(45,212,191,0.12)',
                    padding: '6px 14px', borderRadius: '20px',
                  }}>{w.tag}</span>
                </div>
                <div style={{ padding: '24px' }}>
                  <p style={{
                    fontSize: '0.75rem', fontWeight: 600,
                    color: 'var(--teal)', letterSpacing: '0.08em',
                    textTransform: 'uppercase', marginBottom: '8px',
                  }}>{w.industry}</p>
                  <h3 style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '1.1rem', fontWeight: 700,
                    color: 'var(--text-primary)', marginBottom: '16px',
                  }}>{w.title}</h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                      <span style={{ color: 'var(--text-primary)', fontWeight: 600 }}>Problem: </span>
                      {w.problem}
                    </p>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                      <span style={{ color: 'var(--text-primary)', fontWeight: 600 }}>Solution: </span>
                      {w.solution}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CAREERS PREVIEW ── */}
      <section ref={careersRef} style={{ padding: '100px 24px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '48px', flexWrap: 'wrap', gap: '16px' }}>
            <div>
              <SectionLabel text="Join the Team" />
              <h2 style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
                fontWeight: 700,
                letterSpacing: '-0.02em',
                color: 'var(--text-primary)',
              }}>
                Grow with <span style={{ color: 'var(--teal)' }}>Kerna</span>
              </h2>
            </div>
            <button onClick={() => navigate('/careers')} style={{
              ...btnSecondary, fontSize: '0.875rem', padding: '10px 20px',
            }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'var(--teal)'
                e.currentTarget.style.color = 'var(--teal)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'var(--border)'
                e.currentTarget.style.color = 'var(--text-primary)'
              }}
            >View All Roles →</button>
          </div>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '24px',
          }}>
            {roles.map((r) => (
              <div key={r.title} className="career-card" style={{
                padding: '32px',
                backgroundColor: 'var(--bg-card)',
                borderRadius: '16px',
                border: '1px solid var(--border)',
                transition: 'transform 0.3s ease, border-color 0.3s ease',
                cursor: 'pointer',
              }}
                onClick={() => navigate('/careers')}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-4px)'
                  e.currentTarget.style.borderColor = 'var(--teal)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.borderColor = 'var(--border)'
                }}
              >
                <div style={{
                  width: '44px', height: '44px',
                  backgroundColor: 'rgba(45,212,191,0.12)',
                  borderRadius: '10px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: '20px',
                }}>
                  <span style={{ color: 'var(--teal)', fontSize: '1.2rem' }}>→</span>
                </div>
                <h3 style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.05rem', fontWeight: 700,
                  color: 'var(--text-primary)', marginBottom: '10px',
                }}>{r.title}</h3>
                <p style={{
                  color: 'var(--text-secondary)',
                  fontSize: '0.9rem', lineHeight: 1.7,
                  marginBottom: '20px',
                }}>{r.desc}</p>
                <span style={{
                  fontSize: '0.75rem', fontWeight: 600,
                  color: 'var(--teal)', letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                }}>12 Weeks · Internship</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT SECTION ── */}
      <section ref={contactRef} style={{
        padding: '100px 24px',
        backgroundColor: 'var(--bg-secondary)',
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div className="contact-content" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '48px',
            alignItems: 'start',
          }}>
            <div>
              <SectionLabel text="Get In Touch" />
              <h2 style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
                fontWeight: 700,
                letterSpacing: '-0.02em',
                color: 'var(--text-primary)',
                marginBottom: '24px',
              }}>
                Ready to <span style={{ color: 'var(--teal)' }}>spark</span><br />something?
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '32px' }}>
                {['+91 75696 12318', '+91 99496 86160'].map(num => (
                  <a key={num} href={`tel:${num.replace(/\s/g, '')}`} style={{
                    display: 'flex', alignItems: 'center', gap: '12px',
                    color: 'var(--text-secondary)', textDecoration: 'none',
                    fontSize: '1rem', transition: 'color 0.3s ease',
                  }}
                    onMouseEnter={e => e.currentTarget.style.color = 'var(--teal)'}
                    onMouseLeave={e => e.currentTarget.style.color = 'var(--text-secondary)'}
                  >
                    <span style={{
                      width: '36px', height: '36px', borderRadius: '50%',
                      backgroundColor: 'rgba(45,212,191,0.12)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: '0.9rem', flexShrink: 0,
                    }}>📞</span>
                    {num}
                  </a>
                ))}
                <div style={{
                  display: 'flex', alignItems: 'flex-start', gap: '12px',
                  color: 'var(--text-secondary)', fontSize: '1rem',
                }}>
                  <span style={{
                    width: '36px', height: '36px', borderRadius: '50%',
                    backgroundColor: 'rgba(45,212,191,0.12)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '0.9rem', flexShrink: 0, marginTop: '2px',
                  }}>📍</span>
                  Marripalem, Visakhapatnam,<br />Andhra Pradesh
                </div>
              </div>
              <button onClick={() => navigate('/contact')} style={btnPrimary}
                onMouseEnter={e => e.currentTarget.style.backgroundColor = 'var(--teal-dark)'}
                onMouseLeave={e => e.currentTarget.style.backgroundColor = 'var(--teal)'}
              >
                Work With Kerna →
              </button>
            </div>

            {/* Map */}
            <div style={{
              borderRadius: '16px', overflow: 'hidden',
              border: '1px solid var(--border)',
              height: '380px',
            }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d282.4389561590316!2d83.24420142282327!3d17.74319497588421!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a39670b3899bbe9%3A0x3fd6768247180757!2sSai%20Sundar%20Residency!5e0!3m2!1sen!2sin!4v1769022633919!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, display: 'block' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Kerna Office Location"
              />
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Home