import { useState, useEffect, useRef } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { gsap } from "gsap";
import { useTheme } from "../context/ThemeContext";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme } = useTheme();
  const location = useLocation();
  const navRef = useRef(null);
  const menuRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      navRef.current,
      { y: -80, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out", delay: 0.2 },
    );
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setMenuOpen(false), 0);
    return () => clearTimeout(timer);
  }, [location]);
  useEffect(() => {
    if (!menuRef.current) return;
    if (menuOpen) {
      gsap.fromTo(
        menuRef.current,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.3, ease: "power2.out" },
      );
    }
  }, [menuOpen]);

  const links = [
    { to: "/", label: "Home" },
    { to: "/work", label: "Work" },
    { to: "/careers", label: "Careers" },
    { to: "/contact", label: "Contact" },
  ];

  const navStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    padding: scrolled ? "12px 0" : "20px 0",
    backgroundColor: scrolled
      ? theme === "dark"
        ? "rgba(26,26,26,0.92)"
        : "rgba(245,243,240,0.92)"
      : "transparent",
    backdropFilter: scrolled ? "blur(12px)" : "none",
    borderBottom: scrolled
      ? `1px solid var(--border)`
      : "1px solid transparent",
    transition: "all 0.4s ease",
  };

  const linkStyle = (isActive) => ({
    fontFamily: "var(--font-body)",
    fontSize: "0.9rem",
    fontWeight: 500,
    letterSpacing: "0.02em",
    color: isActive ? "var(--teal)" : "var(--text-secondary)",
    textDecoration: "none",
    padding: "6px 0",
    position: "relative",
    transition: "color 0.3s ease",
  });

  return (
    <nav ref={navRef} style={navStyle}>
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <NavLink to="/" style={{ textDecoration: "none" }}>
          <span
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "1.6rem",
              fontWeight: 800,
              color: "var(--text-primary)",
              letterSpacing: "-0.03em",
            }}
          >
            ker<span style={{ color: "var(--teal)" }}>na</span>
          </span>
        </NavLink>

        {/* Desktop Links */}
        <div
          style={{ display: "flex", alignItems: "center", gap: "36px" }}
          className="hidden-mobile"
        >
          {links.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              style={({ isActive }) => linkStyle(isActive)}
            >
              {({ isActive }) => (
                <>
                  {label}
                  <span
                    style={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      width: isActive ? "100%" : "0%",
                      height: "2px",
                      backgroundColor: "var(--teal)",
                      transition: "width 0.3s ease",
                    }}
                  />
                </>
              )}
            </NavLink>
          ))}
          <ThemeToggle />
          <NavLink
            to="/contact"
            style={{
              backgroundColor: "var(--teal)",
              color: "#1a1a1a",
              padding: "10px 22px",
              borderRadius: "6px",
              fontFamily: "var(--font-body)",
              fontSize: "0.875rem",
              fontWeight: 600,
              textDecoration: "none",
              transition: "background-color 0.3s ease, transform 0.2s ease",
            }}
            onMouseEnter={(e) =>
              (e.target.style.backgroundColor = "var(--teal-dark)")
            }
            onMouseLeave={(e) =>
              (e.target.style.backgroundColor = "var(--teal)")
            }
          >
            Work With Us
          </NavLink>
        </div>

        {/* Mobile Right */}
        <div
          style={{ display: "flex", alignItems: "center", gap: "16px" }}
          className="show-mobile"
        >
          <ThemeToggle />
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "4px",
              display: "flex",
              flexDirection: "column",
              gap: "5px",
            }}
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                style={{
                  display: "block",
                  width: i === 1 && menuOpen ? "16px" : "24px",
                  height: "2px",
                  backgroundColor: "var(--text-primary)",
                  transition: "all 0.3s ease",
                  transformOrigin: "center",
                  transform: menuOpen
                    ? i === 0
                      ? "rotate(45deg) translate(5px, 5px)"
                      : i === 2
                        ? "rotate(-45deg) translate(5px, -5px)"
                        : "scaleX(0)"
                    : "none",
                }}
              />
            ))}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div
          ref={menuRef}
          style={{
            backgroundColor:
              theme === "dark"
                ? "rgba(26,26,26,0.98)"
                : "rgba(245,243,240,0.98)",
            backdropFilter: "blur(12px)",
            padding: "24px",
            borderTop: `1px solid var(--border)`,
            display: "flex",
            flexDirection: "column",
            gap: "24px",
          }}
        >
          {links.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              style={({ isActive }) => ({
                ...linkStyle(isActive),
                fontSize: "1.1rem",
              })}
            >
              {label}
            </NavLink>
          ))}
          <NavLink
            to="/contact"
            style={{
              backgroundColor: "var(--teal)",
              color: "#1a1a1a",
              padding: "12px 22px",
              borderRadius: "6px",
              fontWeight: 600,
              textDecoration: "none",
              textAlign: "center",
              fontSize: "0.95rem",
            }}
          >
            Work With Us
          </NavLink>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
        }
        @media (min-width: 769px) {
          .hidden-mobile { display: flex !important; }
          .show-mobile { display: none !important; }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
