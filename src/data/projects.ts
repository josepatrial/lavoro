export type ProjectCategory =
  | 'Lojas Conceito'
  | 'Lojas em Shopping'
  | 'Fachadas & Retrofit'
  | 'Corporativo & Infraestrutura';

export interface FeaturedProject {
  id: string;
  title: string;
  client: string;
  location: string;
  category: ProjectCategory;
  year: string;
  area?: string;
  highlight?: boolean;
  summary: string;
  scope: string[];
  coverImage: string;
  gallery: string[];
  videoUrl?: string;
}

export interface PortfolioRecord {
  title: string;
  client: string;
  location: string;
  period: string;
  area: string;
  category: ProjectCategory;
  services: string;
}

/**
 * PROJETOS EM DESTAQUE (COM GALERIA DE FOTOS)
 * Para acrescentar novos projetos ao portfólio visual, basta adicionar um novo objeto neste array.
 */
export const FEATURED_PROJECTS: FeaturedProject[] = [
  {
    id: 'claro-norteshopping',
    title: 'Loja Claro — NorteShopping',
    client: 'Claro',
    location: 'Rio de Janeiro — RJ',
    category: 'Lojas em Shopping',
    year: '2026',
    highlight: true,
    summary:
      'Entrega recente de loja Claro no NorteShopping (RJ), executada no padrão mais atual de varejo da operadora, com painéis retroiluminados, área de autoatendimento, ripado amadeirado, iluminação cênica e mobiliário corporativo.',
    scope: [
      'Obras civis completas, forro acústico e piso vinílico amadeirado',
      'Fachada em ACM com letreiro luminoso e comunicação visual',
      'Instalações elétricas, lógica, climatização e detecção de incêndio',
      'Expositores interativos, totens de autoatendimento e painéis LED',
    ],
    coverImage: '/images/obras/claro_norteshopping/ns-1.jpg',
    gallery: [
      '/images/obras/claro_norteshopping/ns-1.jpg',
      '/images/obras/claro_norteshopping/ns-2.jpg',
      '/images/obras/claro_norteshopping/ns-3.jpg',
      '/images/obras/claro_norteshopping/ns-4.jpg',
    ],
  },
  {
    id: 'vivo-vicosa',
    title: 'Loja Vivo — Viçosa (MG)',
    client: 'Vivo',
    location: 'Viçosa — MG (Calçadão Arthur Bernardes, 88)',
    category: 'Lojas Conceito',
    year: '2026',
    highlight: true,
    summary:
      'Implantação completa de loja de rua da Vivo entregue em abril de 2026 no Calçadão Arthur Bernardes, com fachada curva em ACM, iluminação linear LED, acessibilidade com piso tátil, vitrines de smartphones e ambientação contemporânea.',
    scope: [
      'Fachada curva em ACM, marquise metálica e letreiro corporativo',
      'Forro modular com luminárias lineares LED e sancas técnicas',
      'Obras civis, piso vinílico, piso tátil de acessibilidade e revestimento em tijolinho',
      'Vitrines expositoras iluminadas, climatização, elétrica e rede lógica',
    ],
    coverImage: '/images/obras/vivo_vicosa/vicosa-1.jpg',
    gallery: [
      '/images/obras/vivo_vicosa/vicosa-1.jpg',
      '/images/obras/vivo_vicosa/vicosa-2.jpg',
      '/images/obras/vivo_vicosa/vicosa-3.jpg',
      '/images/obras/vivo_vicosa/vicosa-4.jpg',
    ],
  },
  {
    id: 'mega-barra',
    title: 'Loja Conceito Mega Barra',
    client: 'Vivo',
    location: 'Rio de Janeiro — RJ',
    category: 'Lojas Conceito',
    year: '2015',
    highlight: true,
    summary:
      'Projeto emblemático de loja conceito flagship da Vivo na Barra da Tijuca, reunindo arquitetura contemporânea, sustentabilidade, iluminação cênica e mobiliário sob medida.',
    scope: [
      'Obra civil completa e acabamentos de alto padrão',
      'Fachada especial e comunicação visual integrada',
      'Instalações elétricas, lógica, automação e climatização',
      'Painéis expositores e ambientação interativa',
    ],
    coverImage: '/images/obras/mega_barra/megabarra.jpg',
    gallery: [
      '/images/obras/mega_barra/megabarra.jpg',
      '/images/obras/mega_barra/megabarra-65.jpg',
      '/images/obras/mega_barra/megabarra-3.jpg',
      '/images/obras/mega_barra/megabarra-5.jpg',
      '/images/obras/mega_barra/megabarra-7.jpg',
      '/images/obras/mega_barra/megabarra-8.jpg',
      '/images/obras/mega_barra/megabarra-13.jpg',
      '/images/obras/mega_barra/megabarra-14.jpg',
      '/images/obras/mega_barra/megabarra-15.jpg',
      '/images/obras/mega_barra/megabarra-47.jpg',
      '/images/obras/mega_barra/megabarra-84.jpg',
      '/images/obras/mega_barra/megabarra-86.jpg',
      '/images/obras/mega_barra/megabarra-87.jpg',
      '/images/obras/mega_barra/megabarra-89.jpg',
      '/images/obras/mega_barra/megabarra-90.jpg',
      '/images/obras/mega_barra/megabarra-94.jpg',
      '/images/obras/mega_barra/megabarra-96.jpg',
    ],
  },
  {
    id: 'morumbi',
    title: 'Loja Conceito Shopping Morumbi',
    client: 'Vivo',
    location: 'São Paulo — SP',
    category: 'Lojas Conceito',
    year: '2009',
    area: '240,00 m²',
    highlight: true,
    summary:
      'Implantação da Loja Conceito Vivo no Shopping Morumbi com infraestrutura complexa de climatização por água gelada, automação e ramal alimentador até a subestação do shopping.',
    scope: [
      'Estrutura metálica, painéis em vidro e fachada em ACM',
      '140 m de rede de água gelada para ar-condicionado',
      '200 m de ramal alimentador até a subestação',
      'Automação, sprinklers, segurança e expositores externos',
    ],
    coverImage: '/images/obras/morumbi/morumbi1.jpg',
    gallery: [
      '/images/obras/morumbi/morumbi1.jpg',
      '/images/obras/morumbi/morumbi2.jpg',
      '/images/obras/morumbi/morumbi3.jpg',
      '/images/obras/morumbi/morumbi4.jpg',
    ],
    videoUrl: 'https://www.youtube.com/embed/9E2akpCrrx0?rel=0',
  },
  {
    id: 'eco-berrini',
    title: 'Loja Vivo Eco Berrini',
    client: 'Vivo',
    location: 'São Paulo — SP',
    category: 'Lojas Conceito',
    year: '2013',
    summary:
      'Execução de loja corporativa no complexo Eco Berrini, alinhada às diretrizes de sustentabilidade, eficiência energética e padrão arquitetônico premium.',
    scope: [
      'Obras civis e ambientação corporativa',
      'Instalações elétricas, lógica e climatização',
      'Comunicação visual e mobiliário técnico',
    ],
    coverImage: '/images/obras/ecoberrini/ecoberrini1.jpg',
    gallery: [
      '/images/obras/ecoberrini/ecoberrini1.jpg',
      '/images/obras/ecoberrini/ecoberrini2.jpg',
    ],
  },
  {
    id: 'top-shopping',
    title: 'Retrofit de Fachada — Top Shopping',
    client: 'Top Shopping / BRMalls',
    location: 'Nova Iguaçu — RJ',
    category: 'Fachadas & Retrofit',
    year: '2016',
    summary:
      'Retrofit completo de fachada e adaptações arquitetônicas no Top Shopping, renovando a identidade visual externa com o shopping em plena operação.',
    scope: [
      'Retrofit de fachada em ACM e estrutura metálica',
      'Adaptações civis e compatibilização de projetos',
      'Execução noturna sem impacto ao fluxo de visitantes',
    ],
    coverImage: '/images/obras/top_shopping/ts1.jpg',
    gallery: ['/images/obras/top_shopping/ts1.jpg'],
  },
  {
    id: 'cabo-frio',
    title: 'Loja Vivo Cabo Frio',
    client: 'Vivo',
    location: 'Cabo Frio — RJ',
    category: 'Fachadas & Retrofit',
    year: '2006',
    summary:
      'Implantação completa de loja de rua em Cabo Frio, contemplando estrutura metálica, cobertura, painel de fachada em ACM e ambientação interna.',
    scope: [
      'Estrutura metálica e cobertura',
      'Painel de fachada em ACM e comunicação visual',
      'Elétrica, lógica, segurança, climatização e mobiliário',
    ],
    coverImage: '/images/obras/cabo_frio/cf1.jpg',
    gallery: [
      '/images/obras/cabo_frio/cf1.jpg',
      '/images/obras/cabo_frio/cf2.jpg',
      '/images/obras/cabo_frio/cf3.jpg',
    ],
  },
  {
    id: 'belem',
    title: 'Loja Vivo Padre Eutíquio — Belém',
    client: 'Vivo',
    location: 'Belém — PA',
    category: 'Lojas Conceito',
    year: '2007',
    area: '320,00 m²',
    summary:
      'Implantação de loja de grande porte no Pará, demonstrando a capacidade logística da Lavoro em mobilizar engenharia e suprimentos para a Região Norte.',
    scope: [
      'Obras civis em 320 m² de área construída',
      'Elétrica, lógica, segurança e climatização',
      'Comunicação visual e acabamento padrão nacional',
    ],
    coverImage: '/images/obras/belem/belem1.jpg',
    gallery: [
      '/images/obras/belem/belem1.jpg',
      '/images/obras/belem/belem2.jpg',
      '/images/obras/belem/belem3.jpg',
    ],
  },
  {
    id: 'shopping-paulista',
    title: 'Loja Vivo Shopping Paulista',
    client: 'Vivo',
    location: 'São Paulo — SP',
    category: 'Lojas em Shopping',
    year: '2008',
    area: '150,00 m²',
    summary:
      'Implantação no padrão 3G em um dos shoppings mais movimentados de São Paulo, cumprindo cronograma rigoroso de 60 dias.',
    scope: [
      'Civil, elétrica, lógica, segurança e sprinklers',
      'Ar-condicionado e fachada em ACM',
      'Comunicação visual e vitrines',
    ],
    coverImage: '/images/obras/shopping_paulista/sp1.jpg',
    gallery: [
      '/images/obras/shopping_paulista/sp1.jpg',
      '/images/obras/shopping_paulista/sp2.jpg',
      '/images/obras/shopping_paulista/sp3.jpg',
    ],
  },
  {
    id: 'interlagos',
    title: 'Loja Vivo Shopping Interlagos',
    client: 'Vivo',
    location: 'São Paulo — SP',
    category: 'Lojas em Shopping',
    year: '2006',
    area: '140,00 m²',
    summary:
      'Implantação completa de loja em shopping center na Zona Sul de São Paulo, com entrega ágil e integral atendimento às normas técnicas do empreendimento.',
    scope: [
      'Obras civis, elétrica, lógica e segurança',
      'Climatização, fachada em ACM e mobiliário',
      'Comunicação visual completa',
    ],
    coverImage: '/images/obras/interlagos/interlagos1.jpg',
    gallery: [
      '/images/obras/interlagos/interlagos1.jpg',
      '/images/obras/interlagos/interlagos2.jpg',
      '/images/obras/interlagos/interlagos3.jpg',
    ],
  },
];

