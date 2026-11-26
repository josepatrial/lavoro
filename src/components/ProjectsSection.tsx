import { useMemo, useState } from 'react';
import { Camera, MapPin, Search, ArrowUpRight, Play } from 'lucide-react';
import {
  FEATURED_PROJECTS,
  PORTFOLIO_ARCHIVE,
  type FeaturedProject,
  type ProjectCategory,
} from '../data/projects';
import { ProjectModal } from './ProjectModal';

const CATEGORIES: Array<'Todas' | ProjectCategory> = [
  'Todas',
  'Lojas Conceito',
  'Lojas em Shopping',
  'Fachadas & Retrofit',
];

export function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState<'Todas' | ProjectCategory>('Todas');
  const [activeProject, setActiveProject] = useState<FeaturedProject | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [showAllArchive, setShowAllArchive] = useState(false);

  const filteredFeatured = useMemo(() => {
    if (selectedCategory === 'Todas') return FEATURED_PROJECTS;
    return FEATURED_PROJECTS.filter((p) => p.category === selectedCategory);
  }, [selectedCategory]);

  const filteredArchive = useMemo(() => {
    const q = searchTerm.trim().toLowerCase();
    return PORTFOLIO_ARCHIVE.filter((item) => {
      const matchesCat =
        selectedCategory === 'Todas' || item.category === selectedCategory;
      const matchesQuery =
        !q ||
        item.title.toLowerCase().includes(q) ||
        item.location.toLowerCase().includes(q) ||
        item.client.toLowerCase().includes(q) ||
        item.services.toLowerCase().includes(q);
      return matchesCat && matchesQuery;
    });
  }, [selectedCategory, searchTerm]);

  const displayedArchive = showAllArchive ? filteredArchive : filteredArchive.slice(0, 8);

  return (
    <section id="obras" className="bg-arch-grid bg-stone-50 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Header & filters */}
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <span className="text-xs font-bold tracking-widest text-emerald-700 uppercase">
              Portfólio de Obras
            </span>
            <h2 className="font-display mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Projetos entregues em todo o Brasil
            </h2>
            <p className="mt-3 max-w-2xl text-base text-slate-600">
              Explore nossas principais entregas com galerias fotográficas, escopo técnico e
              histórico completo de capacitação.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setSelectedCategory(cat)}
                className={`rounded-full px-4 py-2 text-xs font-semibold transition-all ${
                  selectedCategory === cat
                    ? 'bg-slate-900 text-white shadow-sm'
                    : 'border border-slate-200 bg-white text-slate-600 hover:border-slate-300 hover:text-slate-900'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Featured Projects Grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredFeatured.map((project, idx) => (
            <article
              key={project.id}
              onClick={() => setActiveProject(project)}
              className={`group cursor-pointer overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl ${
                idx === 0 && selectedCategory === 'Todas' ? 'sm:col-span-2 lg:col-span-2' : ''
              }`}
            >
              <div
                className={`relative overflow-hidden bg-slate-900 ${
                  idx === 0 && selectedCategory === 'Todas' ? 'aspect-[16/9] lg:aspect-[21/10]' : 'aspect-[16/10]'
                }`}
              >
                <img
                  src={project.coverImage}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <span className="rounded-full bg-white/95 px-3 py-1 text-xs font-bold text-slate-900 shadow-sm">
                    {project.category}
                  </span>
                  {project.highlight && (
                    <span className="rounded-full bg-emerald-600 px-3 py-1 text-xs font-bold text-white shadow-sm">
                      Destaque
                    </span>
                  )}
                </div>

                <div className="absolute right-4 bottom-4 flex items-center gap-2">
                  {project.videoUrl && (
                    <span className="inline-flex items-center gap-1 rounded-lg bg-red-600/90 px-2.5 py-1 text-xs font-semibold text-white">
                      <Play className="h-3 w-3" />
                      Vídeo
                    </span>
                  )}
                  <span className="inline-flex items-center gap-1 rounded-lg bg-slate-900/80 px-2.5 py-1 text-xs font-medium text-white backdrop-blur-sm">
                    <Camera className="h-3.5 w-3.5 text-emerald-400" />
                    {project.gallery.length} fotos
                  </span>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between text-xs font-medium text-slate-500">
                  <span>Cliente: {project.client}</span>
                  <span>{project.year}</span>
                </div>
                <h3 className="font-display mt-1.5 text-xl font-bold text-slate-900 transition-colors group-hover:text-emerald-700">
                  {project.title}
                </h3>
                <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-slate-600">
                  {project.summary}
                </p>
                <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-4 text-xs">
                  <span className="inline-flex items-center gap-1.5 font-medium text-slate-600">
                    <MapPin className="h-3.5 w-3.5 text-emerald-700" />
                    {project.location}
                  </span>
                  <span className="inline-flex items-center gap-1 font-semibold text-emerald-700">
                    Ver detalhes
                    <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Technical Archive */}
        <div id="acervo" className="mt-20 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-10">
          <div className="flex flex-col justify-between gap-4 border-b border-slate-200 pb-6 md:flex-row md:items-center">
            <div>
              <span className="text-xs font-bold tracking-widest text-emerald-700 uppercase">
                Acervo de Capacitação Técnica
              </span>
              <h3 className="font-display mt-1 text-2xl font-bold text-slate-900">
                Relação de Obras Executadas
              </h3>
              <p className="mt-1 text-sm text-slate-600">
                Registro histórico de implantações, reformas e infraestrutura em todo o Brasil.
              </p>
            </div>

            <div className="relative w-full md:w-80">
              <Search className="absolute top-1/2 left-3.5 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Buscar cidade, cliente ou serviço..."
                className="w-full rounded-xl border border-slate-200 bg-stone-50 py-2.5 pr-4 pl-10 text-sm text-slate-900 placeholder:text-slate-400 focus:border-emerald-600 focus:bg-white focus:outline-none"
              />
            </div>
          </div>

          {/* Mobile cards (< md) */}
          <div className="mt-6 space-y-3 md:hidden">
            {displayedArchive.map((item) => (
              <div
                key={`mobile-${item.title}-${item.period}`}
                className="rounded-2xl border border-slate-200 bg-stone-50/70 p-4"
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="inline-block rounded-md bg-slate-900 px-2.5 py-0.5 text-[11px] font-semibold text-white">
                    {item.client}
                  </span>
                  <div className="flex items-center gap-2 text-xs">
                    <span className="font-medium text-slate-500">{item.period}</span>
                    <span className="rounded-md bg-emerald-50 px-2 py-0.5 font-semibold text-emerald-800">
                      {item.area}
                    </span>
                  </div>
                </div>

                <h4 className="font-display mt-2.5 text-base font-bold text-slate-900">
                  {item.title}
                </h4>

                <p className="mt-1 inline-flex items-center gap-1.5 text-xs font-medium text-slate-600">
                  <MapPin className="h-3.5 w-3.5 shrink-0 text-emerald-700" />
                  {item.location}
                </p>

                <p className="mt-2.5 border-t border-slate-200/80 pt-2.5 text-xs leading-relaxed text-slate-600">
                  {item.services}
                </p>
              </div>
            ))}
          </div>

          {/* Desktop table (>= md) */}
          <div className="mt-6 hidden overflow-x-auto md:block">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-slate-200 text-xs font-semibold tracking-wider text-slate-500 uppercase">
                  <th className="py-3 pr-4">Obra / Empreendimento</th>
                  <th className="py-3 pr-4">Localidade</th>
                  <th className="py-3 pr-4">Período</th>
                  <th className="py-3 pr-4">Área / Porte</th>
                  <th className="py-3">Escopo Técnico</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {displayedArchive.map((item) => (
                  <tr key={`${item.title}-${item.period}`} className="hover:bg-stone-50/80">
                    <td className="py-3.5 pr-4 font-semibold text-slate-900">
                      {item.title}
                      <span className="ml-2 inline-block rounded bg-slate-100 px-2 py-0.5 text-[11px] font-medium text-slate-600">
                        {item.client}
                      </span>
                    </td>
                    <td className="py-3.5 pr-4 whitespace-nowrap text-slate-600">
                      {item.location}
                    </td>
                    <td className="py-3.5 pr-4 whitespace-nowrap text-slate-600">{item.period}</td>
                    <td className="py-3.5 pr-4 whitespace-nowrap font-medium text-emerald-800">
                      {item.area}
                    </td>
                    <td className="py-3.5 text-xs leading-relaxed text-slate-600">
                      {item.services}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {filteredArchive.length === 0 && (
            <p className="py-8 text-center text-sm text-slate-500">
              Nenhuma obra encontrada para o filtro selecionado.
            </p>
          )}

          {filteredArchive.length > 8 && (
            <div className="mt-6 flex justify-center border-t border-slate-100 pt-6">
              <button
                type="button"
                onClick={() => setShowAllArchive((v) => !v)}
                className="rounded-xl border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-800 transition hover:border-emerald-600 hover:text-emerald-700"
              >
                {showAllArchive
                  ? 'Mostrar menos obras'
                  : `Ver todas as ${filteredArchive.length} obras registradas`}
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Modal */}
      <ProjectModal
        key={activeProject?.id ?? 'closed'}
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </section>
  );
}
