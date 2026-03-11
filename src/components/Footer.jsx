import { NavLink } from "react-router-dom";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      footerRef.current,
      { opacity: 0, y: 60 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power4.out",
        scrollTrigger: { trigger: footerRef.current, start: "top 95%" },
      },
    );
  }, []);

  const links = [
    { to: "/", label: "Home" },
    { to: "/work", label: "Work" },
    { to: "/careers", label: "Careers" },
    { to: "/contact", label: "Contact" },
  ];

  const socials = ["Instagram", "LinkedIn", "Twitter"];

  return (
    <footer
      ref={footerRef}
      style={{
        backgroundColor: "var(--bg-secondary)",
        borderTop: "1px solid var(--border)",
        fontFamily: "var(--font-body)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Big background word */}
      <div
        style={{
          position: "absolute",
          bottom: "-20px",
          right: "-20px",
          fontFamily: "var(--font-display)",
          fontSize: "clamp(120px, 18vw, 220px)",
          fontWeight: 700,
          color: "var(--text-primary)",
          opacity: 0.025,
          letterSpacing: "-0.05em",
          lineHeight: 1,
          pointerEvents: "none",
          userSelect: "none",
        }}
      >
        kerna
      </div>

      {/* CTA Strip */}
      <div
        style={{
          borderBottom: "1px solid var(--border)",
          padding: "clamp(48px, 6vw, 80px) clamp(24px, 5vw, 80px)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "32px",
          maxWidth: "1400px",
          margin: "0 auto",
        }}
      >
        <div>
          <p
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(1.8rem, 4vw, 3rem)",
              fontWeight: 700,
              color: "var(--text-primary)",
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
            }}
          >
            Ready to grow?
            <br />
            <span style={{ color: "var(--teal)" }}>Let's talk.</span>
          </p>
        </div>
        <NavLink
          to="/contact"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "10px",
            backgroundColor: "var(--teal)",
            color: "#0e0e0e",
            padding: "16px 32px",
            borderRadius: "100px",
            fontFamily: "var(--font-body)",
            fontSize: "0.95rem",
            fontWeight: 700,
            textDecoration: "none",
            transition: "all 0.3s ease",
            whiteSpace: "nowrap",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = "var(--teal-dark)";
            e.currentTarget.style.transform = "translateY(-2px)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "var(--teal)";
            e.currentTarget.style.transform = "translateY(0)";
          }}
        >
          Work With Kerna
          <span
            style={{
              width: "28px",
              height: "28px",
              backgroundColor: "rgba(0,0,0,0.15)",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "0.85rem",
            }}
          >
            ↗
          </span>
        </NavLink>
      </div>

      {/* Main Footer Grid */}
      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "clamp(40px, 5vw, 64px) clamp(24px, 5vw, 80px)",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
          gap: "48px",
        }}
      >
        {/* Brand */}
        <div style={{ gridColumn: "span 2" }} className="footer-brand">
          <NavLink
            to="/"
            style={{
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              marginBottom: "20px",
            }}
          >
            <div
              style={{
                width: "28px",
                height: "28px",
                backgroundColor: "var(--teal)",
                borderRadius: "5px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "0.8rem",
                  fontWeight: 700,
                  color: "#0e0e0e",
                }}
              >
                K
              </span>
            </div>
            <span
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "1.2rem",
                fontWeight: 700,
                color: "var(--text-primary)",
                letterSpacing: "-0.04em",
              }}
            >
              kerna
            </span>
          </NavLink>
          <p
            style={{
              color: "var(--text-secondary)",
              fontSize: "0.9rem",
              lineHeight: 1.75,
              maxWidth: "260px",
            }}
          >
            Strategy-driven PR & marketing for small businesses that want to
            punch above their weight.
          </p>
          <p
            style={{
              fontFamily: "var(--font-display)",
              fontSize: "0.8rem",
              fontWeight: 600,
              color: "var(--teal)",
              marginTop: "16px",
              letterSpacing: "0.02em",
            }}
          >
            Where Strategy Meets Spark.
          </p>
        </div>

        {/* Nav */}
        <div>
          <p
            style={{
              fontSize: "0.7rem",
              fontWeight: 700,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "var(--text-muted)",
              marginBottom: "20px",
              fontFamily: "var(--font-body)",
            }}
          >
            Pages
          </p>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "14px" }}
          >
            {links.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                className="anim-link"
                style={({ isActive }) => ({
                  color: isActive ? "var(--teal)" : "var(--text-secondary)",
                  textDecoration: "none",
                  fontSize: "0.95rem",
                  fontWeight: 500,
                  transition: "color 0.3s ease",
                })}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "var(--text-primary)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "var(--text-secondary)")
                }
              >
                {label}
              </NavLink>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div>
          <p
            style={{
              fontSize: "0.7rem",
              fontWeight: 700,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "var(--text-muted)",
              marginBottom: "20px",
              fontFamily: "var(--font-body)",
            }}
          >
            Contact
          </p>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "14px" }}
          >
            {["+91 75696 12318", "+91 99496 86160"].map((num) => (
              <a
                key={num}
                href={`tel:${num.replace(/\s/g, "")}`}
                style={{
                  color: "var(--text-secondary)",
                  textDecoration: "none",
                  fontSize: "0.95rem",
                  fontWeight: 500,
                  transition: "color 0.3s ease",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "var(--teal)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "var(--text-secondary)")
                }
              >
                {num}
              </a>
            ))}
            <p
              style={{
                color: "var(--text-secondary)",
                fontSize: "0.9rem",
                lineHeight: 1.6,
              }}
            >
              Marripalem, Visakhapatnam,
              <br />
              Andhra Pradesh
            </p>
          </div>
        </div>

        {/* Socials */}
        <div>
          <p
            style={{
              fontSize: "0.7rem",
              fontWeight: 700,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "var(--text-muted)",
              marginBottom: "20px",
              fontFamily: "var(--font-body)",
            }}
          >
            Follow
          </p>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "14px" }}
          >
            {socials.map((s) => (
              <a
                key={s}
                href="#"
                style={{
                  color: "var(--text-secondary)",
                  textDecoration: "none",
                  fontSize: "0.95rem",
                  fontWeight: 500,
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  transition: "color 0.3s ease",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "var(--teal)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "var(--text-secondary)")
                }
              >
                <span
                  style={{
                    width: "4px",
                    height: "4px",
                    borderRadius: "50%",
                    backgroundColor: "var(--teal)",
                    flexShrink: 0,
                  }}
                />
                {s}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          padding: "20px clamp(24px, 5vw, 80px)",
          borderTop: "1px solid var(--border)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "12px",
        }}
      >
        <p
          style={{
            color: "var(--text-muted)",
            fontSize: "0.8rem",
            fontWeight: 500,
          }}
        >
          © {new Date().getFullYear()} Kerna. All rights reserved.
        </p>
        <p
          style={{
            color: "var(--text-muted)",
            fontSize: "0.8rem",
            fontWeight: 500,
          }}
        >
          Built with strategy & spark ✦
        </p>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .footer-brand { grid-column: span 1 !important; }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
