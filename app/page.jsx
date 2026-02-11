const highlights = [
  { title: "Offline-first", desc: "SQLite on device" },
  { title: "Reports", desc: "Today to Year" },
  { title: "Secure", desc: "PIN + biometrics" },
];

const features = [
  { title: "Customers & Credits", desc: "Track udharo + due dates" },
  { title: "Payments", desc: "Partial or full history" },
  { title: "PDF Exports", desc: "Share statements fast" },
  { title: "Backup & Restore", desc: "SQL export / import" },
  { title: "Daily Reminders", desc: "Follow-ups on time" },
  { title: "Language Toggle", desc: "Nepali + English" },
];

export default function Home() {
  return (
    <div className="page">
      <header className="site-header" id="top">
        <div className="brand">
          <span className="logo-dot" />
          <span className="brand-name">Udharo</span>
        </div>
      </header>

      <main>
        <section className="hero">
          <div className="hero-copy reveal">
            <h1>
              उधारो <span>– Simple Nepali Ledger</span>
            </h1>
            <p className="hero-lead">
              Offline khata app to track udharo, payments, and clean reports.
            </p>
            <div className="cta-row">
              <a
                className="store-link"
                href="https://play.google.com/store/apps/details?id=your.app.id"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="store-badge"
                  src="/google-play.png"
                  alt="Get it on Google Play"
                />
              </a>
            </div>
          </div>
          <div className="hero-visual reveal delay-1">
            <img
              className="hero-image"
              src="/hero-image.jpg"
              alt="Udharo app preview"
            />
          </div>
        </section>

        <section className="highlight-grid" id="features">
          {highlights.map((item) => (
            <article className="highlight-card reveal" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </article>
          ))}
        </section>

        <section className="feature-section">
          <div className="section-head">
            <h2>All the essentials</h2>
            <p>Everything a Nepali shop needs, nothing extra.</p>
          </div>
          <div className="feature-grid">
            {features.map((feature) => (
              <article className="feature-card reveal" key={feature.title}>
                <h3>{feature.title}</h3>
                <p>{feature.desc}</p>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <span>© 2026 Udharo.</span>
      </footer>
    </div>
  );
}
