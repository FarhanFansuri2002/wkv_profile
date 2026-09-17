import { StrictMode, useEffect, useRef, useState } from 'react'
import { createRoot } from 'react-dom/client'
import * as THREE from 'three'
import './styles.css'

const works = [
  ['The Last Garden', 'Stories', 'A quiet fable about a city that forgot how to grow.', 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=1200&q=85', 'tall'],
  ['Morrow / 01', 'Characters', 'A study in soft armor and a future still unwritten.', 'https://images.unsplash.com/photo-1535378917042-10a22c95931a?auto=format&fit=crop&w=1000&q=85', 'wide'],
  ['Signal Bloom', 'Visual Art', 'Botanical memory rendered in impossible light.', 'https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=1000&q=85', ''],
  ['Afterimage', 'AI Video', 'A moving portrait for the space between waking and sleep.', 'https://images.unsplash.com/photo-1519608487953-e999c86e7455?auto=format&fit=crop&w=1000&q=85', ''],
  ['Nocturne Objects', 'Experimental', 'Found objects from a world with different rules.', 'https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=1000&q=85', 'wide'],
]
const characters = [
  ['Morrow', 'The Between', 'A courier carrying memories across the last quiet city.', 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=900&q=85'],
  ['Luma', 'Garden 09', 'A keeper of seeds, signals, and small acts of hope.', 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=900&q=85'],
  ['Orin', 'The Far Shore', 'A cartographer mapping places that only exist at dusk.', 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=85'],
]
const filters = ['All', 'Characters', 'Visual Art', 'AI Video', 'Stories', 'Experimental']
const socials = ['Instagram', 'TikTok', 'YouTube', 'Threads', 'X']
const heroImages = [
  ['/gambar2.jpeg', 'Anime action scene with original characters in a city setting.'],
  ['/gambar1.jpeg', 'Anime characters sharing a quiet moment at school.'],
  ['/gambar3.jpeg', 'Warm animated family scene in a creative home interior.'],
  ['/gambar4.jpeg', 'Anime characters gathered around a table in a traditional room.'],
]
const formats = [
  ['01', 'AI Advertising', 'Short-form campaigns, product stories, and visual worlds made for brands and social platforms.', '/gambar5.jpeg', 'Advertising', '/gambar5.jpeg'],
  ['02', 'AI Sitcom', 'Original characters, recurring situations, and playful episodes built for an always-on audience.', '/gambar3.jpeg', 'Entertainment', '/gambar3.jpeg'],
  ['03', 'AI Drama', 'Cinematic stories with emotional characters, conflict, atmosphere, and worlds worth returning to.', '/gambar1.jpeg', 'Storytelling', '/gambar1.jpeg'],
  ['04', 'AI Action', 'Action, fantasy, and fictional universes that can grow into original IP across multiple formats.', 'https://image.pollinations.ai/prompt/AI%20fantasy%20worldbuilding%20art%2C%20original%20hero%20in%20a%20vast%20floating%20city%2C%20cinematic%20anime%20landscape%2C%20epic%20scale?width=900&height=700&model=flux&nologo=true&seed=workiva-worlds', 'Original IP', '/gambar2.jpeg'],
]
function Mark() { return <span className="mark" aria-hidden="true"><i /><i /><i /></span> }
function Arrow() { return <span className="arrow" aria-hidden="true">↗</span> }
function Meta({ number, children, light = false }) { return <div className={`section-meta ${light ? 'light' : ''}`}><span>{number}</span><span>{children}</span></div> }

function ThreeDArtwork() {
  const mountRef = useRef(null)

  useEffect(() => {
    const mount = mountRef.current
    if (!mount) return undefined

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(28, 1, 0.1, 100)
    camera.position.set(0, 0.15, 7)
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.8))
    renderer.outputColorSpace = THREE.SRGBColorSpace
    renderer.shadowMap.enabled = true
    renderer.shadowMap.type = THREE.PCFSoftShadowMap
    mount.appendChild(renderer.domElement)

    const studioLight = new THREE.HemisphereLight(0xf7ffff, 0x60949d, 2.4)
    scene.add(studioLight)
    const keyLight = new THREE.DirectionalLight(0xffffff, 3.8)
    keyLight.position.set(-3, 5, 5)
    keyLight.castShadow = true
    scene.add(keyLight)
    const rimLight = new THREE.PointLight(0xb7e83f, 6, 9)
    rimLight.position.set(3, 1.5, 2)
    scene.add(rimLight)

    const red = new THREE.MeshPhysicalMaterial({ color: 0xff5b63, roughness: 0.28, metalness: 0.02, clearcoat: 0.65 })
    const lime = new THREE.MeshPhysicalMaterial({ color: 0xb7e83f, roughness: 0.32, clearcoat: 0.5 })
    const cyan = new THREE.MeshPhysicalMaterial({ color: 0x9bd9d7, roughness: 0.38, clearcoat: 0.55 })
    const ink = new THREE.MeshStandardMaterial({ color: 0x050505, roughness: 0.5 })
    const artGroup = new THREE.Group()
    scene.add(artGroup)

    const fruit = new THREE.Group()
    fruit.position.y = 0.18
    fruit.rotation.z = -0.06
    artGroup.add(fruit)

    const fruitBody = new THREE.Mesh(new THREE.SphereGeometry(1.18, 48, 32), red)
    fruitBody.scale.set(0.95, 0.9, 0.95)
    fruitBody.castShadow = true
    fruitBody.receiveShadow = true
    fruit.add(fruitBody)

    const dimple = new THREE.Mesh(new THREE.SphereGeometry(0.22, 24, 16), ink)
    dimple.scale.set(1.4, 0.22, 1.1)
    dimple.position.set(0, 1.08, 0.08)
    fruit.add(dimple)

    const stem = new THREE.Mesh(new THREE.CylinderGeometry(0.09, 0.13, 0.42, 20), ink)
    stem.position.set(0.05, 1.42, 0)
    stem.rotation.z = -0.18
    stem.castShadow = true
    fruit.add(stem)

    const leaf = new THREE.Mesh(new THREE.SphereGeometry(0.3, 24, 16), lime)
    leaf.scale.set(1.6, 0.28, 0.65)
    leaf.position.set(0.3, 1.48, 0)
    leaf.rotation.z = 0.35
    leaf.castShadow = true
    fruit.add(leaf)

    const blush = new THREE.Mesh(new THREE.SphereGeometry(0.13, 20, 12), cyan)
    blush.scale.set(1.5, 0.45, 0.3)
    blush.position.set(-0.65, 0.15, 0.98)
    fruit.add(blush)

    const pedestal = new THREE.Mesh(new THREE.CylinderGeometry(0.82, 1.02, 0.3, 48), lime)
    pedestal.position.y = -1.25
    pedestal.castShadow = true
    artGroup.add(pedestal)

    const orbit = new THREE.Mesh(new THREE.TorusGeometry(1.65, 0.025, 12, 80), cyan)
    orbit.rotation.set(0.8, 0.25, -0.35)
    orbit.position.y = 0.18
    artGroup.add(orbit)

    const floatingOrb = new THREE.Mesh(new THREE.SphereGeometry(0.34, 32, 20), cyan)
    floatingOrb.position.set(1.7, 1.2, 0.15)
    floatingOrb.castShadow = true
    artGroup.add(floatingOrb)

    const seedGeometry = new THREE.SphereGeometry(0.075, 16, 10)
    const seedPositions = [[-0.48, 0.7, 0.92], [0.34, 0.35, 1.03], [-0.2, -0.32, 1.05], [0.48, -0.55, 0.8]]
    seedPositions.forEach(([x, y, z]) => {
      const seed = new THREE.Mesh(seedGeometry, ink)
      seed.scale.set(0.7, 1.5, 0.55)
      seed.position.set(x, y, z)
      seed.rotation.z = x * 1.7
      artGroup.add(seed)
    })

    const pointer = { x: 0, y: 0 }
    const target = { x: 0, y: 0 }
    const onPointerMove = (event) => {
      const bounds = mount.getBoundingClientRect()
      target.x = ((event.clientX - bounds.left) / bounds.width - 0.5) * 0.7
      target.y = ((event.clientY - bounds.top) / bounds.height - 0.5) * 0.5
    }
    const onPointerLeave = () => { target.x = 0; target.y = 0 }
    mount.addEventListener('pointermove', onPointerMove)
    mount.addEventListener('pointerleave', onPointerLeave)

    const resize = () => {
      const { width, height } = mount.getBoundingClientRect()
      camera.aspect = width / height
      camera.updateProjectionMatrix()
      renderer.setSize(width, height, false)
    }
    const observer = new ResizeObserver(resize)
    observer.observe(mount)
    resize()

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let frameId
    const animate = (time) => {
      const seconds = time * 0.001
      pointer.x += (target.x - pointer.x) * 0.05
      pointer.y += (target.y - pointer.y) * 0.05
      artGroup.rotation.y = pointer.x + (reduceMotion ? 0 : seconds * 0.16)
      artGroup.rotation.x = pointer.y * 0.35
        floatingOrb.position.y = 1.2 + (reduceMotion ? 0 : Math.sin(seconds * 1.5) * 0.08)
      fruit.position.y = 0.18 + (reduceMotion ? 0 : Math.sin(seconds * 1.2) * 0.04)
      renderer.render(scene, camera)
      frameId = requestAnimationFrame(animate)
    }
    frameId = requestAnimationFrame(animate)

    return () => {
      cancelAnimationFrame(frameId)
      observer.disconnect()
      mount.removeEventListener('pointermove', onPointerMove)
      mount.removeEventListener('pointerleave', onPointerLeave)
      renderer.dispose()
      scene.traverse((object) => {
        if (object.isMesh) {
          object.geometry.dispose()
          object.material.dispose()
        }
      })
      mount.removeChild(renderer.domElement)
    }
  }, [])

  return <div className="three-artwork" ref={mountRef} role="img" aria-label="Interactive 3D glossy coral fruit with lime leaf and cyan detail" />
}

function App() {
  const [activeFilter, setActiveFilter] = useState('All')
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  useEffect(() => { const onScroll = () => setScrolled(window.scrollY > 30); window.addEventListener('scroll', onScroll, { passive: true }); return () => window.removeEventListener('scroll', onScroll) }, [])
  const visibleWorks = activeFilter === 'All' ? works : works.filter((work) => work[1] === activeFilter)
  const closeMenu = () => setMenuOpen(false)
  return <div className="site-shell" id="top">
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''}`}>
      <a className="brand" href="#top" aria-label="WORKIVA home"><Mark /><span>WORKIVA</span><small>AI CREATIVE STUDIO</small></a>
      <nav className={menuOpen ? 'main-nav is-open' : 'main-nav'} aria-label="Main navigation"><a href="#work" onClick={closeMenu}>Work</a><a href="#worlds" onClick={closeMenu}>Worlds</a><a href="#studio" onClick={closeMenu}>Studio</a><a href="#contact" onClick={closeMenu}>Contact</a></nav>
      <a className="header-link" href="#contact">Start a conversation <Arrow /></a>
      <button className="menu-button" aria-label="Toggle navigation" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}><span /><span /></button>
    </header>
    <main>
      <section className="hero"><div className="hero-content reveal"><p className="kicker"><span /> Independent creative studio / 2026</p><h1>We create<br /><i>what comes next.</i></h1><p className="hero-intro">WORKIVA is a creative studio building visual stories, original characters, and digital worlds with AI as our medium.</p><div className="hero-actions"><a className="button button-light" href="#work">Explore our work <Arrow /></a><a className="quiet-link" href="#studio">About the studio <span>↓</span></a></div></div><div className="hero-art hero-collage reveal delay-1"><img className="collage-image collage-main" src={heroImages[0][0]} alt={heroImages[0][1]} /><img className="collage-image collage-one" src={heroImages[1][0]} alt={heroImages[1][1]} /><img className="collage-image collage-two" src={heroImages[2][0]} alt={heroImages[2][1]} /><img className="collage-image collage-three" src={heroImages[3][0]} alt={heroImages[3][1]} /><div className="art-frame" /><span className="art-index">01 / 04</span><span className="hero-style-label">STORYBOARD / ANIME WORLDS</span></div><div className="hero-foot"><span>Scroll to explore</span><span className="line" /><span>Jakarta / Indonesia</span></div></section>
      <section className="manifesto section" id="studio"><Meta number="01">Why we exist</Meta><div className="manifesto-grid"><h2>AI is not the story.<br /><i>It is the new medium.</i></h2><div className="manifesto-copy"><p>We believe the most interesting work lives where human instinct meets unfamiliar possibility. Technology gives us a wider canvas. Direction, taste, and meaning make something worth looking at.</p><p>We make images, short films, characters, and stories that invite people into worlds they have never seen before.</p><a className="under-link" href="#process">How we make <Arrow /></a></div></div></section>
      <section className="formats-section section" id="formats"><Meta number="02">What we make with AI</Meta><div className="formats-intro"><h2>From one image<br /><i>to a whole universe.</i></h2><p>We use AI to create entertainment, advertising, and original stories. The output is not a prompt. It is a world, a character, or a moment people can remember.</p></div><div className="formats-grid">{formats.map(([number, title, description, image, label, fallback]) => <article className="format-card" key={title}><div className="format-image"><img src={image} alt={`${title} visual example`} loading="lazy" onError={(event) => { if (!event.currentTarget.dataset.fallback) { event.currentTarget.dataset.fallback = 'true'; event.currentTarget.src = fallback } }} /><span>{label}</span></div><div className="format-copy"><span>{number}</span><h3>{title}</h3><p>{description}</p><Arrow /></div></article>)}</div></section>
      <section className="work-section section" id="work"><Meta number="03">Selected work</Meta><div className="section-heading"><h2>Made to be <i>felt.</i></h2><p>Some pieces are studies. Some become stories. We are interested in the moment an image starts to have a life of its own.</p></div><div className="filters" role="tablist" aria-label="Filter work">{filters.map((filter) => <button key={filter} className={activeFilter === filter ? 'active' : ''} onClick={() => setActiveFilter(filter)}>{filter}</button>)}</div><div className="work-grid">{visibleWorks.map(([title, category, description, image, size]) => <article className={`work-item ${size}`} key={title}><div className="work-image"><img src={image} alt={`${title}, ${category}`} loading="lazy" /><span className="work-arrow"><Arrow /></span></div><div className="work-info"><div><p>{category}</p><h3>{title}</h3></div><span>{description}</span></div></article>)}</div></section>
      <section className="worlds section" id="worlds"><Meta number="03" light>Original IP</Meta><div className="worlds-heading"><p className="kicker light"><span /> Long-form thinking</p><h2>Characters become stories.<br /><i>Stories become worlds.</i></h2><p>We are building a library of original characters and universes designed to grow across formats, platforms, and time.</p></div><div className="character-grid">{characters.map(([name, world, description, image], index) => <article className="character" key={name}><div className="character-image"><img src={image} alt={`${name}, an original WORKIVA character`} loading="lazy" /><span>0{index + 1}</span></div><div className="character-info"><div><h3>{name}</h3><p>{world}</p></div><span>{description}</span><a href="#work" aria-label={`Explore ${name}`}>Explore character <Arrow /></a></div></article>)}</div></section>
      <section className="process section" id="process"><Meta number="04">Our process</Meta><div className="process-heading"><h2>Human direction.<br /><i>Infinite iterations.</i></h2><p>Every finished piece passes through a human point of view. AI opens the door; we decide where to go.</p></div><div className="process-list">{[['Concept', 'Ideas, references, mood, and a question worth exploring.'], ['Creation', 'Visual exploration using generative tools as a new creative medium.'], ['Direction', 'Selection, editing, compositing, art direction, and storytelling.'], ['Publishing', 'Packaging the work for social, screen, and the people it is made for.']].map(([title, copy], index) => <div key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{copy}</p></div>)}</div></section>
      <section className="social-section section"><div className="social-copy"><Meta number="05" light>Out in the world</Meta><h2>Follow the worlds<br /><i>we create.</i></h2><p>New characters, visual experiments, and fragments from the studio, published where people spend their time.</p></div><div className="social-links">{socials.map((name, index) => <a href={`#${name.toLowerCase()}`} key={name}><span>0{index + 1}</span><strong>{name}</strong><Arrow /></a>)}</div></section>
      <section className="company section"><Meta number="06">About WORKIVA</Meta><div className="company-grid"><div><h2>A studio for<br /><i>the unreal.</i></h2><p>WORKIVA is an independent creative studio from Indonesia. We create digital entertainment, visual art, original characters, and stories for a social-first world.</p></div><dl><div><dt>Vision</dt><dd>Build a creative brand with worlds people want to return to.</dd></div><div><dt>What we create</dt><dd>Characters / Short films / Visual art / Fictional worlds</dd></div><div><dt>Founded</dt><dd>2026 · Jakarta, Indonesia</dd></div><div><dt>Contact</dt><dd><a href="mailto:hello@workiva.id">hello@workiva.id</a></dd></div></dl></div></section>
      <section className="contact section" id="contact"><div className="contact-mark"><Mark /></div><p className="kicker light"><span /> Have an idea worth creating?</p><h2>Let's make<br /><i>something real.</i></h2><a className="button button-accent" href="mailto:hello@workiva.id">hello@workiva.id <Arrow /></a></section>
    </main>
    <footer className="footer"><a className="brand footer-brand" href="#top"><Mark /><span>WORKIVA</span><small>CREATIVE STUDIO</small></a><p>Digital stories, original characters,<br />and worlds made with AI.</p><div className="footer-socials">{socials.map((name) => <a href={`#${name.toLowerCase()}`} key={name}>{name}</a>)}</div><div className="footer-bottom"><span>© 2026 WORKIVA</span><span>Privacy / Terms</span><span>Made in Jakarta</span></div></footer>
  </div>
}
createRoot(document.getElementById('root')).render(<StrictMode><App /></StrictMode>)
