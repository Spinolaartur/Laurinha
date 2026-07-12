/**
 * ============================================================
 * CONTEÚDO DO SITE - Edita aqui tudo o que é pessoal
 * ============================================================
 * Substitui datas, textos e caminhos das imagens abaixo.
 * Imagens em: src/assets/ (import) ou public/images/ (caminho)
 */

const withBase = (path) =>
  `${import.meta.env.BASE_URL}${path.replace(/^\/+/, "")}`;

export const siteMeta = {
  // EDITAR: Título do site ( também atualiza index.html )
  title: "A Nossa História",
  // EDITAR: Nome dela ( usado com moderação )
  herName: "Laura",
  // EDITAR: Teu nome ( opcional, para o rodapé )
  yourName: "Artur",
};

export const navigation = [
  { id: "hero", label: "Início" },
  { id: "gallery", label: "Galeria" },
  { id: "timeline", label: "Linha do Tempo" },
  { id: "events", label: "Momentos" },
  { id: "letters", label: "Cartas" },
  { id: "closing", label: "Sempre" },
];

// ─── INTERFACE ( textos dos componentes ) ───────────────────
export const ui = {
  siteBrand: "A Nossa História",
  heroEyebrow: "Um arquivo vivo",
  scroll: "Deslizar",
  scrollToTimeline: "Ir para a linha do tempo",
  navAria: "Navegação principal",
  openMenu: "Abrir menu",
  closeMenu: "Fechar menu",
  navigate: "Navegar",
  lightMode: "Modo claro",
  darkMode: "Modo escuro",
  closeLightbox: "Fechar",
  prevImage: "Imagem anterior",
  nextImage: "Imagem seguinte",
  imageOf: (current, total) => `${current} de ${total}`,
  addPhoto: "Adiciona a tua foto aqui",
  viewPhoto: (alt) => `Ver foto: ${alt}`,
  years: "Anos",
  months: "Meses",
  days: "Dias",
  hours: "Horas",
  minutes: "Minutos",
  seconds: "Segundos",
  footerFor: "Para",
};

// ─── HERO ───────────────────────────────────────────────────
export const hero = {
  // EDITAR: Título principal
  headline: "Um arquivo vivo a que podes voltar, a qualquer hora",
  // EDITAR: Parágrafo de apoio
  subheadline:
    "Este é um pequeno lugar para os momentos que mudaram tudo - um arquivo vivo a que podes voltar, a qualquer hora.",
  // EDITAR: Texto do botão principal
  primaryCta: "Entrar na nossa história",
  // EDITAR: Texto do botão secundário
  secondaryCta: "Ver a linha do tempo",
  // EDITAR: Imagem hero - coloca em public/images/hero.jpg
  image: withBase("images/hero.jpg"),
  imageAlt: "Um momento tranquilo juntos",
};

// ─── DATAS IMPORTANTES ( usadas nos contadores ) ────────────
export const importantDates = {
  // EDITAR: Datas ISO - AAAA-MM-DD ou datetime completo
  met: "2023-08-14",
  firstKiss: "2025-09-04",
  officialStart: "2025-09-28",
};