/**
 * ACERVO HISTÓRICO DE OBRAS EXECUTADAS (CAPACITAÇÃO TÉCNICA)
 * Lista documentada de entregas realizadas em todo o território nacional.
 */
export const PORTFOLIO_ARCHIVE: PortfolioRecord[] = [
  {
    title: 'Loja Vivo Viçosa (Calçadão Arthur Bernardes)',
    client: 'Vivo',
    location: 'Viçosa — MG',
    period: 'Abr 2026',
    area: 'Loja de Rua Padrão Atual',
    category: 'Lojas Conceito',
    services:
      'Obras Civis, Fachada em ACM, Luminotécnico LED, Piso Tátil, Climatização, Elétrica, Lógica, Vitrines e Comunicação Visual',
  },
  {
    title: 'Loja Claro NorteShopping',
    client: 'Claro',
    location: 'Rio de Janeiro — RJ',
    period: '2026',
    area: 'Padrão Flagship Shopping',
    category: 'Lojas em Shopping',
    services:
      'Obras Civis, Fachada em ACM, Elétrica, Lógica, Climatização, Detecção de Incêndio, Marcenaria Ripada e Comunicação Visual',
  },
  {
    title: 'Loja Vivo Shopping Aspen Park',
    client: 'Vivo',
    location: 'Maringá — PR',
    period: 'Mar–Abr 2013',
    area: '110,64 m²',
    category: 'Lojas em Shopping',
    services: 'Elétrica, Segurança, Ar-Condicionado, Civil, Estrutura Metálica, Lógica, Comunicação Visual',
  },
  {
    title: 'Loja Vivo Shopping Piracicaba (4G)',
    client: 'Vivo',
    location: 'Piracicaba — SP',
    period: 'Jan–Fev 2013',
    area: '117,78 m²',
    category: 'Lojas em Shopping',
    services: 'Elétrica, Segurança, Sprinkler, Ar-Condicionado, Civil, Estrutura Metálica, ACM, Vitrines',
  },
  {
    title: 'Loja Vivo Santos Independência',
    client: 'Vivo',
    location: 'Santos — SP',
    period: 'Dez 2012',
    area: '70,73 m²',
    category: 'Lojas em Shopping',
    services: 'Reforma padrão 3G: Elétrica, Segurança, Detecção de Incêndio, Ar-Condicionado, Obras Civis',
  },
  {
    title: 'Loja Vivo Shopping Mogi das Cruzes',
    client: 'Vivo',
    location: 'Mogi das Cruzes — SP',
    period: 'Nov 2012',
    area: '119,37 m²',
    category: 'Lojas em Shopping',
    services: 'Reforma padrão 3G: Elétrica, Segurança, Detecção de Incêndio, Ar-Condicionado, Obras Civis',
  },
  {
    title: 'Loja Vivo Shopping Tacaruna',
    client: 'Vivo',
    location: 'Recife — PE',
    period: 'Nov 2012',
    area: '123,68 m²',
    category: 'Lojas em Shopping',
    services: 'Reforma padrão 3G: Elétrica, Segurança, Detecção de Incêndio, Ar-Condicionado, Obras Civis',
  },
  {
    title: 'Loja Vivo Shopping Iguatemi Campinas',
    client: 'Vivo',
    location: 'Campinas — SP',
    period: 'Nov 2012',
    area: '103,85 m²',
    category: 'Lojas em Shopping',
    services: 'Reforma padrão 3G: Elétrica, Segurança, Sprinkler, Ar-Condicionado, Obras Civis',
  },
  {
    title: 'Loja Vivo Shopping Parque das Bandeiras',
    client: 'Vivo',
    location: 'Campinas — SP',
    period: 'Out–Nov 2012',
    area: '132,32 m²',
    category: 'Lojas em Shopping',
    services: 'Implantação 4G: Elétrica, Segurança, Sprinkler, Ar-Condicionado, Civil, ACM, Vitrines',
  },
  {
    title: 'Loja Vivo Shopping Palladium',
    client: 'Vivo',
    location: 'Curitiba — PR',
    period: 'Ago–Set 2012',
    area: '188,00 m²',
    category: 'Lojas em Shopping',
    services: 'Reforma padrão 3G: Elétrica, Sprinkler, Ar-Condicionado, Obras Civis',
  },
  {
    title: 'Loja Vivo Shopping Bourbon Wallig',
    client: 'Vivo',
    location: 'Porto Alegre — RS',
    period: 'Abr–Mai 2012',
    area: '141,23 m²',
    category: 'Lojas em Shopping',
    services: 'Implantação 4G: Elétrica, Segurança, Sprinkler, Ar-Condicionado, Civil, ACM, Vitrines',
  },
  {
    title: 'Loja de Atendimento Oi Piracicaba',
    client: 'Oi',
    location: 'Piracicaba — SP',
    period: 'Mar–Abr 2012',
    area: '94,20 m²',
    category: 'Lojas em Shopping',
    services: 'Elétrica, Lógica, Segurança, Ar-Condicionado, Demolições e Obras Civis',
  },
  {
    title: 'Projeto Marcas Telefônica (67 Lojas)',
    client: 'Telefônica / Vivo',
    location: 'Nacional (67 unidades)',
    period: 'Jan–Ago 2012',
    area: '67 lojas',
    category: 'Fachadas & Retrofit',
    services: 'Levantamento, projetos, aprovações, execução e montagem de painéis Backlight',
  },
  {
    title: 'Loja Vivo ParkShoppingBarigüi',
    client: 'Vivo',
    location: 'Curitiba — PR',
    period: 'Out–Nov 2011',
    area: '123,00 m²',
    category: 'Lojas em Shopping',
    services: 'Implantação 4G: Elétrica, Segurança, Sprinkler, Civil, Estrutura Metálica, ACM, Vitrines',
  },
  {
    title: 'Loja Vivo Shopping Iguatemi SP',
    client: 'Vivo',
    location: 'São Paulo — SP',
    period: 'Jun–Jul 2011',
    area: '166,70 m²',
    category: 'Lojas em Shopping',
    services: 'Implantação 4G: Elétrica, Segurança, Sprinkler, Ar-Condicionado, Civil, ACM, Vitrines',
  },
  {
    title: 'Loja Vivo Suzano Shopping',
    client: 'Vivo',
    location: 'Suzano — SP',
    period: 'Mai–Jun 2011',
    area: '93,46 m²',
    category: 'Lojas em Shopping',
    services: 'Implantação 4G: Elétrica, Segurança, Sprinkler, Ar-Condicionado, Civil, ACM, Vitrines',
  },
  {
    title: 'Loja Vivo Shopping Villa-Lobos',
    client: 'Vivo',
    location: 'São Paulo — SP',
    period: 'Nov–Dez 2010',
    area: '173,27 m²',
    category: 'Lojas em Shopping',
    services: 'Implantação 4G: Elétrica, Segurança, Sprinkler, Ar-Condicionado, Civil, ACM, Vitrines',
  },
  {
    title: 'Loja Vivo Shopping Pátio Higienópolis',
    client: 'Vivo',
    location: 'São Paulo — SP',
    period: 'Out–Nov 2010',
    area: '124,08 m²',
    category: 'Lojas em Shopping',
    services: 'Implantação 4G: Elétrica, Segurança, Sprinkler, Ar-Condicionado, Civil, ACM, Vitrines',
  },
  {
    title: 'Ar-Condicionado Gerência de Rede — Site Berrini',
    client: 'Vivo',
    location: 'São Paulo — SP',
    period: 'Jul–Ago 2010',
    area: '600.000 BTU',
    category: 'Corporativo & Infraestrutura',
    services: 'Obras civis e infraestrutura pesada para sistema de climatização de 600.000 BTU',
  },
  {
    title: 'Loja Vivo Shopping Vila Olímpia',
    client: 'Vivo',
    location: 'São Paulo — SP',
    period: 'Out–Nov 2009',
    area: '172,46 m²',
    category: 'Lojas em Shopping',
    services: 'Elétrica, Segurança, Sprinkler, Ar-Condicionado, Civil, Estrutura Metálica, ACM',
  },
  {
    title: 'Loja Vivo Multishopping Araçatuba',
    client: 'Vivo',
    location: 'Araçatuba — SP',
    period: 'Jun–Jul 2009',
    area: '120,00 m²',
    category: 'Lojas em Shopping',
    services: 'Implantação 3G: Elétrica, Segurança, Ar-Condicionado, Civil, ACM, Comunicação Visual',
  },
  {
    title: 'Loja Vivo Shopping ABC',
    client: 'Vivo',
    location: 'Santo André — SP',
    period: 'Mai–Jun 2009',
    area: '102,00 m²',
    category: 'Lojas em Shopping',
    services: 'Implantação 3G: Elétrica, Segurança, Sprinkler, Ar-Condicionado, Civil, ACM',
  },
  {
    title: 'Loja Vivo Bauru Shopping',
    client: 'Vivo',
    location: 'Bauru — SP',
    period: 'Out–Nov 2008',
    area: '133,85 m²',
    category: 'Lojas em Shopping',
    services: 'Implantação 3G: Elétrica, Segurança, Sprinkler, Ar-Condicionado, Civil, ACM',
  },
  {
    title: 'Loja de Atendimento Oi Bauru',
    client: 'Oi',
    location: 'Bauru — SP',
    period: 'Set–Out 2008',
    area: '141,24 m²',
    category: 'Fachadas & Retrofit',
    services: 'Elétrica, Lógica, Segurança, Ar-Condicionado, Reforço Estrutural, Cobertura Metálica, Civil',
  },
  {
    title: 'Loja de Atendimento Oi Marília',
    client: 'Oi',
    location: 'Marília — SP',
    period: 'Set–Out 2008',
    area: '115,54 m²',
    category: 'Lojas em Shopping',
    services: 'Elétrica, Lógica, Segurança, Ar-Condicionado, Reforço Estrutural, Demolições e Civil',
  },
  {
    title: 'Loja Vivo Shopping Metrópole',
    client: 'Vivo',
    location: 'São Bernardo do Campo — SP',
    period: 'Set–Out 2008',
    area: '259,63 m²',
    category: 'Lojas em Shopping',
    services: 'Implantação 3G: Elétrica, Lógica, Segurança, Sprinkler, Ar-Condicionado, Civil, ACM',
  },
  {
    title: 'Loja Vivo Marília',
    client: 'Vivo',
    location: 'Marília — SP',
    period: 'Ago–Set 2008',
    area: '111,20 m²',
    category: 'Lojas em Shopping',
    services: 'Implantação 3G: Elétrica, Lógica, Segurança, Ar-Condicionado, Civil, ACM',
  },
  {
    title: 'Loja Vivo Shopping Cidade Jardim',
    client: 'Vivo',
    location: 'São Paulo — SP',
    period: 'Abr–Mai 2008',
    area: '96,89 m²',
    category: 'Lojas em Shopping',
    services: 'Implantação 3G: Elétrica, Lógica, Segurança, Sprinkler, Ar-Condicionado, Civil, ACM',
  },
  {
    title: 'Loja Vivo Salvador Shopping',
    client: 'Vivo',
    location: 'Salvador — BA',
    period: 'Abr–Mai 2007',
    area: '120,00 m²',
    category: 'Lojas em Shopping',
    services: 'Elétrica, Lógica, Segurança, Ar-Condicionado, Civil, ACM, Mezanino Metálico',
  },
  {
    title: 'Warehouse Vivo São José dos Pinhais',
    client: 'Vivo',
    location: 'São José dos Pinhais — PR',
    period: 'Fev–Jun 2005',
    area: '10.730,00 m²',
    category: 'Corporativo & Infraestrutura',
    services: 'Centro de Distribuição: Elétrica, Lógica, HVAC, Segurança, Civil, Infraestrutura Externa, Drenagens e Muros',
  },
  {
    title: 'Loja Vivo Shopping Mueller',
    client: 'Vivo',
    location: 'Curitiba — PR',
    period: 'Set–Out 2005',
    area: '191,83 m²',
    category: 'Lojas em Shopping',
    services: 'Elétrica, Lógica, Segurança, Ar-Condicionado, Obras Civis, Fachada em ACM, Mobiliário',
  },
  {
    title: 'Lojas Vivo SC & PR (Chapecó, Jaraguá, Camboriú, Lages, Tubarão, Curitiba, Crystal, Blumenau)',
    client: 'Vivo',
    location: 'SC e PR',
    period: '2004–2006',
    area: '8 unidades',
    category: 'Lojas em Shopping',
    services: 'Expansão regional completa: Elétrica, Lógica, Segurança, Ar-Condicionado, Civil e ACM',
  },
  {
    title: 'Lojas Vivo SP (Esplanada Sorocaba, Osasco Plaza, Piracicaba, Maxi Jundiaí, Jardim Sul, Iguatemi São Carlos, Praia Grande)',
    client: 'Vivo',
    location: 'Estado de São Paulo',
    period: '2006–2007',
    area: '7 unidades',
    category: 'Lojas em Shopping',
    services: 'Implantações completas com obras civis, fachadas em ACM, climatização e comunicação visual',
  },
];
