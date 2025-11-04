import React from 'react';

// --- Paleta de Colores Institucionales UABC ---
const colors = {
  uabcGreen: '#004A25', // Verde oficial UABC
  uabcGold: '#F1C400', // Dorado oficial UABC
  darkText: '#222222',
  lightText: '#FFFFFF',
  bodyBg: '#F4FAF7', // Un verde muy claro para el fondo
  white: '#FFFFFF',
  cardBg: '#F9F9F9', // Fondo para tarjetas de características
  gray: '#EAEAEA',
  midGray: '#555555',
  lightGray: '#AAAAAA',
};

// --- Icono SVG para el botón de descarga ---
const DownloadIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
    <polyline points="7 10 12 15 17 10"/>
    <line x1="12" y1="15" x2="12" y2="3"/>
  </svg>
);

// --- Efectos Hover (Globales) ---
const handleMouseOver = (e) => {
  let shadowColor = 'rgba(0, 74, 37, 0.3)'; // Sombra verde
  e.currentTarget.style.transform = 'scale(1.03)';
  e.currentTarget.style.boxShadow = `0 4px 15px ${shadowColor}`;
};

const handleMouseOut = (e) => {
  e.currentTarget.style.transform = 'scale(1)';
  e.currentTarget.style.boxShadow = 'none';
};

// ===================================================================
// --- COMPONENTE Hero ---
// ===================================================================
const Hero = ({ apkUrl, logoUrl }) => {
  const styles = {
    hero: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '5rem 2rem 3rem 2rem',
      textAlign: 'center',
      minHeight: '30vh',
    },
    heroLogo: {
      width: '150px',
      height: '150px',
      marginBottom: '1.5rem',
      borderRadius: '50%',
      boxShadow: '0 4px 15px rgba(0, 74, 37, 0.2)',
      backgroundColor: colors.white,
      padding: '5px',
      objectFit: 'contain',
    },
    h1: {
      fontSize: '2.8rem',
      fontWeight: 'bold',
      color: colors.uabcGreen,
      lineHeight: '1.2',
      margin: '0',
    },
    heroSubtitle: {
      fontSize: '1.2rem',
      color: colors.midGray,
      margin: '0.5rem 0 2rem 0',
    },
    apkButton: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '0.5rem',
      backgroundColor: colors.uabcGreen,
      color: colors.white,
      padding: '0.75rem 2rem',
      borderRadius: '50px',
      textDecoration: 'none',
      fontWeight: 'bold',
      border: 'none',
      cursor: 'pointer',
      transition: 'transform 0.2s ease, box-shadow 0.2s ease',
      fontSize: '1rem',
    },
    heroInfo: {
      fontSize: '0.9rem',
      color: colors.midGray,
      marginTop: '1.5rem',
    },
  };

  return (
    <section style={styles.hero}>
      <img src={logoUrl} alt="Logo de la app VIH" style={styles.heroLogo} />
      <h1 style={styles.h1}>VIH APP</h1>
      <p style={styles.heroSubtitle}>Descarga la aplicación ahora</p>
      <a
        href={apkUrl}
        download="VIH_APP.apk" // Nombre del archivo al descargar
        style={styles.apkButton}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        Descargar APK
      </a>
      <p style={styles.heroInfo}>v1.0.0 • Última actualización: Hoy</p>
    </section>
  );
};

