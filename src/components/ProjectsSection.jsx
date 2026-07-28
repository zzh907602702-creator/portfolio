const projects = [
  {
    id: 1,
    title: '原点新城专项大赛',
    category: '空间设计 \u00B7 竞赛作品',
    period: '2026.02 - 2026.06',
    subtitle: 'O&G Art Center \u00B7 黄土地文脉与窑洞艺韵新生',
    description: '以「黄土地文脉与窑洞艺韵新生」为核心理念，在原点新城打造一座集文化展示、创意孵化与公共活动于一体的艺术中心。',
    details: [
      '完成场地调研与现状研判，梳理商业卖场现存动线混乱、文化辨识度弱等问题，确立空间更新设计概念',
      '进行功能重构、人流动线优化，划分展示区、体验区、公共服务节点，平衡商业经营需求与文化表达',
      '使用CAD绘制平面布局，SketchUp建模，Photoshop完成效果图与分析图；遵循竞赛规范完成A1竖版展板（瑞士网格系统排版）',
      '完成日照范围分析与建筑阴影影响评估，确保空间舒适性与可持续性',
      '输出兼顾创意表达与产业落地可能性的空间方案，完整走完设计竞赛全流程',
    ],
    tags: ['CAD', 'SketchUp', 'Photoshop', '瑞士网格排版', '日照分析'],
    color: '#5eead4',
    pdfUrl: '/portfolio/project-origin.pdf',
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <div className="projects-header">
          <span className="section-label">Projects</span>
          <h2 className="section-title">精选项目</h2>
          <p className="section-subtitle">
            从空间设计到文化表达，每个项目都是一次对创意与落地的探索
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card project-card-full">
              <div
                className="project-image"
              >
                <img
                  src="/portfolio/project-hero.jpg"
                  alt="原点新城专项大赛项目展示"
                  className="project-image-img"
                />
                <div className="project-image-overlay" />
              </div>

              <div className="project-info">
                <div className="project-meta">
                  <span className="project-category">{project.category}</span>
                  <span className="project-period">{project.period}</span>
                </div>

                <h3 className="project-title">{project.title}</h3>
                <p className="project-subtitle">{project.subtitle}</p>

                <p className="project-desc">{project.description}</p>

                <ul className="project-details">
                  {project.details.map((detail, i) => (
                    <li key={i} className="project-detail-item">
                      <svg width="6" height="6" viewBox="0 0 6 6" fill={project.color}>
                        <circle cx="3" cy="3" r="3"/>
                      </svg>
                      {detail}
                    </li>
                  ))}
                </ul>

                <div className="project-actions">
                  <div className="project-tags">
                    {project.tags.map((tag) => (
                      <span key={tag} className="project-tag">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {project.pdfUrl && (
                    <a
                      href={project.pdfUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-pdf-btn"
                    >
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                        <polyline points="14 2 14 8 20 8"/>
                        <line x1="16" y1="13" x2="8" y2="13"/>
                        <line x1="16" y1="17" x2="8" y2="17"/>
                        <polyline points="10 9 9 9 8 9"/>
                      </svg>
                      <span>查看完整方案</span>
                      <span className="project-pdf-ext">PDF</span>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12"/>
                        <polyline points="12 5 19 12 12 19"/>
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .projects-section {
          padding: var(--section-padding);
          background: var(--bg-primary);
        }

        .projects-header {
          margin-bottom: 60px;
        }

        .projects-grid {
          display: grid;
          grid-template-columns: 1fr;
          max-width: 1100px;
        }

        .project-card {
          background: var(--bg-surface);
          border: 1px solid var(--border-color);
          border-radius: 16px;
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .project-card:hover {
          border-color: rgba(94, 234, 212, 0.2);
          transform: translateY(-4px);
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
        }

        .project-image {
          position: relative;
          width: 100%;
          aspect-ratio: 21 / 9;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--bg-surface);
        }

        .project-image-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .project-card:hover .project-image-img {
          transform: scale(1.03);
        }

        .project-image-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            180deg,
            transparent 50%,
            rgba(7, 7, 8, 0.6) 100%
          );
          pointer-events: none;
        }

        .project-info {
          padding: 32px 36px 36px;
        }

        .project-meta {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 12px;
        }

        .project-category {
          font-size: 0.8rem;
          color: var(--accent);
          font-weight: 500;
        }

        .project-period {
          font-size: 0.75rem;
          color: var(--text-muted);
        }

        .project-title {
          font-size: 1.6rem;
          font-weight: 700;
          margin-bottom: 4px;
          letter-spacing: -0.3px;
        }

        .project-subtitle {
          font-size: 0.95rem;
          color: var(--accent);
          font-weight: 500;
          margin-bottom: 20px;
        }

        .project-desc {
          font-size: 0.95rem;
          color: var(--text-secondary);
          line-height: 1.8;
          margin-bottom: 24px;
        }

        .project-details {
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin-bottom: 28px;
        }

        .project-detail-item {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          font-size: 0.88rem;
          color: var(--text-secondary);
          line-height: 1.6;
        }

        .project-detail-item svg {
          flex-shrink: 0;
          margin-top: 8px;
        }

        .project-actions {
          display: flex;
          flex-direction: column;
          align-items: stretch;
          gap: 20px;
        }

        .project-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .project-tag {
          padding: 6px 14px;
          background: var(--accent-dim);
          border-radius: 100px;
          font-size: 0.75rem;
          color: var(--accent);
          font-weight: 500;
        }

        .project-pdf-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          padding: 18px 40px;
          background: linear-gradient(135deg, #5eead4, #2dd4bf);
          border: none;
          border-radius: 12px;
          font-size: 1.05rem;
          font-weight: 700;
          color: #070708;
          transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          white-space: nowrap;
          letter-spacing: 0.5px;
          cursor: pointer;
          position: relative;
          overflow: hidden;
          box-shadow: 0 4px 24px rgba(94, 234, 212, 0.25);
          animation: pdfPulse 3s ease-in-out infinite;
        }

        .project-pdf-btn:hover {
          transform: translateY(-3px) scale(1.03);
          box-shadow: 0 12px 48px rgba(94, 234, 212, 0.4);
        }

        .project-pdf-btn:active {
          transform: translateY(-1px) scale(1.01);
        }

        @keyframes pdfPulse {
          0%, 100% {
            box-shadow: 0 4px 24px rgba(94, 234, 212, 0.25);
          }
          50% {
            box-shadow: 0 4px 40px rgba(94, 234, 212, 0.45), 0 0 60px rgba(94, 234, 212, 0.1);
          }
        }

        .project-pdf-ext {
          display: inline-block;
          padding: 4px 10px;
          background: rgba(7, 7, 8, 0.15);
          color: #070708;
          border-radius: 6px;
          font-size: 0.7rem;
          font-weight: 800;
          letter-spacing: 0.8px;
        }

        @media (max-width: 768px) {
          .project-info {
            padding: 24px 20px;
          }
          .project-image {
            aspect-ratio: 16 / 10;
          }
          .project-actions {
            flex-direction: column;
            align-items: flex-start;
          }
        }
      `}</style>
    </section>
  );
}
