"use client";

export default function Home() {
  function ctaFormSubmit(form) {
    var name = form.elements["name"].value.trim();
    var email = form.elements["email"].value.trim();
    var message = form.elements["message"].value.trim();
    var subject = encodeURIComponent("Enquiry from " + (name || "Website Visitor"));
    var body = encodeURIComponent(
      "Name: " + name + "\nEmail: " + email + "\n\nMessage:\n" + message
    );
    window.location.href =
      "mailto:dubai@spmadrid.ae?subject=" + subject + "&body=" + body;
    return false;
  }

  return (
    <>
      {/* ==================== NAVBAR ==================== */}
      <nav className="navbar">
        <div className="navbar-inner">
          <a href="#" className="navbar-logo">
            <img src="/assets/logo.png" alt="SPM - S.P. Madrid" className="navbar-logo-img" />
          </a>

          <ul className="navbar-links">
            <li><a href="#about" data-i18n="nav.about">About</a></li>
            <li><a href="#services" data-i18n="nav.services">Services</a></li>
            <li><a href="https://spmadrid.com/" target="_blank" rel="noopener" data-i18n="nav.hq">S.P. Madrid HQ</a></li>
            <li><a href="#contact" data-i18n="nav.contact">Contact</a></li>
          </ul>

          <div className="navbar-actions">
            <div className="lang-switcher">
              <button className="lang-toggle" id="lang-toggle-btn" aria-expanded="false" aria-haspopup="true">
                <span>🌐</span>
                <span className="lang-toggle-label">English</span>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" style={{ marginLeft: "2px" }}>
                  <path d="M3 4.5l3 3 3-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
              <div className="lang-dropdown" id="lang-dropdown" role="menu">
                <button className="lang-dropdown-item active" data-lang="en" role="menuitem">
                  English
                </button>
                <button className="lang-dropdown-item" data-lang="ar" role="menuitem">
                  العربية <span className="lang-native">Arabic</span>
                </button>
              </div>
            </div>
            <a href="mailto:dubai@spmadrid.ae" className="btn-get-started" data-i18n="nav.getStarted">Get Started</a>
          </div>

          <button className="menu-toggle" aria-label="Toggle menu">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      {/* ==================== HERO ==================== */}
      <section className="hero" id="about">
        <div className="world-map-bg">
          <img src="/assets/worldmap.png" alt="" className="world-map-img" />
        </div>
        <h1 data-i18n="hero.title">Debt Recovery Solutions for the GCC</h1>
        <p className="hero-subtitle" data-i18n="hero.subtitle">
          Built for the region. Delivered with local expertise, multilingual capability, and proven recovery performance.
        </p>
        <div className="hero-buttons">
          <a href="mailto:dubai@spmadrid.ae" className="btn-primary" data-i18n="hero.cta">Contact Us</a>
        </div>
        <div className="language-card">
          <h2 className="language-card-title">We Speak Your Language</h2>
          <div className="language-card-row">
            <div className="lang-item">
              <span className="lang-script" dir="rtl">العربية</span>
              <span className="lang-label">Arabic</span>
            </div>
            <div className="lang-item">
              <span className="lang-script">English</span>
              <span className="lang-label">English</span>
            </div>
            <div className="lang-item">
              <span className="lang-script">हिन्दी</span>
              <span className="lang-label">Hindi</span>
            </div>
            <div className="lang-item">
              <span className="lang-script">Filipino</span>
              <span className="lang-label">Filipino</span>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== TRUST BAR ==================== */}
      <section className="trust-bar" id="clients">
        <div className="trust-bar-inner">
          <p className="trust-label" data-i18n="trust.label">Trusted Partners</p>
          <p className="trust-subtext" data-i18n="trust.subtext">
            #1 Trusted Partner for the GCC&apos;s Largest Financial Institutions
          </p>
          <div className="carousel-wrapper">
            <div className="carousel-track carousel-left">
              <div className="carousel-logo gold-tint"><img src="/assets/logos/emiratesnbd.png" alt="Emirates NBD" /></div>
              <div className="carousel-logo"><img src="/assets/logos/hsbc.png" alt="HSBC" /></div>
              <div className="carousel-logo gold-tint"><img src="/assets/logos/emiratesislamic.png" alt="Emirates Islamic" /></div>
              <div className="carousel-logo gold-tint"><img src="/assets/logos/dubaiislamicbank.png" alt="Dubai Islamic Bank" /></div>
              <div className="carousel-logo gold-tint"><img src="/assets/logos/gulf.png" alt="Gulf International Bank" /></div>
              <div className="carousel-logo"><img src="/assets/logos/bdo.png" alt="BDO" /></div>
              <div className="carousel-logo"><img src="/assets/logos/securitybank.png" alt="Security Bank" /></div>
              <div className="carousel-logo gold-tint"><img src="/assets/logos/emiratesnbd.png" alt="Emirates NBD" /></div>
              <div className="carousel-logo"><img src="/assets/logos/hsbc.png" alt="HSBC" /></div>
              <div className="carousel-logo gold-tint"><img src="/assets/logos/emiratesislamic.png" alt="Emirates Islamic" /></div>
              <div className="carousel-logo gold-tint"><img src="/assets/logos/dubaiislamicbank.png" alt="Dubai Islamic Bank" /></div>
              <div className="carousel-logo gold-tint"><img src="/assets/logos/gulf.png" alt="Gulf International Bank" /></div>
              <div className="carousel-logo"><img src="/assets/logos/bdo.png" alt="BDO" /></div>
              <div className="carousel-logo"><img src="/assets/logos/securitybank.png" alt="Security Bank" /></div>
            </div>
          </div>
          <div className="carousel-wrapper">
            <div className="carousel-track carousel-right">
              <div className="carousel-logo"><img src="/assets/logos/metrobank.png" alt="Metrobank" /></div>
              <div className="carousel-logo"><img src="/assets/logos/rcbc.png" alt="RCBC" /></div>
              <div className="carousel-logo"><img src="/assets/logos/eastwest.png" alt="EastWest Bank" /></div>
              <div className="carousel-logo"><img src="/assets/logos/chinabank.png" alt="Chinabank" /></div>
              <div className="carousel-logo"><img src="/assets/logos/psbank.png" alt="PSBank" /></div>
              <div className="carousel-logo"><img src="/assets/logos/maybank.png" alt="Maybank" /></div>
              <div className="carousel-logo"><img src="/assets/logos/homecredit.png" alt="Home Credit" /></div>
              <div className="carousel-logo"><img src="/assets/logos/metrobank.png" alt="Metrobank" /></div>
              <div className="carousel-logo"><img src="/assets/logos/rcbc.png" alt="RCBC" /></div>
              <div className="carousel-logo"><img src="/assets/logos/eastwest.png" alt="EastWest Bank" /></div>
              <div className="carousel-logo"><img src="/assets/logos/chinabank.png" alt="Chinabank" /></div>
              <div className="carousel-logo"><img src="/assets/logos/psbank.png" alt="PSBank" /></div>
              <div className="carousel-logo"><img src="/assets/logos/maybank.png" alt="Maybank" /></div>
              <div className="carousel-logo"><img src="/assets/logos/homecredit.png" alt="Home Credit" /></div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== BY THE NUMBERS ==================== */}
      <section className="numbers-section">
        <div className="numbers-inner">
          <div className="numbers-top">
            <div className="numbers-text">
              <p className="numbers-label" data-i18n="numbers.label">By The Numbers</p>
              <h2 className="numbers-heading" data-i18n="numbers.heading">Delivering results across the GCC</h2>
              <p className="numbers-subtitle" data-i18n="numbers.subtitle">
                Our regional footprint and multilingual capabilities ensure every account is reached, every debtor is engaged, and every recovery is maximized.
              </p>
            </div>
            <div className="numbers-stat-banner">
              <div className="number-value" data-count="3000" data-prefix="+">0</div>
              <div className="number-title">Global Agents</div>
            </div>
          </div>
          <div className="numbers-tabs-row">
            <div className="office-tabs-container">
              <button className="office-tab active" data-office="dubai">Dubai, UAE</button>
              <button className="office-tab" data-office="philippines">Philippines</button>
            </div>
            <div className="numbers-stack-wrapper">
              <div className="stack-containers-wrap" style={{ position: "relative", width: "100%" }}>
                <div className="stack-container" id="stack-dubai">
                  <div className="stack-item active" data-index="0">
                    <div className="stack-item-img" style={{ backgroundImage: "url('/assets/dubaioffice.jpeg')" }}></div>
                  </div>
                  <div className="stack-item next" data-index="1">
                    <div className="stack-item-img" style={{ backgroundImage: "url('/assets/dubaioffice1.jpeg')" }}></div>
                  </div>
                  <div className="stack-item far-next" data-index="2">
                    <div className="stack-item-img" style={{ backgroundImage: "url('/assets/dubaioffice2.jpeg')" }}></div>
                  </div>
                  <div className="stack-item" data-index="3">
                    <div className="stack-item-img" style={{ backgroundImage: "url('/assets/dubaioffice3.jpeg')" }}></div>
                  </div>
                  <div className="stack-item" data-index="4">
                    <div className="stack-item-img" style={{ backgroundImage: "url('/assets/dubaioffice4.jpeg')" }}></div>
                  </div>
                  <div className="stack-item" data-index="5">
                    <div className="stack-item-img" style={{ backgroundImage: "url('/assets/dubaioffice5.jpg')" }}></div>
                  </div>
                </div>
                <div className="stack-container hidden" id="stack-philippines">
                  <div className="stack-item active" data-index="0">
                    <div className="stack-item-img" style={{ backgroundImage: "url('/assets/spmawards.png')" }}></div>
                  </div>
                  <div className="stack-item next" data-index="1">
                    <div className="stack-item-img" style={{ backgroundImage: "url('/assets/phoffice.png')" }}></div>
                  </div>
                  <div className="stack-item far-next" data-index="2">
                    <div className="stack-item-img" style={{ backgroundImage: "url('/assets/phoffice1.png')" }}></div>
                  </div>
                  <div className="stack-item" data-index="3">
                    <div className="stack-item-img" style={{ backgroundImage: "url('/assets/phoffice2.png')" }}></div>
                  </div>
                  <div className="stack-item" data-index="4">
                    <div className="stack-item-img" style={{ backgroundImage: "url('/assets/phoffice3.png')" }}></div>
                  </div>
                  <div className="stack-item" data-index="5">
                    <div className="stack-item-img" style={{ backgroundImage: "url('/assets/phoffice5.png')" }}></div>
                  </div>
                  <div className="stack-item" data-index="6">
                    <div className="stack-item-img" style={{ backgroundImage: "url('/assets/phoffice6.avif')" }}></div>
                  </div>
                  <div className="stack-item" data-index="7">
                    <div className="stack-item-img" style={{ backgroundImage: "url('/assets/phoffice7.avif')" }}></div>
                  </div>
                </div>
              </div>
              <div className="stack-progress-dots"></div>
              <div className="office-address-row">
                <a
                  href="https://maps.google.com/?q=104,+Aspin+Commercial+Tower,+Sheikh+Zayed+Road,+Dubai"
                  target="_blank"
                  rel="noopener"
                  className="office-address-item dubai active"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <span>104, Aspin Commercial Tower, Sheikh Zayed Road, Dubai.</span>
                </a>
                <a
                  href="https://maps.google.com/?q=17th+Floor,+Chatham+House,+Salcedo+Village,+Makati+City"
                  target="_blank"
                  rel="noopener"
                  className="office-address-item ph"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <span>17th Floor, Chatham House, Salcedo Village, Makati City.</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== BUILT FOR FINANCIAL INSTITUTIONS ==================== */}
      <section className="features-section" id="services">
        <div className="features-inner">
          <div className="section-heading">
            <h2 data-i18n="features.title">Built for financial institutions</h2>
          </div>
          <p className="section-subtitle" data-i18n="features.subtitle">
            Comprehensive recovery solutions across secured and unsecured portfolios
          </p>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon-ring">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                  <polyline points="9 22 9 12 15 12 15 22" />
                </svg>
              </div>
              <h3 data-i18n="features.secured.title">Secured Products</h3>
              <p data-i18n="features.secured.desc">Specialized recovery for asset-backed lending across the GCC region.</p>
              <ul className="feature-list">
                <li>Housing Finance</li>
                <li>Auto Finance</li>
                <li>Asset-Backed Loans</li>
              </ul>
              <a href="#" className="feature-learn-more">Learn More &rarr;</a>
            </div>
            <div className="feature-card">
              <div className="feature-icon-ring">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
                  <line x1="1" y1="10" x2="23" y2="10" />
                </svg>
              </div>
              <h3 data-i18n="features.unsecured.title">Unsecured Products</h3>
              <p data-i18n="features.unsecured.desc">Expert recovery services for credit cards, personal loans, and SME financing.</p>
              <ul className="feature-list">
                <li>Credit Cards</li>
                <li>SME Loans</li>
                <li>Personal Loans</li>
                <li>Buy Now Pay Later</li>
              </ul>
              <a href="#" className="feature-learn-more">Learn More &rarr;</a>
            </div>
            <div className="feature-card">
              <div className="feature-icon-ring">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                  <line x1="11" y1="8" x2="11" y2="14" />
                  <line x1="8" y1="11" x2="14" y2="11" />
                </svg>
              </div>
              <h3 data-i18n="features.audit.title">Audit Recovery</h3>
              <p data-i18n="features.audit.desc">Advanced portfolio analysis and write-off recovery across all asset classes.</p>
              <ul className="feature-list">
                <li>Portfolio Analysis</li>
                <li>Write-off Recovery</li>
                <li>Skip Tracing</li>
              </ul>
              <a href="#" className="feature-learn-more">Learn More &rarr;</a>
            </div>
            <div className="feature-card">
              <div className="feature-icon-ring">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <line x1="2" y1="12" x2="22" y2="12" />
                  <path d="M12 2A15.3 15.3 0 0 1 17 12a15.3 15.3 0 0 1-5 10 15.3 15.3 0 0 1-5-10 15.3 15.3 0 0 1 5-10z" />
                </svg>
              </div>
              <h3 data-i18n="features.international.title">Local &amp; International Accounts</h3>
              <p data-i18n="features.international.desc">
                Comprehensive account management extending across domestic borders and overseas jurisdictions.
              </p>
              <ul className="feature-list">
                <li>Local UAE Collections</li>
                <li>GCC-Wide Recovery</li>
                <li>International Enforcement</li>
              </ul>
              <a href="#" className="feature-learn-more">Learn More &rarr;</a>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== MEET THE TEAM ==================== */}
      <section className="team-section">
        <div className="team-inner">
          <div className="team-header">
            <div className="team-header-text">
              <div className="section-heading">
                <h2 data-i18n="team.title">Meet the Team</h2>
              </div>
              <p className="section-subtitle" data-i18n="team.subtitle">
                Our dedicated team consists of experts across engineering and strategy, each committed to driving results and innovation.
              </p>
            </div>
          </div>
          <div className="team-accordion">
            <div className="team-panel active" data-index="0">
              <div className="team-panel-photo">
                <img src="/assets/sir_ian.png" alt="Ian Madrid" />
              </div>
              <div className="team-panel-info">
                <span className="team-badge" data-i18n="team.members.ian.badge">15+ Years Experience</span>
                <span className="team-panel-role" data-i18n="team.members.ian.role">CEO, S.P. Madrid</span>
                <span className="team-panel-name" data-i18n="team.members.ian.name">Ian Madrid</span>
                <p className="team-panel-bio" data-i18n="team.members.ian.bio">
                  Visionary leader driving S.P. Madrid&apos;s recovery excellence across the GCC with over 15 years of strategic and operational expertise.
                </p>
              </div>
              <div className="team-panel-sliver">
                <span className="team-sliver-name">Ian</span>
              </div>
            </div>
            <div className="team-panel" data-index="1">
              <div className="team-panel-photo">
                <img src="/assets/anita.png" alt="Anita" />
              </div>
              <div className="team-panel-info">
                <span className="team-badge" data-i18n="team.members.anita.badge">16+ Years Experience</span>
                <span className="team-panel-role" data-i18n="team.members.anita.role">Business Unit Director</span>
                <span className="team-panel-name" data-i18n="team.members.anita.name">Anita</span>
                <p className="team-panel-bio" data-i18n="team.members.anita.bio">
                  Leads business development and client partnerships with deep expertise in financial recovery and stakeholder relations.
                </p>
              </div>
              <div className="team-panel-sliver">
                <span className="team-sliver-name">Anita</span>
              </div>
            </div>
            <div className="team-panel" data-index="2">
              <div className="team-panel-photo">
                <img src="/assets/mubarak.png" alt="Mubarak" />
              </div>
              <div className="team-panel-info">
                <span className="team-badge" data-i18n="team.members.mubarak.badge">20+ Years Experience</span>
                <span className="team-panel-role" data-i18n="team.members.mubarak.role">Executive Director</span>
                <span className="team-panel-name" data-i18n="team.members.mubarak.name">Mubarak</span>
                <p className="team-panel-bio" data-i18n="team.members.mubarak.bio">
                  Oversees executive operations and strategic initiatives, ensuring seamless delivery across all recovery mandates.
                </p>
              </div>
              <div className="team-panel-sliver">
                <span className="team-sliver-name">Mubarak</span>
              </div>
            </div>
            <div className="team-panel" data-index="3">
              <div className="team-panel-photo">
                <img src="/assets/ivy.png" alt="Ivy" />
              </div>
              <div className="team-panel-info">
                <span className="team-badge" data-i18n="team.members.ivy.badge">15+ Years Experience</span>
                <span className="team-panel-role" data-i18n="team.members.ivy.role">Operations Manager</span>
                <span className="team-panel-name" data-i18n="team.members.ivy.name">Ivy</span>
                <p className="team-panel-bio" data-i18n="team.members.ivy.bio">
                  Manages day-to-day operations and process optimization, ensuring efficiency and quality across all projects.
                </p>
              </div>
              <div className="team-panel-sliver">
                <span className="team-sliver-name">Ivy</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== DATA PRIVACY ==================== */}
      <section className="privacy-section">
        <div className="privacy-inner">
          <div className="section-heading">
            <h2 data-i18n="privacy.title">Data Privacy &amp; Regulatory Compliance</h2>
          </div>
          <div className="privacy-grid">
            <div className="privacy-card">
              <div className="privacy-icon-ring">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </div>
              <h3 data-i18n="privacy.dataProtection.title">Data Protection</h3>
              <p data-i18n="privacy.dataProtection.desc">
                Enterprise-grade encryption and data handling aligned with DIFC and ADGM standards.
              </p>
            </div>
            <div className="privacy-card">
              <div className="privacy-icon-ring">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                  <polyline points="14 2 14 8 20 8" />
                  <line x1="16" y1="13" x2="8" y2="13" />
                  <line x1="16" y1="17" x2="8" y2="17" />
                  <polyline points="10 9 9 9 8 9" />
                </svg>
              </div>
              <h3 data-i18n="privacy.regulatory.title">Regulatory Adherence</h3>
              <p data-i18n="privacy.regulatory.desc">
                Full compliance with UAE Central Bank guidelines, PDPL, and regional regulatory frameworks.
              </p>
            </div>
            <div className="privacy-card">
              <div className="privacy-icon-ring">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                  <path d="M7 11V7a5 5 0 0110 0v4" />
                </svg>
              </div>
              <h3 data-i18n="privacy.audit.title">Audit Ready</h3>
              <p data-i18n="privacy.audit.desc">
                Comprehensive audit trails and documentation for all recovery activities and communications.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== FOOTER ==================== */}
      <footer className="footer" id="contact">
        <div className="footer-cta">
          <h2 data-i18n="footer.cta.title">Ready to elevate your collection strategy?</h2>
          <p data-i18n="footer.cta.subtitle">Partner with SPM Dubai to optimize your receivables and protect your assets.</p>
          <form
            className="cta-email-form"
            onSubmit={(e) => {
              e.preventDefault();
              ctaFormSubmit(e.target);
            }}
          >
            <div className="cta-form-stack">
              <div className="cta-form-row-2">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  required
                  className="cta-input"
                  data-i18n-placeholder="footer.form.name"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  required
                  className="cta-input"
                  data-i18n-placeholder="footer.form.email"
                />
              </div>
              <textarea
                name="message"
                placeholder="Message"
                rows={4}
                className="cta-input cta-textarea"
                data-i18n-placeholder="footer.form.message"
              ></textarea>
              <button type="submit" className="cta-btn cta-btn-full" data-i18n="footer.form.submit">
                Get in Touch →
              </button>
            </div>
            <p className="cta-form-note">
              Or email us directly at <a href="mailto:dubai@spmadrid.ae">dubai@spmadrid.ae</a>
            </p>
          </form>
        </div>
        <div className="footer-inner">
          <div className="footer-top">
            <div className="footer-brand">
              <img src="/assets/logo.png" alt="SPM - S.P. Madrid" className="footer-logo-img" />
              <p data-i18n="footer.brand">Premier debt recovery and legal services across the GCC and MENA region.</p>
              <div className="footer-vision-mission">
                <div className="footer-vm-block">
                  <h4 data-i18n="footer.vision">Vision</h4>
                  <p data-i18n="footer.visionText">
                    To be the Nationwide leader in banking collections, setting the standard for excellence, security, and scalability in the global BPO industry.
                  </p>
                </div>
                <div className="footer-vm-block">
                  <h4 data-i18n="footer.mission">Mission</h4>
                  <p data-i18n="footer.missionText">The company&apos;s mission is to Find, Train, and Change the lives of people.</p>
                  <p className="footer-vm-detail" data-i18n="footer.missionDetail">
                    This focuses on identifying talent, providing rigorous training in collection skills, and offering long-term career stability to transform the financial and professional lives of their employees.
                  </p>
                </div>
              </div>
            </div>
            <div className="footer-col">
              <h4 data-i18n="footer.services">Services</h4>
              <a href="#services" data-i18n="footer.securedRecovery">Secured Recovery</a>
              <a href="#services" data-i18n="footer.unsecuredRecovery">Unsecured Recovery</a>
              <a href="#services" data-i18n="footer.legalServices">Legal Services</a>
              <a href="#services" data-i18n="footer.auditRecovery">Audit Recovery</a>
            </div>
            <div className="footer-col" id="careers">
              <h4 data-i18n="footer.company">Company</h4>
              <a href="#about" data-i18n="footer.aboutUs">About Us</a>
              <a href="#careers" data-i18n="footer.careers">Careers</a>
              <a href="#contact" data-i18n="footer.contactLink">Contact</a>
            </div>
            <div className="footer-col footer-contact">
              <h4 data-i18n="footer.dubaiHub">Dubai Hub</h4>
              <p>dubai@spmadrid.ae</p>
              <p>Dubai, United Arab Emirates</p>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2026 S.P. Madrid Dubai. All rights reserved. Licensed in UAE.</p>
            <div className="footer-bottom-links">
              <a href="#" data-i18n="footer.privacyPolicy">Privacy Policy</a>
              <span style={{ color: "rgba(255,255,255,0.3)" }}>&bull;</span>
              <a href="#" data-i18n="footer.terms">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Card detail overlay */}
      <div id="card-overlay" className="card-overlay">
        <div className="card-overlay-inner">
          <button id="card-overlay-close" className="card-overlay-close" aria-label="Close">
            &times;
          </button>
          <div id="card-overlay-body"></div>
        </div>
      </div>

      {/* Image detail overlay */}
      <div id="image-modal" className="card-overlay image-overlay">
        <button id="image-modal-close" className="card-overlay-close" aria-label="Close">
          &times;
        </button>
        <img id="image-modal-img" src={undefined} alt="Office Image" />
      </div>

      {/* Success Toast */}
      <div className="micro-success-toast" role="status" aria-live="polite">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <circle className="success-check-circle" cx="12" cy="12" r="11" stroke="#48bb78" strokeWidth="2" />
          <path
            className="success-check-path"
            d="M7 12.5l3 3 7-7"
            stroke="#48bb78"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span className="success-check-text">Success</span>
      </div>
    </>
  );
}
