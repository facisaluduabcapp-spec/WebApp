import React, { useEffect, useState } from 'react';
import { FaPills, FaChartLine, FaHeart, FaLock, FaClipboardList, FaStar, FaChevronLeft, FaChevronRight} from 'react-icons/fa';
// ─────────────────────────────────────────────
// PALETA — clara, verde solo como acento
// ─────────────────────────────────────────────
const C = {
  // Acento principal
  green:       '#004A25',
  greenMid:    '#1a6b3c',
  greenLight:  '#e8f5ee',
  greenLight2: '#39c992',
  greenFaint:  '#f2faf5',

  // Dorado — acento secundario
  gold:        '#D4A017',
  goldLight:   '#fdf6e3',
  goldBorder:  'rgba(212,160,23,0.30)',

  // Neutros claros (base de la UI)
  white:       '#FFFFFF',
  bg:          '#F8F9FA',
  surface:     '#FFFFFF',
  border:      '#E4E8EC',

  // Texto
  textPrimary:  '#1C2B20',
  textSecond:   '#4A6052',
  textMuted:    '#8FA897',
};

// ─────────────────────────────────────────────
// ESTILOS GLOBALES
// ─────────────────────────────────────────────
const GlobalStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700;800&family=Lora:ital,wght@0,500;0,600;1,400;1,500&display=swap');

    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    html { scroll-behavior: smooth; }
    body {
      font-family: 'Nunito', sans-serif;
      background: ${C.bg};
      color: ${C.textPrimary};
      -webkit-font-smoothing: antialiased;
    }

    .btn-solid {
      display: inline-flex; align-items: center; gap: 8px;
      background: ${C.green}; color: #fff;
      padding: 11px 26px; border-radius: 50px;
      font-family: 'Nunito', sans-serif;
      font-weight: 700; font-size: 0.95rem;
      border: none; cursor: pointer; text-decoration: none;
      transition: transform 0.18s, box-shadow 0.18s, background 0.18s;
    }
    .btn-solid:hover {
      background: ${C.greenMid};
      transform: translateY(-2px);
      box-shadow: 0 8px 24px rgba(0,74,37,0.22);
    }

    .btn-ghost {
      display: inline-flex; align-items: center; gap: 8px;
      background: rgba(255,255,255,0.15);
      backdrop-filter: blur(8px);
      color: #fff;
      padding: 11px 26px; border-radius: 50px;
      font-family: 'Nunito', sans-serif;
      font-weight: 600; font-size: 0.95rem;
      border: 1.5px solid rgba(255,255,255,0.35);
      cursor: pointer; text-decoration: none;
      transition: background 0.18s, border-color 0.18s;
    }
    .btn-ghost:hover { background: rgba(255,255,255,0.25); border-color: rgba(255,255,255,0.6); }

    .card-hover { transition: transform 0.22s, box-shadow 0.22s; }
    .card-hover:hover { transform: translateY(-4px); box-shadow: 0 16px 40px rgba(0,74,37,0.10) !important; }

    .nav-link {
      color: ${C.textSecond}; text-decoration: none;
      font-weight: 600; font-size: 0.9rem;
      transition: color 0.18s;
      padding-bottom: 2px;
      border-bottom: 2px solid transparent;
    }
    .nav-link:hover { color: ${C.green}; border-bottom-color: ${C.green}; }

    .footer-link {
      display: block; color: rgba(255,255,255,0.45); text-decoration: none;
      font-size: 0.88rem; margin-bottom: 10px;
      transition: color 0.18s, padding-left 0.18s;
    }
    .footer-link:hover { color: #fff; padding-left: 4px; }

    @keyframes fadeUp {
      from { opacity: 0; transform: translateY(20px); }
      to   { opacity: 1; transform: translateY(0); }
    }
    .fade-up { animation: fadeUp 0.55s ease both; }
    .d1 { animation-delay: 0.08s; }
    .d2 { animation-delay: 0.16s; }
    .d3 { animation-delay: 0.24s; }
    .d4 { animation-delay: 0.32s; }

    @keyframes float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-7px)} }
    .float-anim { animation: float 4s ease-in-out infinite; }

    @keyframes pulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:0.5;transform:scale(1.5)} }
    .pulse { animation: pulse 2.2s infinite; }

    .section-pill {
      display: inline-block;
      font-size: 0.7rem; font-weight: 700; letter-spacing: 2px; text-transform: uppercase;
      color: ${C.green}; background: ${C.greenLight};
      padding: 4px 14px; border-radius: 20px; margin-bottom: 14px;
    }
  `}</style>
);

// ─────────────────────────────────────────────
// ICONS
// ─────────────────────────────────────────────
const DlIcon = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
    <polyline points="7 10 12 15 17 10"/>
    <line x1="12" y1="15" x2="12" y2="3"/>
  </svg>
);

const CheckIcon = ({ color = C.green }) => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
);
const Hero = ({ apkUrl, logoUrl }) => {
  // Componente de ícono de descarga integrado para evitar errores de compilación
  const DlIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  );

  return (
    <section id="inicio" style={{
      position: 'relative',
      minHeight: '92vh',
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'flex-end',
      paddingBottom: '5rem',
      backgroundImage: `
        linear-gradient(to top,
          rgba(10,28,16,0.92) 0%,
          rgba(10,28,16,0.55) 28%,
          rgba(10,28,16,0.10) 55%,
          rgba(0,0,0,0.00) 100%
        ),
        url(https://images.pexels.com/photos/6995379/pexels-photo-6995379.jpeg)
      `,
      backgroundSize: 'cover',
      backgroundPosition: 'center top',
      backgroundRepeat: 'no-repeat',
    }}>
      <div style={{ textAlign: 'center', padding: '0 1.5rem' }}>
        
        {/* Logo */}
        <div className="fade-up" style={{ marginBottom: 16 }}>
          <img src={logoUrl} alt="VIH APP" style={{
            width: 140, height: 140, borderRadius: '50%',
            border: '3px solid rgba(255,255,255,0.6)',
            background: 'rgba(255,255,255,0.15)',
            backdropFilter: 'blur(6px)',
            objectFit: 'contain'
          }}/>
        </div>
        
        {/* Título Principal */}
        <h1 className="fade-up" style={{
          fontSize: 'clamp(2.2rem, 4vw, 3.2rem)',
          fontWeight: '800',
          color: '#FFFFFF',
          margin: '0 0 16px 0',
        }}>
          VIH APP
        </h1>
        
        {/* Subtítulo */}
        <p className="fade-up d3" style={{
          fontSize: 'clamp(1rem, 2.5vw, 1.15rem)',
          color: 'rgba(255,255,255,0.70)',
          maxWidth: 460, margin: '0 auto 32px',
          lineHeight: 1.7, fontWeight: 400,
          textShadow: '0 1px 3px rgba(0, 0, 0, 0.4)',
        }}>
          Controla tu medicación, registra tu bienestar y recibe apoyo motivacional cada día.
        </p>

        {/* Botones */}
        <div className="fade-up d4" style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 28 }}>
          <a href={apkUrl} download="VIH_APP.apk" className="btn-solid" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
            <DlIcon /> Descargar APK
          </a>
          <a href="#qr-download" className="btn-ghost">Escanear QR</a>
        </div>

        {/* Metadatos */}
        <div className="fade-up d4" style={{
          display: 'flex', gap: 20, flexWrap: 'wrap', justifyContent: 'center',
          color: 'rgba(255,255,255,0.40)', fontSize: '0.78rem', fontWeight: 600,
        }}>
          {['v1.0.0', '107 MB', 'Android 5.0+'].map(t => (
            <span key={t}>{t}</span>
          ))}
        </div>
      </div>
    </section>
  );
};
// ─────────────────────────────────────────────
// FEATURES
// ─────────────────────────────────────────────
const featureList = [
  { 
    Icon: FaPills, 
    title: 'Control de Medicación', 
    desc: 'Alarmas y registro de tratamiento para no olvidar ninguna toma. Disponible para usuarios A y B.', 
    img: '/imagen-med.png', 
    accent: C.greenLight 
  },
  { 
    Icon: FaChartLine, 
    title: 'Seguimiento Diario',     
    desc: 'Monitoreo de ánimo, síntomas y bienestar general cada día. Disponible para usuarios A.', 
    img: '/imagen-seg.png', 
    accent: '#EEF6FF' 
  },
  { 
    Icon: FaHeart, 
    title: 'Motivación',             
    desc: 'Mensajes positivos para empezar el día con fuerza. Disponible para usuarios A.',         
    img: '/imagen-mot.png', 
    accent: C.goldLight 
  }
];

const Features = () => (
  <section id="funciones" style={{ background: C.bg, padding: '5rem 2rem' }}>
    <div style={{ maxWidth: 1100, margin: '0 auto' }}>
      <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <span className="section-pill">Funciones</span>
        <h2 style={{ fontFamily: "'Lora',serif", fontSize: 'clamp(1.7rem,4vw,2.4rem)', color: C.textPrimary, fontWeight: 600, marginBottom: 10 }}>
          Todo lo que necesitas
        </h2>
        <p style={{ color: C.textSecond, fontSize: '1rem', maxWidth: 500, margin: '0 auto', lineHeight: 1.7 }}>
          Herramientas diseñadas para que tu rutina de salud sea simple y efectiva.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.8rem' }}>
        {featureList.map(({ Icon, title, desc, img, accent }) => (
          <div key={title} className="card-hover" style={{
            background: C.surface, 
            border: `1px solid ${C.border}`,
            borderRadius: 22, 
            overflow: 'hidden',
            boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
            display: 'flex',
            flexDirection: 'column',
          }}>
            {/* Contenedor de la imagen más grande y estilizado */}
            <div style={{ height: 200, background: accent, overflow: 'hidden', position: 'relative' }}>
              <img src={img} alt={title}
                style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.95 }}
                onError={e => { e.currentTarget.style.display = 'none'; }}
              />
            </div>
            
            {/* Cuerpo de la tarjeta */}
            <div style={{ padding: '1.6rem 1.8rem', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
              <span style={{ 
                fontSize: '1.4rem', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                width: '44px', 
                height: '44px', 
                borderRadius: '12px',
                background: 'rgba(0,0,0,0.04)',
                color: C.primary || '#103F29',
                marginBottom: 14 
              }}>
                <Icon />
              </span>
              <h3 style={{ fontSize: '1.08rem', fontWeight: 700, color: C.textPrimary, marginBottom: 8 }}>
                {title}
              </h3>
              <p style={{ fontSize: '0.9rem', color: C.textSecond, lineHeight: 1.6, margin: 0 }}>
                {desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
// ─────────────────────────────────────────────
// DOWNLOAD SECTION
// ─────────────────────────────────────────────
const DownloadSection = ({ apkUrl }) => (
  <section id="descargar" style={{ background: C.greenFaint, padding: '5rem 2rem', borderTop: `1px solid ${C.border}`, borderBottom: `1px solid ${C.border}` }}>
    <div style={{ maxWidth: 760, margin: '0 auto' }}>
      <div style={{
        background: C.surface, borderRadius: 24,
        padding: 'clamp(2rem,5vw,3.5rem)',
        textAlign: 'center',
        border: `1px solid ${C.border}`,
        boxShadow: '0 8px 40px rgba(0,74,37,0.07)',
        position: 'relative', overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', top: -50, right: -50, width: 160, height: 160, borderRadius: '50%', background: C.greenLight2, opacity: 0.6, pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: -40, left: -40, width: 120, height: 120, borderRadius: '50%', background: C.goldLight, opacity: 0.7, pointerEvents: 'none' }} />

        <span className="section-pill">Descarga Directa</span>
        <h2 style={{ fontFamily: "'Lora',serif", fontSize: 'clamp(1.7rem,4vw,2.4rem)', color: C.textPrimary, fontWeight: 600, marginBottom: 10 }}>
          Descarga Tu App
        </h2>
        <p style={{ color: C.textSecond, marginBottom: '2.5rem' }}>Disponible para Android 5.0 o superior</p>

        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '2rem', paddingBottom: '2.5rem', marginBottom: '2.5rem', borderBottom: `1px solid ${C.border}` }}>
          {[
            { label: 'Tamaño',     value: '107 MB' },
            { label: 'Versión',    value: 'v1.0.0' },
            { label: 'Plataforma', value: 'Android' },
          ].map(({ label, value, accent }) => (
            <div key={label} style={{ textAlign: 'center', minWidth: 80 }}>
              <p style={{ fontSize: '0.72rem', color: C.textMuted, textTransform: 'uppercase', letterSpacing: 1, marginBottom: 4 }}>{label}</p>
              <p style={{ fontSize: '1.4rem', fontWeight: 800, color: accent ? C.green : C.textPrimary }}>{value}</p>
            </div>
          ))}
        </div>

        {/* Botón principal: Descargar APK */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
          <a href={apkUrl} download="VIH-APP.apk" className="btn-solid" style={{ fontSize: '1.05rem', padding: '13px 34px', display: 'inline-flex', alignItems: 'center', gap: '10px' }}>
            <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Descargar APK Ahora
          </a>
          
          {/* Botón secundario: Descargar/Ver Manual en PDF */}
          <a href="/ManualUsuario_VihApp.pdf" download="Manual_Usuario_VIH_APP.pdf" style={{ 
            color: C.green, 
            textDecoration: 'none', 
            fontWeight: 600, 
            fontSize: '0.88rem', 
            display: 'inline-flex', 
            alignItems: 'center', 
            gap: '8px', 
            marginTop: '0.5rem',
            borderBottom: `1px dashed ${C.green}`
          }}>
            Descargar Manual de Usuario (PDF)
          </a>
        </div>

        <p style={{ fontSize: '0.75rem', color: C.textMuted, marginTop: 24 }}>
          Al descargar aceptas nuestros términos y condiciones
        </p>
      </div>
    </div>
  </section>
);

// ─────────────────────────────────────────────
// IMAGES SECTION
// ─────────────────────────────────────────────
const ScreenshotsCarrousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const screenshotList = [
    {
      id: 1,
      src: '/images/estado_emocional.png',
      title: 'Resumen emocional',
      subtitle: 'Bienestar diario',
      desc: 'Visualiza tu progreso emocional basado en tus respuestas. Entendemos que tu bienestar es importante, por eso te damos un resumen claro. Disponible para usuarios A.',
      accent: '#EEF6FF' // Fondo de acento sutil
    },
    {
      id: 2,
      src: '/images/seguimiento_medico.png',
      title: 'Control de medicación',
      subtitle: 'Toma el control',
      desc: 'Alarmas y registro de tratamiento para asegurar que nunca olvides una toma. La salud debe ser simple y sin complicaciones. Disponible para usuarios A y B.',
      accent: C.greenLight || '#E8F5E9'
    },
    {
      id: 3,
      src: '/images/seguimiento_diario.png',
      title: 'Seguimiento diario',
      subtitle: 'Tu día a día',
      desc: 'Registra tu estado de ánimo, síntomas y bienestar general en menos de un minuto. Un espacio seguro y confidencial para ti. Disponible para usuarios A.',
      accent: '#e8ebfc'
    },
    {
      id: 4,
      src: '/images/panel_progreso.png',
      title: 'Panel de progreso',
      subtitle: 'Estadísticas claras',
      desc: 'Muestra tu progreso a lo largo del tiempo con gráficos intuitivos y motivadores que te ayudan a tomar decisiones informadas. Disponible para usuarios A y B.',
      accent: '#bedcf5'
    }
  ];

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % screenshotList.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + screenshotList.length) % screenshotList.length);
  };

  const activeItem = screenshotList[activeIndex];

  return (
    <section id="galeria-interactiva" style={{ 
      background: C.bg || '#F9FAFB', 
      padding: '6rem 2rem', 
      borderTop: `1px solid ${C.border}` 
    }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>

        {/* Encabezado */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <span className="section-pill">Descubre la app</span>
          <h2 style={{ 
            fontFamily: "'Lora', serif", 
            fontSize: 'clamp(1.7rem, 4vw, 2.4rem)', 
            color: C.textPrimary, 
            fontWeight: 600, 
            marginBottom: 12 
          }}>
            Diseñada para tu comodidad
          </h2>
          <p style={{ color: C.textSecond, fontSize: '1rem', maxWidth: 520, margin: '0 auto', lineHeight: 1.7 }}>
            Conoce nuestras herramientas. Puedes explorar cada pantalla y su función principal tocando los botones.
          </p>
        </div>

        {/* Contenedor principal: Imagen a la izquierda, texto a la derecha */}
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '3rem',
          background: C.surface,
          borderRadius: 28,
          border: `1px solid ${C.border}`,
          padding: '2.5rem',
          boxShadow: '0 4px 16px rgba(0,0,0,0.03)',
        }}>

          {/* LADO IZQUIERDO: Vista de la pantalla del móvil */}
          <div style={{ 
            flex: '1 1 380px', 
            height: '460px', 
            background: activeItem.accent, 
            borderRadius: 20,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
            overflow: 'hidden',
            border: `1px solid ${C.border}`
          }}>
            <img 
              src={activeItem.src} 
              alt={activeItem.title}
              style={{ 
                height: '85%', 
                width: 'auto',
                objectFit: 'contain',
                objectPosition: 'bottom center',
                borderRadius: '16px 16px 0 0',
              }}
              onError={e => { e.currentTarget.style.display = 'none'; }}
            />
          </div>

          {/* LADO DERECHO: Descripción y controles */}
          <div style={{ flex: '1 1 420px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            
            {/* Píldora de categoría */}
            <span style={{ 
              alignSelf: 'flex-start',
              background: 'rgba(0,0,0,0.04)', 
              color: C.primary || '#103F29', 
              padding: '4px 12px', 
              borderRadius: 16, 
              fontSize: '0.8rem', 
              fontWeight: 700,
              marginBottom: 16
            }}>
              {activeItem.subtitle}
            </span>

            <h3 style={{ 
              fontSize: '2rem', 
              fontWeight: 800, 
              color: C.textPrimary, 
              lineHeight: 1.2,
              marginBottom: 14 
            }}>
              {activeItem.title}
            </h3>

            <p style={{ 
              fontSize: '0.98rem', 
              color: C.textSecond, 
              lineHeight: 1.7, 
              marginBottom: '2.5rem' 
            }}>
              {activeItem.desc}
            </p>

            {/* Controles para cambiar de pantalla */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem' }}>
              <button 
                onClick={handlePrev}
                style={{
                  background: 'transparent',
                  border: `1px solid ${C.border}`,
                  borderRadius: '50%',
                  width: '44px',
                  height: '44px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: C.textPrimary,
                }}
              >
                <FaChevronLeft />
              </button>

              {/* Indicadores de página (Puntos) */}
              <div style={{ display: 'flex', gap: '8px' }}>
                {screenshotList.map((item, index) => (
                  <span 
                    key={item.id}
                    onClick={() => setActiveIndex(index)}
                    style={{
                      width: activeIndex === index ? '24px' : '8px',
                      height: '8px',
                      borderRadius: '10px',
                      background: activeIndex === index ? (C.primary || '#103F29') : C.border,
                      cursor: 'pointer',
                      transition: 'width 0.3s ease'
                    }}
                  />
                ))}
              </div>

              <button 
                onClick={handleNext}
                style={{
                  background: 'transparent',
                  border: `1px solid ${C.border}`,
                  borderRadius: '50%',
                  width: '44px',
                  height: '44px',
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: C.textPrimary,
                }}
              >
                <FaChevronRight />
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};


// ─────────────────────────────────────────────
// QR SECTION
// ─────────────────────────────────────────────
const QrSection = ({ qrCodeApiUrl }) => (
  <section id="qr-download" style={{ background: C.bg, padding: '5rem 2rem', textAlign: 'center' }}>
    <span className="section-pill">Escanear</span>
    <h2 style={{ fontFamily: "'Lora',serif", fontSize: 'clamp(1.7rem,4vw,2.4rem)', color: C.textPrimary, fontWeight: 600, marginBottom: 10 }}>
      Descarga desde tu Teléfono
    </h2>
    <p style={{ color: C.textSecond, margin: '0 auto 3rem', maxWidth: 460, lineHeight: 1.7 }}>
      Apunta la cámara al código y el APK se descarga directo en tu Android.
    </p>

    <div className="float-anim" style={{
      display: 'inline-block',
      background: C.surface, 
      borderRadius: 22,
      padding: '2rem',
      border: `1px solid ${C.border}`,
      boxShadow: '0 12px 40px rgba(0,74,37,0.07)',
    }}>
      <div style={{ position: 'relative', display: 'inline-block' }}>
        <img 
          src={qrCodeApiUrl} 
          alt="QR VIH APP" 
          style={{ 
            width: 180, 
            height: 180, 
            borderRadius: 12, 
            display: 'block' 
          }} 
        />
      </div>
    </div>
  </section>
);
// ─────────────────────────────────────────────
// REQUIREMENTS
// ─────────────────────────────────────────────

const Requirements = () => (
  <section id="requisitos" style={{ background: C.surface, padding: '5rem 2rem', borderTop: `1px solid ${C.border}` }}>
    <div style={{ maxWidth: 860, margin: '0 auto', textAlign: 'center' }}>
      <span className="section-pill">Requisitos</span>
      <h2 style={{ fontFamily: "'Lora',serif", fontSize: 'clamp(1.7rem,4vw,2.4rem)', color: C.textPrimary, fontWeight: 600, marginBottom: 10 }}>
        ¿Tu dispositivo es compatible?
      </h2>
      <p style={{ color: C.textSecond, margin: '0 auto 3rem', maxWidth: 460, lineHeight: 1.7 }}>Revisa los requisitos antes de descargar.</p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.25rem', justifyContent: 'center' }}>
        {/* Mínimos */}
        <div className="card-hover" style={{ background: C.bg, border: `1.5px solid ${C.border}`, borderRadius: 18, padding: '2rem', textAlign: 'left' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: '1.5rem' }}>
            <span style={{ 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              width: '40px', 
              height: '40px', 
              borderRadius: '10px',
              background: 'rgba(0,0,0,0.04)',
              color: C.greenMid || '#103F29',
              fontSize: '1.15rem' 
            }}>
              <FaClipboardList />
            </span>
            <h3 style={{ fontWeight: 700, color: C.textPrimary, margin: 0 }}>Requisitos Mínimos</h3>
          </div>
          {['Android 5.0 o superior', '100 MB de espacio', '1 GB de RAM', 'Conexión a Internet'].map(r => (
            <div key={r} style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
              <CheckIcon color={C.greenMid} />
              <span style={{ fontSize: '0.92rem', color: C.textSecond }}>{r}</span>
            </div>
          ))}
        </div>

        {/* Recomendado */}
        <div className="card-hover" style={{
          background: C.surface, border: `2px solid ${C.green}`,
          borderRadius: 18, padding: '2rem', textAlign: 'left', position: 'relative', overflow: 'hidden',
        }}>
          <div style={{ 
            position: 'absolute', 
            top: 16, 
            right: 16, 
            background: C.green, 
            color: '#fff', 
            fontSize: '0.65rem', 
            fontWeight: 800, 
            letterSpacing: 1.2, 
            textTransform: 'uppercase', 
            padding: '3px 10px', 
            borderRadius: 20 
          }}>
            Recomendado
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: '1.5rem' }}>
            <span style={{ 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              width: '40px', 
              height: '40px', 
              borderRadius: '10px',
              background: `${C.greenLight || 'rgba(16,63,41,0.08)'}`,
              color: C.green || '#103F29',
              fontSize: '1.15rem' 
            }}>
              <FaStar />
            </span>
            <h3 style={{ fontWeight: 700, color: C.textPrimary, margin: 0 }}>Especificaciones Óptimas</h3>
          </div>
          {['Android 10 o superior', '200 MB de espacio libre', '3 GB de RAM o más', 'Conexión WiFi'].map(r => (
            <div key={r} style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
              <CheckIcon color={C.green} />
              <span style={{ fontSize: '0.92rem', color: C.textSecond }}>{r}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);
// ─────────────────────────────────────────────
// FOOTER
// ─────────────────────────────────────────────
const Footer = () => (
  <footer style={{ background:C.textPrimary, padding:'4rem 2rem 2rem' }}>
    <div style={{ maxWidth:1200, margin:'0 auto' }}>
      <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(160px, 1fr))', gap:'2rem', marginBottom:'3rem' }}>
        <div>
          <div style={{ display:'flex', alignItems:'center', gap:10, marginBottom:12 }}>
            <span style={{ fontFamily:"'Lora',serif", fontSize:'1.15rem', color:'#fff', fontWeight:600 }}>VIH APP</span>
          </div>
          <p style={{ fontSize:'0.86rem', color:'rgba(255,255,255,0.45)', lineHeight:1.8, maxWidth:200 }}>
            Acompañamiento de salud diseñado con cuidado por el equipo Binary & UABC.
          </p>
        </div>
        {[
          { title:'Navegación', links:[
            { label:'Inicio', href:'#inicio' },
            { label:'Funciones', href:'#funciones' },
            { label:'Descargar', href:'#descargar' }
          ] },
          { title:'Secciones', links:[
            { label:'Galería', href:'#galeria-interactiva' },
            { label:'QR', href:'#qr-download' },
            { label:'Requisitos', href:'#requisitos' }
          ] },
          { title:'Accesos rápidos', links:[
            { label:'Escanear QR', href:'#qr-download' },
            { label:'Ver funciones', href:'#funciones' },
            { label:'Descargar APK', href:'#descargar' }
          ] },
        ].map(({ title, links }) => (
          <div key={title}>
            <h4 style={{ color:'#fff', fontWeight:700, fontSize:'0.9rem', marginBottom:'1rem' }}>{title}</h4>
            {links.map(link => <a key={link.label} href={link.href} className="footer-link">{link.label}</a>)}
          </div>
        ))}
      </div>

      <div style={{ borderTop:'1px solid rgba(255,255,255,0.08)', paddingTop:'1.5rem', display:'flex', flexWrap:'wrap', gap:12, justifyContent:'space-between', alignItems:'center', fontSize:'0.78rem', color:'rgba(255,255,255,0.30)' }}>
        <p>© 2025 VIH APP — Todos los derechos reservados · Hecho por Binary</p>
        <span style={{ color:C.green, fontWeight:700 }}>UABC · Facisalud</span>
      </div>
    </div>
  </footer>
);

// ─────────────────────────────────────────────
// APP ROOT
// ─────────────────────────────────────────────
function App() {
  useEffect(() => {
    const inject = document.createElement('script');
    inject.src = 'https://cdn.botpress.cloud/webchat/v3.6/inject.js';
    inject.async = true;
    document.body.appendChild(inject);

    const config = document.createElement('script');
    config.src = 'https://files.bpcontent.cloud/2026/04/21/04/20260421045652-T0ORO02Y.js';
    config.defer = true;
    document.body.appendChild(config);

    return () => {
      if (document.body.contains(inject)) document.body.removeChild(inject);
      if (document.body.contains(config)) document.body.removeChild(config);
    };
  }, []);

  const APK_URL  = 'https://firebasestorage.googleapis.com/v0/b/facisalud-afced.firebasestorage.app/o/application-03052026.apk?alt=media&token=9ee547a9-9dcc-4ccf-8ec9-5e71631802e6';
  const LOGO_URL = '/icon copy.png';
  const QR_URL   = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(APK_URL)}&bgcolor=F8F9FA`;

  return (
    <>
      <GlobalStyles />
      <Hero apkUrl={APK_URL} logoUrl={LOGO_URL} />
      <main>
        <Features />
        <DownloadSection apkUrl={APK_URL} />
        <ScreenshotsCarrousel />
        <QrSection qrCodeApiUrl={QR_URL} />
        <Requirements />
      </main>
      <Footer />
    </>
  );
}

export default App;
