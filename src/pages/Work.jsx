import { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const projects = [
  {
    title: 'Local Café Rebrand',
    industry: 'Food & Beverage',
    tag: 'Branding',
    year: '2024',
    problem: 'A beloved local café had inconsistent branding across its signage, packaging, and social media — making it look unpolished despite great food and service.',
    solution: 'We developed a full visual identity system including logo, color palette, typography, and packaging guidelines. Followed by a Google Business profile setup and a social media launch campaign.',
    results: ['Brand recognition up 60%', 'Instagram followers 0 → 1.2K in 6 weeks', 'Google profile views tripled'],
    color: 'rgba(45,212,191,0.08)',
  },
  {
    title: 'Boutique eCommerce Launch',
    industry: 'Retail / Fashion',
    tag: 'Web + eCommerce',
    year: '2024',
    problem: 'A fashion boutique with strong local foot traffic had no online store, missing out on a growing segment of digital-first shoppers.',
    solution: 'End-to-end eCommerce website with product catalogue, payment integration, and SEO foundation. Also provided a product photography guide for the client to maintain quality.',
    results: ['Online store live in 3 weeks', '40+ orders in first month', 'SEO ranking page 1 for local queries'],
    color: 'rgba(45,212,191,0.05)',
  },
  {
    title: 'Fitness Studio Growth Campaign',
    industry: 'Health & Wellness',
    tag: 'Social Media',
    year: '2025',
    problem: 'A fitness studio was struggling with low social engagement and declining walk-in numbers despite having excellent trainers and facilities.',
    solution: 'Rebuilt their content strategy from scratch — consistent posting schedule, Instagram Reels campaign, and targeted local ad spend. Combined with a referral program design.',
    results: ['Engagement rate 4x in 2 months', 'Walk-ins increased 35%', 'Ad ROAS of 3.8x'],
    color: 'rgba(45,212,191,0.06)',
  },
]

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

const Work = () => {
  const navigate = useNavigate()
  const heroRef = useRef(null)

  useEffect(() => {
    window.scrollTo(0, 0)

    gsap.fromTo('.work-hero-content',
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', delay: 0.2 }
    )

    gsap.fromTo('.project-card',
      { opacity: 0, y: 60 },
      {
        opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: 'power3.out',
        scrollTrigger: { trigger: '.project-card', start: 'top 85%' }
      }
    )

    gsap.fromTo('.cta-section',
      { opacity: 0, y: 40 },
      {
        opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: '.cta-section', start: 'top 85%' }
      }
    )
  }, [])

  return (
    <div style={{ backgroundColor: 'var(--bg-primary)', paddingTop: '80px' }}>

      {/* Hero */}
      <section ref={heroRef} style={{
        padding: '80px 24px 60px',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          background: 'radial-gradient(ellipse 60% 50% at 50% 0%, rgba(45,212,191,0.07) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />
        <div className="work-hero-content" style={{
          maxWidth: '1200px', margin: '0 auto', textAlign: 'center',
        }}>
          <SectionLabel text="Our Work" />
          <h1 style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(2.2rem, 5vw, 4rem)',
            fontWeight: 800,
            letterSpacing: '-0.03em',
            color: 'var(--text-primary)',
            marginBottom: '20px',
            lineHeight: 1.1,
          }}>
            Work that <span style={{ color: 'var(--teal)' }}>speaks</span> for itself
          </h1>
          <p style={{
            color: 'var(--text-secondary)',
            fontSize: 'clamp(1rem, 2vw, 1.15rem)',
            lineHeight: 1.7,
            maxWidth: '560px',
            margin: '0 auto',
            fontFamily: 'var(--font-body)',
          }}>
            A selection of sample projects that show how we think, build, and deliver results for small businesses.
          </p>
        </div>
      </section>

      {/* Projects */}
      <section style={{ padding: '40px 24px 100px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '32px' }}>
          {projects.map((p, i) => (
            <div key={p.title} className="project-card" style={{
              backgroundColor: 'var(--bg-card)',
              borderRadius: '20px',
              border: '1px solid var(--border)',
              overflow: 'hidden',
              transition: 'border-color 0.3s ease',
            }}
              onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--teal)'}
              onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}
            >
              <div style={{
                display: 'grid',
                gridTemplateColumns: i % 2 === 0 ? '1fr 2fr' : '2fr 1fr',
                minHeight: '320px',
              }}
                className="project-grid"
              >
                {/* Visual Panel */}
                <div style={{
                  order: i % 2 === 0 ? 0 : 1,
                  background: p.color,
                  backgroundImage: `radial-gradient(circle at ${i % 2 === 0 ? '80% 50%' : '20% 50%'}, rgba(45,212,191,0.15) 0%, transparent 60%)`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexDirection: 'column',
                  gap: '12px',
                  padding: '40px',
                  borderRight: i % 2 === 0 ? '1px solid var(--border)' : 'none',
                  borderLeft: i % 2 !== 0 ? '1px solid var(--border)' : 'none',
                  minHeight: '220px',
                }}>
                  <span style={{
                    fontSize: '0.75rem', fontWeight: 700,
                    letterSpacing: '0.12em', textTransform: 'uppercase',
                    color: 'var(--teal)',
                    backgroundColor: 'rgba(45,212,191,0.12)',
                    padding: '6px 16px', borderRadius: '20px',
                  }}>{p.tag}</span>
                  <span style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '3.5rem', fontWeight: 900,
                    color: 'rgba(45,212,191,0.12)',
                    lineHeight: 1,
                  }}>{String(i + 1).padStart(2, '0')}</span>
                </div>

                {/* Content Panel */}
                <div style={{
                  order: i % 2 === 0 ? 1 : 0,
                  padding: '40px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  gap: '24px',
                }}>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px', flexWrap: 'wrap' }}>
                      <span style={{
                        fontSize: '0.75rem', fontWeight: 600,
                        color: 'var(--text-secondary)', letterSpacing: '0.08em',
                        textTransform: 'uppercase',
                      }}>{p.industry}</span>
                      <span style={{ color: 'var(--border)' }}>·</span>
                      <span style={{
                        fontSize: '0.75rem', fontWeight: 600,
                        color: 'var(--text-secondary)',
                      }}>{p.year}</span>
                    </div>
                    <h2 style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: 'clamp(1.3rem, 2.5vw, 1.8rem)',
                      fontWeight: 700,
                      color: 'var(--text-primary)',
                      marginBottom: '20px',
                      letterSpacing: '-0.02em',
                    }}>{p.title}</h2>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '20px' }}>
                      <div>
                        <span style={{
                          fontSize: '0.75rem', fontWeight: 700,
                          letterSpacing: '0.1em', textTransform: 'uppercase',
                          color: 'var(--teal)', display: 'block', marginBottom: '4px',
                        }}>Problem</span>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.7 }}>{p.problem}</p>
                      </div>
                      <div>
                        <span style={{
                          fontSize: '0.75rem', fontWeight: 700,
                          letterSpacing: '0.1em', textTransform: 'uppercase',
                          color: 'var(--teal)', display: 'block', marginBottom: '4px',
                        }}>Solution</span>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.7 }}>{p.solution}</p>
                      </div>
                    </div>
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    {p.results.map(r => (
                      <span key={r} style={{
                        fontSize: '0.8rem', fontWeight: 500,
                        color: 'var(--text-secondary)',
                        backgroundColor: 'var(--bg-secondary)',
                        border: '1px solid var(--border)',
                        padding: '5px 12px', borderRadius: '20px',
                      }}>✓ {r}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '0 24px 100px' }}>
        <div className="cta-section" style={{
          maxWidth: '1200px', margin: '0 auto',
          background: 'linear-gradient(135deg, rgba(45,212,191,0.12) 0%, rgba(45,212,191,0.04) 100%)',
          borderRadius: '24px',
          border: '1px solid rgba(45,212,191,0.25)',
          padding: 'clamp(40px, 6vw, 80px)',
          textAlign: 'center',
        }}>
          <SectionLabel text="Ready to Start?" />
          <h2 style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
            fontWeight: 700,
            letterSpacing: '-0.02em',
            color: 'var(--text-primary)',
            marginBottom: '16px',
          }}>
            Your business could be<br />
            <span style={{ color: 'var(--teal)' }}>next on this page.</span>
          </h2>
          <p style={{
            color: 'var(--text-secondary)',
            fontSize: '1rem', lineHeight: 1.7,
            maxWidth: '480px', margin: '0 auto 32px',
          }}>
            Let's build something worth showcasing. Reach out and let's talk strategy.
          </p>
          <button
            onClick={() => navigate('/contact')}
            style={{
              backgroundColor: 'var(--teal)',
              color: '#1a1a1a',
              padding: '14px 32px',
              borderRadius: '8px',
              border: 'none',
              fontFamily: 'var(--font-body)',
              fontSize: '1rem',
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'background-color 0.3s ease',
            }}
            onMouseEnter={e => e.currentTarget.style.backgroundColor = 'var(--teal-dark)'}
            onMouseLeave={e => e.currentTarget.style.backgroundColor = 'var(--teal)'}
          >
            Work With Kerna →
          </button>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .project-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  )
}

export default Work