import { useState, type FormEvent } from 'react';
import { Clock, Mail, MapPin, Phone, Send, CheckCircle2, MessageCircle } from 'lucide-react';
import { COMPANY_INFO } from '../data/company';

export function ContactSection() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    const whatsappText = encodeURIComponent(
      `Olá Lavoro Construtora! Meu nome é ${name} (${email}).\nAssunto: ${subject}\nMensagem: ${message}`,
    );
    window.open(
      `https://wa.me/${COMPANY_INFO.contact.whatsappDigits}?text=${whatsappText}`,
      '_blank',
      'noopener,noreferrer',
    );
  };

  return (
    <section id="contato" className="bg-stone-100 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-12">
          {/* Left: Info + Map */}
          <div className="lg:col-span-5">
            <span className="text-xs font-bold tracking-widest text-emerald-700 uppercase">
              Contato
            </span>
            <h2 className="font-display mt-2 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Faça-nos uma visita ou envie seu projeto
            </h2>
            <p className="mt-3 text-base text-slate-600">
              Será um prazer recebê-lo em nosso escritório em Curitiba ou atender sua equipe em
              qualquer região do Brasil.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-3.5 rounded-xl border border-slate-200 bg-white p-4">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-emerald-700" />
                <div className="text-sm">
                  <p className="font-semibold text-slate-900">Sede Administrativa</p>
                  <p className="text-slate-600">
                    {COMPANY_INFO.address.street} — {COMPANY_INFO.address.neighborhood}
                  </p>
                  <p className="text-slate-600">
                    {COMPANY_INFO.address.city} - {COMPANY_INFO.address.state}, CEP{' '}
                    {COMPANY_INFO.address.cep}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 rounded-xl border border-slate-200 bg-white p-4">
                <Phone className="mt-0.5 h-5 w-5 shrink-0 text-emerald-700" />
                <div className="text-sm">
                  <p className="font-semibold text-slate-900">Telefones & WhatsApp</p>
                  <p className="text-slate-600">
                    Fixo: {COMPANY_INFO.contact.phones.join(' / ')}
                  </p>
                  <p className="text-slate-600">Móvel / WhatsApp: {COMPANY_INFO.contact.mobile}</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 rounded-xl border border-slate-200 bg-white p-4">
                <Mail className="mt-0.5 h-5 w-5 shrink-0 text-emerald-700" />
                <div className="text-sm">
                  <p className="font-semibold text-slate-900">E-mail Corporativo</p>
                  <a
                    href={`mailto:${COMPANY_INFO.contact.email}`}
                    className="text-emerald-700 hover:underline"
                  >
                    {COMPANY_INFO.contact.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3.5 rounded-xl border border-slate-200 bg-white p-4">
                <Clock className="mt-0.5 h-5 w-5 shrink-0 text-emerald-700" />
                <div className="text-sm">
                  <p className="font-semibold text-slate-900">Horário de Atendimento</p>
                  <p className="text-slate-600">{COMPANY_INFO.contact.hours}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Form + Map */}
          <div className="space-y-6 lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
            >
              <h3 className="font-display text-xl font-bold text-slate-900">
                Envie-nos uma mensagem
              </h3>
              <p className="mt-1 text-sm text-slate-500">
                Preencha os dados abaixo para iniciar um atendimento direto com nossa equipe.
              </p>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="mb-1.5 block text-xs font-semibold text-slate-700 uppercase">
                    Nome *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Seu nome completo"
                    className="w-full rounded-xl border border-slate-200 bg-stone-50 px-4 py-2.5 text-sm text-slate-900 focus:border-emerald-600 focus:bg-white focus:outline-none"
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-xs font-semibold text-slate-700 uppercase">
                    E-mail *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="nome@empresa.com.br"
                    className="w-full rounded-xl border border-slate-200 bg-stone-50 px-4 py-2.5 text-sm text-slate-900 focus:border-emerald-600 focus:bg-white focus:outline-none"
                  />
                </div>
              </div>

              <div className="mt-4">
                <label className="mb-1.5 block text-xs font-semibold text-slate-700 uppercase">
                  Assunto *
                </label>
                <input
                  type="text"
                  required
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder="Ex.: Orçamento de obra comercial / Retrofit de fachada"
                  className="w-full rounded-xl border border-slate-200 bg-stone-50 px-4 py-2.5 text-sm text-slate-900 focus:border-emerald-600 focus:bg-white focus:outline-none"
                />
              </div>

              <div className="mt-4">
                <label className="mb-1.5 block text-xs font-semibold text-slate-700 uppercase">
                  Mensagem *
                </label>
                <textarea
                  rows={4}
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Descreva brevemente o local, metragem estimada e prazo desejado..."
                  className="w-full rounded-xl border border-slate-200 bg-stone-50 px-4 py-2.5 text-sm text-slate-900 focus:border-emerald-600 focus:bg-white focus:outline-none"
                />
              </div>

              <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-xl bg-emerald-700 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-600"
                >
                  <MessageCircle className="h-4 w-4" />
                  Enviar via WhatsApp
                  <Send className="h-3.5 w-3.5" />
                </button>

                {submitted && (
                  <span className="inline-flex items-center gap-1.5 text-xs font-medium text-emerald-700">
                    <CheckCircle2 className="h-4 w-4" />
                    Mensagem preparada para envio!
                  </span>
                )}
              </div>
            </form>

            {/* Google Map */}
            <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
              <iframe
                title="Localização Lavoro Construtora em Curitiba"
                src={COMPANY_INFO.address.mapsEmbedUrl}
                className="h-64 w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
