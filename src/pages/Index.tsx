import { useState, useRef } from "react";
import { FileText, ClipboardList, BarChart2, Zap, Monitor, CheckCircle2, Shield, ChevronDown, ChevronUp, Star } from "lucide-react";

const OFFER_LINK = "https://classpilott.vercel.app/comecar";

const benefits = [
  { icon: FileText, label: "Plano de aula completo", detail: "Estruturado, com objetivos e metodologia" },
  { icon: ClipboardList, label: "Atividade para os alunos", detail: "Pronta para imprimir ou enviar digital" },
  { icon: BarChart2, label: "Avaliação pronta", detail: "Questões alinhadas ao conteúdo da aula" },
  { icon: Zap, label: "Dinâmica engajante", detail: "Para qualquer faixa etária e disciplina" },
  { icon: Monitor, label: "Slides da aula", detail: "Apresentação visual para usar em sala" },
];

const faqs = [
  {
    q: "Funciona para qualquer disciplina?",
    a: "Sim. O ClassPilot foi criado para funcionar com qualquer matéria do Ensino Fundamental ao Médio — de Matemática a Artes, de Português a Ciências.",
  },
  {
    q: "É diferente do ChatGPT?",
    a: "Muito diferente. O ClassPilot é treinado especificamente para educação. Ele entende BNCC, linguagem pedagógica e cria materiais no formato que você realmente usa em sala — não texto genérico.",
  },
  {
    q: "Posso cancelar quando quiser?",
    a: "Sim, sem burocracia. Você cancela com um clique no painel, a qualquer momento, e não é cobrado no mês seguinte.",
  },
  {
    q: "Quando posso começar a usar?",
    a: "Imediatamente após a ativação. Seu acesso é liberado na hora, sem esperar aprovação.",
  },
];

const OfferCTAButton = ({ text, className = "" }: { text: string; className?: string }) => (
  <a
    href={OFFER_LINK}
    target="_blank"
    rel="noopener noreferrer"
    className={`block w-full bg-primary text-primary-foreground font-semibold text-base sm:text-lg px-8 py-5 rounded-[14px] transition-all duration-200 hover:bg-[hsl(var(--primary-hover))] hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0 text-center ${className}`}
    style={{ fontFamily: "Montserrat, sans-serif" }}
  >
    {text}
  </a>
);

