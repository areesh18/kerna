import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const roles = [
  {
    num: '01',
    title: 'Web Development Intern',
    area: 'Technical',
    desc: 'Work directly on client websites — building, maintaining, and optimizing real projects. Gain hands-on experience with modern web technologies in a fast-paced agency environment.',
    skills: ['HTML, CSS, JavaScript fundamentals', 'React or any modern framework', 'Responsive design basics', 'Git version control', 'Eye for detail and clean code'],
    bonus: 'Tailwind CSS, SEO basics, performance optimization',
  },
  {
    num: '02',
    title: 'Marketing / Sales Intern',
    area: 'Growth',
    desc: 'Drive real campaigns for real clients. Assist in strategy, execution, and reporting across social media, content, and outreach.',
    skills: ['Strong written and verbal communication', 'Understanding of social media platforms', 'Basic digital marketing knowledge', 'Analytical mindset', 'Self-starter with high initiative'],
    bonus: 'Meta Ads, Google Analytics, or CRM tools',
  },
  {
    num: '03',
    title: 'Branding & Research Intern',
    area: 'Creative',
    desc: 'Shape the visual and strategic identity of small businesses. From moodboards to market research, contribute to the creative direction of client projects.',
    skills: ['Proficiency in Figma or Adobe tools', 'Brand identity principles', 'Research and synthesis skills', 'Strong visual sensibility', 'Ability to present creative decisions'],
    bonus: 'Motion graphics, illustration, or copywriting experience',
  },
]

const perks = [
  { num: '01', title: 'Real Work', desc: 'Actual client projects — not coffee runs or fake tasks.' },
  { num: '02', title: 'Mentorship', desc: 'Direct guidance from the founding team with regular feedback.' },
  { num: '03', title: 'Portfolio', desc: 'Walk away with real, showcaseable work after 12 weeks.' },
  { num: '04', title: 'Remote', desc: 'Work from anywhere — we care about output, not location.' },
]

const W = { maxWidth: '1400px', margin: '0 auto', padding: '0 clamp(24px, 5vw, 80px)' }

