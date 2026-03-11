import { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const services = [
  { icon: '⬡', title: 'Website Design, SEO & Hosting', desc: 'Beautiful, fast websites built to rank and convert — fully hosted and managed.' },
  { icon: '⬡', title: 'eCommerce Development', desc: 'Full-featured online stores that make selling simple and scaling seamless.' },
  { icon: '⬡', title: 'Branding & Visual Identity', desc: 'Logos, palettes, and brand systems that make you unforgettable.' },
  { icon: '⬡', title: 'Social Media Management', desc: 'Consistent, on-brand content and strategy across every platform.' },
  { icon: '⬡', title: 'Content Creation', desc: 'Copy, visuals, and storytelling that actually connects with your audience.' },
  { icon: '⬡', title: 'Market Analysis & Strategy', desc: 'Data-backed insights to help you outmaneuver the competition.' },
  { icon: '⬡', title: 'Online Profile Setup & Handholding', desc: 'Google Maps, local listings, and platform setup — we guide every step.' },
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
  { title: 'Local Café Rebrand', industry: 'Food & Beverage', tag: 'Branding', problem: 'Inconsistent branding and zero digital presence.', solution: 'Full visual identity + Google profile + social media launch.' },
  { title: 'Boutique eCommerce Launch', industry: 'Retail / Fashion', tag: 'Web + eCommerce', problem: 'No online store despite strong local demand.', solution: 'End-to-end eCommerce site with SEO and product photography guide.' },
  { title: 'Fitness Studio Growth', industry: 'Health & Wellness', tag: 'Social Media', problem: 'Low social engagement and declining walk-ins.', solution: 'Content strategy + Instagram overhaul + local ad campaigns.' },
]

const roles = [
  { title: 'Web Development Intern', desc: 'Build and maintain client websites under real-world conditions.' },
  { title: 'Marketing / Sales Intern', desc: 'Drive campaigns and help small businesses find their audience.' },
  { title: 'Branding & Research Intern', desc: 'Shape visual identities and conduct market research for clients.' },
]

const Label = ({ text }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '20px' }}>
    <span style={{ width: '20px', height: '1px', backgroundColor: 'var(--teal)' }} />
    <span style={{
      fontFamily: 'var(--font-body)',
      fontSize: '0.7rem', fontWeight: 700,
      letterSpacing: '0.16em', textTransform: 'uppercase',
      color: 'var(--teal)',
    }}>{text}</span>
  </div>
)

