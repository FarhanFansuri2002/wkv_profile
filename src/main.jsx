import { StrictMode, useEffect, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'

const platformModules = [
  { number: '01', title: 'Employee\nManagement', description: 'Satu sumber data untuk struktur organisasi, profil, dan dokumen karyawan.', features: ['Database karyawan', 'Employee profile', 'Organization structure', 'Employee documents'], tone: 'mint' },
  { number: '02', title: 'Attendance\n& Leave', description: 'Jadikan waktu kerja lebih transparan dan mudah dikelola.', features: ['Digital attendance', 'Leave management', 'Overtime', 'Work schedule'], tone: 'blue' },
  { number: '03', title: 'Payroll', description: 'Perhitungan kompensasi yang rapi, konsisten, dan siap dilaporkan.', features: ['Salary calculation', 'Allowance & deduction', 'Payroll management', 'Payroll reporting'], tone: 'yellow' },
  { number: '04', title: 'Performance\nManagement', description: 'Hubungkan goal individu dengan arah bisnis yang lebih besar.', features: ['KPI', 'Performance review', 'Goal setting', 'Performance tracking'], tone: 'coral' },
  { number: '05', title: 'Recruitment\n& Onboarding', description: 'Bangun pengalaman kandidat dan karyawan sejak hari pertama.', features: ['Recruitment management', 'Candidate database', 'Recruitment pipeline', 'Digital onboarding'], tone: 'lavender' },
  { number: '06', title: 'Employee\nDevelopment', description: 'Tumbuhkan kemampuan tim melalui learning yang terukur.', features: ['Training', 'Learning management', 'Skill development', 'Career development'], tone: 'mint' },
  { number: '07', title: 'Employee\nEngagement', description: 'Dengarkan suara karyawan dan bangun koneksi yang berarti.', features: ['Employee feedback', 'Survey', 'Internal communication', 'Employee experience'], tone: 'blue' },
  { number: '08', title: 'Management\nDashboard', description: 'Ubah data people menjadi insight yang membantu keputusan.', features: ['HR analytics', 'Employee insights', 'Workforce analytics', 'Management dashboard'], tone: 'yellow' },
]

const missions = [
  'Mendigitalisasi proses pengelolaan manusia di perusahaan.',
  'Mengurangi pekerjaan administratif yang repetitif.',
  'Membantu HR dan management mengambil keputusan berbasis data.',
  'Meningkatkan pengalaman karyawan di lingkungan kerja.',
  'Menghubungkan proses human management dalam satu platform.',
]

const navItems = [['about', 'About'], ['platform', 'Platform'], ['approach', 'Cara kerja'], ['model', 'Business model']]

function Logo() {
  return <a className="logo" href="#top" aria-label="Workiva home"><span className="logo-mark"><i></i><i></i><i></i></span><span>WORKIVA</span></a>
}

function ArrowIcon() { return <span className="arrow-icon" aria-hidden="true">↗</span> }

function App() {
  const [activeModule, setActiveModule] = useState(0)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <div id="top" className="site-shell">
      <div className="grain" />
      <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
        <Logo />
        <nav className="desktop-nav" aria-label="Navigasi utama">
          {navItems.map(([id, label]) => <a key={id} href={`#${id}`}>{label}</a>)}
        </nav>
        <button className="header-cta" onClick={() => scrollTo('contact')}>Jadwalkan demo <ArrowIcon /></button>
      </header>

      <main>
        <section className="hero section-pad">
          <div className="hero-copy reveal">
            <p className="eyebrow"><span className="eyebrow-line" /> HUMAN MANAGEMENT PLATFORM</p>
            <h1>People are the <em>operating system</em> of every business.</h1>
            <p className="hero-lede">WORKIVA membantu perusahaan mengelola manusia dan aktivitas HR dalam satu ekosistem digital yang terintegrasi, efisien, dan berbasis data.</p>
            <div className="hero-actions"><button className="button button-dark" onClick={() => scrollTo('platform')}>Jelajahi platform <ArrowIcon /></button><a className="text-link" href="#about">Kenali Workiva <span>↓</span></a></div>
          </div>
          <div className="hero-visual reveal delay-1">
            <div className="hero-orbit orbit-one"></div><div className="hero-orbit orbit-two"></div>
            <div className="hero-stamp"><span>WORK</span><strong>×</strong><span>BETTER</span></div>
            <div className="hero-card hero-card-main"><div className="card-kicker">WORKFORCE PULSE <span>LIVE</span></div><div className="pulse-chart"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></div><div className="pulse-meta"><strong>84.6</strong><span>team health index</span><b>+12.4%</b></div></div>
            <div className="hero-card hero-card-float"><div className="avatar-stack"><i>RA</i><i>DN</i><i>+</i></div><strong>1,284</strong><span>people aligned</span></div>
            <div className="hero-caption">A clearer view of<br /><strong>what moves people.</strong></div>
          </div>
        </section>

        <section id="about" className="intro section-pad">
          <div className="section-label"><span>01</span><span>About Workiva</span></div>
          <div className="intro-grid">
            <h2>Human management,<br /><em>made visible.</em></h2>
            <div className="intro-body"><p>Workiva adalah perusahaan teknologi yang membangun platform digital untuk membantu perusahaan mengelola manusia secara lebih terintegrasi, transparan, dan produktif.</p><p>Nama WORKIVA merepresentasikan work, manusia, produktivitas, dan value yang diciptakan setiap individu dalam organisasi. Karena di balik setiap angka, ada manusia yang sedang bertumbuh.</p><div className="signature"><span className="signature-line"></span><span>Built for the people behind the business.</span></div></div>
          </div>
          <div className="signal-row"><div><strong>8</strong><span>connected pillars</span></div><div><strong>1</strong><span>people ecosystem</span></div><div><strong>∞</strong><span>room to grow</span></div></div>
        </section>

        <section className="problem-section section-pad dark-section">
          <div className="section-label light"><span>02</span><span>The problem</span></div>
          <div className="problem-grid"><div><h2>Data everywhere.<br /><em>Clarity nowhere.</em></h2><p className="dark-lede">Semakin besar perusahaan, semakin kompleks proses untuk mengelola manusia. Banyak tim masih bekerja dengan potongan informasi yang tersebar dan proses yang terpisah.</p></div><div className="problem-list">{['Data karyawan tersebar di berbagai file dan sistem.', 'Absensi, cuti, payroll, dan dokumen masih manual.', 'Performance sulit diukur secara konsisten.', 'Management memiliki data, tetapi belum mendapatkan insight.'].map((item, index) => <div className="problem-item" key={item}><span>0{index + 1}</span><p>{item}</p></div>)}</div></div>
          <div className="problem-foot"><span>THE COST OF DISCONNECTED WORK</span><span className="cross-mark">×</span><p>Komunikasi HR, management, dan karyawan tidak seharusnya berjalan dalam silo.</p></div>
        </section>

        <section className="vision section-pad" id="approach"><div className="section-label"><span>03</span><span>Our belief</span></div><div className="vision-content"><p className="quote-mark">“</p><h2>Membangun ekosistem kerja yang lebih manusiawi, terukur, dan produktif <em>melalui teknologi.</em></h2><div className="vision-aside"><span>Our vision</span><p>Kami percaya teknologi terbaik bukan yang membuat manusia terasa seperti angka. Teknologi terbaik memberi manusia ruang untuk melakukan karya yang lebih berarti.</p></div></div></section>

        <section className="mission section-pad"><div className="section-label"><span>04</span><span>Our mission</span></div><div className="mission-grid"><h2>Make every<br /><em>workday count.</em></h2><div className="mission-items">{missions.map((mission, index) => <div key={mission} className="mission-item"><span>0{index + 1}</span><p>{mission}</p></div>)}</div></div></section>

        <section id="platform" className="platform-section section-pad"><div className="section-label"><span>05</span><span>The platform</span></div><div className="platform-head"><div><h2>One platform.<br /><em>Many ways to grow.</em></h2></div><p>Workiva menghubungkan seluruh perjalanan karyawan, dari recruitment hingga engagement, dalam satu platform human management.</p></div><div className="module-layout"><div className="module-tabs">{platformModules.map((module, index) => <button className={activeModule === index ? 'active' : ''} key={module.title} onClick={() => setActiveModule(index)}><span>{module.number}</span><strong>{module.title.split('\n').map((line) => <span key={line}>{line}</span>)}</strong><ArrowIcon /></button>)}</div><div className={`module-detail tone-${platformModules[activeModule].tone}`}><div className="detail-top"><span>{platformModules[activeModule].number} / 08</span><span>CORE MODULE</span></div><h3>{platformModules[activeModule].title.split('\n').map((line) => <span key={line}>{line}</span>)}</h3><p>{platformModules[activeModule].description}</p><ul>{platformModules[activeModule].features.map((feature) => <li key={feature}><span>+</span>{feature}</li>)}</ul><div className="detail-orb"></div></div></div></section>

        <section className="value-section section-pad"><div className="section-label"><span>06</span><span>Why Workiva</span></div><div className="value-head"><h2>Designed around<br /><em>human potential.</em></h2><p>Lebih dari administrasi. Kami membangun infrastruktur yang membuat perusahaan lebih siap memahami, mengembangkan, dan menggerakkan timnya.</p></div><div className="value-grid">{[['01', 'One Platform', 'Semua proses human management berada dalam satu platform yang saling terhubung.'], ['02', 'Data Driven', 'Data people diterjemahkan menjadi insight untuk keputusan yang lebih percaya diri.'], ['03', 'Efficient', 'Kurangi pekerjaan administratif yang berulang. Beri waktu kembali kepada tim.'], ['04', 'Human Centric', 'Teknologi membantu perusahaan mengembangkan manusia, bukan sekadar menyimpan data.'], ['05', 'Scalable', 'Tumbuh bersama bisnis, dari tim kecil hingga organisasi enterprise.']].map(([num, title, copy]) => <article className="value-card" key={title}><span>{num}</span><h3>{title}</h3><p>{copy}</p><ArrowIcon /></article>)}</div></section>

        <section className="benefits-section section-pad dark-section"><div className="section-label light"><span>07</span><span>Built for everyone</span></div><div className="benefits-intro"><h2>One system.<br /><em>Shared progress.</em></h2><p>Workiva menciptakan bahasa yang sama antara business owner, HR, manager, dan employee.</p></div><div className="benefit-columns"><div><span>FOR BUSINESS</span><h3>See the<br />bigger picture.</h3><p>Workforce analytics dan dashboard membantu management melihat kondisi SDM dengan lebih jernih.</p><a href="#model">Business benefits <ArrowIcon /></a></div><div><span>FOR HR</span><h3>Do less admin.<br />Do more human.</h3><p>Otomatisasi proses rutin agar HR dapat fokus pada strategi dan employee experience.</p><a href="#platform">HR benefits <ArrowIcon /></a></div><div><span>FOR EMPLOYEE</span><h3>Own your<br />growth.</h3><p>Akses informasi, feedback, dan kesempatan pengembangan dalam pengalaman kerja yang lebih baik.</p><a href="#contact">Employee benefits <ArrowIcon /></a></div></div></section>

        <section className="workflow section-pad"><div className="section-label"><span>08</span><span>How Workiva works</span></div><div className="workflow-head"><h2>From scattered data<br /><em>to shared momentum.</em></h2><p>Implementasi Workiva dirancang sederhana dan bertahap, sehingga perusahaan dapat mulai dari kebutuhan paling penting lalu berkembang.</p></div><div className="steps"><div className="step"><span>01</span><h3>Connect</h3><p>Satukan data, struktur, dan proses people ke dalam satu fondasi.</p></div><div className="step"><span>02</span><h3>Understand</h3><p>Gunakan dashboard dan insight untuk memahami pola yang terjadi.</p></div><div className="step"><span>03</span><h3>Act</h3><p>Ambil keputusan, kembangkan tim, dan ukur progres dengan lebih konsisten.</p></div></div></section>

        <section id="model" className="model-section section-pad"><div className="section-label"><span>09</span><span>Business model</span></div><div className="model-grid"><div><h2>Built to grow<br /><em>with your team.</em></h2><p>Workiva menggunakan model B2B SaaS yang fleksibel untuk perusahaan kecil, berkembang, maupun enterprise.</p><div className="model-note"><span>PRICING PRINCIPLE</span><strong>Pay for the people<br />you support.</strong></div></div><div className="plans"><div className="plan"><span>STARTER</span><p>Fondasi human management untuk tim yang sedang membangun proses.</p><b>Subscription bulanan / tahunan</b></div><div className="plan featured"><span>PROFESSIONAL <i>Recommended</i></span><p>Workflow terintegrasi dan insight untuk perusahaan yang sedang bertumbuh.</p><b>Pricing berdasarkan jumlah karyawan</b></div><div className="plan"><span>ENTERPRISE</span><p>Skala, kontrol, dan fleksibilitas untuk kebutuhan organisasi besar.</p><b>Custom configuration & add-on</b></div></div></div></section>

        <section className="future section-pad"><div className="section-label"><span>10</span><span>Vision for the future</span></div><div className="future-grid"><div><h2>Every company<br /><em>is a people company.</em></h2></div><div><p>Workiva ingin menjadi operating layer bagi organisasi modern: tempat data, proses, dan pengalaman manusia bertemu untuk menciptakan cara kerja yang lebih baik.</p><p>Hari ini kami membantu perusahaan mengelola people operations. Ke depan, kami membangun ekosistem yang membantu setiap orang bertumbuh bersama bisnisnya.</p></div></div></section>

        <section id="contact" className="closing section-pad"><div className="closing-inner"><p className="eyebrow light-text"><span className="eyebrow-line" /> LET'S BUILD BETTER WORK</p><h2>Manage People.<br /><em>Grow Business.</em></h2><p>Mulai percakapan tentang bagaimana Workiva dapat membantu organisasi Anda bekerja dengan lebih jelas, terukur, dan manusiawi.</p><button className="button button-lime" onClick={() => window.location.href = 'mailto:hello@workiva.id'}>Mulai percakapan <ArrowIcon /></button><div className="closing-orbit"></div></div><div className="footer-row"><Logo /><span>Human Management Platform for Modern Businesses</span><span>© 2026 WORKIVA. All rights reserved.</span></div></section>
      </main>
    </div>
  )
}

createRoot(document.getElementById('root')).render(<StrictMode><App /></StrictMode>)
