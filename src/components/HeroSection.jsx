import { useEffect, useRef } from "react";

export default function HeroSection() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let animationId;
    let particles = [];
    let mouseX = 0;
    let mouseY = 0;
    let time = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createParticles = () => {
      particles = [];
      const count = Math.floor((canvas.width * canvas.height) / 12000);
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          size: Math.random() * 2 + 0.5,
          opacity: Math.random() * 0.5 + 0.1,
          connections: [],
        });
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Background gradient
      const grad = ctx.createRadialGradient(
        canvas.width * 0.5,
        canvas.height * 0.4,
        0,
        canvas.width * 0.5,
        canvas.height * 0.4,
        canvas.width * 0.6
      );
      grad.addColorStop(0, "rgba(94, 234, 212, 0.03)");
      grad.addColorStop(0.5, "rgba(94, 234, 212, 0.01)");
      grad.addColorStop(1, "rgba(7, 7, 8, 0)");
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Floating grid lines
      ctx.strokeStyle = "rgba(94, 234, 212, 0.03)";
      ctx.lineWidth = 0.5;
      const gridSize = 80;
      const offsetX = (time * 0.05) % gridSize;
      const offsetY = (time * 0.03) % gridSize;

      for (let x = -gridSize + offsetX; x < canvas.width + gridSize; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, canvas.height);
        ctx.stroke();
      }
      for (let y = -gridSize + offsetY; y < canvas.height + gridSize; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(canvas.width, y);
        ctx.stroke();
      }

      // Mouse glow
      const grad2 = ctx.createRadialGradient(mouseX, mouseY, 0, mouseX, mouseY, 200);
      grad2.addColorStop(0, "rgba(94, 234, 212, 0.06)");
      grad2.addColorStop(1, "rgba(94, 234, 212, 0)");
      ctx.fillStyle = grad2;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      time++;
      animationId = requestAnimationFrame(draw);
    };

    const handleMouse = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    resize();
    createParticles();
    draw();

    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", handleMouse);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouse);
    };
  }, []);

  return (
    <section id="hero" className="hero">
      <canvas ref={canvasRef} className="hero-canvas" />

      <div className="hero-image" />

      <div className="hero-overlay" />

      <div className="hero-content container">
        <div className="hero-badge">
          <span className="badge-dot" />
          场景设计师 · 环境设计
        </div>

        <h1 className="hero-title">
          张智淏
          <span className="hero-title-sub">场景设计作品集</span>
        </h1>

        <p className="hero-desc">
          以空间叙事构建沉浸体验，用设计语言传递情感价值
        </p>

        <div className="hero-actions">
          <a href="#projects" className="btn-primary">
            查看作品
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        </div>
      </div>

      <style>{`
        .hero {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          overflow: hidden;
        }

        .hero-image {
          position: absolute;
          inset: 0;
          background: url('/portfolio/hero-bg.jpg') center center / cover no-repeat;
          opacity: 0.35;
          z-index: 0;
          pointer-events: none;
        }

        .hero-canvas {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          z-index: 0;
        }

        .hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            180deg,
            rgba(7, 7, 8, 0) 0%,
            rgba(7, 7, 8, 0.3) 50%,
            rgba(7, 7, 8, 0.8) 100%
          );
          z-index: 1;
          pointer-events: none;
        }

        .hero-content {
          position: relative;
          z-index: 2;
          padding-top: var(--nav-height);
          padding-bottom: 60px;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 20px;
          border: 1px solid var(--border-color);
          border-radius: 100px;
          font-size: 0.8rem;
          color: var(--text-secondary);
          margin-bottom: 40px;
          letter-spacing: 0.5px;
        }

        .badge-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: var(--accent);
          animation: pulse-dot 2s ease-in-out infinite;
        }

        @keyframes pulse-dot {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }

        .hero-title {
          font-size: clamp(3rem, 6vw, 5.5rem);
          font-weight: 800;
          line-height: 1.1;
          letter-spacing: -1.5px;
          margin-bottom: 12px;
        }

        .hero-title-sub {
          display: block;
          font-size: clamp(1.2rem, 2.5vw, 2rem);
          font-weight: 400;
          color: var(--text-secondary);
          letter-spacing: 2px;
          margin-top: 8px;
        }

        .hero-desc {
          font-size: clamp(1rem, 1.3vw, 1.2rem);
          color: var(--text-secondary);
          max-width: 500px;
          line-height: 1.7;
          margin-bottom: 48px;
        }

        .hero-actions {
          display: flex;
          gap: 16px;
          align-items: center;
        }

        @keyframes scroll-pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }
      `}</style>
    </section>
  );
}

