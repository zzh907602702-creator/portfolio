const skills = [
  {
    icon: "design",
    title: "空间设计能力",
    desc: "精通CAD平面布局、SketchUp建模、Photoshop效果图制作。熟悉瑞士网格系统排版，能独立完成从调研到展板的全流程设计。",
    color: "#5eead4",
  },
  {
    icon: "ai",
    title: "AI 高效办公",
    desc: "熟练运用AI工具辅助撰写文稿、整理素材、提炼总结、优化方案。利用AI辅助方案推演与视觉优化，具备AI驱动的高效工作思维。",
    color: "#a78bfa",
  },
  {
    icon: "tool",
    title: "办公软件精通",
    desc: "精通WPS全套组件，可独立完成数据报表制作、格式标准化排版、汇报PPT设计。熟练运用表格函数与批量文档处理等高效操作。",
    color: "#fbbf24",
  },
  {
    icon: "mind",
    title: "综合素质突出",
    desc: "好奇心强，涉猎知识面广，多任务下可理清优先级。获评全校优秀团干部、中国好创意国赛二等奖，具备出色的组织协调能力。",
    color: "#f472b6",
  },
];

const iconMap = {
  design: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2L2 7l10 5 10-5-10-5z"/>
      <path d="M2 17l10 5 10-5"/>
      <path d="M2 12l10 5 10-5"/>
    </svg>
  ),
  ai: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/>
      <path d="M12 6v6l4 2"/>
    </svg>
  ),
  tool: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
    </svg>
  ),
  mind: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 20h9"/>
      <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
    </svg>
  ),
};

export default function SkillsSection() {
  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <div className="skills-header">
          <span className="section-label">Advantages</span>
          <h2 className="section-title">个人优势</h2>
          <p className="section-subtitle">
            以专业能力为基础，以学习力为驱动，持续探索设计的更多可能
          </p>
        </div>

        <div className="skills-grid">
          {skills.map((skill) => (
            <div key={skill.title} className="skill-card">
              <div
                className="skill-icon"
                style={{ color: skill.color, background: `${skill.color}15` }}
              >
                {iconMap[skill.icon]}
              </div>
              <h3 className="skill-title">{skill.title}</h3>
              <p className="skill-desc">{skill.desc}</p>
              <div className="skill-hover-bar" style={{ background: skill.color }} />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .skills-section {
          padding: var(--section-padding);
          background: var(--bg-secondary);
        }

        .skills-header {
          margin-bottom: 60px;
        }

        .skills-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
        }

        .skill-card {
          position: relative;
          background: var(--bg-surface);
          border: 1px solid var(--border-color);
          border-radius: 16px;
          padding: 36px 28px;
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .skill-card:hover {
          transform: translateY(-6px);
          border-color: rgba(94, 234, 212, 0.15);
          box-shadow: 0 20px 50px rgba(0, 0, 0, 0.2);
        }

        .skill-icon {
          width: 52px;
          height: 52px;
          border-radius: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 24px;
          transition: transform 0.3s ease;
        }

        .skill-card:hover .skill-icon {
          transform: scale(1.05);
        }

        .skill-title {
          font-size: 1.1rem;
          font-weight: 600;
          margin-bottom: 12px;
          letter-spacing: -0.2px;
        }

        .skill-desc {
          font-size: 0.88rem;
          color: var(--text-secondary);
          line-height: 1.7;
        }

        .skill-hover-bar {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 2px;
          opacity: 0;
          transform: scaleX(0);
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          transform-origin: left;
        }

        .skill-card:hover .skill-hover-bar {
          opacity: 1;
          transform: scaleX(1);
        }

        @media (max-width: 1200px) {
          .skills-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .skills-grid {
            grid-template-columns: 1fr;
          }
          .skill-card {
            padding: 28px 24px;
          }
        }
      `}</style>
    </section>
  );
}
