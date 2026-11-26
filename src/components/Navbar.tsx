import { useState } from 'react';
import { Menu, X, Phone, ArrowUpRight } from 'lucide-react';
import { COMPANY_INFO } from '../data/company';

const NAV_LINKS = [
  { label: 'Início', href: '#inicio' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Obras', href: '#obras' },
  { label: 'Acervo Técnico', href: '#acervo' },
  { label: 'Clientes', href: '#clientes' },
  { label: 'Contato', href: '#contato' },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/80 bg-white/90 backdrop-blur-md">
      {/* Top utility bar */}
      <div className="hidden border-b border-slate-100 bg-slate-950 text-xs text-slate-300 lg:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2">
          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-1.5 font-medium text-emerald-400">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Desde 1989 • Atuação em todo o território nacional
            </span>
            <span className="text-slate-600">|</span>
            <span>CNPJ {COMPANY_INFO.cnpj}</span>
          </div>
          <div className="flex items-center gap-5">
            <a
              href={`mailto:${COMPANY_INFO.contact.email}`}
              className="transition-colors hover:text-white"
            >
              {COMPANY_INFO.contact.email}
            </a>
            <div className="flex items-center gap-2 font-medium text-white">
              <Phone className="h-3.5 w-3.5 text-emerald-400" />
              <a
                href="tel:+554130164061"
                className="transition-colors hover:text-emerald-400"
              >
                {COMPANY_INFO.contact.phones[0]}
              </a>
              <span className="text-slate-600">•</span>
              <a
                href={`tel:+${COMPANY_INFO.contact.whatsappDigits}`}
                className="transition-colors hover:text-emerald-400"
              >
                {COMPANY_INFO.contact.mobile}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3.5 sm:px-6">
        <a href="#inicio" className="flex items-center gap-3 focus:outline-none">
          <img
            src="/images/logo-lavoro.png"
            alt="Lavoro Construções Civis Ltda."
            className="h-10 w-auto object-contain sm:h-11"
          />
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-slate-700 transition-colors hover:text-emerald-700"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href={`https://wa.me/${COMPANY_INFO.contact.whatsappDigits}?text=Ol%C3%A1!%20Gostaria%20de%20conversar%20sobre%20um%20projeto%20com%20a%20Lavoro%20Construtora.`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 rounded-lg bg-slate-900 px-4 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-emerald-700"
          >
            Solicitar Orçamento
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex items-center justify-center rounded-lg border border-slate-200 p-2 text-slate-700 md:hidden"
          aria-label="Abrir menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-slate-200 bg-white px-4 py-4 md:hidden">
          <nav className="flex flex-col gap-3">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100"
              >
                {link.label}
              </a>
            ))}
            <a
              href={`https://wa.me/${COMPANY_INFO.contact.whatsappDigits}`}
              target="_blank"
              rel="noreferrer"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-700 px-4 py-2.5 text-sm font-semibold text-white"
            >
              Falar no WhatsApp
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
