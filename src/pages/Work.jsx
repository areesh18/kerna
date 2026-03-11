import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const projects = [
  {
    num: '01',
    title: 'Local Café Rebrand',
    industry: 'Food & Beverage',
    tag: 'Branding',
    year: '2024',
    problem: 'A beloved local café had inconsistent branding across signage, packaging, and social media — looking unpolished despite great food and service.',
    solution: 'Full visual identity system — logo, color palette, typography, packaging guidelines — followed by Google Business setup and a social media launch.',
    results: ['Brand recognition up 60%', 'Instagram 0 → 1.2K in 6 weeks', 'Google profile views tripled'],
  },
  {
    num: '02',
    title: 'Boutique eCommerce Launch',
    industry: 'Retail / Fashion',
    tag: 'Web + eCommerce',
    year: '2024',
    problem: 'A fashion boutique with strong foot traffic had no online store, missing a growing segment of digital-first shoppers.',
    solution: 'End-to-end eCommerce site with product catalogue, payment integration, SEO foundation, and a product photography guide.',
    results: ['Live in 3 weeks', '40+ orders in first month', 'Page 1 for local queries'],
  },
  {
    num: '03',
    title: 'Fitness Studio Growth',
    industry: 'Health & Wellness',
    tag: 'Social Media',
    year: '2025',
    problem: 'Struggling with low social engagement and declining walk-ins despite excellent trainers and facilities.',
    solution: 'Rebuilt content strategy — consistent schedule, Instagram Reels campaign, targeted local ad spend, and referral program design.',
    results: ['Engagement 4x in 2 months', 'Walk-ins up 35%', 'Ad ROAS 3.8x'],
  },
]

const W = { maxWidth: '1400px', margin: '0 auto', padding: '0 clamp(24px, 5vw, 80px)' }

