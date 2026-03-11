import { useState, useEffect, useRef } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { gsap } from 'gsap'
import { useTheme } from '../context/ThemeContext'
import ThemeToggle from './ThemeToggle'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { theme } = useTheme()
  const location = useLocation()
  const navRef = useRef(null)
  const menuRef = useRef(null)

  useEffect(() => {
    gsap.fromTo(navRef.current,
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power4.out', delay: 0.1 }
    )
  }, [])

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => setMenuOpen(false), 0)
    return () => clearTimeout(timer)
  }, [location])

  useEffect(() => {
    if (!menuRef.current) return
    if (menuOpen) {
      gsap.fromTo(menuRef.current,
        { opacity: 0, y: -10 },
        { opacity: 1, y: 0, duration: 0.4, ease: 'power3.out' }
      )
      gsap.fromTo('.mobile-link',
        { opacity: 0, x: -20 },
        { opacity: 1, x: 0, duration: 0.4, stagger: 0.07, ease: 'power3.out', delay: 0.1 }
      )
    }
  }, [menuOpen])

  const links = [
    { to: '/', label: 'Home' },
    { to: '/work', label: 'Work' },
    { to: '/careers', label: 'Careers' },
    { to: '/contact', label: 'Contact' },
  ]

  return (
    <>
      <nav ref={navRef} style={{
        position: 'fixed',
        top: 0, left: 0, right: 0,
        zIndex: 1000,
        transition: 'all 0.5s cubic-bezier(0.16, 1, 0.3, 1)',
        borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
        backgroundColor: scrolled
          ? theme === 'dark'
            ? 'rgba(14,14,14,0.88)'
            : 'rgba(247,244,239,0.88)'
          : 'transparent',
        backdropFilter: scrolled ? 'blur(20px) saturate(180%)' : 'none',
      }}>
        <div style={{
          maxWidth: '1400px',
          margin: '0 auto',
          padding: scrolled ? '16px 40px' : '24px 40px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          transition: 'padding 0.4s ease',
        }}>

          {/* Logo */}
          <NavLink to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div style={{
              width: '32px', height: '32px',
              backgroundColor: 'var(--teal)',
              borderRadius: '6px',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              flexShrink: 0,
            }}>
              <span style={{
                fontFamily: 'var(--font-display)',
                fontSize: '0.9rem',
                fontWeight: 700,
                color: '#0e0e0e',
                letterSpacing: '-0.03em',
              }}>K</span>
            </div>
            <span style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1.3rem',
              fontWeight: 700,
              color: 'var(--text-primary)',
              letterSpacing: '-0.04em',
            }}>kerna</span>
          </NavLink>

          {/* Desktop Center Links */}
          <div className="nav-desktop" style={{
            display: 'flex', alignItems: 'center', gap: '2px',
            backgroundColor: theme === 'dark' ? 'rgba(255,255,255,0.04)' : 'rgba(0,0,0,0.04)',
            borderRadius: '100px',
            padding: '4px',
            border: '1px solid var(--border)',
          }}>
            {links.map(({ to, label }) => (
              <NavLink key={to} to={to} style={({ isActive }) => ({
                fontFamily: 'var(--font-body)',
                fontSize: '0.85rem',
                fontWeight: isActive ? 600 : 500,
                color: isActive ? '#0e0e0e' : 'var(--text-secondary)',
                textDecoration: 'none',
                padding: '7px 18px',
                borderRadius: '100px',
                backgroundColor: isActive ? 'var(--teal)' : 'transparent',
                transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                letterSpacing: '0.01em',
              })}
                onMouseEnter={e => {
                  if (!e.currentTarget.style.backgroundColor.includes('45,212')) {
                    e.currentTarget.style.color = 'var(--text-primary)'
                    e.currentTarget.style.backgroundColor = theme === 'dark' ? 'rgba(255,255,255,0.06)' : 'rgba(0,0,0,0.06)'
                  }
                }}
                onMouseLeave={e => {
                  if (!e.currentTarget.getAttribute('aria-current')) {
                    e.currentTarget.style.color = 'var(--text-secondary)'
                    e.currentTarget.style.backgroundColor = 'transparent'
                  }
                }}
              >
                {label}
              </NavLink>
            ))}
          </div>

          {/* Desktop Right */}
          <div className="nav-desktop" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <ThemeToggle />
            <NavLink to="/contact" style={{
              display: 'flex', alignItems: 'center', gap: '8px',
              backgroundColor: 'var(--teal)',
              color: '#0e0e0e',
              padding: '9px 20px',
              borderRadius: '100px',
              fontFamily: 'var(--font-body)',
              fontSize: '0.85rem',
              fontWeight: 700,
              textDecoration: 'none',
              letterSpacing: '0.01em',
              transition: 'all 0.3s ease',
            }}
              onMouseEnter={e => {
                e.currentTarget.style.backgroundColor = 'var(--teal-dark)'
                e.currentTarget.style.transform = 'translateY(-1px)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.backgroundColor = 'var(--teal)'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
            >
              Let's Talk
              <span style={{ fontSize: '0.8rem' }}>↗</span>
            </NavLink>
          </div>

          {/* Mobile Right */}
          <div className="nav-mobile" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <ThemeToggle />
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border)',
                borderRadius: '8px',
                padding: '8px 10px',
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                gap: '4px',
                transition: 'border-color 0.3s ease',
              }}
              onMouseEnter={e => e.currentTarget.style.borderColor = 'var(--teal)'}
              onMouseLeave={e => e.currentTarget.style.borderColor = 'var(--border)'}
            >
              {[0, 1, 2].map(i => (
                <span key={i} style={{
                  display: 'block',
                  width: i === 1 ? '16px' : '22px',
                  height: '1.5px',
                  backgroundColor: menuOpen ? 'var(--teal)' : 'var(--text-primary)',
                  transition: 'all 0.3s ease',
                  transform: menuOpen
                    ? i === 0 ? 'rotate(45deg) translate(4px, 4px)'
                    : i === 2 ? 'rotate(-45deg) translate(3px, -3px)'
                    : 'scaleX(0)'
                    : 'none',
                }} />
              ))}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div ref={menuRef} style={{
          position: 'fixed',
          top: 0, left: 0, right: 0, bottom: 0,
          zIndex: 999,
          backgroundColor: theme === 'dark' ? '#0e0e0e' : '#f7f4ef',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '40px',
        }}>
          <div style={{ marginBottom: '8px' }}>
            <span style={{
              fontSize: '0.7rem', fontWeight: 700,
              letterSpacing: '0.15em', textTransform: 'uppercase',
              color: 'var(--teal)',
              fontFamily: 'var(--font-body)',
            }}>Navigation</span>
          </div>
          {links.map(({ to, label }, i) => (
            <NavLink key={to} to={to} className="mobile-link" style={({ isActive }) => ({
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.5rem, 10vw, 4rem)',
              fontWeight: 700,
              letterSpacing: '-0.03em',
              color: isActive ? 'var(--teal)' : 'var(--text-primary)',
              textDecoration: 'none',
              lineHeight: 1.1,
              paddingBottom: '8px',
              borderBottom: i < links.length - 1 ? '1px solid var(--border)' : 'none',
              marginBottom: i < links.length - 1 ? '8px' : '0',
              display: 'block',
              transition: 'color 0.3s ease',
              opacity: 0,
            })}
              onMouseEnter={e => { if (!e.currentTarget.style.color.includes('45,212')) e.currentTarget.style.color = 'var(--teal)' }}
              onMouseLeave={e => { if (!e.currentTarget.getAttribute('aria-current')) e.currentTarget.style.color = 'var(--text-primary)' }}
            >
              {label}
            </NavLink>
          ))}
          <div style={{ marginTop: '40px' }}>
            <NavLink to="/contact" style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              backgroundColor: 'var(--teal)',
              color: '#0e0e0e',
              padding: '14px 28px',
              borderRadius: '100px',
              fontFamily: 'var(--font-body)',
              fontSize: '1rem', fontWeight: 700,
              textDecoration: 'none',
            }}>
              Let's Talk ↗
            </NavLink>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .nav-desktop { display: none !important; }
          .nav-mobile { display: flex !important; }
        }
        @media (min-width: 769px) {
          .nav-desktop { display: flex !important; }
          .nav-mobile { display: none !important; }
        }
      `}</style>
    </>
  )
}

export default Navbar