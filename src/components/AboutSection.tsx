import { Check, Compass, ShieldCheck, Target, Wrench } from 'lucide-react';
import {
  COMPANY_INFO,
  HISTORY_MILESTONES,
  PILLARS,
  TECHNICAL_CAPABILITIES,
} from '../data/company';

const PILLAR_ICONS = [Wrench, ShieldCheck, Target, Compass];

export function AboutSection() {
  return (
    <section id="sobre" className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        {/* Intro */}
        <div className="grid items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <span className="text-xs font-bold tracking-widest text-emerald-700 uppercase">
              Sobre a Lavoro
            </span>
            <h2 className="font-display mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Engenharia de precisão para o varejo e ambientes corporativos
            </h2>
            <p className="mt-5 text-base leading-relaxed text-slate-600">
              {COMPANY_INFO.summary}
            </p>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              Fundada por <strong>{COMPANY_INFO.founder}</strong>, a Lavoro consolidou-se pela
              capacidade de executar obras rápidas com alto nível de acabamento, integrando obras
              civis, estruturas metálicas, instalações elétricas, climatização, automação e
              comunicação visual.
            </p>

            {/* Mission & Vision */}
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-slate-200 bg-stone-50 p-5">
                <h3 className="font-display text-sm font-bold tracking-wide text-emerald-800 uppercase">
                  Missão
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {COMPANY_INFO.mission}
                </p>
              </div>
              <div className="rounded-xl border border-slate-200 bg-stone-50 p-5">
                <h3 className="font-display text-sm font-bold tracking-wide text-red-800 uppercase">
                  Visão
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {COMPANY_INFO.vision}
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-900 shadow-xl">
              <img
                src="/images/sobre/lavoro.jpg"
                alt="Equipe e obras da Lavoro Construtora"
                className="h-80 w-full object-cover sm:h-96"
              />
              <div className="bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent p-6 text-white">
                <p className="text-xs font-semibold tracking-wider text-emerald-400 uppercase">
                  Capacitação Técnica
                </p>
                <p className="mt-1 text-sm text-slate-200">
                  {COMPANY_INFO.name} • CNPJ {COMPANY_INFO.cnpj}
                </p>
              </div>
            </div>

            {/* Technical disciplines */}
            <div className="mt-6 rounded-2xl border border-slate-200 bg-stone-50 p-6">
              <h3 className="font-display text-sm font-bold tracking-wide text-slate-900 uppercase">
                Disciplinas Técnicas Executadas
              </h3>
              <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
                {TECHNICAL_CAPABILITIES.map((cap) => (
                  <li key={cap} className="flex items-start gap-2 text-sm text-slate-700">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-700" />
                    <span>{cap}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* 4 Pillars */}
        <div className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PILLARS.map((pillar, idx) => {
            const Icon = PILLAR_ICONS[idx % PILLAR_ICONS.length];
            return (
              <div
                key={pillar.title}
                className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:border-emerald-300 hover:shadow-md"
              >
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700 transition-colors group-hover:bg-emerald-700 group-hover:text-white">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="font-display mt-4 text-lg font-bold text-slate-900">
                  {pillar.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {pillar.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* History Timeline */}
        <div className="mt-20 rounded-3xl border border-slate-200 bg-slate-950 p-8 text-white sm:p-12">
          <div className="max-w-2xl">
            <span className="text-xs font-bold tracking-widest text-emerald-400 uppercase">
              Nossa História
            </span>
            <h3 className="font-display mt-2 text-2xl font-bold sm:text-3xl">
              Uma trajetória de solidez construída desde 1989
            </h3>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {HISTORY_MILESTONES.map((item) => (
              <div
                key={item.year}
                className="relative rounded-2xl border border-white/10 bg-white/5 p-6"
              >
                <span className="inline-block rounded-md bg-emerald-500/15 px-2.5 py-1 text-xs font-bold text-emerald-300">
                  {item.year}
                </span>
                <h4 className="font-display mt-3 text-base font-bold text-white">
                  {item.title}
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