// ===================================================================
// --- COMPONENTE Features ---
// ===================================================================
const Features = () => {
  const styles = {
    features: {
      backgroundColor: colors.white,
      padding: '4rem 2rem',
      textAlign: 'center',
    },
    h2: {
      fontSize: '2.2rem',
      fontWeight: 'bold',
      color: colors.uabcGreen,
      marginBottom: '0.5rem',
    },
    sectionSubtitle: {
      fontSize: '1.1rem',
      color: colors.midGray,
      maxWidth: '600px',
      margin: '0 auto 3rem auto',
    },
    featuresGrid: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '1.5rem',
      justifyContent: 'center',
      maxWidth: '1200px',
      margin: '0 auto',
    },
    featureCard: {
      flex: '1 1 250px',
      maxWidth: '300px',
      backgroundColor: colors.cardBg,
      padding: '2rem',
      borderRadius: '12px',
      textAlign: 'left',
      boxShadow: '0 4px 12px rgba(0,0,0,0.03)',
      border: `1px solid ${colors.gray}`,
    },
    featureIconContainer: {
      fontSize: '1.8rem',
      backgroundColor: 'rgba(0, 74, 37, 0.1)',
      color: colors.uabcGreen,
      width: '50px',
      height: '50px',
      borderRadius: '10px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    h3: {
      fontSize: '1.3rem',
      fontWeight: 'bold',
      color: colors.darkText,
      margin: '1rem 0 0.5rem 0',
    },
    p: {
      fontSize: '0.95rem',
      color: colors.midGray,
      lineHeight: '1.5',
    },
  };

  return (
    <section id="features" style={styles.features}>
      <h2 style={styles.h2}>Tu acompañante de salud</h2>
      <p style={styles.sectionSubtitle}>Funciones clave diseñadas para tu bienestar:</p>
      <div style={styles.featuresGrid}>
        <div style={styles.featureCard}>
          <div style={styles.featureIconContainer}>💊</div>
          <h3 style={styles.h3}>Control de Medicación</h3>
          <p style={styles.p}>Configura alarmas y lleva un registro fácil de tu tratamiento para no olvidar ninguna toma.</p>
        </div>
        <div style={styles.featureCard}>
          <div style={styles.featureIconContainer}>📝</div>
          <h3 style={styles.h3}>Seguimiento Diario</h3>
          <p style={styles.p}>Responde preguntas diarias para monitorear tu estado de ánimo, síntomas y bienestar general.</p>
        </div>
        <div style={styles.featureCard}>
          <div style={styles.featureIconContainer}>✨</div>
          <h3 style={styles.h3}>Mensajes Motivacionales</h3>
          <p style={styles.p}>Recibe notificaciones con mensajes positivos y de aliento para ayudarte en tu día a día.</p>
        </div>
        <div style={styles.featureCard}>
          <div style={styles.featureIconContainer}>🔒</div>
          <h3 style={styles.h3}>Privacidad Garantizada</h3>
          <p style={styles.p}>Tu información personal y tus registros de salud son 100% confidenciales y están encriptados.</p>
        </div>
      </div>
    </section>
  );
};

// ===================================================================
// --- COMPONENTE DownloadSection ---
// ===================================================================
const DownloadSection = ({ apkUrl }) => {
  const styles = {
    downloadSection: {
      backgroundColor: colors.uabcGreen,
      padding: '4rem 2rem',
    },
    h2: {
      fontSize: '2.2rem',
      fontWeight: 'bold',
      color: colors.uabcGreen,
      marginBottom: '0.5rem',
    },
    sectionSubtitle: {
      fontSize: '1.1rem',
      color: colors.midGray,
      maxWidth: '600px',
      margin: '0 auto 3rem auto',
    },
    downloadCard: {
      backgroundColor: colors.white,
      maxWidth: '800px',
      margin: '0 auto',
      borderRadius: '16px',
      padding: '3rem',
      textAlign: 'center',
      boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
    },
    downloadInfoGrid: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      gap: '1rem',
      margin: '2rem 0',
      paddingBottom: '2rem',
      borderBottom: `1px solid ${colors.gray}`,
    },
    infoBox: {
      textAlign: 'center',
      flex: '1',
      minWidth: '100px',
    },
    infoLabel: {
      fontSize: '0.9rem',
      color: colors.midGray,
      marginBottom: '0.25rem',
    },
    infoValue: {
      fontSize: '1.3rem',
      fontWeight: 'bold',
      color: colors.darkText,
    },
    infoValueGold: {
      fontSize: '1.3rem',
      fontWeight: 'bold',
      color: colors.uabcGold,
    },
    apkButtonLarge: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: '0.75rem',
      backgroundColor: colors.uabcGreen,
      color: colors.white,
      padding: '1rem 2.5rem',
      borderRadius: '10px',
      textDecoration: 'none',
      fontWeight: 'bold',
      border: 'none',
      cursor: 'pointer',
      transition: 'transform 0.2s ease, box-shadow 0.2s ease',
      fontSize: '1.2rem',
    },
    termsText: {
      fontSize: '0.8rem',
      color: colors.midGray,
      marginTop: '1.5rem',
    },
  };

  return (
    <section id="download" style={styles.downloadSection}>
      <div style={styles.downloadCard}>
        <h2 style={styles.h2}>Descarga Tu App</h2>
        <p style={{...styles.sectionSubtitle, color: colors.midGray, margin: '0.5rem auto 3rem auto'}}>Disponible para dispositivos Android 5.0 o superior</p>
        <div style={styles.downloadInfoGrid}>
          <div style={styles.infoBox}>
            <p style={styles.infoLabel}>Tamaño del APK</p>
            <p style={styles.infoValue}>107 MB</p>
          </div>
          <div style={styles.infoBox}>
            <p style={styles.infoLabel}>Versión</p>
            <p style={styles.infoValue}>v1.0.0</p>
          </div>
          <div style={styles.infoBox}>
            <p style={styles.infoLabel}>Descargas</p>
            <p style={styles.infoValueGold}>0</p>
          </div>
        </div>
        <a
          href={apkUrl}
          download="VIH-APP.apk"
          style={styles.apkButtonLarge}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
        >
          <DownloadIcon />
          <span>Descargar APK Ahora</span>
        </a>
        <p style={styles.termsText}>Al descargar aceptas nuestros términos y condiciones</p>
      </div>
    </section>
  );
};

