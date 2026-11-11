import React,{useEffect,useState} from 'react';
import{createRoot}from'react-dom/client';
import{ArrowRight,Instagram,Menu,X,MessageCircle,ShieldCheck,Heart,BusFront,ChevronDown,Sun,Moon,MapPin,Phone}from'lucide-react';
import'./styles.css';

const wa='https://wa.me/18092109754?text=Hola%20Kids%20Wheels%2C%20quiero%20informaci%C3%B3n%20sobre%20el%20transporte%20escolar.';
const ig='https://www.instagram.com/kidswheelsrd/';
const hero='https://images.unsplash.com/photo-1527058918112-6e17a8213943?auto=format&fit=crop&w=2200&q=90';
const busSide='https://images.unsplash.com/photo-1650172101138-c0bb7bc32ffa?auto=format&fit=crop&w=1200&q=85';
const busRoad='https://images.unsplash.com/photo-1754647766402-4634cf235aad?auto=format&fit=crop&w=1400&q=85';

function App(){
 const[menu,setMenu]=useState(false),[faq,setFaq]=useState(0),[progress,setProgress]=useState(0),[dark,setDark]=useState(true),[scrollY,setScrollY]=useState(0);
 useEffect(()=>{
  const f=()=>{const max=document.documentElement.scrollHeight-innerHeight;setProgress(max>0?window.scrollY/max:0);setScrollY(window.scrollY)};
  addEventListener('scroll',f,{passive:true});f();
  const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target)}}),{threshold:.12});
  document.querySelectorAll('.reveal').forEach(node=>observer.observe(node));
  return()=>{removeEventListener('scroll',f);observer.disconnect()};
 },[]);
 const qs=[['¿Qué zonas cubre el transporte escolar?','Contáctanos por WhatsApp para consultar las rutas y zonas disponibles.'],['¿Cómo puedo conocer las tarifas?','Escríbenos para recibir información sobre las tarifas y opciones de servicio disponibles.'],['¿Cómo puedo solicitar el servicio?','Comunícate con nuestro equipo para consultar disponibilidad y coordinar los detalles del transporte escolar.'],['¿Cómo puedo obtener más información?','Síguenos en Instagram o escríbenos por WhatsApp. Con gusto te orientamos.']];
 return <div className={'site-shell '+(dark?'theme-dark':'theme-light')}>
  <div className="scroll-progress" style={{transform:'scaleX('+progress+')'}}/>
  <header className="header">
   <a href="#inicio" className="brand"><span className="brand-mark"><BusFront size={29}/></span><span className="brand-name">KIDS<span>WHEELS</span><small>TRANSPORTE ESCOLAR · RD</small></span></a>
   <nav className={menu?'nav nav-open':'nav'}><a href="#inicio" onClick={()=>setMenu(false)}>Inicio</a><a href="#nosotros" onClick={()=>setMenu(false)}>Nosotros</a><a href="#beneficios" onClick={()=>setMenu(false)}>Nuestro compromiso</a><a href="#preguntas" onClick={()=>setMenu(false)}>Preguntas</a><a className="nav-cta" href={wa} target="_blank" rel="noreferrer">Contáctanos <ArrowRight size={16}/></a></nav>
   <div className="header-tools"><button className="theme-toggle" onClick={()=>setDark(!dark)} aria-label="Cambiar modo">{dark?<Sun size={16}/>:<Moon size={16}/>}<span>{dark?'Modo claro':'Modo oscuro'}</span></button><button className="mobile-toggle" onClick={()=>setMenu(!menu)} aria-label="Abrir menú">{menu?<X/>:<Menu/>}</button></div>
  </header>
  <main>
   <section className="hero" id="inicio">
    <div className="hero-image" style={{backgroundImage:'url('+hero+')',transform:'translate3d(0,'+(scrollY*.22)+'px,0) scale(1.12)'}}/>
    <div className="hero-shade"/>
    <div className="hero-grid"/>
    <div className="hero-content">
     <div className="eyebrow"><span/> TRANSPORTE ESCOLAR <i/> REPÚBLICA DOMINICANA <b>🇩🇴</b></div>
     <h1>Tu viaje<br/><em>también</em><br/>importa<span className="hero-period">.</span></h1>
     <p>En Kids Wheels llevamos más que estudiantes: llevamos tranquilidad, seguridad y compromiso en cada ruta.</p>
     <div className="hero-actions"><a className="btn btn-yellow" href={wa} target="_blank" rel="noreferrer">Solicita información <ArrowRight size={18}/></a><a className="scroll-link" href="#nosotros">Descubre Kids Wheels <span>↓</span></a></div>
     <div className="hero-location"><MapPin size={14}/> República Dominicana <span>·</span> Transporte escolar</div>
    </div>
    <div className="hero-side-label">KIDS WHEELS / MOVILIDAD ESCOLAR</div>
    <div className="hero-bottomline"><span>01 — CADA RUTA CUENTA</span><span>DESLIZA PARA DESCUBRIR ↓</span></div>
   </section>
   <section className="marquee"><div>RUTAS CON PROPÓSITO <b>✳</b> TRANQUILIDAD PARA LAS FAMILIAS <b>✳</b> CADA VIAJE CUENTA <b>✳</b> KIDS WHEELS <b>✳</b> RUTAS CON PROPÓSITO <b>✳</b> TRANQUILIDAD PARA LAS FAMILIAS <b>✳</b></div></section>
   <section className="about section-wrap" id="nosotros">
    <div className="about-visual reveal"><img className="about-main" src={busSide} alt="Autobús escolar amarillo" loading="lazy"/><div className="image-index">KW / 02</div><div className="about-sticker">¡VAMOS<br/>A CLASES!</div></div>
    <div className="about-copy reveal"><div className="section-label">01 / NUESTRA ESENCIA</div><h2>El camino a clases<br/>merece <em>lo mejor.</em></h2><p>Sabemos que cada mañana cuenta. Por eso, en Kids Wheels creemos que el transporte escolar debe sentirse organizado, cercano y pensado para las familias.</p><p>Queremos que tengas la información que necesitas para conocer nuestras rutas y nuestro servicio.</p><a className="text-link" href={wa} target="_blank" rel="noreferrer">Conversemos sobre tu ruta <ArrowRight size={17}/></a></div>
   </section>
   <section className="benefits" id="beneficios"><div className="section-wrap">
    <div className="benefits-heading reveal"><div><div className="section-label">02 / LO QUE NOS MUEVE</div><h2>¿Por qué elegir<br/><em>Kids Wheels?</em></h2></div><p>Porque entendemos la importancia de un transporte escolar confiable para las familias dominicanas.</p></div>
    <div className="benefit-grid">
     <article className="benefit-card reveal"><span className="benefit-icon"><ShieldCheck/></span><small>01 / CONFIANZA</small><h3>Compromiso en cada trayecto</h3><p>Una experiencia enfocada en el cuidado y la tranquilidad de las familias.</p></article>
     <article className="benefit-card reveal"><span className="benefit-icon"><BusFront/></span><small>02 / ORGANIZACIÓN</small><h3>Rutas organizadas</h3><p>Consulta con nuestro equipo las rutas, zonas y disponibilidad del servicio.</p></article>
     <article className="benefit-card reveal"><span className="benefit-icon"><Heart/></span><small>03 / FAMILIAS</small><h3>Tranquilidad para todos</h3><p>Comunicación cercana para acompañarte en la coordinación del transporte escolar.</p></article>
    </div>
   </div></section>
   <section className="photo-break"><img src={busRoad} alt="Autobús escolar amarillo en movimiento" loading="lazy" style={{transform:'translateY('+((scrollY-900)*-.055)+'px) scale(1.12)'}}/><div className="photo-break-shade"/><div className="photo-break-copy reveal"><div className="section-label">KIDS WHEELS · REPÚBLICA DOMINICANA</div><h2>Cada mañana<br/>es un <em>nuevo comienzo.</em></h2></div><span className="photo-number">KW — 03</span></section>
   <section className="faq-section" id="preguntas"><div className="section-wrap faq-layout"><div className="reveal"><div className="section-label">03 / HABLEMOS CLARO</div><h2>¿Tienes alguna<br/><em>pregunta?</em></h2><p>Estamos para orientarte sobre rutas, horarios y disponibilidad del transporte escolar.</p><a className="text-link" href={wa} target="_blank" rel="noreferrer">Habla con nuestro equipo <ArrowRight size={17}/></a></div><div className="faq-list reveal">{qs.map(([q,a],i)=><div className={'faq-item '+(faq===i?'active':'')} key={q}><button onClick={()=>setFaq(faq===i?-1:i)} aria-expanded={faq===i}><span>{q}</span><ChevronDown size={19}/></button>{faq===i&&<p>{a}</p>}</div>)}</div></div></section>
   <section className="contact-band"><div className="contact-inner"><div><div className="section-label">¿LISTOS PARA HABLAR?</div><h2>Tu ruta comienza<br/><em>con un mensaje.</em></h2><p>Escríbenos para conocer más sobre Kids Wheels.</p></div><a className="btn btn-yellow" href={wa} target="_blank" rel="noreferrer"><MessageCircle size={18}/> Escríbenos por WhatsApp <ArrowRight size={16}/></a></div></section>
  </main>
  <footer className="footer"><div className="footer-main"><a href="#inicio" className="brand"><span className="brand-mark"><BusFront size={27}/></span><span className="brand-name">KIDS<span>WHEELS</span><small>TRANSPORTE ESCOLAR · RD</small></span></a><p>Transporte escolar con atención y compromiso.</p><div className="footer-social"><a href={ig} target="_blank" rel="noreferrer" aria-label="Instagram"><Instagram/></a><a href={wa} target="_blank" rel="noreferrer" aria-label="WhatsApp"><MessageCircle/></a></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} Kids Wheels. Todos los derechos reservados.</span><a href="#inicio">Volver al inicio ↑</a></div></footer>
  <a className="floating-contact whatsapp-float" href={wa} target="_blank" rel="noreferrer" aria-label="Contactar por WhatsApp"><MessageCircle size={24}/><span>WhatsApp</span></a>
  <a className="floating-contact instagram-float" href={ig} target="_blank" rel="noreferrer" aria-label="Visitar Instagram"><Instagram size={23}/><span>Instagram</span></a>
 </div>;
}
createRoot(document.getElementById('root')).render(<App/>);
