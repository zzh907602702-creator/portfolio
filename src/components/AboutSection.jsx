export default function AboutSection() {
  const stats = [
    { number: "2+", label: "设计项目经验" },
    { number: "1", label: "国家级竞赛奖项" },
    { number: "4", label: "年专业学习经历" },
    { number: "∞", label: "创意探索热情" },
  ];

  const contactItems = [
    { icon: "phone", label: "电话", value: "15166195238" },
    { icon: "mail", label: "邮箱", value: "zzh907602702@gmail.com" },
    { icon: "school", label: "院校", value: "长江大学 · 环境设计" },
  ];

  return (
    <section id="about" className="about-section">
      <div className="container">
        <div className="about-header">
          <span className="section-label">About</span>
          <h2 className="section-title">关于我</h2>
          <p className="section-subtitle">
            环境设计专业在读，以场景设计师视角探索空间叙事的无限可能
          </p>
        </div>

        <div className="about-grid">
          {/* Avatar + Intro */}
          <div className="about-card about-profile">
            <div className="profile-avatar">
              <div className="avatar-placeholder">
                <span>Z</span>
              </div>
            </div>
            <div className="profile-info">
              <h3>张智淏</h3>
              <p className="profile-role">场景设计师 · 环境设计</p>
              <div className="profile-bio">
                <p>我是环境设计专业在读本科生，在校期间系统学习了室内设计、景观规划、空间构造、场地分析等专业核心知识，具备扎实的设计理论基础与系统的设计思维。在校学习过程中，我始终保持认真严谨的学习态度，注重理论与实践结合，不断打磨自身专业设计能力，能够独立完成从前期调研、概念构思、方案设计到图纸落地的完整设计流程。</p>
                <p>在专业技能方面，我熟练掌握各类设计软件，能够熟练运用CAD绘制施工图纸、SketchUp进行空间建模，精通PS后期效果图处理与竞赛展板排版，熟练使用Enscape、Lumion完成实时渲染，可独立制作分析图、效果图、设计文本等全套设计成果。同时，我擅长运用AI工具辅助方案迭代、氛围参考与素材优化，大幅提升设计效率与作品质感，熟悉瑞士网格排版规范，能够高质量完成各类设计竞赛展板制作。</p>
                <p>实践竞赛中，我曾参与原点新城专项设计大赛，围绕地域文化与商业空间更新展开设计，深入分析场地现状、人流动线与功能短板，结合文化元素完成空间重构、方案优化与全套参赛成果输出，积累了商业空间设计、竞赛项目创作的实战经验，提升了自身的问题解决能力与方案落地思维。</p>
                <p>性格上，我直率踏实、目标明确，拥有较强的自主学习能力和执行力，面对多线学习和任务能够合理规划时间、高效完成目标。对待设计认真细致，注重设计逻辑、画面质感与细节把控，善于总结不足、持续精进专业能力。未来我将继续深耕环境设计领域，不断积累设计经验、拓宽专业视野，努力成为兼具创意能力与落地能力的综合型设计人才。</p>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="about-card about-stats">
            <div className="stats-grid">
              {stats.map((stat) => (
                <div key={stat.label} className="stat-item">
                  <span className="stat-number">{stat.number}</span>
                  <span className="stat-label">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="about-card about-contact">
            <h4 className="card-title">联系方式</h4>
            <div className="contact-list">
              {contactItems.map((item) => (
                <div key={item.label} className="contact-item">
                  <span className="contact-icon">
                    {item.icon === "phone" && (
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                      </svg>
                    )}
                    {item.icon === "mail" && (
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                        <polyline points="22,6 12,13 2,6"/>
                      </svg>
                    )}
                    {item.icon === "school" && (
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                        <path d="M6 12v5c3 3 9 3 12 0v-5"/>
                      </svg>
                    )}
                  </span>
                  <div className="contact-text">
                    <span className="contact-label">{item.label}</span>
                    <span className="contact-value">{item.value}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .about-section {
          padding: var(--section-padding);
          background: var(--bg-secondary);
          position: relative;
        }

        .about-header {
          margin-bottom: 60px;
        }

        .about-grid {
          display: grid;
          grid-template-columns: 1.4fr 0.6fr;
          gap: 24px;
        }

        .about-card {
          background: var(--bg-surface);
          border: 1px solid var(--border-color);
          border-radius: 16px;
          padding: 36px;
          transition: border-color 0.3s ease;
        }

        .about-card:hover {
          border-color: rgba(94, 234, 212, 0.2);
        }

        /* Profile */
        .about-profile {
          display: flex;
          gap: 32px;
          align-items: flex-start;
          grid-row: span 2;
        }

        .avatar-placeholder {
          width: 100px;
          height: 100px;
          border-radius: 50%;
          background: linear-gradient(135deg, var(--accent-dim), rgba(94, 234, 212, 0.05));
          border: 2px solid rgba(94, 234, 212, 0.2);
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .avatar-placeholder span {
          font-size: 2.5rem;
          font-weight: 700;
          color: var(--accent);
        }

        .profile-info h3 {
          font-size: 1.6rem;
          font-weight: 700;
          margin-bottom: 4px;
        }

        .profile-role {
          color: var(--accent);
          font-size: 0.9rem;
          font-weight: 500;
          margin-bottom: 16px;
        }

        .profile-bio {
          color: var(--text-secondary);
          font-size: 0.9rem;
          line-height: 1.8;
        }

        .profile-bio p {
          margin-bottom: 12px;
        }

        .profile-bio p:last-child {
          margin-bottom: 0;
        }

        /* Stats */
        .about-stats {
          display: flex;
          align-items: center;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
          width: 100%;
        }

        .stat-item {
          text-align: center;
          padding: 8px 0;
        }

        .stat-number {
          display: block;
          font-size: 2rem;
          font-weight: 700;
          color: var(--accent);
          margin-bottom: 4px;
        }

        .stat-label {
          font-size: 0.8rem;
          color: var(--text-muted);
        }

        /* Contact */
        .about-contact {
          display: flex;
          flex-direction: column;
        }

        .card-title {
          font-size: 1rem;
          font-weight: 600;
          margin-bottom: 20px;
          color: var(--text-primary);
        }

        .contact-list {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .contact-item {
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .contact-icon {
          width: 36px;
          height: 36px;
          border-radius: 8px;
          background: var(--accent-dim);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--accent);
          flex-shrink: 0;
        }

        .contact-text {
          display: flex;
          flex-direction: column;
        }

        .contact-label {
          font-size: 0.75rem;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }

        .contact-value {
          font-size: 0.9rem;
          color: var(--text-primary);
          font-weight: 500;
        }

        @media (max-width: 1024px) {
          .about-grid {
            grid-template-columns: 1fr;
          }
          .about-profile {
            grid-row: auto;
          }
        }

        @media (max-width: 768px) {
          .about-profile {
            flex-direction: column;
            align-items: center;
            text-align: center;
          }
          .about-card {
            padding: 24px;
          }
        }
      `}</style>
    </section>
  );
}
