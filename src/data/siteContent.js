/**
 * ============================================================
 * CONTEÚDO DO SITE - Edita aqui tudo o que é pessoal
 * ============================================================
 * Substitui datas, textos e caminhos das imagens abaixo.
 * Imagens em: src/assets/ (import) ou public/images/ (caminho)
 */

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
  image: "/images/hero.jpg",
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
      image: "/images/timeline/met.jpg",
      imageAlt: "O dia em que nos conhecemos",
    },
    {
      date: "4 de setembro de 2025",
      isoDate: "2025-09-04",
      title: "Primeiro encontro",
      description:
        "Foi neste dia que que nos sentámos e bebemos um Castello de limão servido pela miúda do baile da bandida.",
      image: "/images/timeline/first-kiss.jpg",
      imageAlt: "O nosso primeiro beijo",
    },
    {
      date: "28 de setembro de 2025",
      isoDate: "2025-09-28",
      title: "Oficialmente nós",
      description:
        "Deixámos de fingir que era outra coisa. O início de algo que ambos escolhemos.",
      image: "/images/timeline/official.jpg",
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
      src: "/images/gallery/01.jpg",
      alt: "01",
      caption: "Primeiro fim de ano 🎆",
      span: "tall",
    },
    {
      src: "/images/gallery/02.jpg",
      alt: "02",
      caption: "Aquele coelho ficou bem pintado...",
      span: "large",
    },
    {
      src: "/images/gallery/03.jpg",
      alt: "03",
      caption: "Depois de uma longa caminhada no Gerês 🍃",
      span: "tall",
    },
    {
      src: "/images/gallery/04.jpg",
      alt: "04",
      caption: '"Escolhe a música"',
      span: "wide",
    },
    {
      src: "/images/gallery/05.jpg",
      alt: "05",
      caption: "Sporting allez 🦁",
      span: "tall",
    },
    {
      src: "/images/gallery/06.jpg",
      alt: "06",
      caption: "Foto de família",
      span: "normal",
    },
    {
      src: "/images/gallery/07.jpg",
      alt: "07",
      caption: '"Vamos lá cima comer uma tosta?"',
      span: "normal",
    },
    {
      src: "/images/gallery/08.jpg",
      alt: "08",
      caption: "Natal 2025 🎄",
      span: "tall",
    },
    {
      src: "/images/gallery/09.jpg",
      alt: "09",
      caption: "A nossa primeira foto 🫶",
      span: "wide",
    },
    {
      src: "/images/gallery/10.jpg",
      alt: "10",
      caption: "Hairy Lemon",
      span: "tall",
    },
    {
      src: "/images/gallery/11.jpg",
      alt: "11",
      caption: "Dia dos namorados 2025 💘",
      span: "wide",
    },
    {
      src: "/images/gallery/12.jpg",
      alt: "12",
      caption: "Flores do Bolhão🌼",
      span: "tall",
    },
    {
      src: "/images/gallery/13.jpg",
      alt: "13",
      caption: "Desprevenidos na Fazenda",
      span: "tall",
    },
    {
      src: "/images/gallery/14.jpg",
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
      isoDate: "2026-07-15",
      tribute:
        "Passaste anos a aprender a cuidar dos outros - com precisão, paciência e uma força silenciosa que a maioria das pessoas nunca vê. Ver-te a atravessar aquele palco não foi só orgulho. Foi testemunhar alguém a tornar-se exactamente quem estava destinada a ser.\n\nA Madeira deu-te a base. Tu deste-lhe dedicação. E eu tive o privilégio de te ver tornar-te enfermeira - alguém que vai mudar vidas porque nunca deixou de aparecer.",
      // EDITAR: Fotos em public/images/events/graduation/
      photos: [
        {
          src: "/images/events/graduation/01.jpg",
          alt: "Cerimónia de graduação",
          caption: "O momento em que o conquistaste",
        },
        {
          src: "/images/events/graduation/02.jpg",
          alt: "Capa e birrete",
          caption: "Anos de trabalho, um dia perfeito",
        },
        {
          src: "/images/events/graduation/03.jpg",
          alt: "Celebração depois",
          caption: "Depois dos aplausos",
        },
      ],
    },
    {
      id: "anniversary",
      title: "O Nosso Aniversário",
      subtitle: "Todos os anos, escolhido outra vez",
      date: "1 de junho",
      isoDate: "2022-06-01",
      tribute:
        "Aniversários não são sobre contar anos - são sobre lembrar por que começámos. Todos os junhos, lembro-me de que as melhores decisões nem sempre são as mais barulhentas.",
      photos: [
        {
          src: "/images/events/anniversary/01.jpg",
          alt: "Jantar de aniversário",
          caption: "Mais um ano, a escolher isto",
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
        "A maior parte do que amo em nós não acontece em ocasiões especiais. Está nas terças-feiras sem sal - na forma como me contas o teu dia, no silêncio que não parece vazio, no facto de casa ter deixado de ser um sítio e ter passado a ser tu.\n\nNão preciso de grandes gestos para saber o que temos. Preciso de mais dias comuns como estes.",
    },
    {
      id: "letter-2",
      title: "Sobre a tua graduação",
      date: "Julho de 2026",
      content:
        "Sei o quanto trabalhaste para isto - as manhãs cedo, as dúvidas que nunca mostraste, as horas a preparar algo que importa. Pensas que estás apenas a receber um diploma. Mas estás a tornar-te alguém que vai segurar a mão das pessoas nos dias mais difíceis.\n\nTenho orgulho em ti de uma forma difícil de pôr em palavras. Por isso fiz isto.",
    },
    {
      id: "letter-3",
      title: "Sobre voltar aqui",
      date: "Sempre que precisares",
      content:
        "Este site não é um presente de uma só vez. É um lugar a que podes voltar - num dia difícil, num dia feliz, ou numa tarde calma em que queiras apenas recordar.\n\nConstruí-o porque algumas coisas merecem mais permanência do que uma mensagem ou um momento. Porque mereces saber, sempre que precisares de o recordar, que és amada - com calma, por completo e sem condições.",
    },
  ],
};

// ─── FECHO ──────────────────────────────────────────────────
export const closing = {
  // EDITAR: Mensagem final
  headline: "Isto começou como um presente para um dia.",
  subheadline:
    "Mas quis que se tornasse num lugar a que pudesses sempre voltar.",
  body: "Alguns momentos passam. Outros ficam connosco - e os que ficam merecem um lar.",
  // EDITAR: Imagem de fecho
  image: "/images/closing.jpg",
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