const Home = () => {
  const navigate = useNavigate()

  useEffect(() => {
    // Hero
    const tl = gsap.timeline({ delay: 0.3 })
    tl.fromTo('.h-eyebrow', { opacity: 0, y: 16 }, { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' })
      .fromTo('.h-line-1', { opacity: 0, y: 60, skewY: 3 }, { opacity: 1, y: 0, skewY: 0, duration: 0.9, ease: 'power4.out' }, '-=0.2')
      .fromTo('.h-line-2', { opacity: 0, y: 60, skewY: 3 }, { opacity: 1, y: 0, skewY: 0, duration: 0.9, ease: 'power4.out' }, '-=0.7')
      .fromTo('.h-sub', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' }, '-=0.4')
      .fromTo('.h-ctas', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' }, '-=0.3')
      .fromTo('.h-scroll', { opacity: 0 }, { opacity: 1, duration: 0.6 }, '-=0.2')

    // Scroll reveals
    const revealTargets = [
      '.about-left', '.about-right',
      '.service-item',
      '.step-card',
      '.reason-row',
      '.work-card-item',
      '.role-chip',
      '.home-contact',
    ]
    revealTargets.forEach(cls => {
      gsap.fromTo(cls,
        { opacity: 0, y: 48 },
        {
          opacity: 1, y: 0,
          duration: 0.8, stagger: 0.1, ease: 'power3.out',
          scrollTrigger: { trigger: cls, start: 'top 87%' }
        }
      )
    })
  }, [])

  const btnPrimary = (extra = {}) => ({
    display: 'inline-flex', alignItems: 'center', gap: '8px',
    backgroundColor: 'var(--teal)', color: '#0e0e0e',
    padding: '13px 26px', borderRadius: '100px',
    border: 'none', fontFamily: 'var(--font-body)',
    fontSize: '0.9rem', fontWeight: 700, cursor: 'pointer',
    transition: 'all 0.3s ease', letterSpacing: '0.01em',
    ...extra,
  })

  const btnGhost = (extra = {}) => ({
    display: 'inline-flex', alignItems: 'center', gap: '8px',
    backgroundColor: 'transparent', color: 'var(--text-primary)',
    padding: '13px 26px', borderRadius: '100px',
    border: '1px solid var(--border)', fontFamily: 'var(--font-body)',
    fontSize: '0.9rem', fontWeight: 600, cursor: 'pointer',
    transition: 'all 0.3s ease', letterSpacing: '0.01em',
    ...extra,
  })

  return (
    <div style={{ backgroundColor: 'var(--bg-primary)' }}>

      {/* ━━━━━━━━━━━━━ HERO ━━━━━━━━━━━━━ */}
      <section style={{
        minHeight: '100vh',
        display: 'flex', flexDirection: 'column', justifyContent: 'center',
        padding: 'clamp(120px, 14vw, 180px) clamp(24px, 5vw, 80px) 80px',
        position: 'relative', overflow: 'hidden',
        maxWidth: '1400px', margin: '0 auto',
      }}>
        {/* Decorative teal blob */}
        <div style={{
          position: 'absolute', top: '20%', right: '-5%',
          width: 'clamp(300px, 40vw, 600px)',
          height: 'clamp(300px, 40vw, 600px)',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(45,212,191,0.08) 0%, transparent 70%)',
          pointerEvents: 'none',
          filter: 'blur(40px)',
        }} />
        {/* Grid lines decoration */}
        <div style={{
          position: 'absolute', top: 0, right: 'clamp(40px, 8vw, 120px)',
          width: '1px', height: '100%',
          background: 'linear-gradient(to bottom, transparent, var(--border), transparent)',
          opacity: 0.6, pointerEvents: 'none',
        }} />

        <div className="h-eyebrow" style={{ opacity: 0, marginBottom: '32px' }}>
          <Label text="PR & Marketing Agency · Visakhapatnam" />
        </div>

        <div style={{ overflow: 'hidden', marginBottom: '4px' }}>
          <h1 className="h-line-1" style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(3.5rem, 9vw, 8rem)',
            fontWeight: 700,
            letterSpacing: '-0.04em',
            lineHeight: 0.95,
            color: 'var(--text-primary)',
            opacity: 0,
          }}>Where Strategy</h1>
        </div>
        <div style={{ overflow: 'hidden', marginBottom: '40px' }}>
          <h1 className="h-line-2" style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(3.5rem, 9vw, 8rem)',
            fontWeight: 700,
            letterSpacing: '-0.04em',
            lineHeight: 0.95,
            color: 'var(--teal)',
            opacity: 0,
          }}>Meets Spark.</h1>
        </div>

        <p className="h-sub" style={{
          opacity: 0,
          fontFamily: 'var(--font-body)',
          fontSize: 'clamp(1rem, 1.8vw, 1.2rem)',
          color: 'var(--text-secondary)',
          lineHeight: 1.7, maxWidth: '480px',
          marginBottom: '40px',
        }}>
          We help small businesses grow with smart strategy, bold design, and marketing that actually works.
        </p>

        <div className="h-ctas" style={{ opacity: 0, display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <button style={btnPrimary()}
            onClick={() => navigate('/contact')}
            onMouseEnter={e => {
              e.currentTarget.style.backgroundColor = 'var(--teal-dark)'
              e.currentTarget.style.transform = 'translateY(-2px)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.backgroundColor = 'var(--teal)'
              e.currentTarget.style.transform = 'translateY(0)'
            }}
          >
            Work With Kerna <span>↗</span>
          </button>
          <button style={btnGhost()}
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

        {/* Scroll indicator */}
        <div className="h-scroll" style={{
          opacity: 0,
          position: 'absolute', bottom: '40px', left: 'clamp(24px, 5vw, 80px)',
          display: 'flex', alignItems: 'center', gap: '10px',
        }}>
          <div style={{
            width: '1px', height: '48px',
            background: 'linear-gradient(to bottom, var(--teal), transparent)',
          }} />
          <span style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.7rem', letterSpacing: '0.14em',
            textTransform: 'uppercase', color: 'var(--text-muted)',
            fontWeight: 600,
          }}>Scroll</span>
        </div>

        {/* Stats */}
        <div style={{
          position: 'absolute', bottom: '40px', right: 'clamp(24px, 5vw, 80px)',
          display: 'flex', gap: '40px',
        }} className="h-scroll">
          {[
            { num: '7+', label: 'Services' },
            { num: '3', label: 'Open Roles' },
            { num: '12', label: 'Week Program' },
          ].map(s => (
            <div key={s.label} style={{ textAlign: 'right' }}>
              <p style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.8rem', fontWeight: 700,
                color: 'var(--text-primary)', letterSpacing: '-0.04em',
                lineHeight: 1,
              }}>{s.num}</p>
              <p style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.7rem', fontWeight: 600,
                color: 'var(--text-muted)', letterSpacing: '0.1em',
                textTransform: 'uppercase', marginTop: '4px',
              }}>{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ━━━━━━━━━━━━━ ABOUT ━━━━━━━━━━━━━ */}
      <section style={{
        borderTop: '1px solid var(--border)',
        padding: 'clamp(64px, 8vw, 120px) clamp(24px, 5vw, 80px)',
        maxWidth: '1400px', margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: 'clamp(48px, 6vw, 100px)',
        alignItems: 'start',
      }}>
        <div className="about-left">
          <Label text="About Kerna" />
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2rem, 4vw, 3.5rem)',
            fontWeight: 700,
            letterSpacing: '-0.035em',
            lineHeight: 1.05,
            color: 'var(--text-primary)',
            marginBottom: '28px',
          }}>
            Built for<br />
            businesses that<br />
            mean <em style={{ color: 'var(--teal)', fontStyle: 'italic' }}>business.</em>
          </h2>
          <p style={{
            color: 'var(--text-secondary)', fontSize: '1rem',
            lineHeight: 1.8, marginBottom: '16px',
          }}>
            Kerna is a lean, strategy-driven PR and marketing agency built for small businesses
            that want to look professional, move fast, and grow without burning money.
          </p>
          <p style={{
            color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: 1.8,
          }}>
            We combine clear strategy with creative execution to help local brands build a
            strong digital presence — from websites and branding to social media and content.
          </p>
        </div>

        <div className="about-right" style={{ display: 'flex', flexDirection: 'column', gap: '1px' }}>
          {[
            { label: 'Mission', text: 'To make smart, affordable marketing accessible to small businesses and help them punch above their weight.' },
            { label: 'Who We Work With', text: 'Local businesses, startups, and independent brands.' },
            { label: 'What We Solve', text: 'Confusing marketing, weak online presence, and scattered branding.' },
          ].map(({ label, text }, i) => (
            <div key={label} style={{
              padding: '28px 0',
              borderBottom: i < 2 ? '1px solid var(--border)' : 'none',
              display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '24px',
              alignItems: 'start',
            }}>
              <span style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.72rem', fontWeight: 700,
                letterSpacing: '0.12em', textTransform: 'uppercase',
                color: 'var(--teal)', paddingTop: '4px',
              }}>{label}</span>
              <p style={{
                color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.7,
              }}>{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ━━━━━━━━━━━━━ SERVICES ━━━━━━━━━━━━━ */}
      <section style={{
        borderTop: '1px solid var(--border)',
        backgroundColor: 'var(--bg-secondary)',
        padding: 'clamp(64px, 8vw, 120px) clamp(24px, 5vw, 80px)',
      }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{
            display: 'flex', justifyContent: 'space-between',
            alignItems: 'flex-end', marginBottom: '56px',
            flexWrap: 'wrap', gap: '24px',
          }}>
            <div>
              <Label text="What We Do" />
              <h2 style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                fontWeight: 700, letterSpacing: '-0.035em',
                lineHeight: 1.05, color: 'var(--text-primary)',
              }}>
                Services built<br />to <span style={{ color: 'var(--teal)' }}>grow you.</span>
              </h2>
            </div>
            <span style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(3rem, 6vw, 6rem)',
              fontWeight: 700, color: 'var(--text-primary)',
              opacity: 0.06, letterSpacing: '-0.04em',
              lineHeight: 1, userSelect: 'none',
            }}>07</span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1px' }}>
            {services.map((s, i) => (
              <div key={s.title} className="service-item" style={{
                display: 'grid',
                gridTemplateColumns: '60px 1fr 1fr auto',
                gap: '24px', alignItems: 'center',
                padding: '24px 0',
                borderBottom: '1px solid var(--border)',
                borderTop: i === 0 ? '1px solid var(--border)' : 'none',
                transition: 'background-color 0.3s ease',
                cursor: 'default',
              }}
                onMouseEnter={e => e.currentTarget.style.backgroundColor = 'var(--bg-card)'}
                onMouseLeave={e => e.currentTarget.style.backgroundColor = 'transparent'}
                className="service-item"
              >
                <span style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '0.75rem', fontWeight: 700,
                  color: 'var(--text-muted)', letterSpacing: '0.08em',
                }}>0{i + 1}</span>
                <h3 style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(0.95rem, 1.5vw, 1.2rem)',
                  fontWeight: 600, color: 'var(--text-primary)',
                  letterSpacing: '-0.02em',
                }}>{s.title}</h3>
                <p style={{
                  color: 'var(--text-secondary)', fontSize: '0.9rem',
                  lineHeight: 1.6,
                }} className="service-desc">{s.desc}</p>
                <span style={{ color: 'var(--teal)', fontSize: '1rem', opacity: 0.6 }}>→</span>
              </div>
            ))}
          </div>
        </div>

        <style>{`
          @media (max-width: 768px) {
            .service-item { grid-template-columns: 40px 1fr !important; }
            .service-desc { display: none; }
            .service-item span:last-child { display: none; }
          }
        `}</style>
      </section>

      {/* ━━━━━━━━━━━━━ HOW WE WORK ━━━━━━━━━━━━━ */}
      <section style={{
        borderTop: '1px solid var(--border)',
        padding: 'clamp(64px, 8vw, 120px) clamp(24px, 5vw, 80px)',
        maxWidth: '1400px', margin: '0 auto',
      }}>
        <div style={{ marginBottom: '56px' }}>
          <Label text="Our Process" />
          <h2 style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2rem, 4vw, 3.5rem)',
            fontWeight: 700, letterSpacing: '-0.035em',
            lineHeight: 1.05, color: 'var(--text-primary)',
          }}>
            How we <span style={{ color: 'var(--teal)' }}>work.</span>
          </h2>
        </div>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '2px',
        }}>
          {steps.map((step, i) => (
            <div key={step.num} className="step-card" style={{
              padding: '40px 32px',
              backgroundColor: 'var(--bg-card)',
              border: '1px solid var(--border)',
              position: 'relative', overflow: 'hidden',
              transition: 'border-color 0.3s ease',
            }}
              onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--teal)'}
              onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}
            >
              <span style={{
                position: 'absolute', top: '16px', right: '20px',
                fontFamily: 'var(--font-display)',
                fontSize: '5rem', fontWeight: 700,
                color: 'var(--text-primary)', opacity: 0.04,
                lineHeight: 1, userSelect: 'none',
              }}>{step.num}</span>
              <div style={{
                width: '36px', height: '36px', borderRadius: '50%',
                border: '1px solid var(--teal)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                marginBottom: '24px',
              }}>
                <span style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '0.75rem', fontWeight: 700, color: 'var(--teal)',
                }}>{step.num}</span>
              </div>
              <h3 style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.3rem', fontWeight: 700,
                color: 'var(--text-primary)', marginBottom: '12px',
                letterSpacing: '-0.02em',
              }}>{step.name}</h3>
              <p style={{
                color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.7,
              }}>{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ━━━━━━━━━━━━━ WHY KERNA ━━━━━━━━━━━━━ */}
      <section style={{
        borderTop: '1px solid var(--border)',
        backgroundColor: 'var(--bg-secondary)',
        padding: 'clamp(64px, 8vw, 120px) clamp(24px, 5vw, 80px)',
      }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{ marginBottom: '56px' }}>
            <Label text="Why Us" />
            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2rem, 4vw, 3.5rem)',
              fontWeight: 700, letterSpacing: '-0.035em',
              lineHeight: 1.05, color: 'var(--text-primary)',
            }}>
              Why choose <span style={{ color: 'var(--teal)' }}>Kerna.</span>
            </h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1px' }}>
            {reasons.map((r, i) => (
              <div key={r.heading} className="reason-row" style={{
                display: 'grid',
                gridTemplateColumns: '40px 1fr 2fr',
                gap: '32px', alignItems: 'center',
                padding: '28px 0',
                borderBottom: i < reasons.length - 1 ? '1px solid var(--border)' : 'none',
                borderTop: i === 0 ? '1px solid var(--border)' : 'none',
                transition: 'all 0.3s ease',
                cursor: 'default',
              }}
                onMouseEnter={e => {
                  e.currentTarget.querySelector('.reason-num').style.color = 'var(--teal)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.querySelector('.reason-num').style.color = 'var(--text-muted)'
                }}
              >
                <span className="reason-num" style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '0.75rem', fontWeight: 700,
                  color: 'var(--text-muted)', letterSpacing: '0.08em',
                  transition: 'color 0.3s ease',
                }}>0{i + 1}</span>
                <h3 style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(1rem, 1.8vw, 1.3rem)',
                  fontWeight: 700, color: 'var(--text-primary)',
                  letterSpacing: '-0.02em',
                }}>{r.heading}</h3>
                <p style={{
                  color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: 1.6,
                }}>{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
        <style>{`
          @media (max-width: 640px) {
            .reason-row { grid-template-columns: 32px 1fr !important; }
            .reason-row p { display: none; }
          }
        `}</style>
      </section>

      {/* ━━━━━━━━━━━━━ WORK PREVIEW ━━━━━━━━━━━━━ */}
      <section style={{
        borderTop: '1px solid var(--border)',
        padding: 'clamp(64px, 8vw, 120px) clamp(24px, 5vw, 80px)',
        maxWidth: '1400px', margin: '0 auto',
      }}>
        <div style={{
          display: 'flex', justifyContent: 'space-between',
          alignItems: 'flex-end', marginBottom: '56px',
          flexWrap: 'wrap', gap: '24px',
        }}>
          <div>
            <Label text="Sample Work" />
            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2rem, 4vw, 3.5rem)',
              fontWeight: 700, letterSpacing: '-0.035em',
              lineHeight: 1.05, color: 'var(--text-primary)',
            }}>
              Work we're<br /><span style={{ color: 'var(--teal)' }}>proud of.</span>
            </h2>
          </div>
          <button onClick={() => navigate('/work')} style={btnGhost()}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = 'var(--teal)'
              e.currentTarget.style.color = 'var(--teal)'
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = 'var(--border)'
              e.currentTarget.style.color = 'var(--text-primary)'
            }}
          >View All →</button>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2px',
        }}>
          {sampleWork.map((w, i) => (
            <div key={w.title} className="work-card-item" style={{
              backgroundColor: 'var(--bg-card)',
              border: '1px solid var(--border)',
              overflow: 'hidden', cursor: 'pointer',
              transition: 'border-color 0.3s ease',
              display: 'flex', flexDirection: 'column',
            }}
              onClick={() => navigate('/work')}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'var(--teal)'
                e.currentTarget.querySelector('.work-thumb').style.transform = 'scale(1.03)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'var(--border)'
                e.currentTarget.querySelector('.work-thumb').style.transform = 'scale(1)'
              }}
            >
              <div style={{ overflow: 'hidden', height: '200px' }}>
                <div className="work-thumb" style={{
                  height: '100%',
                  background: `linear-gradient(135deg,
                    rgba(45,212,191,${0.06 + i * 0.04}) 0%,
                    rgba(45,212,191,0.02) 100%)`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
                }}>
                  <span style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '5rem', fontWeight: 700,
                    color: 'var(--teal)', opacity: 0.12,
                    letterSpacing: '-0.04em',
                  }}>0{i + 1}</span>
                </div>
              </div>
              <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                  <span style={{
                    fontSize: '0.7rem', fontWeight: 700,
                    letterSpacing: '0.1em', textTransform: 'uppercase',
                    color: 'var(--teal)',
                  }}>{w.tag}</span>
                  <span style={{
                    fontSize: '0.7rem', color: 'var(--text-muted)',
                    letterSpacing: '0.06em',
                  }}>{w.industry}</span>
                </div>
                <h3 style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.15rem', fontWeight: 700,
                  color: 'var(--text-primary)', marginBottom: '16px',
                  letterSpacing: '-0.02em',
                }}>{w.title}</h3>
                <div style={{
                  marginTop: 'auto',
                  paddingTop: '16px',
                  borderTop: '1px solid var(--border)',
                  display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px',
                }}>
                  <div>
                    <p style={{ fontSize: '0.65rem', fontWeight: 700, color: 'var(--teal)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '4px' }}>Problem</p>
                    <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>{w.problem}</p>
                  </div>
                  <div>
                    <p style={{ fontSize: '0.65rem', fontWeight: 700, color: 'var(--teal)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '4px' }}>Solution</p>
                    <p style={{ fontSize: '0.82rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>{w.solution}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ━━━━━━━━━━━━━ CAREERS PREVIEW ━━━━━━━━━━━━━ */}
      <section style={{
        borderTop: '1px solid var(--border)',
        backgroundColor: 'var(--bg-secondary)',
        padding: 'clamp(64px, 8vw, 120px) clamp(24px, 5vw, 80px)',
      }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
          <div style={{
            display: 'flex', justifyContent: 'space-between',
            alignItems: 'flex-end', marginBottom: '48px',
            flexWrap: 'wrap', gap: '24px',
          }}>
            <div>
              <Label text="Join the Team" />
              <h2 style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                fontWeight: 700, letterSpacing: '-0.035em',
                lineHeight: 1.05, color: 'var(--text-primary)',
              }}>
                Grow with <span style={{ color: 'var(--teal)' }}>Kerna.</span>
              </h2>
            </div>
            <button onClick={() => navigate('/careers')} style={btnGhost()}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = 'var(--teal)'
                e.currentTarget.style.color = 'var(--teal)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'var(--border)'
                e.currentTarget.style.color = 'var(--text-primary)'
              }}
            >All Roles →</button>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '2px',
          }}>
            {roles.map((r, i) => (
              <div key={r.title} className="role-chip" style={{
                padding: '36px 32px',
                backgroundColor: 'var(--bg-card)',
                border: '1px solid var(--border)',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                display: 'flex', flexDirection: 'column', gap: '16px',
              }}
                onClick={() => navigate('/careers')}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = 'var(--teal)'
                  e.currentTarget.style.backgroundColor = 'var(--bg-card-hover)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'var(--border)'
                  e.currentTarget.style.backgroundColor = 'var(--bg-card)'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <span style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '0.7rem', fontWeight: 700,
                    letterSpacing: '0.12em', textTransform: 'uppercase',
                    color: 'var(--text-muted)',
                  }}>0{i + 1}</span>
                  <span style={{ color: 'var(--teal)', fontSize: '1rem' }}>↗</span>
                </div>
                <h3 style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '1.1rem', fontWeight: 700,
                  color: 'var(--text-primary)', letterSpacing: '-0.02em',
                  lineHeight: 1.2,
                }}>{r.title}</h3>
                <p style={{
                  color: 'var(--text-secondary)', fontSize: '0.88rem', lineHeight: 1.6,
                }}>{r.desc}</p>
                <span style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.72rem', fontWeight: 700,
                  color: 'var(--teal)', letterSpacing: '0.1em',
                  textTransform: 'uppercase', marginTop: 'auto',
                }}>12 Weeks · Internship</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━ CONTACT SECTION ━━━━━━━━━━━━━ */}
      <section style={{
        borderTop: '1px solid var(--border)',
        padding: 'clamp(64px, 8vw, 120px) clamp(24px, 5vw, 80px)',
        maxWidth: '1400px', margin: '0 auto',
      }}>
        <div className="home-contact" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: 'clamp(48px, 6vw, 80px)',
          alignItems: 'start',
        }}>
          <div>
            <Label text="Find Us" />
            <h2 style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2rem, 4vw, 3.5rem)',
              fontWeight: 700, letterSpacing: '-0.035em',
              lineHeight: 1.05, color: 'var(--text-primary)',
              marginBottom: '36px',
            }}>
              Ready to<br /><span style={{ color: 'var(--teal)' }}>spark</span> something?
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '36px' }}>
              {['+91 75696 12318', '+91 99496 86160'].map(num => (
                <a key={num} href={`tel:${num.replace(/\s/g, '')}`} style={{
                  display: 'flex', alignItems: 'center', gap: '14px',
                  textDecoration: 'none', transition: 'color 0.3s ease',
                  color: 'var(--text-secondary)',
                }}
                  onMouseEnter={e => e.currentTarget.style.color = 'var(--teal)'}
                  onMouseLeave={e => e.currentTarget.style.color = 'var(--text-secondary)'}
                >
                  <div style={{
                    width: '40px', height: '40px',
                    border: '1px solid var(--border)', borderRadius: '50%',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: '0.85rem', flexShrink: 0,
                    backgroundColor: 'var(--bg-card)',
                  }}>📞</div>
                  <span style={{ fontFamily: 'var(--font-body)', fontSize: '1rem', fontWeight: 500 }}>{num}</span>
                </a>
              ))}
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px', color: 'var(--text-secondary)' }}>
                <div style={{
                  width: '40px', height: '40px',
                  border: '1px solid var(--border)', borderRadius: '50%',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '0.85rem', flexShrink: 0,
                  backgroundColor: 'var(--bg-card)',
                }}>📍</div>
                <span style={{ fontFamily: 'var(--font-body)', fontSize: '1rem', fontWeight: 500, lineHeight: 1.6 }}>
                  Marripalem, Visakhapatnam,<br />Andhra Pradesh
                </span>
              </div>
            </div>
            <button onClick={() => navigate('/contact')} style={btnPrimary()}
              onMouseEnter={e => {
                e.currentTarget.style.backgroundColor = 'var(--teal-dark)'
                e.currentTarget.style.transform = 'translateY(-2px)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.backgroundColor = 'var(--teal)'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
            >
              Work With Kerna <span>↗</span>
            </button>
          </div>

          <div style={{
            borderRadius: '12px', overflow: 'hidden',
            border: '1px solid var(--border)', height: '420px',
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
      </section>

    </div>
  )
}

export default Home