// ===================================================================
// --- COMPONENTE QrSection ---
// ===================================================================
const QrSection = ({ qrCodeApiUrl }) => {
  const styles = {
    qrSection: {
      padding: '4rem 2rem',
      textAlign: 'center',
      backgroundColor: colors.white,
    },
    h2: {
      fontSize: '2.2rem',
      fontWeight: 'bold',
      color: colors.uabcGreen,
      marginBottom: '0.5rem',
    },
    sectionSubtitle: {
      fontSize: '1.1rem',
      color: colors.midGray,
      maxWidth: '600px',
      margin: '0 auto 3rem auto',
    },
    qrCodeContainer: {
      display: 'inline-block',
      padding: '1rem',
      backgroundColor: colors.white,
      borderRadius: '12px',
      boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
      border: `1px solid ${colors.gray}`,
    },
    qrCodeImage: {
      width: '200px',
      height: '200px',
      borderRadius: '8px',
    },
  };

  return (
    <section id="qr-download" style={styles.qrSection}>
      <h2 style={styles.h2}>Escanear para Descargar</h2>
      <p style={styles.sectionSubtitle}>
        Usa la cámara de tu teléfono para descargar el archivo .apk directamente.
      </p>
      <div style={styles.qrCodeContainer}>
        <img
          src={qrCodeApiUrl}
          alt="Codigo QR para descargar VIH APP"
          style={styles.qrCodeImage}
        />
      </div>
    </section>
  );
};

// ===================================================================
// --- COMPONENTE Requirements ---
// ===================================================================
const Requirements = () => {
  const styles = {
    requirementsSection: {
      backgroundColor: colors.bodyBg,
      padding: '4rem 2rem',
      textAlign: 'center',
    },
    h2: {
      fontSize: '2.2rem',
      fontWeight: 'bold',
      color: colors.uabcGreen,
      marginBottom: '0.5rem',
    },
    requirementsGrid: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '2rem',
      justifyContent: 'center',
      maxWidth: '1000px',
      margin: '0 auto',
    },
    reqCard: {
      flex: '1 1 300px',
      maxWidth: '450px',
      backgroundColor: colors.white,
      padding: '2rem',
      borderRadius: '12px',
      border: `2px solid ${colors.gray}`,
      textAlign: 'left',
    },
    reqTitle: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.75rem',
      fontSize: '1.3rem',
      fontWeight: 'bold',
      color: colors.darkText,
      marginBottom: '1.5rem',
    },
    reqIconGreen: {
      fontSize: '1.5rem',
      color: colors.uabcGreen,
    },
    reqIconGold: {
      fontSize: '1.5rem',
      color: colors.uabcGold,
    },
    reqList: {
      listStyle: 'none',
      paddingLeft: '0',
    },
    reqItem: {
      marginBottom: '0.75rem',
      color: colors.midGray,
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
    },
    reqItemGold: {
      fontWeight: '500',
      color: colors.uabcGold,
    },
  };

  return (
    <section id="requirements" style={styles.requirementsSection}>
      <h2 style={styles.h2}>Requisitos del Sistema</h2>
      <div style={styles.requirementsGrid}>
        <div style={styles.reqCard}>
          <h3 style={styles.reqTitle}>
            <span style={styles.reqIconGreen}>📋</span>
            Requisitos Mínimos
          </h3>
          <ul style={styles.reqList}>
            <li style={styles.reqItem}><span style={styles.reqItemGold}>•</span>Android 5.0 o superior</li>
            <li style={styles.reqItem}><span style={styles.reqItemGold}>•</span>100 MB de espacio disponible</li>
            <li style={styles.reqItem}><span style={styles.reqItemGold}>•</span>1 GB de RAM mínimo</li>
            <li style={styles.reqItem}><span style={styles.reqItemGold}>•</span>Conexión a Internet</li>
          </ul>
        </div>
        <div style={styles.reqCard}>
          <h3 style={styles.reqTitle}>
            <span style={styles.reqIconGold}>⚠️</span>
            Recomendado
          </h3>
          <ul style={styles.reqList}>
            <li style={styles.reqItem}>✅ Android 10 o superior</li>
            <li style={styles.reqItem}>✅ 200 MB de espacio disponible</li>
            <li style={styles.reqItem}>✅ 3 GB de RAM o más</li>
            <li style={styles.reqItem}>✅ <span style={{ color: colors.midGray, fontWeight: '500' }}>Conexión WiFi recomendada</span></li>
          </ul>
        </div>
      </div>
    </section>
  );
};

