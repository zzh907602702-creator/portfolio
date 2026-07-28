import { useState, useEffect } from "react";

const navItems = [
  { label: "首页", href: "#hero" },
  { label: "关于", href: "#about" },
  { label: "作品", href: "#projects" },
  { label: "优势", href: "#skills" },
  { label: "联系", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = navItems.map((item) => item.href.slice(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && window.scrollY >= el.offsetTop - 200) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-inner container">
        <a href="#hero" className="navbar-logo">
          <span className="logo-mark">Z</span>
          <span className="logo-text">ZHANG.</span>
        </a>

        <ul className="navbar-links">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className={`nav-link ${
                  activeSection === item.href.slice(1) ? "active" : ""
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <a href="#contact" className="btn-nav-contact">
          联系我
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </a>
      </div>

      <style>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          padding: 20px 0;
        }

        .navbar.scrolled {
          background: rgba(7, 7, 8, 0.85);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(39, 39, 42, 0.5);
          padding: 12px 0;
        }

        .navbar-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .navbar-logo {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 1.25rem;
          font-weight: 700;
          letter-spacing: 1px;
        }

        .logo-mark {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 36px;
          height: 36px;
          background: var(--accent);
          color: #070708;
          border-radius: 6px;
          font-size: 1.1rem;
          font-weight: 800;
        }

        .logo-text {
          color: var(--text-primary);
        }

        .navbar-links {
          display: flex;
          gap: 32px;
        }

        .nav-link {
          font-size: 0.85rem;
          font-weight: 500;
          color: var(--text-secondary);
          transition: color 0.3s ease;
          position: relative;
          padding: 4px 0;
        }

        .nav-link::after {
          content: "";
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0;
          height: 1.5px;
          background: var(--accent);
          transition: width 0.3s ease;
        }

        .nav-link:hover,
        .nav-link.active {
          color: var(--text-primary);
        }

        .nav-link.active::after,
        .nav-link:hover::after {
          width: 100%;
        }

        .btn-nav-contact {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 10px 24px;
          border: 1px solid var(--border-color);
          border-radius: 8px;
          font-size: 0.85rem;
          font-weight: 500;
          color: var(--text-primary);
          transition: all 0.3s ease;
        }

        .btn-nav-contact:hover {
          border-color: var(--accent);
          color: var(--accent);
          transform: translateY(-1px);
        }

        @media (max-width: 768px) {
          .navbar-links {
            display: none;
          }
          .btn-nav-contact {
            padding: 8px 16px;
            font-size: 0.8rem;
          }
        }
      `}</style>
    </nav>
  );
}