const Work = () => {
  const navigate = useNavigate()

  useEffect(() => {
    window.scrollTo(0, 0)

    const tl = gsap.timeline({ delay: 0.2 })
    tl.fromTo('.work-hero-tag', { opacity: 0, y: 12 }, { opacity: 1, y: 0, duration: 0.5, ease: 'power3.out' })
      .fromTo('.work-h1-1', { opacity: 0, y: '100%' }, { opacity: 1, y: '0%', duration: 1, ease: 'power4.out' }, '-=0.1')
      .fromTo('.work-h1-2', { opacity: 0, y: '100%' }, { opacity: 1, y: '0%', duration: 1, ease: 'power4.out' }, '-=0.7')
      .fromTo('.work-hero-sub', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' }, '-=0.3')

    gsap.utils.toArray('.project-row').forEach((el, i) => {
      gsap.fromTo(el,
        { opacity: 0, y: 60 },
        { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 87%' },
          delay: i * 0.05 }
      )
    })

    gsap.fromTo('.work-cta', { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: '.work-cta', start: 'top 87%' } }
    )
  }, [])

  return (
    <div style={{ backgroundColor: 'var(--bg-primary)' }}>

      {/* HERO */}
      <section style={{
        minHeight: '55vh',
        display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
        padding: 'clamp(120px, 14vw, 160px) clamp(24px, 5vw, 80px) clamp(60px, 6vw, 80px)',
        borderBottom: '1px solid var(--border)',
        maxWidth: '1400px', margin: '0 auto',
      }}>
        <div className="work-hero-tag" style={{
          display: 'flex', alignItems: 'center', gap: '8px',
          marginBottom: '24px', opacity: 0,
        }}>
          <span style={{ width: '24px', height: '1px', backgroundColor: 'var(--teal)' }} />
          <span style={{
            fontFamily: 'var(--font-body)', fontSize: '0.7rem', fontWeight: 700,
            letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--teal)',
          }}>Our Work</span>
        </div>

        <div style={{ overflow: 'hidden', marginBottom: '4px' }}>
          <h1 className="work-h1-1" style={{
            fontFamily: 'var(--font-display)', fontSize: 'clamp(3rem, 8vw, 7rem)',
            fontWeight: 500, letterSpacing: '-0.04em', lineHeight: 0.95,
            color: 'var(--text-primary)', opacity: 0,
          }}>Work that speaks</h1>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '24px' }}>
          <div style={{ overflow: 'hidden' }}>
            <h1 className="work-h1-2 italic" style={{
              fontFamily: 'var(--font-display)', fontSize: 'clamp(3rem, 8vw, 7rem)',
              fontWeight: 400, letterSpacing: '-0.04em', lineHeight: 0.95,
              color: 'var(--teal)', opacity: 0,
            }}>for itself.</h1>
          </div>
          <p className="work-hero-sub" style={{
            opacity: 0, fontFamily: 'var(--font-body)',
            fontSize: 'clamp(0.9rem, 1.4vw, 1.05rem)',
            color: 'var(--text-secondary)', lineHeight: 1.75,
            maxWidth: '380px',
          }}>
            Sample projects that show how we think, build, and deliver results for small businesses.
          </p>
        </div>
      </section>

      {/* PROJECTS */}
      <section style={{ borderBottom: '1px solid var(--border)' }}>
        <div style={{ ...W }}>
          {projects.map((p, i) => (
            <div key={p.title} className="project-row" style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '0',
              borderBottom: i < projects.length - 1 ? '1px solid var(--border)' : 'none',
              transition: 'background-color 0.4s ease',
            }}
              onMouseEnter={e => e.currentTarget.style.backgroundColor = 'var(--bg-secondary)'}
              onMouseLeave={e => e.currentTarget.style.backgroundColor = 'transparent'}
            >
              {/* Left — visual */}
              <div style={{
                padding: 'clamp(40px, 5vw, 64px)',
                borderRight: '1px solid var(--border)',
                display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
                gap: '32px', minHeight: '320px',
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <span style={{
                    fontFamily: 'var(--font-display)', fontSize: '5rem', fontWeight: 800,
                    color: 'var(--teal)', opacity: 0.08, lineHeight: 1, letterSpacing: '-0.04em',
                    userSelect: 'none',
                  }}>{p.num}</span>
                  <span style={{
                    fontFamily: 'var(--font-body)', fontSize: '0.68rem', fontWeight: 700,
                    letterSpacing: '0.12em', textTransform: 'uppercase',
                    color: 'var(--teal)', border: '1px solid rgba(45,212,191,0.3)',
                    padding: '4px 12px', borderRadius: '100px',
                  }}>{p.tag}</span>
                </div>
                <div>
                  <p style={{
                    fontFamily: 'var(--font-body)', fontSize: '0.68rem', fontWeight: 700,
                    letterSpacing: '0.12em', textTransform: 'uppercase',
                    color: 'var(--text-muted)', marginBottom: '8px',
                  }}>{p.industry} · {p.year}</p>
                  <h2 style={{
                    fontFamily: 'var(--font-display)', fontSize: 'clamp(1.6rem, 3vw, 2.4rem)',
                    fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1.0,
                    color: 'var(--text-primary)',
                  }}>{p.title}</h2>
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {p.results.map(r => (
                    <span key={r} style={{
                      fontFamily: 'var(--font-body)', fontSize: '0.75rem', fontWeight: 500,
                      color: 'var(--text-secondary)', border: '1px solid var(--border)',
                      padding: '4px 12px', borderRadius: '100px',
                    }}>✓ {r}</span>
                  ))}
                </div>
              </div>

              {/* Right — content */}
              <div style={{
                padding: 'clamp(40px, 5vw, 64px)',
                display: 'flex', flexDirection: 'column', gap: '32px', justifyContent: 'center',
              }}>
                <div>
                  <p style={{
                    fontFamily: 'var(--font-body)', fontSize: '0.68rem', fontWeight: 700,
                    letterSpacing: '0.14em', textTransform: 'uppercase',
                    color: 'var(--teal)', marginBottom: '10px',
                  }}>Problem</p>
                  <p style={{
                    fontFamily: 'var(--font-body)', fontSize: '0.95rem',
                    color: 'var(--text-secondary)', lineHeight: 1.75,
                  }}>{p.problem}</p>
                </div>
                <div style={{ width: '40px', height: '1px', backgroundColor: 'var(--border)' }} />
                <div>
                  <p style={{
                    fontFamily: 'var(--font-body)', fontSize: '0.68rem', fontWeight: 700,
                    letterSpacing: '0.14em', textTransform: 'uppercase',
                    color: 'var(--teal)', marginBottom: '10px',
                  }}>Solution</p>
                  <p style={{
                    fontFamily: 'var(--font-body)', fontSize: '0.95rem',
                    color: 'var(--text-secondary)', lineHeight: 1.75,
                  }}>{p.solution}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section>
        <div style={{ ...W, padding: 'clamp(64px, 8vw, 120px) clamp(24px, 5vw, 80px)' }}>
          <div className="work-cta" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '48px', alignItems: 'center',
            padding: 'clamp(40px, 6vw, 72px)',
            border: '1px solid var(--border)',
            backgroundColor: 'var(--bg-secondary)',
          }}>
            <div>
              <p style={{
                fontFamily: 'var(--font-body)', fontSize: '0.7rem', fontWeight: 700,
                letterSpacing: '0.16em', textTransform: 'uppercase',
                color: 'var(--teal)', marginBottom: '16px',
                display: 'flex', alignItems: 'center', gap: '8px',
              }}>
                <span style={{ width: '20px', height: '1px', backgroundColor: 'var(--teal)' }} />
                Ready to Start?
              </p>
              <h2 style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2rem, 5vw, 4rem)',
                fontWeight: 300, letterSpacing: '-0.04em', lineHeight: 1.0,
                color: 'var(--text-primary)',
              }}>
                Your business could<br />be <span style={{ color: 'var(--teal)' }}>next.</span>
              </h2>
            </div>
            <div>
              <p style={{
                fontFamily: 'var(--font-body)', fontSize: '1rem',
                color: 'var(--text-secondary)', lineHeight: 1.75, marginBottom: '28px',
              }}>
                Let's build something worth showcasing. Reach out and let's talk strategy.
              </p>
              <button onClick={() => navigate('/contact')} style={{
                backgroundColor: 'var(--teal)', color: '#0e0e0e',
                padding: '14px 32px', border: 'none', borderRadius: '100px',
                cursor: 'pointer', fontFamily: 'var(--font-body)',
                fontSize: '0.9rem', fontWeight: 700,
                transition: 'all 0.3s ease',
              }}
                onMouseEnter={e => { e.currentTarget.style.backgroundColor = 'var(--teal-dark)'; e.currentTarget.style.transform = 'translateY(-2px)' }}
                onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'var(--teal)'; e.currentTarget.style.transform = 'translateY(0)' }}
              >Work With Kerna ↗</button>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Work