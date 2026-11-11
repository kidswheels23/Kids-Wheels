import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { ArrowRight, Instagram, Facebook, Menu, X, ShieldCheck, Heart, Sparkles, MessageCircle, ChevronDown } from 'lucide-react';
import './styles.css';

const socials = {
  facebook: 'https://www.facebook.com/people/Kids-Wheels/61578043558781/',
  instagram: 'https://www.instagram.com/p/DLpo8IwOJ0H/',
  instagram2: 'https://www.instagram.com/p/DM-00l_sFAp/'
};
function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [faqOpen, setFaqOpen] = useState(0);
  const [showTop, setShowTop] = useState(false);
  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 500);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  const closeMenu = () => setMenuOpen(false);
  return <div className="site-shell">
    <div className="reading-progress" aria-hidden="true"><span/></div>
    <div className="announcement"><span className="announcement-dot"/> ¡Bienvenidos a Kids Wheels! <span className="announcement-extra">Descubre nuestra marca y consulta por nuestros canales oficiales.</span></div>
    <header className="header">
      <a href="#inicio" className="brand" aria-label="Kids Wheels, inicio"><img src="./kids-wheels-logo.jpeg" alt="Logotipo de Kids Wheels" /></a>
      <button className="mobile-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'} aria-expanded={menuOpen} aria-controls="main-navigation">{menuOpen ? <X/> : <Menu/>}</button>
      <nav id="main-navigation" className={menuOpen ? 'nav nav-open' : 'nav'}>
        <a href="#inicio" onClick={closeMenu}>Inicio</a><a href="#marca" onClick={closeMenu}>Nuestra marca</a><a href="#catalogo" onClick={closeMenu}>Catálogo</a><a href="#preguntas" onClick={closeMenu}>Preguntas frecuentes</a>
        <a className="nav-cta" href={socials.instagram} target="_blank" rel="noreferrer" onClick={closeMenu}>Consultar <ArrowRight size={16}/></a>
      </nav>
    </header>

    <main>
      <section className="hero" id="inicio">
        <div className="hero-copy">
          <div className="eyebrow"><span className="eyebrow-line"/> KIDS WHEELS <span className="eyebrow-line"/></div>
          <h1>Pequeñas ruedas.<br/><span>Grandes aventuras.</span></h1>
          <p className="hero-description">El mundo se descubre mejor en movimiento. Conoce Kids Wheels y encuentra inspiración para la próxima aventura en familia.</p>
          <div className="hero-actions"><a className="button button-primary" href="#catalogo">Explorar la marca <ArrowRight size={18}/></a><a className="button button-secondary" href={socials.instagram} target="_blank" rel="noreferrer"><Instagram size={18}/> Ver Instagram</a></div>
          <div className="hero-note"><span className="note-icon"><Heart size={16} fill="currentColor"/></span><span>Momentos para disfrutar en familia</span></div>
        </div>
        <div className="hero-art" aria-label="Ilustración decorativa de ruedas y movimiento">
          <div className="sun-disc"/><div className="orbit orbit-one"/><div className="orbit orbit-two"/>
          <div className="wheel wheel-back"><div/></div><div className="wheel wheel-front"><div/></div>
          <svg className="ride-shape" viewBox="0 0 500 340" role="img" aria-label="Ilustración abstracta de una bicicleta infantil"><path d="M95 235 L160 120 L260 235 L95 235 M260 235 L320 125 L390 235 L260 235 M160 120 L215 120 L260 235 M320 125 L365 125" fill="none" stroke="#202827" strokeWidth="13" strokeLinecap="round" strokeLinejoin="round"/><path d="M155 119 L132 92 L104 92 M304 124 L338 95 L373 95" fill="none" stroke="#202827" strokeWidth="12" strokeLinecap="round"/><path d="M201 120 L233 120" stroke="#0ca68c" strokeWidth="17" strokeLinecap="round"/></svg>
          <div className="floating-tag tag-top"><Sparkles size={15}/> Crecer explorando</div><div className="floating-tag tag-bottom"><span className="tag-dot"/> Diversión sobre ruedas</div>
          <div className="hero-blob"/>
        </div>
        <div className="hero-bottom"><span>JUGAR</span><i/><span>EXPLORAR</span><i/><span>CRECER</span></div>
      </section>

      <section className="intro section-wrap" id="marca">
        <div className="section-kicker">HOLA, SOMOS KIDS WHEELS</div>
        <div className="intro-grid"><h2>La aventura empieza<br/>con <span>una sonrisa.</span></h2><div className="intro-text"><p>Queremos que conozcas nuestra marca y todo lo que tenemos para compartir. Explora nuestras publicaciones y contáctanos para consultar los productos, disponibilidad y detalles de compra.</p><a className="text-link" href={socials.facebook} target="_blank" rel="noreferrer">Conoce nuestras novedades <ArrowRight size={17}/></a></div></div>
      </section>

      <section className="catalog-section" id="catalogo"><div className="section-wrap">
        <div className="catalog-heading"><div><div className="section-kicker">DESCUBRE KIDS WHEELS</div><h2>Encuentra tu próxima<br/><span>gran aventura.</span></h2></div><p>Estamos aquí para ayudarte a conocer nuestros productos. Consulta el catálogo actualizado directamente con nuestro equipo.</p></div>
        <div className="catalog-card"><div className="catalog-card-art"><div className="catalog-circle circle-one"/><div className="catalog-circle circle-two"/><div className="catalog-star star-one">✳</div><div className="catalog-star star-two">✦</div><div className="catalog-brand">KW<span>.</span></div><div className="catalog-caption">¡A rodar!</div></div><div className="catalog-card-copy"><span className="pill"><span/> CATÁLOGO Y CONSULTAS</span><h3>¿Qué aventura<br/>estás buscando?</h3><p>Escríbenos o visita nuestras redes para consultar los productos disponibles, precios y opciones de compra actualizados.</p><div className="catalog-links"><a href={socials.instagram} target="_blank" rel="noreferrer" className="button button-primary">Consultar por Instagram <ArrowRight size={17}/></a><a href={socials.facebook} target="_blank" rel="noreferrer" className="button button-light"><Facebook size={17}/> Visitar Facebook</a></div><small>La disponibilidad y los precios deben confirmarse con la empresa.</small></div></div>
      </div></section>

      <section className="values section-wrap"><div className="section-kicker">LO QUE NOS MUEVE</div><h2>Más que ruedas,<br/><span>momentos para recordar.</span></h2><div className="value-grid"><article className="value-card"><div className="value-icon mint"><Heart size={23}/></div><h3>Hecho para disfrutar</h3><p>Una marca pensada para acompañar momentos de diversión y descubrimiento.</p></article><article className="value-card"><div className="value-icon dark"><ShieldCheck size={23}/></div><h3>Compra con información</h3><p>Consulta directamente para conocer los detalles y la disponibilidad de cada producto.</p></article><article className="value-card"><div className="value-icon pale"><MessageCircle size={23}/></div><h3>Estamos para ayudarte</h3><p>Conecta con Kids Wheels a través de sus canales sociales oficiales.</p></article></div></section>

      <section className="faq-section" id="preguntas"><div className="section-wrap faq-grid"><div><div className="section-kicker">¿TIENES DUDAS?</div><h2>Te ayudamos<br/>a <span>resolverlas.</span></h2><p className="faq-lead">Para ofrecerte información correcta, nuestro equipo puede confirmar los detalles de cada producto.</p><a className="text-link" href={socials.instagram} target="_blank" rel="noreferrer">Pregúntanos en Instagram <ArrowRight size={17}/></a></div><div className="faq-list">{[
          ['¿Qué productos tienen disponibles?','El catálogo y la disponibilidad pueden cambiar. Escríbenos por Instagram o Facebook para consultar los productos actuales.'],
          ['¿Cómo puedo conocer los precios?','Solicita los precios actualizados directamente a Kids Wheels mediante sus redes oficiales.'],
          ['¿Cómo puedo realizar una compra?','Contacta con el equipo para confirmar el producto, el método de compra y las opciones de entrega disponibles.']
        ].map(([q,a],i)=><div className={'faq-item '+(faqOpen===i?'faq-active':'')} key={q}><button onClick={()=>setFaqOpen(faqOpen===i?-1:i)} aria-expanded={faqOpen===i}><span>{q}</span><ChevronDown size={19}/></button>{faqOpen===i&&<p>{a}</p>}</div>)}</div></div></section>

      <section className="social-cta"><div className="social-cta-inner"><div className="social-symbol"><Instagram size={29}/></div><div><div className="section-kicker">SIGAMOS CONECTADOS</div><h2>La próxima aventura<br/>puede empezar <span>hoy.</span></h2><p>Sigue a Kids Wheels para conocer publicaciones, novedades y productos.</p></div><div className="social-buttons"><a href={socials.instagram} target="_blank" rel="noreferrer" className="button button-primary"><Instagram size={18}/> Instagram <ArrowRight size={16}/></a><a href={socials.facebook} target="_blank" rel="noreferrer" className="button button-secondary"><Facebook size={18}/> Facebook</a></div></div></section>
    </main>

    <footer className="footer"><div className="footer-main"><a href="#inicio" className="footer-logo"><img src="./kids-wheels-logo.jpeg" alt="Kids Wheels"/></a><p>Pequeñas ruedas. Grandes aventuras.</p><div className="footer-socials"><a href={socials.instagram} aria-label="Instagram" target="_blank" rel="noreferrer"><Instagram size={19}/></a><a href={socials.facebook} aria-label="Facebook" target="_blank" rel="noreferrer"><Facebook size={19}/></a></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} Kids Wheels. Todos los derechos reservados.</span><a href="#inicio">Volver arriba ↑</a></div></footer>
  </div>
}

createRoot(document.getElementById('root')).render(<App/>);
