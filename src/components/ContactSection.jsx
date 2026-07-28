import { useEffect, useRef } from "react";

export default function ContactSection() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let animationId;
    let particles = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createParticles = () => {
      particles = [];
      const count = 40;
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.2,
          vy: (Math.random() - 0.5) * 0.2 - 0.1,
          size: Math.random() * 1.5 + 0.5,
          opacity: Math.random() * 0.3 + 0.05,
        });
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(94, 234, 212, ${p.opacity})`;
        ctx.fill();
      });

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 200) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(94, 234, 212, ${0.04 * (1 - dist / 200)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      animationId = requestAnimationFrame(draw);
    };

    resize();
    createParticles();
    draw();

    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <section id="contact" className="contact-section">
      <canvas ref={canvasRef} className="contact-canvas" />

      <div className="contact-content container">
        <div className="contact-header">
          <span className="section-label">Contact</span>
          <h2 className="section-title">一起探索设计的可能</h2>
          <p className="section-subtitle">
            如果你有合作意向，或只是想聊聊天，欢迎随时联系我
          </p>
        </div>

        <div className="contact-cards">
          <a href="tel:15166195238" className="contact-card">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
            </svg>
            <span className="contact-card-label">电话</span>
            <span className="contact-card-value">15166195238</span>
          </a>

          <a href="mailto:zzh907602702@gmail.com" className="contact-card">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
              <polyline points="22,6 12,13 2,6"/>
            </svg>
            <span className="contact-card-label">邮箱</span>
            <span className="contact-card-value">zzh907602702@gmail.com</span>
          </a>
        </div>

        <div className="contact-footer">
          <p className="copyright">&copy; {new Date().getFullYear()} 张智淏. All rights reserved.</p>
          <p className="copyright-sub">Built with passion for design</p>
        </div>
      </div>

      <style>{`
        .contact-section {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          padding: var(--section-padding);
          background: var(--bg-primary);
          overflow: hidden;
        }

        .contact-canvas {
          position: absolute;
          inset: 0;
          z-index: 0;
          pointer-events: none;
        }

        .contact-content {
          position: relative;
          z-index: 1;
          width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
        }

        .contact-header {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-bottom: 60px;
        }

        .contact-header .section-subtitle {
          text-align: center;
        }

        .contact-cards {
          display: flex;
          gap: 24px;
          margin-bottom: 80px;
          flex-wrap: wrap;
          justify-content: center;
        }

        .contact-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
          padding: 36px 48px;
          background: var(--bg-surface);
          border: 1px solid var(--border-color);
          border-radius: 16px;
          min-width: 240px;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          color: var(--text-primary);
        }

        .contact-card svg {
          color: var(--accent);
          transition: transform 0.3s ease;
        }

        .contact-card:hover {
          border-color: rgba(94, 234, 212, 0.2);
          transform: translateY(-4px);
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
        }

        .contact-card:hover svg {
          transform: scale(1.1);
        }

        .contact-card-label {
          font-size: 0.75rem;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 1.5px;
        }

        .contact-card-value {
          font-size: 1rem;
          font-weight: 500;
        }

        .contact-footer {
          text-align: center;
        }

        .copyright {
          font-size: 0.85rem;
          color: var(--text-secondary);
          margin-bottom: 4px;
        }

        .copyright-sub {
          font-size: 0.75rem;
          color: var(--text-muted);
        }

        @media (max-width: 768px) {
          .contact-card {
            padding: 28px 32px;
            min-width: 180px;
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
}