// ===================================================================
// --- COMPONENTE Footer ---
// ===================================================================
const Footer = () => {
  const styles = {
    footer: {
      backgroundColor: colors.uabcGreen,
      color: colors.lightGray,
      padding: '4rem 2rem 2rem 2rem',
    },
    footerGrid: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '2rem',
      justifyContent: 'space-between',
      maxWidth: '1200px',
      margin: '0 auto 3rem auto',
    },
    footerColumn: {
      flex: '1',
      minWidth: '180px',
    },
    footerLogo: {
      display: 'flex',
      alignItems: 'center',
      gap: '0.75rem',
      fontSize: '1.3rem',
      fontWeight: 'bold',
      color: colors.white,
      marginBottom: '1rem',
    },
    footerLogoIcon: {
      fontSize: '1.5rem',
      color: colors.uabcGold,
    },
    p: {
      fontSize: '0.95rem',
      color: colors.lightGray,
      lineHeight: '1.5',
    },
    footerLink: {
      display: 'block',
      color: colors.lightGray,
      textDecoration: 'none',
      marginBottom: '0.75rem',
      transition: 'color 0.2s ease',
    },
    footerH4: {
      fontSize: '1.1rem',
      fontWeight: 'bold',
      color: colors.white,
      marginBottom: '1.25rem',
    },
    footerCopyright: {
      textAlign: 'center',
      paddingTop: '2rem',
      borderTop: `1px solid ${colors.lightGray}`,
      fontSize: '0.9rem',
    },
  };

  return (
    <footer style={styles.footer}>
      <div style={styles.footerGrid}>
        <div style={styles.footerColumn}>
          <h4 style={styles.footerLogo}>
            <span style={styles.footerLogoIcon}>🟢</span>
            VIH APP
          </h4>
          <p style={styles.p}>La mejor aplicación para tu día a día.</p>
        </div>
        <div style={styles.footerColumn}>
          <h4 style={styles.footerH4}>Ayuda</h4>
          <a href="#" style={styles.footerLink}>FAQ</a>
          <a href="#" style={styles.footerLink}>Soporte</a>
          <a href="#" style={styles.footerLink}>Bugs</a>
        </div>
        <div style={styles.footerColumn}>
          <h4 style={styles.footerH4}>Legal</h4>
          <a href="#" style={styles.footerLink}>Privacidad</a>
          <a href="#" style={styles.footerLink}>Términos</a>
          <a href="#" style={styles.footerLink}>Licencia</a>
        </div>
        <div style={styles.footerColumn}>
          <h4 style={styles.footerH4}>Redes Sociales</h4>
          <a href="#" style={styles.footerLink}>Twitter</a>
          <a href="#" style={styles.footerLink}>Facebook</a>
          <a href="#" style={styles.footerLink}>Instagram</a>
        </div>
      </div>
      <div style={styles.footerCopyright}>
        <p>© 2025 VIH APP. Todos los derechos reservados. • Hecho por Binary</p>
      </div>
    </footer>
  );
};


// ===================================================================
// --- COMPONENTE App (Principal) ---
// ===================================================================
function App() {
  const styles = {
    app: {
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
      backgroundColor: colors.bodyBg,
      color: colors.darkText,
      minHeight: '100vh',
    },
  };

  // --- Constantes de la App ---
  // Estos nombres de archivo coinciden con tu carpeta /public
  const apkUrl = "https://drive.google.com/uc?export=download&id=1tXJ7hoPmJ-mH4p--01t5UYqOYp-UUyYe";
  const logoUrl = "/VIH-F.png";
  
  // Genera la URL del QR dinámicamente
  const qrCodeApiUrl = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodeURIComponent(window.location.origin + apkUrl)}&bgcolor=F4FAF7`;

  return (
    <div style={styles.app}>
      <main>
        <Hero 
          apkUrl={apkUrl} 
          logoUrl={logoUrl} 
        />
        <Features />
        <DownloadSection 
          apkUrl={apkUrl} 
        />
        <QrSection 
          qrCodeApiUrl={qrCodeApiUrl} 
        />
        <Requirements />
      </main>
      <Footer />
    </div>
  );
}

export default App;