// ─── LINHA DO TEMPO ─────────────────────────────────────────
export const timeline = {
  // EDITAR: Etiqueta e título da secção
  label: "A Nossa Linha do Tempo",
  title: "Os capítulos até aqui",
  subtitle:
    "Nem todos os dias são marcantes. Mas alguns reescrevem tudo o que vem a seguir.",
  milestones: [
    {
      // EDITAR: Data visível e data ISO
      date: "14 de agosto de 2023",
      isoDate: "2023-08-14",
      title: "O dia em que nos conhecemos",
      description:
        "Ainda não sabíamos, mas neste dia tivémos a primeira conversa de muitas. Desde o primeiro olhar que me apaixonei por ti.",
      // EDITAR: Caminho da imagem ( null para ocultar )
      image: withBase("images/timeline/met.jpg"),
      imageAlt: "O dia em que nos conhecemos",
    },
    {
      date: "4 de setembro de 2025",
      isoDate: "2025-09-04",
      title: "Primeiro encontro",
      description:
        "Foi neste dia que que nos sentámos e bebemos um Castello de limão servido pela miúda do baile da bandida.",
      image: withBase("images/timeline/first-kiss.jpg"),
      imageAlt: "O nosso primeiro beijo",
    },
    {
      date: "28 de setembro de 2025",
      isoDate: "2025-09-28",
      title: "Oficialmente nós",
      description:
        "Deixámos de fingir que era outra coisa. O início de algo que ambos escolhemos.",
      image: withBase("images/timeline/official.jpg"),
      imageAlt: "O dia em que ficámos juntos",
    },
    {
      date: "Verão de 2024",
      isoDate: "2024-07-01",
      title: "Verões na Madeira",
      description:
        "Noites longas, luz atlântica e a sensação de que alguns lugares entram na nossa história sem esforço.",
      image: null,
      imageAlt: "",
    },
  ],
};

// ─── TEMPO DESDE ────────────────────────────────────────────
export const timeSince = {
  label: "Tempo Desde",
  title: "Cada hora, contada em silêncio",
  subtitle:
    "Não porque os números sejam o mais importante - mas porque o que representam, sim.",
  counters: [
    {
      dateKey: "officialStart",
      pill: "Oficialmente nós",
      label: "Desde sermos nós",
      description: "O dia em que escolhemos isto",
    },
    {
      // EDITAR: Deve corresponder às chaves em importantDates
      dateKey: "met",
      pill: "O dia em que nos conhecemos",
      label: "Desde nos conhecermos",
      description: "Desde a primeira conversa",
    },
    {
      dateKey: "firstKiss",
      pill: "Primeiro beijo",
      label: "Desde o nosso primeiro beijo",
      description: "Quando tudo se tornou mais claro",
    },
  ],
};

// ─── GALERIA ────────────────────────────────────────────────
export const gallery = {
  label: "Galeria",
  title: "Fragmentos de nós",
  subtitle: "Pequenos pedaços de um quadro muito maior.",
  // EDITAR: Adiciona mais itens - imagens em public/images/gallery/
  items: [
    {
      src: withBase("images/gallery/01.jpg"),
      alt: "01",
      caption: "Primeiro fim de ano 🎆",
      span: "tall",
    },
    {
      src: withBase("images/gallery/02.jpg"),
      alt: "02",
      caption: "Aquele coelho ficou bem pintado...",
      span: "large",
    },
    {
      src: withBase("images/gallery/03.jpg"),
      alt: "03",
      caption: "Depois de uma longa caminhada no Gerês 🍃",
      span: "tall",
    },
    {
      src: withBase("images/gallery/04.jpg"),
      alt: "04",
      caption: '"Escolhe a música"',
      span: "wide",
    },
    {
      src: withBase("images/gallery/05.jpg"),
      alt: "05",
      caption: "Sporting allez 🦁",
      span: "tall",
    },
    {
      src: withBase("images/gallery/06.jpg"),
      alt: "06",
      caption: "Foto de família",
      span: "normal",
    },
    {
      src: withBase("images/gallery/07.jpg"),
      alt: "07",
      caption: '"Vamos lá cima comer uma tosta?"',
      span: "normal",
    },
    {
      src: withBase("images/gallery/08.jpg"),
      alt: "08",
      caption: "Natal 2025 🎄",
      span: "tall",
    },
    {
      src: withBase("images/gallery/09.jpg"),
      alt: "09",
      caption: "A nossa primeira foto 🫶",
      span: "wide",
    },
    {
      src: withBase("images/gallery/10.jpg"),
      alt: "10",
      caption: "Hairy Lemon",
      span: "tall",
    },
    {
      src: withBase("images/gallery/11.jpg"),
      alt: "11",
      caption: "Dia dos namorados 2025 💘",
      span: "wide",
    },
    {
      src: withBase("images/gallery/12.jpg"),
      alt: "12",
      caption: "Flores do Bolhão🌼",
      span: "tall",
    },
    {
      src: withBase("images/gallery/13.jpg"),
      alt: "13",
      caption: "Desprevenidos na Fazenda",
      span: "tall",
    },
    {
      src: withBase("images/gallery/14.jpg"),
      alt: "14",
      caption: "Preparação para o Ironman",
      span: "normal",
    },
  ],
};

