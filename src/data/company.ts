export const FOUNDATION_YEAR = 1989;
export const YEARS_IN_MARKET = new Date().getFullYear() - FOUNDATION_YEAR;

export const COMPANY_INFO = {
  name: 'Lavoro Construções Civis Ltda.',
  shortName: 'Lavoro Construtora',
  tagline: 'Arquitetura e Ambientação de Espaços Comerciais',
  foundedDate: '01/04/1989',
  cnpj: '81.180.291/0001-49',
  founder: 'Eng. Civil Diógenes Bellinati Guazzi',
  address: {
    street: 'Travessa Rafael Francisco Greca, 50 - Cj 83',
    neighborhood: 'Água Verde',
    city: 'Curitiba',
    state: 'PR',
    cep: '80620-150',
    mapsEmbedUrl:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d757.3281348644379!2d-49.287913321440435!3d-25.455641991817235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce37f61e49fed%3A0xff46f04d69a444a9!2sTv.+Rafael+Francisco+Greca%2C+50+-+%C3%81gua+Verde%2C+Curitiba+-+PR%2C+80620-150!5e0!3m2!1spt-BR!2sbr!4v1515079927587',
  },
  contact: {
    email: 'contato@lavoroconstrutora.com.br',
    phones: ['(41) 3016-4061', '(41) 3016-3980'],
    mobile: '(41) 99192-2160',
    whatsappDigits: '5541991922160',
    hours: 'Segunda a Sexta: 09h00 às 12h00 e 14h00 às 18h00',
  },
  summary: `Há ${YEARS_IN_MARKET} anos no mercado, a Lavoro Construtora atua no segmento de construção civil com atendimento especializado em obras, reformas, implantações e revitalizações para lojas conceito, shoppings centers e ambientes corporativos em todo o território nacional.`,
  mission:
    'Tornar projetos conceituais em realidade, transmitindo confiança e agilidade em cada entrega. Oferecer excelência no atendimento e rigoroso cumprimento de prazos, desde o trato com colaboradores e parceiros até o relacionamento com clientes.',
  vision:
    'Ser reconhecida pelo comprometimento na execução de obras e reformas em tempo hábil, buscando excelência contínua e alto desenvolvimento técnico para a comunicação visual e arquitetônica eficiente de nossos clientes.',
};

export const PILLARS = [
  {
    title: 'Engenharia Especializada',
    description:
      'Mão de obra qualificada e acompanhamento direto por engenheiro civil especializado em todas as etapas da obra, da fundação ao acabamento.',
  },
  {
    title: 'Qualidade Comprovada',
    description:
      'Obras executadas em todo o Brasil com nota máxima de avaliação por grandes corporações como a Vivo (Conceito 10 em qualidade e cronograma).',
  },
  {
    title: 'Cumprimento de Prazos',
    description:
      'Rigor técnico na observância de memoriais descritivos, materiais especificados e cronogramas desafiadores para o varejo e shoppings.',
  },
  {
    title: 'Atuação Nacional',
    description:
      'Logística consolidada para mobilização rápida de equipes multidisciplinares em todo o território nacional, inclusive em operações simultâneas.',
  },
];

export const HISTORY_MILESTONES = [
  {
    year: '1989',
    title: 'Fundação em Londrina',
    description:
      'Fundada em 1º de abril pelo Engenheiro Civil Diógenes Bellinati Guazzi, iniciando com reformas comerciais no Sul do país (Curitiba, Lages e Tubarão).',
  },
  {
    year: '1990–2000',
    title: 'Expansão Nacional',
    description:
      'Ampliação da atuação para todo o Brasil — Pará, Pernambuco, Bahia, Santa Catarina, Rio Grande do Sul, Brasília, Minas Gerais, Rio de Janeiro e São Paulo.',
  },
  {
    year: '2009–2015',
    title: 'Lojas Conceito & Virada de Marca',
    description:
      'Execução das icônicas lojas conceito da Vivo (Morumbi, Mega Barra, Eco Berrini) e participação na histórica virada de marca Telefônica/Vivo em 20 cidades em um único fim de semana (2011).',
  },
  {
    year: '2016–Hoje',
    title: 'Retrofit, Shoppings e Excelência',
    description:
      'Retrofits de fachada de grande porte (como Top Shopping RJ), conceito 10 na avaliação de fornecedores Vivo e consolidação em obras corporativas e varejo de alto padrão.',
  },
];

export const TECHNICAL_CAPABILITIES = [
  'Obras civis completas, demolições e reforços estruturais',
  'Estruturas metálicas, mezaninos e coberturas especiais',
  'Fachadas em ACM, peles de vidro e comunicação visual',
  'Instalações elétricas de baixa/média tensão e subestações',
  'Redes lógicas, automação e sistemas de segurança',
  'Climatização (HVAC / água gelada) e sistemas de incêndio (sprinklers)',
];

export const CLIENTS = [
  {
    name: 'Claro Brasil',
    segment: 'Telecomunicações & Varejo',
    logo: null,
    description:
      'Execução de lojas modernas em shopping centers, como a unidade Claro NorteShopping (Rio de Janeiro — 2026), com alto padrão de acabamento, mobiliário técnico e entrega ágil.',
  },
  {
    name: 'Telefônica Brasil / Vivo',
    segment: 'Telecomunicações & Varejo Conceito',
    logo: '/images/clientes/vivo-logo.jpg',
    description:
      'Parceria de longa data com dezenas de implantações de lojas padrão 3G, 4G, lojas conceito (Mega Barra, Morumbi, Eco Berrini), centro de distribuição de 10.730 m² e projetos de identidade visual em todo o país.',
  },
  {
    name: 'BRMalls',
    segment: 'Shopping Centers',
    logo: '/images/clientes/brmalls_logo.gif',
    description:
      'Atuação junto à maior administradora de shoppings da América Latina em obras de revitalização, adequações técnicas e implantações comerciais com rigor de normas condominiais.',
  },
  {
    name: 'Top Shopping',
    segment: 'Shopping Center — Nova Iguaçu / RJ',
    logo: null,
    description:
      'Execução de retrofit de fachada e adaptações estruturais e arquitetônicas de alto impacto para modernização do empreendimento.',
  },
  {
    name: 'Oi Telecomunicações',
    segment: 'Telecomunicações & Atendimento',
    logo: null,
    description:
      'Implantações completas de lojas de atendimento em São Paulo (Bauru, Marília, Piracicaba), incluindo reforço estrutural, cobertura metálica e infraestrutura predial.',
  },
];
