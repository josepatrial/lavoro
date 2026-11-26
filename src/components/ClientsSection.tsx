import { Building, ArrowRight } from 'lucide-react';
import { CLIENTS } from '../data/company';

export function ClientsSection() {
  return (
    <section id="clientes" className="bg-white py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <span className="text-xs font-bold tracking-widest text-emerald-700 uppercase">
            Clientes & Parceiros
          </span>
          <h2 className="font-display mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Confiança de grandes corporações nacionais
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Nossa reputação foi construída atendendo empresas exigentes em qualidade, segurança do
            trabalho e cumprimento rigoroso de cronogramas.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {CLIENTS.map((client) => (
            <div
              key={client.name}
              className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-stone-50 p-6 sm:p-8"
            >
              <div>
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <span className="text-xs font-semibold text-emerald-700 uppercase">
                      {client.segment}
                    </span>
                    <h3 className="font-display mt-1 text-xl font-bold text-slate-900">
                      {client.name}
                    </h3>
                  </div>
                  {client.logo ? (
                    <div className="flex h-14 w-28 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-white p-2">
                      <img
                        src={client.logo}
                        alt={client.name}
                        className="max-h-full max-w-full object-contain"
                      />
                    </div>
                  ) : (
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-slate-200/70 text-slate-700">
                      <Building className="h-5 w-5" />
                    </div>
                  )}
                </div>
                <p className="mt-4 text-sm leading-relaxed text-slate-600">
                  {client.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="mt-14 flex flex-col items-start justify-between gap-6 rounded-3xl bg-gradient-to-r from-slate-900 via-slate-900 to-emerald-950 p-8 text-white sm:flex-row sm:items-center sm:p-12">
          <div>
            <h3 className="font-display text-2xl font-bold sm:text-3xl">
              Tem uma nova obra, loja conceito ou retrofit?
            </h3>
            <p className="mt-2 max-w-xl text-sm text-slate-300 sm:text-base">
              Conte com uma construtora com quase quatro décadas de experiência para tirar seu
              projeto do papel dentro do prazo e do padrão técnico exigido.
            </p>
          </div>
          <a
            href="#contato"
            className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-emerald-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg transition hover:bg-emerald-500"
          >
            Falar com a Engenharia
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
