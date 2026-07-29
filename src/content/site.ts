export const siteConfig = {
  name: "Lapidando Tesouros",
  legalName: "Comunidade Terapêutica Lapidando Tesouros",
  description:
    "Acolhimento, fé e dignidade para transformar vidas e reconstruir famílias.",
  location: "Aparecida de Goiânia, Goiás",
  address: {
    street: "Rua Sebastião Vieira, Quadra 149, lotes 01 a 28",
    district: "Setor Rosa dos Ventos",
    city: "Aparecida de Goiânia",
    state: "GO",
    postalCode: "74990-245",
  },
  cnpj: "13.842.520/0001-93",
  founded: "1992",
  phone: null as string | null,
  whatsapp: null as string | null,
  email: null as string | null,
  pix: null as string | null,
  mapUrl:
    "https://www.google.com/maps/search/?api=1&query=Setor+Rosa+dos+Ventos+Aparecida+de+Goiania+GO",
  social: {
    instagram: null as string | null,
    facebook: null as string | null,
    youtube: null as string | null,
  },
} as const;

export const navigation = [
  { label: "Quem somos", href: "#quem-somos" },
  { label: "Como ajudamos", href: "#como-funciona" },
  { label: "Nossa história", href: "#historia" },
  { label: "Como apoiar", href: "#apoie" },
] as const;

export const pillars = [
  {
    title: "Acolhimento e cuidado",
    text: "Um ambiente organizado para orientar cada pessoa com respeito e responsabilidade.",
  },
  {
    title: "Reconstrução pessoal",
    text: "Atividades voltadas à autonomia, à autoestima e à construção de novos objetivos.",
  },
  {
    title: "Família e vínculos",
    text: "Fortalecimento das relações familiares e comunitárias ao longo da jornada.",
  },
  {
    title: "Espiritualidade",
    text: "Princípios cristãos que alimentam esperança, propósito e perseverança.",
  },
  {
    title: "Educação e reinserção",
    text: "Preparação para a retomada da convivência social e profissional.",
  },
] as const;

export const processSteps = [
  {
    title: "Primeiro contato",
    text: "A pessoa interessada ou sua família conversa com a equipe e recebe as primeiras orientações.",
  },
  {
    title: "Avaliação e encaminhamento",
    text: "Cada situação é compreendida individualmente, conforme critérios e disponibilidade informados pela equipe.",
  },
  {
    title: "Jornada de cuidado",
    text: "Uma rotina estruturada reúne convivência e atividades terapêuticas, educativas e espirituais.",
  },
  {
    title: "Reconstrução de vínculos",
    text: "A família é incentivada a participar e contribuir para uma retomada mais segura.",
  },
  {
    title: "Preparação para o recomeço",
    text: "O objetivo é fortalecer a autonomia e criar novos caminhos para a vida em sociedade.",
  },
] as const;

export const faqs = [
  {
    question: "Quem pode ser acolhido?",
    answer:
      "A instituição orienta homens adultos que enfrentam problemas relacionados ao uso de álcool e outras drogas e situações de vulnerabilidade. Os critérios atuais são informados diretamente pela equipe.",
  },
  {
    question: "Como solicitar orientação?",
    answer:
      "O primeiro passo é conversar com a equipe. Ela explicará os critérios, a disponibilidade e os encaminhamentos adequados para cada situação.",
  },
  {
    question: "A família participa do processo?",
    answer:
      "O fortalecimento de vínculos familiares faz parte da proposta da instituição. A forma de participação é combinada com a equipe.",
  },
  {
    question: "Como posso ajudar?",
    answer:
      "É possível colaborar por meio de doações, voluntariado, parcerias institucionais e apoio às necessidades cotidianas da comunidade.",
  },
  {
    question: "Onde a instituição está localizada?",
    answer:
      "No Setor Rosa dos Ventos, em Aparecida de Goiânia, Goiás. Consulte a seção de contato para abrir a localização no mapa.",
  },
] as const;
