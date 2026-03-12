import { useState, useRef } from "react";
import { CheckCircle2, Shield } from "lucide-react";

const OFFER_LINK = "https://classpilott.vercel.app/comecar";

const Index = () => {
  const [videoStarted, setVideoStarted] = useState(false);
  const offerRef = useRef<HTMLElement>(null);

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-lg px-5 py-8 sm:py-12">

        {/* Logo */}
        <div className="flex justify-center mb-6">
          <img src="/logo.png" alt="ClassPilot" className="h-20 object-contain" />
        </div>

        {/* 1. Confirmação de compra */}
        <div className="rounded-xl border border-green-200 bg-green-50 px-5 py-4 mb-6 flex items-start gap-3">
          <span className="text-xl mt-0.5">🎉</span>
          <div>
            <p className="font-semibold text-green-800 text-sm" style={{ fontFamily: "Montserrat, sans-serif" }}>
              Pagamento confirmado!
            </p>
            <p className="text-green-700 text-sm mt-0.5" style={{ fontFamily: "Inter, sans-serif" }}>
              Seu acesso ao material está sendo liberado e você receberá tudo no e-mail em cerca de 2 minutos.
            </p>
          </div>
        </div>

        {/* 2 + 3. Gancho + Headline */}
        <section className="text-center mb-6">
          <p
            className="text-sm text-primary font-semibold uppercase tracking-wide mb-3"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            Enquanto isso, preparei um bônus surpresa para você
          </p>
          <h1
            className="text-xl sm:text-2xl font-extrabold text-foreground leading-snug"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            Veja como preparar planos de aula, slides, atividades e avaliações em{" "}
            <span className="text-primary">segundos</span> usando um único aplicativo.
          </h1>
        </section>

        {/* 4. Vídeo */}
        <section className="mb-6">
          <div className="rounded-2xl shadow-sm overflow-hidden" style={{ padding: "177.78% 0 0 0", position: "relative" }}>
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
                src="https://player.vimeo.com/video/1172790885?badge=0&autopause=1&autoplay=1&player_id=0&app_id=58479"
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: "none" }}
                title="ClassPilot"
              />
            )}
          </div>
        </section>

        {/* 5. Benefícios rápidos */}
        <section className="bg-muted rounded-2xl px-5 py-5 mb-6">
          <p className="text-sm font-semibold text-foreground mb-3" style={{ fontFamily: "Montserrat, sans-serif" }}>
            Com o ClassPilot você pode gerar automaticamente:
          </p>
          <ul className="space-y-2">
            {[
              "Planos de aula estruturados",
              "Slides prontos para apresentar",
              "Atividades para os alunos",
              "Avaliações completas",
            ].map((item) => (
              <li key={item} className="flex items-center gap-2.5 text-sm text-foreground" style={{ fontFamily: "Inter, sans-serif" }}>
                <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        {/* 6. Ancoragem + Oferta */}
        <section ref={offerRef} className="relative border-2 border-primary rounded-2xl px-6 py-7 mb-3 shadow-sm mt-5 scroll-mt-6">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <span className="bg-primary text-primary-foreground text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wide whitespace-nowrap" style={{ fontFamily: "Montserrat, sans-serif" }}>
              Condição exclusiva desta página
            </span>
          </div>

          <div className="text-center pt-2">
            <p className="text-muted-foreground text-sm mb-1" style={{ fontFamily: "Inter, sans-serif" }}>
              Plataformas semelhantes cobram{" "}
              <span className="font-semibold text-foreground">mais de R$100/mês</span>.
            </p>
            <p className="text-muted-foreground text-sm mb-5" style={{ fontFamily: "Inter, sans-serif" }}>
              Por ter adquirido o material de dinâmicas, você desbloqueou:
            </p>

            <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-0.5" style={{ fontFamily: "Montserrat, sans-serif" }}>
              de <span className="line-through">R$59,90</span> por apenas
            </p>
            <p className="text-5xl sm:text-6xl font-extrabold text-primary leading-none mb-1" style={{ fontFamily: "Montserrat, sans-serif" }}>
              R$29,90
            </p>
            <p className="text-muted-foreground text-sm mb-6" style={{ fontFamily: "Inter, sans-serif" }}>
              por mês · cancele quando quiser
            </p>

            {/* CTA */}
            <a
              href={OFFER_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-primary text-primary-foreground font-bold text-base sm:text-lg px-8 py-5 rounded-[14px] transition-all duration-200 hover:bg-[hsl(var(--primary-hover))] hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0 text-center mb-4"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              🔓 Ativar acesso ao ClassPilot
            </a>

            <div className="flex items-center justify-center gap-4 flex-wrap">
              <span className="flex items-center gap-1.5 text-xs text-muted-foreground" style={{ fontFamily: "Inter, sans-serif" }}>
                <Shield className="w-3.5 h-3.5 text-primary" /> Acesso imediato
              </span>
              <span className="text-muted-foreground text-xs">·</span>
              <span className="flex items-center gap-1.5 text-xs text-muted-foreground" style={{ fontFamily: "Inter, sans-serif" }}>
                <CheckCircle2 className="w-3.5 h-3.5 text-primary" /> Sem fidelidade
              </span>
              <span className="text-muted-foreground text-xs">·</span>
              <span className="flex items-center gap-1.5 text-xs text-muted-foreground" style={{ fontFamily: "Inter, sans-serif" }}>
                <CheckCircle2 className="w-3.5 h-3.5 text-primary" /> Cancele quando quiser
              </span>
            </div>
          </div>
        </section>

        {/* 7. Botão recusar */}
        <div className="text-center pb-10 pt-3">
          <button
            onClick={() => {}}
            className="text-xs text-muted-foreground underline underline-offset-2 hover:text-foreground transition-colors"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Não, prefiro continuar sem essa ferramenta.
          </button>
        </div>

      </div>
    </div>
  );
};

export default Index;
