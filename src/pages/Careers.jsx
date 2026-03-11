import { useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const roles = [
  {
    title: 'Web Development Intern',
    tag: 'Technical',
    icon: '💻',
    desc: 'Work directly on client websites — building, maintaining, and optimizing real projects under the guidance of our team. You\'ll gain hands-on experience with modern web technologies in a fast-paced agency environment.',
    skills: [
      'HTML, CSS, JavaScript fundamentals',
      'React or any modern framework',
      'Basic understanding of responsive design',
      'Git version control',
      'Eye for detail and clean code',
    ],
    bonus: 'Tailwind CSS, SEO basics, performance optimization',
  },
  {
    title: 'Marketing / Sales Intern',
    tag: 'Growth',
    icon: '📈',
    desc: 'Drive real campaigns for real clients. You\'ll assist in strategy, execution, and reporting across social media, content, and outreach — learning what it takes to grow a small business from the ground up.',
    skills: [
      'Strong written and verbal communication',
      'Understanding of social media platforms',
      'Basic knowledge of digital marketing concepts',
      'Analytical mindset — comfortable with data',
      'Self-starter with high initiative',
    ],
    bonus: 'Experience with Meta Ads, Google Analytics, or CRM tools',
  },
  {
    title: 'Branding & Research Intern',
    tag: 'Creative',
    icon: '🎨',
    desc: 'Shape the visual and strategic identity of small businesses. From moodboards to market research, you\'ll contribute to the creative direction of client projects while building a strong portfolio.',
    skills: [
      'Proficiency in Figma or Adobe tools',
      'Understanding of brand identity principles',
      'Research and synthesis skills',
      'Strong visual sensibility',
      'Ability to present and defend creative decisions',
    ],
    bonus: 'Motion graphics, illustration, or copywriting experience',
  },
]

const perks = [
  { icon: '🚀', title: 'Real Work', desc: 'You\'ll work on actual client projects — not coffee runs or fake tasks.' },
  { icon: '🧠', title: 'Mentorship', desc: 'Direct guidance from the founding team with regular feedback sessions.' },
  { icon: '📁', title: 'Portfolio', desc: 'Walk away with real, showcaseable work after 12 weeks.' },
  { icon: '🌍', title: 'Remote Friendly', desc: 'Work from anywhere — we care about output, not location.' },
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

const Careers = () => {
  const navigate = useNavigate()
  const heroRef = useRef(null)

  useEffect(() => {
    window.scrollTo(0, 0)

    gsap.fromTo('.careers-hero',
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', delay: 0.2 }
    )

    gsap.fromTo('.perk-item',
      { opacity: 0, y: 30 },
      {
        opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: 'power3.out',
        scrollTrigger: { trigger: '.perk-item', start: 'top 88%' }
      }
    )

    gsap.fromTo('.role-card',
      { opacity: 0, y: 60 },
      {
        opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: 'power3.out',
        scrollTrigger: { trigger: '.role-card', start: 'top 85%' }
      }
    )

    gsap.fromTo('.careers-cta',
      { opacity: 0, y: 40 },
      {
        opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: '.careers-cta', start: 'top 85%' }
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
        <div className="careers-hero" style={{
          maxWidth: '1200px', margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 1,
        }}>
          <SectionLabel text="Careers" />
          <h1 style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(2.2rem, 5vw, 4rem)',
            fontWeight: 800,
            letterSpacing: '-0.03em',
            color: 'var(--text-primary)',
            marginBottom: '20px',
            lineHeight: 1.1,
          }}>
            Grow with <span style={{ color: 'var(--teal)' }}>Kerna.</span>
          </h1>
          <p style={{
            color: 'var(--text-secondary)',
            fontSize: 'clamp(1rem, 2vw, 1.15rem)',
            lineHeight: 1.7,
            maxWidth: '560px',
            margin: '0 auto 12px',
            fontFamily: 'var(--font-body)',
          }}>
            We offer 12-week internships that put you in the middle of real agency work — no busywork, no fake projects.
          </p>
          <p style={{
            color: 'var(--teal)',
            fontSize: '0.9rem',
            fontWeight: 600,
            fontFamily: 'var(--font-body)',
          }}>
            3 open roles · 12 weeks · Remote friendly
          </p>
        </div>
      </section>

      {/* Perks */}
      <section style={{
        padding: '40px 24px 80px',
        backgroundColor: 'var(--bg-secondary)',
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '20px',
          }}>
            {perks.map((p) => (
              <div key={p.title} className="perk-item" style={{
                padding: '28px',
                backgroundColor: 'var(--bg-card)',
                borderRadius: '14px',
                border: '1px solid var(--border)',
                display: 'flex',
                gap: '16px',
                alignItems: 'flex-start',
              }}>
                <span style={{ fontSize: '1.4rem', flexShrink: 0 }}>{p.icon}</span>
                <div>
                  <h4 style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '0.95rem',
                    fontWeight: 700,
                    color: 'var(--text-primary)',
                    marginBottom: '4px',
                  }}>{p.title}</h4>
                  <p style={{
                    color: 'var(--text-secondary)',
                    fontSize: '0.85rem',
                    lineHeight: 1.6,
                  }}>{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Roles */}
      <section style={{ padding: '80px 24px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <SectionLabel text="Open Roles" />
            <h2 style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
              fontWeight: 700,
              letterSpacing: '-0.02em',
              color: 'var(--text-primary)',
            }}>
              Find your <span style={{ color: 'var(--teal)' }}>fit</span>
            </h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
            {roles.map((role) => (
              <div key={role.title} className="role-card" style={{
                backgroundColor: 'var(--bg-card)',
                borderRadius: '20px',
                border: '1px solid var(--border)',
                padding: 'clamp(28px, 4vw, 48px)',
                transition: 'border-color 0.3s ease',
              }}
                onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--teal)'}
                onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}
              >
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                  gap: '40px',
                  alignItems: 'start',
                }}>
                  {/* Left */}
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
                      <span style={{
                        width: '44px', height: '44px',
                        backgroundColor: 'rgba(45,212,191,0.12)',
                        borderRadius: '10px',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontSize: '1.3rem',
                      }}>{role.icon}</span>
                      <span style={{
                        fontSize: '0.72rem', fontWeight: 700,
                        letterSpacing: '0.12em', textTransform: 'uppercase',
                        color: 'var(--teal)',
                        backgroundColor: 'rgba(45,212,191,0.1)',
                        padding: '4px 12px', borderRadius: '20px',
                      }}>{role.tag}</span>
                    </div>
                    <h3 style={{
                      fontFamily: 'var(--font-heading)',
                      fontSize: 'clamp(1.2rem, 2.5vw, 1.6rem)',
                      fontWeight: 700,
                      color: 'var(--text-primary)',
                      marginBottom: '12px',
                      letterSpacing: '-0.02em',
                    }}>{role.title}</h3>
                    <p style={{
                      color: 'var(--text-secondary)',
                      fontSize: '0.95rem',
                      lineHeight: 1.75,
                      marginBottom: '20px',
                    }}>{role.desc}</p>
                    <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                      <span style={{
                        fontSize: '0.8rem', fontWeight: 600,
                        color: 'var(--text-secondary)',
                        backgroundColor: 'var(--bg-secondary)',
                        border: '1px solid var(--border)',
                        padding: '5px 12px', borderRadius: '20px',
                      }}>⏱ 12 Weeks</span>
                      <span style={{
                        fontSize: '0.8rem', fontWeight: 600,
                        color: 'var(--text-secondary)',
                        backgroundColor: 'var(--bg-secondary)',
                        border: '1px solid var(--border)',
                        padding: '5px 12px', borderRadius: '20px',
                      }}>🌍 Remote</span>
                      <span style={{
                        fontSize: '0.8rem', fontWeight: 600,
                        color: 'var(--text-secondary)',
                        backgroundColor: 'var(--bg-secondary)',
                        border: '1px solid var(--border)',
                        padding: '5px 12px', borderRadius: '20px',
                      }}>📁 Portfolio Work</span>
                    </div>
                  </div>

                  {/* Right */}
                  <div>
                    <div style={{ marginBottom: '24px' }}>
                      <h4 style={{
                        fontSize: '0.75rem', fontWeight: 700,
                        letterSpacing: '0.12em', textTransform: 'uppercase',
                        color: 'var(--teal)', marginBottom: '14px',
                      }}>Skills Required</h4>
                      <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        {role.skills.map(skill => (
                          <li key={skill} style={{
                            display: 'flex', alignItems: 'flex-start', gap: '10px',
                            color: 'var(--text-secondary)', fontSize: '0.9rem', lineHeight: 1.5,
                          }}>
                            <span style={{
                              width: '6px', height: '6px', borderRadius: '50%',
                              backgroundColor: 'var(--teal)',
                              flexShrink: 0, marginTop: '7px',
                            }} />
                            {skill}
                          </li>
                        ))}
                      </ul>
                    </div>
                    {role.bonus && (
                      <div style={{
                        padding: '14px 18px',
                        backgroundColor: 'rgba(45,212,191,0.06)',
                        borderRadius: '10px',
                        border: '1px solid rgba(45,212,191,0.15)',
                        marginBottom: '24px',
                      }}>
                        <span style={{
                          fontSize: '0.72rem', fontWeight: 700,
                          letterSpacing: '0.1em', textTransform: 'uppercase',
                          color: 'var(--teal)', display: 'block', marginBottom: '4px',
                        }}>Bonus If You Have</span>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', lineHeight: 1.6 }}>
                          {role.bonus}
                        </p>
                      </div>
                    )}
                    <button
                      onClick={() => navigate('/contact')}
                      style={{
                        backgroundColor: 'var(--teal)',
                        color: '#1a1a1a',
                        padding: '12px 28px',
                        borderRadius: '8px',
                        border: 'none',
                        fontFamily: 'var(--font-body)',
                        fontSize: '0.95rem',
                        fontWeight: 600,
                        cursor: 'pointer',
                        transition: 'background-color 0.3s ease',
                        width: '100%',
                      }}
                      onMouseEnter={e => e.currentTarget.style.backgroundColor = 'var(--teal-dark)'}
                      onMouseLeave={e => e.currentTarget.style.backgroundColor = 'var(--teal)'}
                    >
                      Apply Now →
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '0 24px 100px' }}>
        <div className="careers-cta" style={{
          maxWidth: '1200px', margin: '0 auto',
          background: 'linear-gradient(135deg, rgba(45,212,191,0.12) 0%, rgba(45,212,191,0.04) 100%)',
          borderRadius: '24px',
          border: '1px solid rgba(45,212,191,0.25)',
          padding: 'clamp(40px, 6vw, 80px)',
          textAlign: 'center',
        }}>
          <SectionLabel text="Not Sure Which Role?" />
          <h2 style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(1.8rem, 3.5vw, 2.6rem)',
            fontWeight: 700,
            letterSpacing: '-0.02em',
            color: 'var(--text-primary)',
            marginBottom: '16px',
          }}>
            Just reach out — we'll find<br />
            <span style={{ color: 'var(--teal)' }}>the right fit together.</span>
          </h2>
          <p style={{
            color: 'var(--text-secondary)',
            fontSize: '1rem', lineHeight: 1.7,
            maxWidth: '440px', margin: '0 auto 32px',
          }}>
            Tell us about yourself and what excites you — we'll match you to the right opportunity.
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
            Get In Touch →
          </button>
        </div>
      </section>

    </div>
  )
}

export default Careers