const Index = () => {
  const [videoStarted, setVideoStarted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const offerRef = useRef<HTMLElement>(null);

  const scrollToOffer = () => {
    offerRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-2xl px-5 py-10 sm:py-14">

        {/* Logo */}
        <div className="flex justify-center mb-5">
          <img src="/logo.png" alt="ClassPilot Logo" className="h-24 object-contain" />
        </div>

        {/* Hero */}
        <section className="text-center mb-10">
          <h1
            className="sm:text-4xl font-extrabold text-foreground leading-tight mb-3 text-xl"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            Seu material de dinâmicas já está{" "}
            <span className="text-primary">QUASE liberado…</span>
          </h1>
          <h2
            className="sm:text-2xl text-muted-foreground leading-snug mb-0 text-lg font-medium"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Enquanto isso, assista esse vídeo de 2 minutos e descubra como receber um{" "}
            <span className="text-foreground font-semibold">BÔNUS extra</span> no final.
          </h2>
        </section>

        {/* Video */}
        <section className="mb-6">
          <div className="rounded-2xl shadow-sm overflow-hidden" style={{ padding: "56.25% 0 0 0", position: "relative" }}>
            {!videoStarted ? (
              <button
                onClick={() => setVideoStarted(true)}
                className="absolute inset-0 w-full h-full flex flex-col items-center justify-center gap-5 cursor-pointer group"
                style={{ background: "linear-gradient(145deg, #1a3a5c 0%, #0f2540 60%, #0a1e35 100%)" }}
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-1 rounded-full opacity-60" style={{ background: "linear-gradient(90deg, transparent, #2563EB, transparent)" }} />
                <span
                  className="text-xs font-bold tracking-[0.25em] uppercase"
                  style={{ color: "#7eb3f5", fontFamily: "Montserrat, sans-serif" }}
                >
                  Toque para assistir
                </span>
                <div className="relative flex items-center justify-center">
                  <div className="absolute w-24 h-24 rounded-full opacity-20 group-hover:opacity-30 transition-opacity duration-300" style={{ background: "#2563EB" }} />
                  <div className="relative w-16 h-16 rounded-full flex items-center justify-center border-2 border-white/30 group-hover:scale-110 transition-transform duration-300" style={{ background: "rgba(255,255,255,0.12)", backdropFilter: "blur(8px)" }}>
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" className="ml-1">
                      <polygon points="5 3 19 12 5 21 5 3" fill="white" />
                    </svg>
                  </div>
                </div>
                <span
                  className="text-base font-semibold"
                  style={{ color: "rgba(255,255,255,0.75)", fontFamily: "Inter, sans-serif" }}
                >
                  Veja como funciona na prática
                </span>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-48 h-px opacity-30" style={{ background: "linear-gradient(90deg, transparent, #2563EB, transparent)" }} />
              </button>
            ) : (
              <iframe
                src="https://player.vimeo.com/video/1172014535?badge=0&autopause=1&autoplay=1&player_id=0&app_id=58479"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: "none" }}
                title="minivsl classpilot"
              />
            )}
          </div>
        </section>

        {/* Primary CTA — scroll to offer */}
        <section className="mb-10">
          <button
            onClick={scrollToOffer}
            className="block w-full bg-primary text-primary-foreground font-semibold text-base sm:text-lg px-8 py-5 rounded-[14px] transition-all duration-200 hover:bg-[hsl(var(--primary-hover))] hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0 text-center"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            Quero ativar meu acesso ao ClassPilot
          </button>
        </section>

        {/* Social proof */}
        <section className="flex items-center justify-center gap-2 mb-10">
          <div className="flex -space-x-2">
            {["bg-blue-400", "bg-indigo-400", "bg-sky-500", "bg-blue-600"].map((c, i) => (
              <div key={i} className={`w-7 h-7 rounded-full border-2 border-background ${c} flex items-center justify-center`}>
                <span className="text-white text-[9px] font-bold">{["MR", "AS", "JP", "LF"][i]}</span>
              </div>
            ))}
          </div>
          <div className="flex flex-col">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />)}
            </div>
            <span className="text-xs text-muted-foreground" style={{ fontFamily: "Inter, sans-serif" }}>
              Professores de todo o Brasil já usam o ClassPilot
            </span>
          </div>
        </section>

        {/* Benefits */}
        <section className="bg-muted rounded-2xl px-6 py-8 mb-10">
          <h3
            className="sm:text-2xl text-foreground text-center mb-2 text-xl font-extrabold"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            O que o ClassPilot cria para você
          </h3>
          <p className="text-center text-sm text-muted-foreground mb-6" style={{ fontFamily: "Inter, sans-serif" }}>
            Tudo isso em menos de 30 segundos, para qualquer matéria
          </p>
          <ul className="space-y-3">
            {benefits.map(({ label, detail }) => (
              <li key={label} className="flex items-center gap-4 bg-card rounded-xl px-5 py-4 border border-border shadow-sm">
                <CheckCircle2 className="w-5 h-5 flex-shrink-0 text-primary" />
                <div>
                  <span className="text-foreground font-semibold block text-sm" style={{ fontFamily: "Inter, sans-serif" }}>{label}</span>
                  <span className="text-muted-foreground text-xs" style={{ fontFamily: "Inter, sans-serif" }}>{detail}</span>
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* Offer */}
        <section ref={offerRef} className="relative border-2 border-primary rounded-2xl px-6 py-8 mb-4 shadow-sm mt-5 scroll-mt-6">
          {/* Urgency badge */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <span className="bg-primary text-primary-foreground text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wide whitespace-nowrap" style={{ fontFamily: "Montserrat, sans-serif" }}>
              Condição exclusiva desta página
            </span>
          </div>

          <div className="text-center pt-3">
            <p className="text-muted-foreground text-sm sm:text-base mb-1" style={{ fontFamily: "Inter, sans-serif" }}>
              Na página oficial, o acesso ao ClassPilot custa{" "}
              <span className="line-through font-semibold text-destructive">R$59,90 por mês</span>.
            </p>
            <p className="text-muted-foreground text-sm sm:text-base mb-6" style={{ fontFamily: "Inter, sans-serif" }}>
              Por ter adquirido o material de dinâmicas, desbloqueou uma condição especial:
            </p>

            <p className="text-muted-foreground text-xs font-bold uppercase tracking-widest mb-1" style={{ fontFamily: "Montserrat, sans-serif" }}>
              Sua condição especial
            </p>
            <p
              className="text-5xl sm:text-6xl font-extrabold text-primary leading-none"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              R$29,90
            </p>
            <p className="text-muted-foreground text-base mt-1 mb-6" style={{ fontFamily: "Inter, sans-serif" }}>
              por mês · cancele quando quiser
            </p>

            <OfferCTAButton text="Ativar meu acesso agora →" className="mb-4" />

            {/* Trust row */}
            <div className="flex items-center justify-center gap-4 flex-wrap">
              <span className="flex items-center gap-1.5 text-xs text-muted-foreground" style={{ fontFamily: "Inter, sans-serif" }}>
                <Shield className="w-3.5 h-3.5 text-primary" /> Pagamento seguro
              </span>
              <span className="text-muted-foreground text-xs">·</span>
              <span className="flex items-center gap-1.5 text-xs text-muted-foreground" style={{ fontFamily: "Inter, sans-serif" }}>
                <CheckCircle2 className="w-3.5 h-3.5 text-primary" /> Sem fidelidade
              </span>
              <span className="text-muted-foreground text-xs">·</span>
              <span className="flex items-center gap-1.5 text-xs text-muted-foreground" style={{ fontFamily: "Inter, sans-serif" }}>
                <CheckCircle2 className="w-3.5 h-3.5 text-primary" /> Acesso imediato
              </span>
            </div>
          </div>
        </section>

        {/* Guarantee note */}
        <div className="flex items-start gap-3 bg-muted rounded-xl px-5 py-4 mb-10 border border-border">
          <Shield className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
          <p className="text-sm text-muted-foreground" style={{ fontFamily: "Inter, sans-serif" }}>
            <span className="text-foreground font-semibold">Sem risco nenhum.</span> Você cancela a qualquer momento com um clique, sem precisar falar com ninguém. Não há fidelidade, multa ou burocracia.
          </p>
        </div>

        {/* FAQ */}
        <section className="mb-10">
          <h3
            className="text-xl font-extrabold text-foreground text-center mb-5"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            Perguntas frequentes
          </h3>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-border rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-5 py-4 text-left gap-4 bg-card hover:bg-muted transition-colors"
                >
                  <span className="text-foreground font-semibold text-sm" style={{ fontFamily: "Inter, sans-serif" }}>
                    {faq.q}
                  </span>
                  {openFaq === i
                    ? <ChevronUp className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                    : <ChevronDown className="w-4 h-4 text-muted-foreground flex-shrink-0" />}
                </button>
                {openFaq === i && (
                  <div className="px-5 py-4 bg-muted border-t border-border">
                    <p className="text-sm text-muted-foreground" style={{ fontFamily: "Inter, sans-serif" }}>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Footer note */}
        <p className="text-center text-xs text-muted-foreground pb-8" style={{ fontFamily: "Inter, sans-serif" }}>
          Pagamento seguro · Sem fidelidade · Cancele quando quiser
        </p>

      </div>
    </div>
  );
};

export default Index;
