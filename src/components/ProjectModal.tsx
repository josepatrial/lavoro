import { useState } from 'react';
import { ChevronLeft, ChevronRight, MapPin, Play, X, CheckCircle2, Layers } from 'lucide-react';
import type { FeaturedProject } from '../data/projects';

interface ProjectModalProps {
  project: FeaturedProject | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [showVideo, setShowVideo] = useState(false);

  if (!project) return null;

  const images = project.gallery.length > 0 ? project.gallery : [project.coverImage];
  const currentImg = images[activeIndex] ?? images[0];

  const handlePrev = () => {
    setShowVideo(false);
    setActiveIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setShowVideo(false);
    setActiveIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative max-h-[92vh] w-full max-w-5xl overflow-y-auto rounded-2xl bg-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 z-10 flex items-start justify-between border-b border-slate-200 bg-white/95 px-6 py-4 backdrop-blur">
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-full bg-emerald-50 px-3 py-0.5 text-xs font-semibold text-emerald-700">
                {project.category}
              </span>
              <span className="text-xs font-medium text-slate-500">
                Cliente: <strong className="text-slate-800">{project.client}</strong>
              </span>
              {project.area && (
                <span className="text-xs font-medium text-slate-500">• {project.area}</span>
              )}
            </div>
            <h3 className="font-display mt-1 text-xl font-bold text-slate-900 sm:text-2xl">
              {project.title}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg border border-slate-200 p-2 text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-900"
            aria-label="Fechar janela"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Media viewer */}
        <div className="bg-slate-950">
          <div className="relative aspect-[16/9] w-full overflow-hidden">
            {showVideo && project.videoUrl ? (
              <iframe
                src={project.videoUrl}
                title={project.title}
                className="h-full w-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <img
                src={currentImg}
                alt={`${project.title} - foto ${activeIndex + 1}`}
                className="h-full w-full object-contain"
              />
            )}

            {images.length > 1 && !showVideo && (
              <>
                <button
                  type="button"
                  onClick={handlePrev}
                  className="absolute top-1/2 left-3 -translate-y-1/2 rounded-full bg-slate-900/75 p-2.5 text-white backdrop-blur transition hover:bg-emerald-600"
                  aria-label="Foto anterior"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  className="absolute top-1/2 right-3 -translate-y-1/2 rounded-full bg-slate-900/75 p-2.5 text-white backdrop-blur transition hover:bg-emerald-600"
                  aria-label="Próxima foto"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </>
            )}

            {project.videoUrl && (
              <button
                type="button"
                onClick={() => setShowVideo((v) => !v)}
                className="absolute right-4 bottom-4 inline-flex items-center gap-2 rounded-lg bg-red-600 px-3.5 py-2 text-xs font-semibold text-white shadow-lg transition hover:bg-red-500"
              >
                <Play className="h-3.5 w-3.5" />
                {showVideo ? 'Ver Fotos' : 'Assistir Vídeo da Obra'}
              </button>
            )}
          </div>

          {/* Thumbnails */}
          {images.length > 1 && (
            <div className="flex gap-2 overflow-x-auto border-t border-white/10 bg-slate-900 px-4 py-3">
              {images.map((img, i) => (
                <button
                  key={img}
                  type="button"
                  onClick={() => {
                    setShowVideo(false);
                    setActiveIndex(i);
                  }}
                  className={`h-14 w-20 shrink-0 overflow-hidden rounded-lg border-2 transition ${
                    !showVideo && i === activeIndex
                      ? 'border-emerald-400 opacity-100'
                      : 'border-transparent opacity-55 hover:opacity-90'
                  }`}
                >
                  <img src={img} alt="" className="h-full w-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Details */}
        <div className="grid gap-6 p-6 sm:grid-cols-12">
          <div className="sm:col-span-7">
            <h4 className="font-display text-sm font-bold tracking-wide text-slate-900 uppercase">
              Sobre o Projeto
            </h4>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">{project.summary}</p>
            <div className="mt-4 flex flex-wrap items-center gap-4 text-xs text-slate-500">
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="h-3.5 w-3.5 text-emerald-700" />
                {project.location}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Layers className="h-3.5 w-3.5 text-emerald-700" />
                Ano: {project.year}
              </span>
            </div>
          </div>

          <div className="rounded-xl border border-slate-200 bg-stone-50 p-4 sm:col-span-5">
            <h4 className="font-display text-xs font-bold tracking-wide text-slate-900 uppercase">
              Escopo Executado
            </h4>
            <ul className="mt-3 space-y-2">
              {project.scope.map((item) => (
                <li key={item} className="flex items-start gap-2 text-xs text-slate-700">
                  <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-emerald-700" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
