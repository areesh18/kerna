import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

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

const inputStyle = {
  width: '100%',
  padding: '14px 16px',
  backgroundColor: 'var(--bg-secondary)',
  border: '1px solid var(--border)',
  borderRadius: '10px',
  color: 'var(--text-primary)',
  fontFamily: 'var(--font-body)',
  fontSize: '0.95rem',
  outline: 'none',
  transition: 'border-color 0.3s ease',
  boxSizing: 'border-box',
}

const labelStyle = {
  display: 'block',
  fontSize: '0.82rem',
  fontWeight: 600,
  color: 'var(--text-secondary)',
  marginBottom: '8px',
  letterSpacing: '0.04em',
  fontFamily: 'var(--font-body)',
}

const Contact = () => {
  const heroRef = useRef(null)
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    role: '',
    portfolio: '',
    message: '',
  })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [focusedField, setFocusedField] = useState(null)

  useEffect(() => {
    window.scrollTo(0, 0)

    gsap.fromTo('.contact-hero',
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', delay: 0.2 }
    )

    gsap.fromTo('.contact-form-wrap',
      { opacity: 0, y: 50 },
      {
        opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: '.contact-form-wrap', start: 'top 85%' }
      }
    )

    gsap.fromTo('.contact-info',
      { opacity: 0, y: 50 },
      {
        opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: '.contact-info', start: 'top 85%' }
      }
    )
  }, [])

  const validate = () => {
    const newErrors = {}
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required'
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Enter a valid email address'
    }
    if (!formData.role) newErrors.role = 'Please select a role'
    if (!formData.message.trim()) newErrors.message = 'Please write a short message'
    else if (formData.message.trim().length < 20) newErrors.message = 'Message too short — tell us more'
    return newErrors
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }))
  }

  const handleSubmit = () => {
    const newErrors = validate()
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }
    setSubmitted(true)
    gsap.fromTo('.success-state',
      { opacity: 0, scale: 0.95 },
      { opacity: 1, scale: 1, duration: 0.5, ease: 'back.out(1.5)' }
    )
  }

  const handleReset = () => {
    setSubmitted(false)
    setFormData({ fullName: '', email: '', role: '', portfolio: '', message: '' })
    setErrors({})
  }

  const getFieldStyle = (name) => ({
    ...inputStyle,
    borderColor: errors[name] ? '#ef4444' : focusedField === name ? 'var(--teal)' : 'var(--border)',
  })

  return (
    <div style={{ backgroundColor: 'var(--bg-primary)', paddingTop: '80px' }}>

      {/* Hero */}
      <section ref={heroRef} style={{
        padding: '80px 24px 60px',
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          background: 'radial-gradient(ellipse 60% 50% at 50% 0%, rgba(45,212,191,0.07) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />
        <div className="contact-hero" style={{
          maxWidth: '1200px', margin: '0 auto',
          textAlign: 'center', position: 'relative', zIndex: 1,
        }}>
          <SectionLabel text="Contact & Apply" />
          <h1 style={{
            fontFamily: 'var(--font-heading)',
            fontSize: 'clamp(2.2rem, 5vw, 4rem)',
            fontWeight: 800,
            letterSpacing: '-0.03em',
            color: 'var(--text-primary)',
            marginBottom: '20px',
            lineHeight: 1.1,
          }}>
            Let's build something<br />
            <span style={{ color: 'var(--teal)' }}>together.</span>
          </h1>
          <p style={{
            color: 'var(--text-secondary)',
            fontSize: 'clamp(1rem, 2vw, 1.15rem)',
            lineHeight: 1.7,
            maxWidth: '520px',
            margin: '0 auto',
            fontFamily: 'var(--font-body)',
          }}>
            Whether you're a business looking to grow or someone who wants to join our team — we'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section style={{ padding: '20px 24px 100px' }}>
        <div style={{
          maxWidth: '1200px', margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '48px',
          alignItems: 'start',
        }}>

          {/* Form */}
          <div className="contact-form-wrap" style={{
            backgroundColor: 'var(--bg-card)',
            borderRadius: '20px',
            border: '1px solid var(--border)',
            padding: 'clamp(28px, 4vw, 48px)',
          }}>
            {!submitted ? (
              <>
                <h2 style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.4rem',
                  fontWeight: 700,
                  color: 'var(--text-primary)',
                  marginBottom: '8px',
                }}>Send us a message</h2>
                <p style={{
                  color: 'var(--text-secondary)',
                  fontSize: '0.9rem',
                  marginBottom: '32px',
                  lineHeight: 1.6,
                }}>Fill out the form and we'll get back to you within 24 hours.</p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>

                  {/* Full Name */}
                  <div>
                    <label style={labelStyle}>Full Name *</label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('fullName')}
                      onBlur={() => setFocusedField(null)}
                      placeholder="Your full name"
                      style={getFieldStyle('fullName')}
                    />
                    {errors.fullName && (
                      <p style={{ color: '#ef4444', fontSize: '0.8rem', marginTop: '6px' }}>{errors.fullName}</p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label style={labelStyle}>Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('email')}
                      onBlur={() => setFocusedField(null)}
                      placeholder="you@example.com"
                      style={getFieldStyle('email')}
                    />
                    {errors.email && (
                      <p style={{ color: '#ef4444', fontSize: '0.8rem', marginTop: '6px' }}>{errors.email}</p>
                    )}
                  </div>

                  {/* Role */}
                  <div>
                    <label style={labelStyle}>Role Applying For *</label>
                    <select
                      name="role"
                      value={formData.role}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('role')}
                      onBlur={() => setFocusedField(null)}
                      style={{
                        ...getFieldStyle('role'),
                        cursor: 'pointer',
                        appearance: 'none',
                        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8'%3E%3Cpath d='M1 1l5 5 5-5' stroke='%232DD4BF' stroke-width='1.5' fill='none' stroke-linecap='round'/%3E%3C/svg%3E")`,
                        backgroundRepeat: 'no-repeat',
                        backgroundPosition: 'right 16px center',
                        paddingRight: '40px',
                      }}
                    >
                      <option value="" disabled>Select a role...</option>
                      <option value="web-dev">Web Development Intern</option>
                      <option value="marketing">Marketing / Sales Intern</option>
                      <option value="branding">Branding & Research Intern</option>
                      <option value="client">Work With Kerna (Client)</option>
                      <option value="other">Other / General Inquiry</option>
                    </select>
                    {errors.role && (
                      <p style={{ color: '#ef4444', fontSize: '0.8rem', marginTop: '6px' }}>{errors.role}</p>
                    )}
                  </div>

                  {/* Portfolio */}
                  <div>
                    <label style={labelStyle}>Portfolio / GitHub / LinkedIn</label>
                    <input
                      type="url"
                      name="portfolio"
                      value={formData.portfolio}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('portfolio')}
                      onBlur={() => setFocusedField(null)}
                      placeholder="https://yourlink.com"
                      style={getFieldStyle('portfolio')}
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label style={labelStyle}>Short Message *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('message')}
                      onBlur={() => setFocusedField(null)}
                      placeholder="Tell us about yourself or your project..."
                      rows={5}
                      style={{
                        ...getFieldStyle('message'),
                        resize: 'vertical',
                        minHeight: '120px',
                      }}
                    />
                    {errors.message && (
                      <p style={{ color: '#ef4444', fontSize: '0.8rem', marginTop: '6px' }}>{errors.message}</p>
                    )}
                  </div>

                  <button
                    onClick={handleSubmit}
                    style={{
                      backgroundColor: 'var(--teal)',
                      color: '#1a1a1a',
                      padding: '15px 28px',
                      borderRadius: '10px',
                      border: 'none',
                      fontFamily: 'var(--font-body)',
                      fontSize: '1rem',
                      fontWeight: 700,
                      cursor: 'pointer',
                      transition: 'background-color 0.3s ease, transform 0.2s ease',
                      letterSpacing: '0.01em',
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
                    Send Message →
                  </button>
                </div>
              </>
            ) : (
              <div className="success-state" style={{
                textAlign: 'center',
                padding: '40px 20px',
              }}>
                <div style={{
                  width: '72px', height: '72px',
                  backgroundColor: 'rgba(45,212,191,0.15)',
                  borderRadius: '50%',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  margin: '0 auto 24px',
                  fontSize: '2rem',
                }}>✓</div>
                <h3 style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.5rem',
                  fontWeight: 700,
                  color: 'var(--text-primary)',
                  marginBottom: '12px',
                }}>Message Sent!</h3>
                <p style={{
                  color: 'var(--text-secondary)',
                  fontSize: '0.95rem',
                  lineHeight: 1.7,
                  marginBottom: '32px',
                }}>
                  Thanks for reaching out, <strong style={{ color: 'var(--text-primary)' }}>{formData.fullName}</strong>.
                  We'll be in touch within 24 hours.
                </p>
                <button
                  onClick={handleReset}
                  style={{
                    backgroundColor: 'transparent',
                    color: 'var(--teal)',
                    padding: '10px 24px',
                    borderRadius: '8px',
                    border: '1px solid var(--teal)',
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.9rem',
                    fontWeight: 600,
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.backgroundColor = 'var(--teal)'
                    e.currentTarget.style.color = '#1a1a1a'
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.backgroundColor = 'transparent'
                    e.currentTarget.style.color = 'var(--teal)'
                  }}
                >
                  Send Another Message
                </button>
              </div>
            )}
          </div>

          {/* Info + Map */}
          <div className="contact-info" style={{
            display: 'flex', flexDirection: 'column', gap: '24px',
          }}>

            {/* Contact Details */}
            <div style={{
              backgroundColor: 'var(--bg-card)',
              borderRadius: '20px',
              border: '1px solid var(--border)',
              padding: '32px',
            }}>
              <h3 style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.1rem',
                fontWeight: 700,
                color: 'var(--text-primary)',
                marginBottom: '24px',
              }}>Contact Details</h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                {[
                  { icon: '📞', label: 'Phone', lines: ['+91 75696 12318', '+91 99496 86160'], href: ['tel:+917569612318', 'tel:+919949686160'] },
                  { icon: '📍', label: 'Address', lines: ['Marripalem, Visakhapatnam,', 'Andhra Pradesh, India'] },
                ].map(item => (
                  <div key={item.label} style={{
                    display: 'flex', gap: '14px', alignItems: 'flex-start',
                  }}>
                    <span style={{
                      width: '40px', height: '40px',
                      backgroundColor: 'rgba(45,212,191,0.1)',
                      borderRadius: '10px',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: '1rem', flexShrink: 0,
                    }}>{item.icon}</span>
                    <div>
                      <p style={{
                        fontSize: '0.75rem', fontWeight: 700,
                        letterSpacing: '0.1em', textTransform: 'uppercase',
                        color: 'var(--teal)', marginBottom: '4px',
                      }}>{item.label}</p>
                      {item.lines.map((line, i) => (
                        item.href ? (
                          <a key={i} href={item.href[i]} style={{
                            display: 'block',
                            color: 'var(--text-secondary)',
                            textDecoration: 'none',
                            fontSize: '0.95rem',
                            lineHeight: 1.6,
                            transition: 'color 0.3s ease',
                          }}
                            onMouseEnter={e => e.currentTarget.style.color = 'var(--teal)'}
                            onMouseLeave={e => e.currentTarget.style.color = 'var(--text-secondary)'}
                          >{line}</a>
                        ) : (
                          <p key={i} style={{
                            color: 'var(--text-secondary)',
                            fontSize: '0.95rem',
                            lineHeight: 1.6,
                          }}>{line}</p>
                        )
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Map */}
            <div style={{
              borderRadius: '20px',
              overflow: 'hidden',
              border: '1px solid var(--border)',
              height: '300px',
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

            {/* Response time note */}
            <div style={{
              padding: '20px 24px',
              backgroundColor: 'rgba(45,212,191,0.06)',
              borderRadius: '14px',
              border: '1px solid rgba(45,212,191,0.15)',
              display: 'flex', gap: '12px', alignItems: 'flex-start',
            }}>
              <span style={{ fontSize: '1.1rem', flexShrink: 0 }}>⚡</span>
              <p style={{
                color: 'var(--text-secondary)',
                fontSize: '0.88rem',
                lineHeight: 1.6,
              }}>
                <strong style={{ color: 'var(--text-primary)' }}>Quick response guaranteed.</strong> We typically reply within 24 hours on business days.
              </p>
            </div>

          </div>
        </div>
      </section>

      <style>{`
        input::placeholder, textarea::placeholder {
          color: var(--text-secondary);
          opacity: 0.6;
        }
        select option {
          background-color: var(--bg-card);
          color: var(--text-primary);
        }
      `}</style>
    </div>
  )
}

export default Contact