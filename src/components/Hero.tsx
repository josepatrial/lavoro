import { ArrowRight, Award, Building2, CheckCircle2, MapPin } from 'lucide-react';
import { YEARS_IN_MARKET } from '../data/company';

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-slate-950 text-white">
      {/* Background image with architectural overlay */}
      <div className="absolute inset-0">
        <img
          src="/images/obras/mega_barra/megabarra-65.jpg"
          alt="Loja Conceito Mega Barra executada pela Lavoro Construtora"
          className="h-full w-full object-cover object-center opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-slate-950/60" />
        <div className="bg-arch-grid-dark absolute inset-0 opacity-60" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          {/* Left column */}
          <div className="lg:col-span-7">
            <div className="mb-6 inline-flex flex-wrap items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-emerald-300 uppercase">
              <Award className="h-3.5 w-3.5" />
              Desde 1989 • {YEARS_IN_MARKET} Anos de Engenharia & Varejo
            </div>

            <h1 className="font-display text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Transformamos projetos conceituais em{' '}
              <span className="bg-gradient-to-r from-emerald-400 to-emerald-200 bg-clip-text text-transparent">
                realidade construtiva.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
              Especialistas em obras rápidas, implantações de lojas conceito, retrofits de fachadas
              e infraestrutura corporativa para shoppings e grandes marcas em todo o Brasil.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="#obras"
                className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-emerald-950/50 transition-all hover:bg-emerald-500"
              >
                Explorar Obras Realizadas
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#contato"
                className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:border-white/40 hover:bg-white/10"
              >
                Solicitar Proposta Técnica
              </a>
            </div>

            {/* Key trust points */}
            <div className="mt-10 grid grid-cols-1 gap-3 border-t border-white/10 pt-8 sm:grid-cols-3">
              <div className="flex items-center gap-2.5 text-sm text-slate-300">
                <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-400" />
                <span>Conceito 10 — Fornecedor Vivo</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-slate-300">
                <Building2 className="h-4 w-4 shrink-0 text-emerald-400" />
                <span>+50 obras corporativas entregues</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-slate-300">
                <MapPin className="h-4 w-4 shrink-0 text-emerald-400" />
                <span>Presença em todo o Brasil</span>
              </div>
            </div>
          </div>

          {/* Right column: Executive stats card */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-white/15 bg-slate-900/80 p-6 shadow-2xl backdrop-blur-md sm:p-8">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div>
                  <p className="text-xs font-semibold tracking-wider text-emerald-400 uppercase">
                    Indicadores de Entrega
                  </p>
                  <h2 className="font-display mt-1 text-xl font-bold text-white">
                    Solidez que gera confiança
                  </h2>
                </div>
                <span className="rounded-lg bg-red-600/20 px-2.5 py-1 text-xs font-bold text-red-300 ring-1 ring-red-500/30">
                  1989–{new Date().getFullYear()}
                </span>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                  <p className="font-display text-3xl font-extrabold text-white">
                    {YEARS_IN_MARKET}+
                  </p>
                  <p className="mt-1 text-xs text-slate-400">
                    Anos de mercado na construção civil
                  </p>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                  <p className="font-display text-3xl font-extrabold text-emerald-400">
                    10.730 m²
                  </p>
                  <p className="mt-1 text-xs text-slate-400">
                    Maior centro de distribuição entregue
                  </p>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                  <p className="font-display text-3xl font-extrabold text-white">67+</p>
                  <p className="mt-1 text-xs text-slate-400">
                    Lojas atendidas em rollout nacional
                  </p>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                  <p className="font-display text-3xl font-extrabold text-emerald-400">100%</p>
                  <p className="mt-1 text-xs text-slate-400">
                    Acompanhamento por engenheiro civil
                  </p>
                </div>
              </div>

              <div className="mt-6 rounded-xl border border-emerald-500/20 bg-emerald-950/40 p-4 text-xs leading-relaxed text-slate-300">
                <strong className="text-emerald-300">Segmentos de atuação:</strong> Lojas Conceito,
                Lojas em Shoppings Centers, Retrofits de Fachadas em ACM/Vidro e Infraestrutura
                Corporativa.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
