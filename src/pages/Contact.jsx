import { useEffect, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const W = { maxWidth: '1400px', margin: '0 auto', padding: '0 clamp(24px, 5vw, 80px)' }

const Contact = () => {
  const [formData, setFormData] = useState({ fullName: '', email: '', role: '', portfolio: '', message: '' })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [focused, setFocused] = useState(null)

  useEffect(() => {
    window.scrollTo(0, 0)

    const tl = gsap.timeline({ delay: 0.2 })
    tl.fromTo('.contact-tag', { opacity: 0, y: 12 }, { opacity: 1, y: 0, duration: 0.5, ease: 'power3.out' })
      .fromTo('.contact-h1-1', { opacity: 0, y: '100%' }, { opacity: 1, y: '0%', duration: 1, ease: 'power4.out' }, '-=0.1')
      .fromTo('.contact-h1-2', { opacity: 0, y: '100%' }, { opacity: 1, y: '0%', duration: 1, ease: 'power4.out' }, '-=0.7')
      .fromTo('.contact-hero-sub', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.7 }, '-=0.3')

    gsap.fromTo('.contact-form-col', { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out',
        scrollTrigger: { trigger: '.contact-form-col', start: 'top 87%' } }
    )
    gsap.fromTo('.contact-info-col', { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out', delay: 0.1,
        scrollTrigger: { trigger: '.contact-info-col', start: 'top 87%' } }
    )
  }, [])

  const validate = () => {
    const e = {}
    if (!formData.fullName.trim()) e.fullName = 'Full name is required'
    if (!formData.email.trim()) e.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) e.email = 'Enter a valid email'
    if (!formData.role) e.role = 'Please select a role'
    if (!formData.message.trim()) e.message = 'Please write a short message'
    else if (formData.message.trim().length < 20) e.message = 'Message too short'
    return e
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }))
  }

  const handleSubmit = () => {
    const newErrors = validate()
    if (Object.keys(newErrors).length > 0) { setErrors(newErrors); return }
    setSubmitted(true)
    gsap.fromTo('.success-state', { opacity: 0, scale: 0.96 }, { opacity: 1, scale: 1, duration: 0.5, ease: 'back.out(1.4)' })
  }

  const fieldStyle = (name) => ({
    width: '100%', padding: '14px 0',
    backgroundColor: 'transparent',
    border: 'none', borderBottom: `1px solid ${errors[name] ? '#ef4444' : focused === name ? 'var(--teal)' : 'var(--border)'}`,
    color: 'var(--text-primary)', fontFamily: 'var(--font-body)',
    fontSize: '0.95rem', outline: 'none',
    transition: 'border-color 0.3s ease',
    boxSizing: 'border-box',
  })

  const labelStyle = {
    display: 'block', fontSize: '0.68rem', fontWeight: 700,
    color: 'var(--text-muted)', letterSpacing: '0.14em',
    textTransform: 'uppercase', marginBottom: '4px',
    fontFamily: 'var(--font-body)',
  }

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
        <div className="contact-tag" style={{
          display: 'flex', alignItems: 'center', gap: '8px',
          marginBottom: '24px', opacity: 0,
        }}>
          <span style={{ width: '24px', height: '1px', backgroundColor: 'var(--teal)' }} />
          <span style={{
            fontFamily: 'var(--font-body)', fontSize: '0.7rem', fontWeight: 700,
            letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--teal)',
          }}>Contact & Apply</span>
        </div>
        <div style={{ overflow: 'hidden', marginBottom: '4px' }}>
          <h1 className="contact-h1-1" style={{
            fontFamily: 'var(--font-display)', fontSize: 'clamp(3rem, 8vw, 7rem)',
            fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 0.95,
            color: 'var(--text-primary)', opacity: 0,
          }}>Let's build something</h1>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '24px' }}>
          <div style={{ overflow: 'hidden' }}>
            <h1 className="contact-h1-2" style={{
              fontFamily: 'var(--font-display)', fontSize: 'clamp(3rem, 8vw, 7rem)',
              fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 0.95,
              color: 'var(--teal)', opacity: 0,
            }}>together.</h1>
          </div>
          <p className="contact-hero-sub" style={{
            opacity: 0, fontFamily: 'var(--font-body)',
            fontSize: 'clamp(0.9rem, 1.4vw, 1.05rem)',
            color: 'var(--text-secondary)', lineHeight: 1.75, maxWidth: '380px',
          }}>
            Whether you're a business looking to grow or someone wanting to join our team — we'd love to hear from you.
          </p>
        </div>
      </section>

      {/* MAIN */}
      <section>
        <div style={{ ...W }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            borderBottom: '1px solid var(--border)',
          }}>

            {/* FORM */}
            <div className="contact-form-col" style={{
              padding: 'clamp(48px, 6vw, 80px)',
              borderRight: '1px solid var(--border)',
            }}>
              {!submitted ? (
                <>
                  <h2 style={{
                    fontFamily: 'var(--font-display)', fontSize: 'clamp(1.8rem, 3vw, 2.4rem)',
                    fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1,
                    color: 'var(--text-primary)', marginBottom: '8px',
                  }}>Send a message</h2>
                  <p style={{
                    fontFamily: 'var(--font-body)', fontSize: '0.9rem',
                    color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '40px',
                  }}>We'll get back to you within 24 hours.</p>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
                    {/* Full Name */}
                    <div>
                      <label style={labelStyle}>Full Name *</label>
                      <input type="text" name="fullName" value={formData.fullName}
                        onChange={handleChange}
                        onFocus={() => setFocused('fullName')} onBlur={() => setFocused(null)}
                        placeholder="Your full name" style={fieldStyle('fullName')} />
                      {errors.fullName && <p style={{ color: '#ef4444', fontSize: '0.78rem', marginTop: '4px' }}>{errors.fullName}</p>}
                    </div>

                    {/* Email */}
                    <div>
                      <label style={labelStyle}>Email *</label>
                      <input type="email" name="email" value={formData.email}
                        onChange={handleChange}
                        onFocus={() => setFocused('email')} onBlur={() => setFocused(null)}
                        placeholder="you@example.com" style={fieldStyle('email')} />
                      {errors.email && <p style={{ color: '#ef4444', fontSize: '0.78rem', marginTop: '4px' }}>{errors.email}</p>}
                    </div>

                    {/* Role */}
                    <div>
                      <label style={labelStyle}>Role Applying For *</label>
                      <select name="role" value={formData.role}
                        onChange={handleChange}
                        onFocus={() => setFocused('role')} onBlur={() => setFocused(null)}
                        style={{
                          ...fieldStyle('role'), cursor: 'pointer',
                          appearance: 'none',
                          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%232DD4BF' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E")`,
                          backgroundRepeat: 'no-repeat', backgroundPosition: 'right 4px center',
                        }}>
                        <option value="" disabled>Select a role...</option>
                        <option value="web-dev">Web Development Intern</option>
                        <option value="marketing">Marketing / Sales Intern</option>
                        <option value="branding">Branding & Research Intern</option>
                        <option value="client">Work With Kerna (Client)</option>
                        <option value="other">Other / General Inquiry</option>
                      </select>
                      {errors.role && <p style={{ color: '#ef4444', fontSize: '0.78rem', marginTop: '4px' }}>{errors.role}</p>}
                    </div>

                    {/* Portfolio */}
                    <div>
                      <label style={labelStyle}>Portfolio / GitHub / LinkedIn</label>
                      <input type="url" name="portfolio" value={formData.portfolio}
                        onChange={handleChange}
                        onFocus={() => setFocused('portfolio')} onBlur={() => setFocused(null)}
                        placeholder="https://yourlink.com" style={fieldStyle('portfolio')} />
                    </div>

                    {/* Message */}
                    <div>
                      <label style={labelStyle}>Message *</label>
                      <textarea name="message" value={formData.message}
                        onChange={handleChange}
                        onFocus={() => setFocused('message')} onBlur={() => setFocused(null)}
                        placeholder="Tell us about yourself or your project..."
                        rows={4}
                        style={{ ...fieldStyle('message'), resize: 'none' }} />
                      {errors.message && <p style={{ color: '#ef4444', fontSize: '0.78rem', marginTop: '4px' }}>{errors.message}</p>}
                    </div>

                    <button onClick={handleSubmit} style={{
                      backgroundColor: 'var(--teal)', color: '#0e0e0e',
                      padding: '15px 36px', border: 'none', borderRadius: '100px',
                      fontFamily: 'var(--font-body)', fontSize: '0.9rem', fontWeight: 700,
                      cursor: 'pointer', transition: 'all 0.3s ease', alignSelf: 'flex-start',
                    }}
                      onMouseEnter={e => { e.currentTarget.style.backgroundColor = 'var(--teal-dark)'; e.currentTarget.style.transform = 'translateY(-2px)' }}
                      onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'var(--teal)'; e.currentTarget.style.transform = 'translateY(0)' }}
                    >Send Message ↗</button>
                  </div>
                </>
              ) : (
                <div className="success-state" style={{ padding: '40px 0', textAlign: 'center' }}>
                  <div style={{
                    width: '64px', height: '64px',
                    border: '1px solid var(--teal)', borderRadius: '50%',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    margin: '0 auto 24px',
                    color: 'var(--teal)', fontSize: '1.5rem',
                  }}>✓</div>
                  <h3 style={{
                    fontFamily: 'var(--font-display)', fontSize: '2rem',
                    fontWeight: 800, letterSpacing: '-0.04em',
                    color: 'var(--text-primary)', marginBottom: '12px',
                  }}>Message Sent.</h3>
                  <p style={{
                    fontFamily: 'var(--font-body)', fontSize: '0.95rem',
                    color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '32px',
                  }}>
                    Thanks, <strong style={{ color: 'var(--text-primary)' }}>{formData.fullName}</strong>. We'll be in touch within 24 hours.
                  </p>
                  <button onClick={() => { setSubmitted(false); setFormData({ fullName: '', email: '', role: '', portfolio: '', message: '' }); setErrors({}) }}
                    style={{
                      backgroundColor: 'transparent', color: 'var(--teal)',
                      padding: '10px 24px', border: '1px solid var(--teal)',
                      borderRadius: '100px', fontFamily: 'var(--font-body)',
                      fontSize: '0.88rem', fontWeight: 600, cursor: 'pointer',
                      transition: 'all 0.3s ease',
                    }}
                    onMouseEnter={e => { e.currentTarget.style.backgroundColor = 'var(--teal)'; e.currentTarget.style.color = '#0e0e0e' }}
                    onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = 'var(--teal)' }}
                  >Send Another</button>
                </div>
              )}
            </div>

            {/* INFO */}
            <div className="contact-info-col" style={{
              padding: 'clamp(48px, 6vw, 80px)',
              display: 'flex', flexDirection: 'column', gap: '48px',
            }}>
              <div>
                <p style={{
                  fontFamily: 'var(--font-body)', fontSize: '0.68rem', fontWeight: 700,
                  letterSpacing: '0.14em', textTransform: 'uppercase',
                  color: 'var(--text-muted)', marginBottom: '24px',
                }}>Contact Details</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
                  {[
                    { label: 'Phone', lines: ['+91 75696 12318', '+91 99496 86160'], href: ['tel:+917569612318', 'tel:+919949686160'] },
                    { label: 'Address', lines: ['Marripalem, Visakhapatnam,', 'Andhra Pradesh, India'] },
                  ].map((item, idx) => (
                    <div key={item.label} style={{
                      padding: '20px 0',
                      borderTop: '1px solid var(--border)',
                      borderBottom: idx === 1 ? '1px solid var(--border)' : 'none',
                      display: 'grid', gridTemplateColumns: '80px 1fr', gap: '16px',
                    }}>
                      <span style={{
                        fontFamily: 'var(--font-body)', fontSize: '0.68rem', fontWeight: 700,
                        letterSpacing: '0.1em', textTransform: 'uppercase',
                        color: 'var(--text-muted)', paddingTop: '2px',
                      }}>{item.label}</span>
                      <div>
                        {item.lines.map((line, i) => (
                          item.href ? (
                            <a key={i} href={item.href[i]} style={{
                              display: 'block', fontFamily: 'var(--font-body)',
                              fontSize: '0.95rem', color: 'var(--text-secondary)',
                              textDecoration: 'none', lineHeight: 1.6,
                              transition: 'color 0.3s ease',
                            }}
                              onMouseEnter={e => e.currentTarget.style.color = 'var(--teal)'}
                              onMouseLeave={e => e.currentTarget.style.color = 'var(--text-secondary)'}
                            >{line}</a>
                          ) : (
                            <p key={i} style={{ fontFamily: 'var(--font-body)', fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>{line}</p>
                          )
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Map */}
              <div style={{
                overflow: 'hidden', border: '1px solid var(--border)',
                flex: 1, minHeight: '280px',
              }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d282.4389561590316!2d83.24420142282327!3d17.74319497588421!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a39670b3899bbe9%3A0x3fd6768247180757!2sSai%20Sundar%20Residency!5e0!3m2!1sen!2sin!4v1769022633919!5m2!1sen!2sin"
                  width="100%" height="100%"
                  style={{ border: 0, display: 'block', minHeight: '280px' }}
                  allowFullScreen="" loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Kerna Office Location"
                />
              </div>

              <div style={{
                padding: '20px 24px',
                border: '1px solid rgba(45,212,191,0.2)',
                backgroundColor: 'rgba(45,212,191,0.04)',
                display: 'flex', gap: '12px',
              }}>
                <span style={{ color: 'var(--teal)', fontSize: '1rem', flexShrink: 0 }}>⚡</span>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: '0.88rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>
                  <strong style={{ color: 'var(--text-primary)' }}>Quick response guaranteed.</strong> We typically reply within 24 hours on business days.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        input::placeholder, textarea::placeholder { color: var(--text-muted); }
        select option { background-color: var(--bg-card); color: var(--text-primary); }
      `}</style>
    </div>
  )
}

export default Contact