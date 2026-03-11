import { NavLink } from 'react-router-dom'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Footer = () => {
  const footerRef = useRef(null)

  useEffect(() => {
    gsap.fromTo(footerRef.current,
      { opacity: 0, y: 40 },
      {
        opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: footerRef.current, start: 'top 95%' }
      }
    )
  }, [])

  const links = [
    { to: '/', label: 'Home' },
    { to: '/work', label: 'Work' },
    { to: '/careers', label: 'Careers' },
    { to: '/contact', label: 'Contact' },
  ]

  const socials = [
    { label: 'Instagram', href: '#' },
    { label: 'LinkedIn', href: '#' },
    { label: 'Twitter', href: '#' },
  ]

  return (
    <footer ref={footerRef} style={{
      backgroundColor: 'var(--bg-secondary)',
      borderTop: '1px solid var(--border)',
      paddingTop: '64px',
      paddingBottom: '32px',
      fontFamily: 'var(--font-body)',
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 24px',
      }}>

        {/* Top Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '48px',
          marginBottom: '48px',
        }}>

          {/* Brand Col */}
          <div style={{ maxWidth: '280px' }}>
            <NavLink to="/" style={{ textDecoration: 'none' }}>
              <span style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.8rem',
                fontWeight: 800,
                color: 'var(--text-primary)',
                letterSpacing: '-0.03em',
              }}>
                ker<span style={{ color: 'var(--teal)' }}>na</span>
              </span>
            </NavLink>
            <p style={{
              color: 'var(--text-secondary)',
              fontSize: '0.9rem',
              lineHeight: 1.7,
              marginTop: '16px',
            }}>
              A lean, strategy-driven PR and marketing agency built for small businesses
              that want to grow without burning money.
            </p>
            <p style={{
              color: 'var(--teal)',
              fontSize: '0.85rem',
              fontWeight: 600,
              marginTop: '12px',
              fontStyle: 'italic',
            }}>
              Where Strategy Meets Spark.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '0.8rem',
              fontWeight: 700,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'var(--text-secondary)',
              marginBottom: '20px',
            }}>Navigation</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {links.map(({ to, label }) => (
                <NavLink key={to} to={to} style={({ isActive }) => ({
                  color: isActive ? 'var(--teal)' : 'var(--text-secondary)',
                  textDecoration: 'none',
                  fontSize: '0.95rem',
                  transition: 'color 0.3s ease',
                })}
                  onMouseEnter={e => e.target.style.color = 'var(--teal)'}
                  onMouseLeave={e => e.target.style.color = 'var(--text-secondary)'}
                >
                  {label}
                </NavLink>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '0.8rem',
              fontWeight: 700,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'var(--text-secondary)',
              marginBottom: '20px',
            }}>Contact</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <a href="tel:+917569612318" style={{
                color: 'var(--text-secondary)',
                textDecoration: 'none',
                fontSize: '0.95rem',
                transition: 'color 0.3s ease',
              }}
                onMouseEnter={e => e.target.style.color = 'var(--teal)'}
                onMouseLeave={e => e.target.style.color = 'var(--text-secondary)'}
              >
                +91 75696 12318
              </a>
              <a href="tel:+919949686160" style={{
                color: 'var(--text-secondary)',
                textDecoration: 'none',
                fontSize: '0.95rem',
                transition: 'color 0.3s ease',
              }}
                onMouseEnter={e => e.target.style.color = 'var(--teal)'}
                onMouseLeave={e => e.target.style.color = 'var(--text-secondary)'}
              >
                +91 99496 86160
              </a>
              <p style={{
                color: 'var(--text-secondary)',
                fontSize: '0.95rem',
                lineHeight: 1.6,
              }}>
                Marripalem, Visakhapatnam,<br />Andhra Pradesh
              </p>
            </div>
          </div>

          {/* Socials */}
          <div>
            <h4 style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '0.8rem',
              fontWeight: 700,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'var(--text-secondary)',
              marginBottom: '20px',
            }}>Follow Us</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {socials.map(({ label, href }) => (
                <a key={label} href={href} style={{
                  color: 'var(--text-secondary)',
                  textDecoration: 'none',
                  fontSize: '0.95rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  transition: 'color 0.3s ease',
                }}
                  onMouseEnter={e => e.currentTarget.style.color = 'var(--teal)'}
                  onMouseLeave={e => e.currentTarget.style.color = 'var(--text-secondary)'}
                >
                  <span style={{
                    width: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--teal)',
                    display: 'inline-block',
                    flexShrink: 0,
                  }} />
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div style={{ borderTop: '1px solid var(--border)', paddingTop: '24px',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          flexWrap: 'wrap', gap: '12px',
        }}>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>
            © {new Date().getFullYear()} Kerna. All rights reserved.
          </p>
          <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem' }}>
            Built with strategy & spark.
          </p>
        </div>

      </div>
    </footer>
  )
}

export default Footer