const Careers = () => {
  const navigate = useNavigate()

  useEffect(() => {
    window.scrollTo(0, 0)

    const tl = gsap.timeline({ delay: 0.2 })
    tl.fromTo('.careers-tag', { opacity: 0, y: 12 }, { opacity: 1, y: 0, duration: 0.5, ease: 'power3.out' })
      .fromTo('.careers-h1-1', { opacity: 0, y: '100%' }, { opacity: 1, y: '0%', duration: 1, ease: 'power4.out' }, '-=0.1')
      .fromTo('.careers-h1-2', { opacity: 0, y: '100%' }, { opacity: 1, y: '0%', duration: 1, ease: 'power4.out' }, '-=0.7')
      .fromTo('.careers-hero-sub', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.7 }, '-=0.3')

    gsap.utils.toArray('.perk-cell').forEach(el => {
      gsap.fromTo(el, { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 88%' } }
      )
    })

    gsap.utils.toArray('.role-row').forEach(el => {
      gsap.fromTo(el, { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 87%' } }
      )
    })

    gsap.fromTo('.careers-cta', { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: '.careers-cta', start: 'top 87%' } }
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
        <div className="careers-tag" style={{
          display: 'flex', alignItems: 'center', gap: '8px',
          marginBottom: '24px', opacity: 0,
        }}>
          <span style={{ width: '24px', height: '1px', backgroundColor: 'var(--teal)' }} />
          <span style={{
            fontFamily: 'var(--font-body)', fontSize: '0.7rem', fontWeight: 700,
            letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--teal)',
          }}>Careers · 3 Open Roles · 12 Weeks</span>
        </div>
        <div style={{ overflow: 'hidden', marginBottom: '4px' }}>
          <h1 className="careers-h1-1" style={{
            fontFamily: 'var(--font-display)', fontSize: 'clamp(3rem, 8vw, 7rem)',
            fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 0.95,
            color: 'var(--text-primary)', opacity: 0,
          }}>Grow with</h1>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '24px' }}>
          <div style={{ overflow: 'hidden' }}>
            <h1 className="careers-h1-2" style={{
              fontFamily: 'var(--font-display)', fontSize: 'clamp(3rem, 8vw, 7rem)',
              fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 0.95,
              color: 'var(--teal)', opacity: 0,
            }}>Kerna.</h1>
          </div>
          <p className="careers-hero-sub" style={{
            opacity: 0, fontFamily: 'var(--font-body)',
            fontSize: 'clamp(0.9rem, 1.4vw, 1.05rem)',
            color: 'var(--text-secondary)', lineHeight: 1.75,
            maxWidth: '380px',
          }}>
            12-week internships that put you in the middle of real agency work — no busywork, no fake projects.
          </p>
        </div>
      </section>

      {/* PERKS */}
      <section style={{ borderBottom: '1px solid var(--border)', backgroundColor: 'var(--bg-secondary)' }}>
        <div style={{ ...W }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            borderLeft: '1px solid var(--border)',
          }}>
            {perks.map((p) => (
              <div key={p.num} className="perk-cell" style={{
                padding: 'clamp(28px, 4vw, 48px) clamp(24px, 3vw, 40px)',
                borderRight: '1px solid var(--border)',
                borderTop: '1px solid var(--border)',
                borderBottom: '1px solid var(--border)',
              }}>
                <span style={{
                  fontFamily: 'var(--font-body)', fontSize: '0.68rem', fontWeight: 700,
                  color: 'var(--text-muted)', letterSpacing: '0.1em', display: 'block', marginBottom: '16px',
                }}>{p.num}</span>
                <h3 style={{
                  fontFamily: 'var(--font-display)', fontSize: 'clamp(1.2rem, 2vw, 1.6rem)',
                  fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1,
                  color: 'var(--text-primary)', marginBottom: '10px',
                }}>{p.title}</h3>
                <p style={{
                  fontFamily: 'var(--font-body)', fontSize: '0.88rem',
                  color: 'var(--text-secondary)', lineHeight: 1.7,
                }}>{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ROLES */}
      <section style={{ borderBottom: '1px solid var(--border)' }}>
        <div style={{ ...W, padding: 'clamp(64px, 8vw, 100px) clamp(24px, 5vw, 80px) 0' }}>
          <div style={{ marginBottom: '48px' }}>
            <p style={{
              fontFamily: 'var(--font-body)', fontSize: '0.7rem', fontWeight: 700,
              letterSpacing: '0.16em', textTransform: 'uppercase',
              color: 'var(--teal)', display: 'flex', alignItems: 'center', gap: '8px',
              marginBottom: '16px',
            }}>
              <span style={{ width: '24px', height: '1px', backgroundColor: 'var(--teal)' }} />
              Open Roles
            </p>
            <h2 style={{
              fontFamily: 'var(--font-display)', fontSize: 'clamp(2.5rem, 6vw, 5rem)',
              fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 0.95,
              color: 'var(--text-primary)',
            }}>Find your <span style={{ color: 'var(--teal)' }}>fit.</span></h2>
          </div>
        </div>

        <div style={{ ...W }}>
          {roles.map((role, i) => (
            <div key={role.title} className="role-row" style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              borderTop: '1px solid var(--border)',
              borderBottom: i === roles.length - 1 ? '1px solid var(--border)' : 'none',
              transition: 'background-color 0.4s ease',
            }}
              onMouseEnter={e => e.currentTarget.style.backgroundColor = 'var(--bg-secondary)'}
              onMouseLeave={e => e.currentTarget.style.backgroundColor = 'transparent'}
            >
              {/* Left */}
              <div style={{
                padding: 'clamp(36px, 5vw, 56px)',
                borderRight: '1px solid var(--border)',
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px' }}>
                  <span style={{
                    fontFamily: 'var(--font-body)', fontSize: '0.68rem', fontWeight: 700,
                    color: 'var(--text-muted)', letterSpacing: '0.1em',
                  }}>{role.num}</span>
                  <span style={{
                    fontFamily: 'var(--font-body)', fontSize: '0.68rem', fontWeight: 700,
                    letterSpacing: '0.1em', textTransform: 'uppercase',
                    color: 'var(--teal)', border: '1px solid rgba(45,212,191,0.3)',
                    padding: '3px 10px', borderRadius: '100px',
                  }}>{role.area}</span>
                </div>
                <h3 style={{
                  fontFamily: 'var(--font-display)', fontSize: 'clamp(1.6rem, 3vw, 2.4rem)',
                  fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1.0,
                  color: 'var(--text-primary)', marginBottom: '16px',
                }}>{role.title}</h3>
                <p style={{
                  fontFamily: 'var(--font-body)', fontSize: '0.93rem',
                  color: 'var(--text-secondary)', lineHeight: 1.75, marginBottom: '24px',
                }}>{role.desc}</p>
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  {['12 Weeks', 'Remote', 'Portfolio Work'].map(tag => (
                    <span key={tag} style={{
                      fontFamily: 'var(--font-body)', fontSize: '0.72rem', fontWeight: 600,
                      color: 'var(--text-secondary)', border: '1px solid var(--border)',
                      padding: '4px 12px', borderRadius: '100px',
                    }}>{tag}</span>
                  ))}
                </div>
              </div>

              {/* Right */}
              <div style={{ padding: 'clamp(36px, 5vw, 56px)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: '28px' }}>
                <div>
                  <p style={{
                    fontFamily: 'var(--font-body)', fontSize: '0.68rem', fontWeight: 700,
                    letterSpacing: '0.14em', textTransform: 'uppercase',
                    color: 'var(--teal)', marginBottom: '16px',
                  }}>Skills Required</p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    {role.skills.map(skill => (
                      <div key={skill} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                        <span style={{
                          width: '5px', height: '5px', borderRadius: '50%',
                          backgroundColor: 'var(--teal)', flexShrink: 0, marginTop: '7px',
                        }} />
                        <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.5 }}>{skill}</p>
                      </div>
                    ))}
                  </div>
                </div>
                {role.bonus && (
                  <div style={{
                    padding: '16px 20px',
                    border: '1px solid rgba(45,212,191,0.2)',
                    backgroundColor: 'rgba(45,212,191,0.04)',
                  }}>
                    <p style={{
                      fontFamily: 'var(--font-body)', fontSize: '0.68rem', fontWeight: 700,
                      letterSpacing: '0.12em', textTransform: 'uppercase',
                      color: 'var(--teal)', marginBottom: '6px',
                    }}>Bonus If You Have</p>
                    <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>{role.bonus}</p>
                  </div>
                )}
                <button onClick={() => navigate('/contact')} style={{
                  backgroundColor: 'var(--teal)', color: '#0e0e0e',
                  padding: '14px 28px', border: 'none', borderRadius: '100px',
                  cursor: 'pointer', fontFamily: 'var(--font-body)',
                  fontSize: '0.9rem', fontWeight: 700,
                  transition: 'all 0.3s ease', alignSelf: 'flex-start',
                }}
                  onMouseEnter={e => { e.currentTarget.style.backgroundColor = 'var(--teal-dark)'; e.currentTarget.style.transform = 'translateY(-2px)' }}
                  onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'var(--teal)'; e.currentTarget.style.transform = 'translateY(0)' }}
                >Apply Now ↗</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section>
        <div style={{ ...W, padding: 'clamp(64px, 8vw, 120px) clamp(24px, 5vw, 80px)' }}>
          <div className="careers-cta" style={{
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
                Not Sure Which Role?
              </p>
              <h2 style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2rem, 5vw, 4rem)',
                fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1.0,
                color: 'var(--text-primary)',
              }}>
                We'll find the<br /><span style={{ color: 'var(--teal)' }}>right fit.</span>
              </h2>
            </div>
            <div>
              <p style={{
                fontFamily: 'var(--font-body)', fontSize: '1rem',
                color: 'var(--text-secondary)', lineHeight: 1.75, marginBottom: '28px',
              }}>
                Tell us about yourself and what excites you — we'll match you to the right opportunity.
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
              >Get In Touch ↗</button>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Careers