// ─── MOMENTOS ESPECIAIS ─────────────────────────────────────
export const specialEvents = {
  label: "Momentos Especiais",
  title: "Dias que vale a pena marcar",
  subtitle: "Os dias que merecem mais do que uma menção rápida.",
  // EDITAR: Adiciona mais eventos - cada um torna-se um separador
  events: [
    {
      id: "graduation",
      title: "Graduação em Enfermagem",
      subtitle: "Universidade da Madeira",
      // EDITAR: Data da graduação
      date: "Julho de 2026",
      isoDate: "2026-07-18",
      tribute:
        "A minha enfermeira favorita. Foi nisto em que tornaste hoje. E eu não podia estar mais orgulhoso de ti. \n\nFoi um dia muito bonito.",
      // EDITAR: Fotos em public/images/events/graduation/
      photos: [
        {
          src: withBase("images/events/graduation/01.jpg"),
          alt: "",
          caption: "",
        },
        {
          src: withBase("images/events/graduation/02.jpg"),
          alt: "",
          caption: "",
        },
        {
          src: withBase("images/events/graduation/03.jpg"),
          alt: "",
          caption: "",
        },
      ],
    },
  ],
};

// ─── CARTAS / NOTAS ─────────────────────────────────────────
export const letters = {
  label: "Cartas",
  title: "Notas que quis que guardasses",
  subtitle:
    "Pequenas coisas que não disse em voz alta - ou disse uma vez e quis repetir.",
  // EDITAR: Personaliza cada carta
  items: [
    {
      id: "letter-1",
      title: "Sobre os dias comuns",
      date: "Uma nota tranquila",
      content:
        'O nosso amor não está apenas nas ocasiões especiais. Está em todas as mensagens de "Bom dia", nos pequenos gestos de carinho, nas terças-feiras normais, no facto de "casa" ter deixado de ser um sítio e ter passado a ser tu.\n\nNão são preciso de grandes gestos para sabermos o que temos. Preciso de mais dias comuns como estes.',
    },
    {
      id: "letter-3",
      title: "Sobre namorar contigo",
      date: "Apreciação não crítica",
      content:
        "Em ti encontrei alguém com quem posso partilhar tudo e ser a minha melhor versão de mim, ao mesmo tempo que te faço ser a tua. Namorar contigo não é complicado, é natural.\n\nÉ como se estivéssemos a fazer algo que sempre soubemos que devíamos fazer",
    },
    {
      id: "letter-3",
      title: "Sobre voltar aqui",
      date: "Sempre que precisares",
      content:
        "Este site não é um presente de uma só vez. É um lugar a que podes voltar, tanto num dia difícil, num dia feliz, ou numa tarde calma em que queiras apenas recordar.\n\nFi-lo para ti, mas também para nós. Para que possamos sempre voltar, juntos.",
    },
  ],
};

// ─── FECHO ──────────────────────────────────────────────────
export const closing = {
  // EDITAR: Mensagem final
  headline: "Isto começou como um presente para a tua graduação",
  subheadline: "",
  body: "Mas quis que se tornasse num lugar a que pudesses sempre voltar.",
  // EDITAR: Imagem de fecho
  image: withBase("images/closing.jpg"),
  imageAlt: "Nós, juntos",
  // EDITAR: Despedida final
  signOff: "Sempre teu,",
  signature: "Artur",
};

// ─── RODAPÉ ─────────────────────────────────────────────────
export const footer = {
  text: "Feito com carinho, para a minha pipoca.",
  year: new Date().getFullYear(),
};
