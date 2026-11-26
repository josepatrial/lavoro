import { Mail, MapPin, Phone, ArrowUpRight } from 'lucide-react';
import { COMPANY_INFO, YEARS_IN_MARKET } from '../data/company';

const QUICK_LINKS = [
  { label: 'Início', href: '#inicio' },
  { label: 'Sobre a Lavoro', href: '#sobre' },
  { label: 'Obras Realizadas', href: '#obras' },
  { label: 'Acervo Técnico', href: '#acervo' },
  { label: 'Clientes & Parceiros', href: '#clientes' },
  { label: 'Contato', href: '#contato' },
];

const SPECIALTIES = [
  'Lojas Conceito & Flagships',
  'Implantações em Shoppings',
  'Retrofits & Fachadas em ACM',
  'Infraestrutura Corporativa',
  'Climatização, Elétrica & Automação',
];

export function Footer() {
  return (
    <footer className="bg-arch-grid-dark relative border-t border-slate-800 bg-slate-950 text-slate-400">
      {/* Subtle brand accent hairline */}
      <div className="h-1 w-full bg-gradient-to-r from-emerald-700 via-slate-800 to-red-700" />

      <div className="mx-auto max-w-7xl px-4 pt-14 pb-10 sm:px-6">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-12">
          {/* Brand column */}
          <div className="lg:col-span-4">
            <div className="inline-flex rounded-xl bg-white px-4 py-2.5 shadow-sm">
              <img
                src="/images/logo-lavoro.png"
                alt={COMPANY_INFO.name}
                className="h-9 w-auto object-contain"
              />
            </div>

            <p className="mt-5 max-w-sm text-sm leading-relaxed text-slate-400">
              Há {YEARS_IN_MARKET} anos entregando obras comerciais, lojas conceito, retrofits e
              infraestrutura corporativa com engenharia especializada em todo o Brasil.
            </p>

            <div className="mt-5 inline-flex items-center gap-2 rounded-lg border border-slate-800 bg-slate-900/70 px-3 py-1.5 text-xs text-slate-300">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              <span>CNPJ {COMPANY_INFO.cnpj} • Desde 1989</span>
            </div>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-2">
            <h4 className="font-display text-xs font-bold tracking-widest text-white uppercase">
              Navegação
            </h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              {QUICK_LINKS.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="transition-colors hover:text-emerald-400"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Specialties */}
          <div className="lg:col-span-3">
            <h4 className="font-display text-xs font-bold tracking-widest text-white uppercase">
              Especialidades
            </h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              {SPECIALTIES.map((spec) => (
                <li key={spec} className="flex items-center gap-2 text-slate-400">
                  <span className="h-1 w-1 rounded-full bg-emerald-500" />
                  <span>{spec}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & HQ */}
          <div className="lg:col-span-3">
            <h4 className="font-display text-xs font-bold tracking-widest text-white uppercase">
              Atendimento & Sede
            </h4>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                <span>
                  {COMPANY_INFO.address.street} — {COMPANY_INFO.address.neighborhood},{' '}
                  {COMPANY_INFO.address.city}/{COMPANY_INFO.address.state}
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 shrink-0 text-emerald-400" />
                <a
                  href={`https://wa.me/${COMPANY_INFO.contact.whatsappDigits}`}
                  target="_blank"
                  rel="noreferrer"
                  className="transition-colors hover:text-white"
                >
                  {COMPANY_INFO.contact.phones[0]} • {COMPANY_INFO.contact.mobile}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 shrink-0 text-emerald-400" />
                <a
                  href={`mailto:${COMPANY_INFO.contact.email}`}
                  className="truncate transition-colors hover:text-white"
                >
                  {COMPANY_INFO.contact.email}
                </a>
              </li>
            </ul>

            <a
              href="#contato"
              className="mt-5 inline-flex items-center gap-1.5 rounded-lg border border-slate-700 bg-slate-900 px-3.5 py-2 text-xs font-semibold text-white transition hover:border-emerald-500 hover:text-emerald-300"
            >
              Solicitar Proposta
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </div>

        {/* Bottom legal & discreet credit bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-slate-800/80 pt-6 text-xs text-slate-500 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {COMPANY_INFO.name} Todos os direitos reservados.
          </p>
          <p className="text-slate-600">
            Desenvolvido por{' '}
            <a
              href="https://www.patrialsolucoes.com.br"
              target="_blank"
              rel="noreferrer"
              className="text-slate-500 transition-colors hover:text-slate-300"
            >
              www.patrialsolucoes.com.br
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
