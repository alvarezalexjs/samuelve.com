/* ======================================================================
   EJEMPLO: sitio de Samuel hecho con la plantilla.
   Cada campo está explicado en plantilla/config.js.
   Fechas, sets, correos y textos son de ejemplo: cámbialos por los reales.
   ====================================================================== */
window.SITE = {

  name: 'Samuel',
  role: 'DJ & Producer',
  lang: 'en',                             // idioma al abrir la web; el botón EN / ES cambia a español
  title: 'Samuel (VE) | DJ / Producer',                    // nombre de la pestaña del navegador
  description: { en: 'Samuel (VE), House and Tech House DJ and producer based in Barcelona. Upcoming shows, sets and booking.', es: 'Samuel (VE), DJ y productor de House y Tech House en Barcelona. Próximas fechas, sets y booking.' },
  h1: { en: 'Samuel (VE), DJ and producer', es: 'Samuel (VE), DJ y productor' },                     // lo leen Google y los lectores de pantalla; el logo sigue siendo lo que se ve
  share: 'https://samuelve.com/assets/hero.jpg',   // imagen al compartir el link
  accent: '#E3120B',
  accentInk: '#fff',
  bookingButton: false,                    // sin botón "Reservar" arriba (portada y barra fija)

  logo: {
    src: 'assets/samuel-logo.webp',
    white: 'assets/samuel-logo-white.webp',
    width: 2000, height: 725,
    cuts: [462, 708, 1102, 1389, 1686]     // S | A | M | U | E | L.
  },

  hero: {
    src: 'assets/hero.jpg',
    width: 1333, height: 2000,
    focus: [668, 470],                     // las gafas
    tagline: '',
    headline: '',
    cta: { en: 'BOOK A DATE', es: 'RESERVAR UNA FECHA' }
  },

  nav: [
    [{ en: 'HOME', es: 'INICIO' }, '#inicio'], ['BIO', '#bio'], [{ en: 'DATES', es: 'FECHAS' }, '#fechas'],
    ['SETS', '#sets'], [{ en: 'GALLERY', es: 'GALERÍA' }, '#galeria'], ['BOOKING', '#booking'],
    [{ en: 'CONTACT', es: 'CONTACTO' }, '#contacto'], ['INSTAGRAM', 'https://www.instagram.com/samuelve.wav/'], ['SOUNDCLOUD', 'https://soundcloud.com/samuelcabreradj']
  ],

  bio: {
    note: '',
    photo: { src: 'assets/photos/profile-red-decks.jpg', alt: { en: 'Samuel in profile in the DJ booth under red light, hands raised', es: 'Samuel de perfil en la cabina, bajo luz roja, con las manos en alto' }, pos: '45% 40%' },
    lede: '',
    text: {
      en: [
        'Samuel (VE) is a Venezuelan DJ and producer focused on House and Tech House, with a distinctive musical identity that blends groove, elegance and sensuality. His sound is built on dynamic rhythms, carefully crafted selections and contagious energy, creating sophisticated, hard-hitting sets where musical expression and the connection with the dance floor take centre stage.',
        'His passion for electronic music began in mid-2017, when he started exploring the art of DJing and sharing his first experiences behind the decks with friends. In 2021 he took the decisive step towards going professional, turning his passion into an artistic project and committing fully to his growth within the electronic scene.',
        'Moving to Barcelona marked a turning point in his musical evolution and in the way he understands club culture. Influenced by the European electronic scene, he gradually shaped his sound into a more refined, sophisticated and club-oriented proposal, without losing the groove and energy that define his musical roots.',
        'Behind the decks, Samuel builds sets driven by rhythm, progression and atmosphere. His approach combines confidence, charisma and a carefully curated selection, creating immersive experiences that invite the crowd to connect with the music and enjoy every moment on the dance floor.',
        'Over the course of his career he has played events in Venezuela, Colombia, Germany and Spain, sharing the booth with renowned international artists such as Rafa Barrios, Héctor Couto, Anthony Godfather, Bassel Darwish, Jay de Lys, Freddy Bello, Art No Logia, Vito (UK) and Sebastián Ledher, among others.',
        'With a clear artistic vision and a constant commitment to his musical growth, Samuel (VE) keeps refining his sound and expanding his presence on the international electronic scene, building a project that reflects his passion for House, his connection to club culture and his own particular way of understanding the dance floor.'
    ],
      es: [
        'Samuel (VE) es DJ y productor venezolano enfocado en los sonidos House y Tech House, con una identidad musical distintiva que combina groove, elegancia y sensualidad. Su sonido se construye a partir de ritmos dinámicos, selecciones musicales cuidadosamente trabajadas y una energía contagiosa, creando sesiones sofisticadas y contundentes donde la expresión musical y la conexión con la pista de baile son protagonistas.',
        'Su pasión por la música electrónica comenzó a mediados de 2017, cuando empezó a explorar el arte del DJing y a compartir sus primeras experiencias detrás de los platos con amigos. En 2021 decidió dar un paso definitivo hacia la profesionalización, transformando su pasión en un proyecto artístico y apostando plenamente por su desarrollo dentro de la escena electrónica.',
        'Su llegada a Barcelona marcó un punto de inflexión en su evolución musical y en su manera de entender la cultura clubbing. Influenciado por la escena electrónica europea, fue moldeando progresivamente su sonido hacia una propuesta más refinada, sofisticada y orientada al club, sin perder el groove y la energía que definen sus raíces musicales.',
        'Detrás de los platos, Samuel construye sesiones guiadas por el ritmo, la progresión y la atmósfera. Su propuesta combina confianza, carisma y una cuidada selección musical, creando experiencias envolventes que invitan al público a conectar con la música y disfrutar de cada momento en la pista de baile.',
        'A lo largo de su trayectoria ha participado en eventos en Venezuela, Colombia, Alemania y España, compartiendo cabina con reconocidos artistas de la escena internacional como Rafa Barrios, Héctor Couto, Anthony Godfather, Bassel Darwish, Jay de Lys, Freddy Bello, Art No Logia, Vito (UK) y Sebastián Ledher, entre otros.',
        'Con una visión artística definida y un compromiso constante con su evolución musical, Samuel (VE) continúa perfeccionando su sonido y expandiendo su presencia dentro de la escena electrónica internacional, construyendo un proyecto que refleja su pasión por el House, su conexión con la cultura clubbing y su particular manera de entender la pista de baile.'
    ]
    },

    facts: [],
    gallery: [
      { src: 'assets/photos/white-shirt-decks.jpg', alt: { en: 'Samuel in a white T-shirt with headphones around his neck, looking down at the mixer', es: 'Samuel con camiseta blanca y auriculares al cuello, mirando la mesa de mezclas' }, pos: '50% 30%' },
      { src: 'assets/photos/back-red-booth.jpg', alt: { en: 'Samuel from behind in the booth under red light, facing the OFF x Fratello sign', es: 'Samuel de espaldas en la cabina bajo luz roja, frente al letrero de OFF x Fratello' }, pos: '45% 50%' },
      { src: 'assets/photos/crowd-palms.jpg', alt: { en: 'Open-air party at night: the crowd in front of the booth under a neon sign, between palm trees and string lights', es: 'Fiesta al aire libre de noche: el público frente a la cabina bajo un letrero de neón, entre palmeras y guirnaldas de luces' }, ratio: 1170/1244 },
      { src: 'assets/photos/bw-mixer.jpg', alt: { en: 'Black and white shot of Samuel in a cap, mixing in the booth', es: 'Samuel con gorra en blanco y negro, mezclando en la cabina' }, pos: '50% 50%' },
      { src: 'assets/photos/back-blue-crowd.jpg', alt: { en: 'Samuel from behind in the booth, facing the crowd under blue light', es: 'Samuel de espaldas en la cabina, mirando al público bajo luz azul' }, pos: '45% 50%' },
      { src: 'assets/photos/bw-hands-up.jpg', alt: { en: 'Black and white shot of Samuel clapping with his hands up behind the decks, under a neon sign', es: 'Samuel en blanco y negro aplaudiendo con las manos en alto tras los platos, bajo un letrero de neón' }, ratio: 1170/1243 }
    ]
  },

  dates: {
    note: { en: 'Upcoming shows', es: 'Próximas fechas' },
    bookingLine: false,                    // sin la línea "Samuel en tu ciudad: reserva una fecha"
    photo: { src: 'assets/photos/off-fratello-neon.jpg', alt: { en: 'Samuel in the booth under the OFF x Fratello neon sign', es: 'Samuel en la cabina bajo el letrero de neón de OFF x Fratello' }, pos: '45% 45%', bandPos: '45% 40%' },
    items: [
      /* shows pasados: salen solos en "Shows recientes" */
      { date: '2026-10-09', city: 'Barcelona', venue: { en: 'OFF x Fratello at NIX · Opening', es: 'OFF x Fratello en NIX · Opening' },
        url: 'https://es.ra.co/events/2538938', lineup: ['Olivia Bass', 'Zamoras', 'Sebastián Peña', 'Samuel (VE)'] },
      { date: '2026-10-16', city: 'Barcelona', venue: { en: 'OFF x Fratello at NIX', es: 'OFF x Fratello en NIX' },
        url: 'https://es.ra.co/events/2546730', lineup: ['Jay de Lys', 'Abril Love', 'Freddy Bello', 'Samuel (VE)'] },
      { date: '2026-10-30', city: 'Barcelona', venue: { en: 'OFF x Fratello at NIX · Halloween', es: 'OFF x Fratello en NIX · Halloween' },
        url: 'https://es.ra.co/events/2546733', lineup: ['Calussa', 'DIROS', 'Sebastián Peña', 'Samuel (VE)'] },
      { date: '2026-11-06', city: 'Barcelona', venue: { en: 'OFF x Fratello at NIX', es: 'OFF x Fratello en NIX' },
        url: 'https://es.ra.co/events/2572199', lineup: ['Vito (UK)', 'Ferra Black', 'Samuel (VE)', 'Marau & Taha'] },

      /* próximos */
      { date: '2026-11-27', city: 'Barcelona', venue: { en: 'OFF x Fratello at NIX', es: 'OFF x Fratello en NIX' }, url: 'https://es.ra.co/events/2572224',
        lineup: ['Sebastian Ledher', 'Alzuru', 'Samuel (VE)', 'Dani Corberó'] },
      { date: '2026-11-28', city: 'Madrid', venue: { en: 'KLANDESTINOS at Sala MUV', es: 'KLANDESTINOS en Sala MUV' }, url: 'https://site.fourvenues.com/es/klndestinos/events/klndestinos-chapter-i-27-11-2026-IXER',
        lineup: { 'Line up': ['Vito (UK)', 'Freddy Bello', 'Renier Angarita', 'Red Effects', 'Myke González'],
                  'El Amanecer': ['Luisana Márquez', 'Secret Guest', 'Samuel (VE)', 'Grimon'] } },
      { date: '2026-12-18', city: 'Barcelona', venue: { en: 'OFF x Fratello at NIX', es: 'OFF x Fratello en NIX' },
        lineup: ['Andrea Quintero', 'Juan (AR)', 'Rubenus', 'Samuel (VE)'] },
      { date: '2026-12-24', city: 'Barcelona', venue: { en: 'OFF x Fratello at NIX · Christmas Eve', es: 'OFF x Fratello en NIX · Noche Buena' },
        lineup: ['Alberto Dimeo', 'Dellavega', 'Samuel (VE)', 'Sergio Blema'] },
      { date: '2026-12-31', city: 'Barcelona', venue: 'TBA' }
    ]
  },

  /* Set de fondo (desactivado). Para volver a activarlo, quita los // de estas líneas:
     suena al primer toque o clic, con un reproductor pequeño abajo a la izquierda. */
  // music: {
  //   title: 'Overtones Radio Show, Episode 037',
  //   sc: 'https://soundcloud.com/overtonesrecords/overtones-radio-show-samuel-ve-episode-037',
  //   volume: 70
  // },

  sets: {
    note: { en: 'Recorded sets and sessions. Hit play or listen on your platform.', es: 'Sets y sesiones grabadas. Dale play o escúchalos en tu plataforma.' },
    square: true,                          // portadas cuadradas: las carátulas de SoundCloud y YouTube
    soundcloud: 'https://soundcloud.com/samuelcabreradj',
    /* sc: suena dentro de la página.  url: se abre en su plataforma (los dos sets marcados
       no permiten reproducirse fuera de SoundCloud; lo decide quien los subió). */
    items: [
      { title: 'Overtones Radio Show, Episode 037', meta: '1:01:48 • Overtones Records', img: 'assets/covers/overtones-037.jpg',
        sc: 'https://soundcloud.com/overtonesrecords/overtones-radio-show-samuel-ve-episode-037' },
      { title: 'House Music Series 003', meta: '1:02:28 • SoundCloud', img: 'assets/covers/house-music-series-003.jpg',
        url: 'https://soundcloud.com/samuelcabreradj/house-music-series-003' },
      { title: 'Showcase #002', meta: '1:26:56 • Subverse', img: 'assets/covers/showcase-002-subverse.jpg',
        url: 'https://soundcloud.com/subverse-r/samuel-ve-showcase-002-o' },
      { title: 'White Session, Barcelona 2025', meta: '1:22:56 • YouTube', img: 'assets/covers/white-session-2025.jpg', pos: '52% 50%',
        url: 'https://www.youtube.com/watch?v=uF66Miw5hoE' }
    ],
    platforms: [ ['SoundCloud', 'https://soundcloud.com/samuelcabreradj'], ['Spotify', 'https://open.spotify.com/artist/49iAantuwas3phMibQRKvn'], ['YouTube', 'https://www.youtube.com/@Samuelve_oficial'] ]
  },

  booking: {
    section: false,                        // sin sección Booking: el correo de booking va en Contacto
    note: { en: 'Clubs, festivals, private events and brands.', es: 'Clubes, festivales, eventos privados y marcas.' },
    photo: { src: 'assets/photos/off-fratello-neon.jpg', alt: { en: 'Samuel in the booth under the OFF x Fratello neon sign', es: 'Samuel en la cabina bajo el letrero de neón de OFF x Fratello' }, pos: '45% 40%' },
    intro: { en: 'Tell us what you have in mind and we will get back to you with availability and terms.', es: 'Cuéntanos qué tienes en mente y te respondemos con disponibilidad y condiciones.' },
    email: 'booking@samuelve.com',
    types: { en: ['Club', 'Festival', 'Private event', 'Brand', 'Other'], es: ['Club', 'Festival', 'Evento privado', 'Marca', 'Otro'] }
  },

  /* Lista de correo: el formulario de Contacto envía cada correo a `endpoint`.
     Vacío = el formulario se ve, pero todavía no guarda nada. */
  newsletter: {
    tag: 'Newsletter',
    title: { en: 'Hear it first', es: 'Entérate primero' },
    text: { en: 'Drop your email and be the first to know about new shows, sets and releases.', es: 'Deja tu correo y te avisamos antes que nadie de nuevas fechas, sets y lanzamientos.' },
    button: { en: 'SUBSCRIBE', es: 'SUSCRIBIRME' },
    endpoint: ''
  },

  contact: {
    press: 'press@samuelve.com',
    socials: [ ['Instagram', 'https://www.instagram.com/samuelve.wav/'], ['SoundCloud', 'https://soundcloud.com/samuelcabreradj'], ['Spotify', 'https://open.spotify.com/artist/49iAantuwas3phMibQRKvn'], ['YouTube', 'https://www.youtube.com/@Samuelve_oficial'] ]
  },

  /* ---------- Fuente de los títulos: Archivo, ancha y gruesa ---------- */
  titleFont: { family: "Archivo Wide", src: "assets/archivo-variable.woff2", range: "100 900", stretchRange: "62% 125%",
    weight: 800, stretch: "125%", size: 0.72, tracking: "-0.04em", lineHeight: 0.9 },

  footer: {
    copyright: '© {year} Samuel (VE). All rights reserved.',   // {year} = año actual
    fill: { src: 'assets/photos/walking-red.jpg', pos: '100% 52%', size: '340% auto' }   // la luz roja y naranja junto a él
  }
};
