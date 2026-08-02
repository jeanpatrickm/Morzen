import {
  ArrowUpRight,
  Blocks,
  Code2,
  Github,
  Instagram,
  Layers3,
  Linkedin,
  MessageCircle,
  PanelTop,
  Rocket,
  Sparkles,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function MorzenLanding() {
  return (
    <main className="bg-[#f8f9ff] text-black">
      <section
        id="jornada"
        className="morzen-hero-interactive relative flex min-h-screen overflow-hidden px-6 pt-28 text-black"
      >
        <div className="morzen-hero-field absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,#6848f5_0%,rgba(116,86,245,0.66)_22%,rgba(240,239,255,0.74)_48%,transparent_68%),radial-gradient(circle_at_78%_10%,rgba(119,91,255,0.72)_0%,rgba(142,128,255,0.42)_26%,transparent_52%),radial-gradient(circle_at_12%_100%,#24106f_0%,rgba(78,55,163,0.7)_19%,transparent_42%),linear-gradient(115deg,#eeeaff_0%,#f7f8ff_43%,#9894ff_100%)]" />
        <div className="morzen-hero-light absolute inset-0 bg-[radial-gradient(ellipse_at_48%_34%,rgba(255,255,255,0.9)_0%,rgba(255,255,255,0.66)_22%,rgba(255,255,255,0)_58%)]" />
        <div className="morzen-hero-deep absolute -left-24 bottom-0 h-80 w-[36rem] rounded-[45%] bg-[#06145f]/80 blur-3xl" />
        <div className="morzen-hero-violet absolute right-[-10%] top-[-14%] h-[30rem] w-[46rem] rounded-[50%] bg-[#695cff]/34 blur-3xl" />
        <div className="morzen-hero-shade absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.1)_0%,rgba(8,13,44,0.34)_100%)]" />

        <div className="relative z-10 mx-auto flex min-h-[calc(100vh-7rem)] w-full max-w-7xl flex-col items-center justify-center pb-20">
          <div className="flex flex-1 flex-col items-center justify-center text-center">
            <h1 className="morzen-hero-title text-[4.35rem] font-medium leading-none tracking-[-0.03em] text-black sm:text-[5.7rem] md:text-[6.8rem]">
              Morzen
            </h1>
            <p className="morzen-hero-copy mt-8 max-w-3xl text-lg font-medium leading-8 text-black sm:text-xl">
              Construindo software e uma startup em público.
            </p>

            <div className="morzen-hero-actions mt-9 flex flex-col items-center gap-3 sm:flex-row">
              <Link
                href="#acompanhar"
                className="morzen-liquid-button morzen-liquid-button-dark inline-flex h-12 items-center justify-center gap-2 rounded-full px-6 text-sm font-semibold text-black transition hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/30"
              >
                Acompanhar a jornada
                <ArrowUpRight className="size-4" aria-hidden="true" />
              </Link>
              <Link
                href="/new_project"
                className="morzen-liquid-button morzen-liquid-button-light inline-flex h-12 items-center justify-center rounded-full px-6 text-sm font-semibold text-black transition hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/30"
              >
                Começar projeto
              </Link>
            </div>
          </div>

          <div className="morzen-social-band w-full pb-7 text-center text-white">
            <p className="text-base font-medium text-white/95">
              Acompanhe a Morzen por dentro
            </p>
            <div className="mx-auto mt-16 grid max-w-5xl grid-cols-2 items-center gap-8 text-white sm:grid-cols-4">
              {socialLinks.map((item, index) => (
                <Link
                  key={item.label}
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noreferrer" : undefined}
                  style={{ animationDelay: `${980 + index * 90}ms` }}
                  className="morzen-social-link mx-auto inline-flex items-center gap-3 text-lg font-semibold text-white/92 transition hover:-translate-y-1 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
                >
                  <item.icon className="size-6" aria-hidden="true" />
                  <span>{item.label}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section
        id="visao"
        className="morzen-scroll-scene bg-[#f5f6fb] px-6 py-28 text-black sm:py-36"
      >
        <div className="mx-auto max-w-7xl">
          <div className="morzen-scroll-reveal max-w-4xl">
            <h2 className="text-4xl font-medium leading-tight tracking-[-0.03em] sm:text-6xl">
              A melhor forma de conhecer a Morzen e acompanhar como ela nasce.
            </h2>
            <p className="mt-7 max-w-2xl text-lg leading-8 text-black/68">
              Em vez de vender primeiro e aparecer depois, queremos abrir o
              processo: escolhas, bastidores, projetos, erros e aprendizados de
              quem está tentando construir uma startup de software de verdade.
            </p>
          </div>

          <div className="mt-16 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {journeyCards.map((card, index) => (
              <article
                key={card.title}
                style={{ animationDelay: `${index * 70}ms` }}
                className={
                  index === 0
                    ? "morzen-card-rise morzen-scroll-reveal morzen-liquid-panel min-h-[24rem] rounded-2xl p-8 transition duration-500 hover:-translate-y-1 md:col-span-2"
                    : "morzen-card-rise morzen-scroll-reveal morzen-liquid-panel min-h-[24rem] rounded-2xl p-8 transition duration-500 hover:-translate-y-1"
                }
              >
                <div
                  className={
                    index === 0
                      ? "mb-16 flex size-11 items-center justify-center rounded-full bg-[#eef0ff] text-[#4934d6]"
                      : "mb-16 flex size-11 items-center justify-center rounded-full bg-[#eef0ff] text-[#4934d6]"
                  }
                >
                  <card.icon className="size-5" aria-hidden="true" />
                </div>
                <h3 className="max-w-xl text-2xl font-medium tracking-[-0.02em]">
                  {card.title}
                </h3>
                <p
                  className={
                    index === 0
                      ? "mt-5 max-w-xl leading-7 text-black/62"
                      : "mt-5 leading-7 text-black/62"
                  }
                >
                  {card.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="software" className="morzen-scroll-scene bg-white px-6 py-28 text-black sm:py-36">
        <div className="mx-auto grid max-w-7xl gap-16 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div className="morzen-scroll-reveal lg:sticky lg:top-28">
            <h2 className="text-4xl font-medium leading-tight tracking-[-0.03em] sm:text-6xl">
              Software sob medida continua sendo o que fazemos.
            </h2>
            <p className="mt-7 text-lg leading-8 text-black/64">
              A diferença é que agora você acompanha como pensamos antes de
              contratar. Quando fizer sentido construir algo junto, o caminho
              está aberto.
            </p>
            <Link
              href="/new_project"
              className="morzen-liquid-button morzen-liquid-button-dark mt-9 inline-flex h-12 items-center justify-center gap-2 rounded-full px-6 text-sm font-semibold text-black transition hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/30"
            >
              Começar projeto
              <ArrowUpRight className="size-4" aria-hidden="true" />
            </Link>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {services.map((service, index) => (
              <article
                key={service.title}
                style={{ animationDelay: `${index * 80}ms` }}
                className="morzen-card-rise morzen-scroll-reveal morzen-liquid-panel rounded-2xl p-7 transition duration-500 hover:-translate-y-1"
              >
                <service.icon className="size-7 text-[#5138df]" aria-hidden="true" />
                <h3 className="mt-14 text-2xl font-medium tracking-[-0.02em]">
                  {service.title}
                </h3>
                <p className="mt-4 leading-7 text-black/62">
                  {service.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="fundadores"
        className="morzen-scroll-scene bg-[#f5f6fb] px-6 py-28 text-black sm:py-36"
      >
        <div className="mx-auto max-w-7xl">
          <div className="morzen-scroll-reveal grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <h2 className="text-4xl font-medium leading-tight tracking-[-0.03em] sm:text-6xl">
              Jean e Diego, construindo a Morzen enquanto mostram o caminho.
            </h2>
            <p className="max-w-2xl text-lg leading-8 text-black/64 lg:justify-self-end">
              Acompanhando a Morzen, você acompanha também a evolução pessoal e
              profissional de quem está colocando a empresa de pé. Essa é a
              parte que queremos compartilhar sem filtro polido demais.
            </p>
          </div>

          <div className="mt-16 grid gap-4 md:grid-cols-2">
            {founders.map((founder, index) => (
              <article
                key={founder.name}
                style={{ animationDelay: `${index * 120}ms` }}
                className="morzen-card-rise morzen-scroll-reveal morzen-liquid-photo-card overflow-hidden rounded-2xl transition duration-500 hover:-translate-y-1"
              >
                <div className="relative aspect-[1.25/1] overflow-hidden">
                  <Image
                    src={founder.image}
                    alt={founder.alt}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover transition duration-700 ease-out hover:scale-[1.035]"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-3xl font-medium tracking-[-0.03em]">
                    {founder.name}
                  </h3>
                  <p className="mt-4 leading-7 text-black/62">{founder.copy}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="acompanhar"
        className="morzen-final-pulse bg-black px-6 py-28 text-white sm:py-36"
      >
        <div className="morzen-scroll-reveal mx-auto flex max-w-5xl flex-col items-center text-center">
          <div className="morzen-final-mark flex size-14 items-center justify-center rounded-2xl bg-white text-black">
            <Sparkles className="size-6" aria-hidden="true" />
          </div>
          <h2 className="mt-10 text-4xl font-medium leading-tight tracking-[-0.03em] sm:text-6xl">
            Vem acompanhar a Morzen antes dela estar pronta.
          </h2>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-white/68">
            Vamos compartilhar o que estamos aprendendo, construindo e
            descobrindo enquanto tentamos fazer essa startup dar certo.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link
              href="https://www.instagram.com/morzen.zenmor"
              target="_blank"
              rel="noreferrer"
              className="morzen-liquid-button morzen-liquid-button-light inline-flex h-12 items-center justify-center gap-2 rounded-full px-6 text-sm font-semibold text-black transition hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
            >
              Seguir no Instagram
              <ArrowUpRight className="size-4" aria-hidden="true" />
            </Link>
            <Link
              href="/new_project"
              className="morzen-liquid-button morzen-liquid-button-clear inline-flex h-12 items-center justify-center rounded-full px-6 text-sm font-semibold text-white transition hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
            >
              Iniciar um projeto
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/morzen.zenmor",
    icon: Instagram,
    external: true,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/morzen",
    icon: Linkedin,
    external: true,
  },
  {
    label: "GitHub",
    href: "https://github.com/morzen",
    icon: Github,
    external: true,
  },
  {
    label: "Projeto",
    href: "/new_project",
    icon: MessageCircle,
    external: false,
  },
];

const journeyCards = [
  {
    title: "Construímos em público para você entender nosso jeito antes de contratar.",
    description:
      "A Morzen agora é também um diário de construção: ideias, escolhas, bastidores, tecnologia, negócio e as partes difíceis de fazer uma startup sair do papel.",
    icon: Rocket,
  },
  {
    title: "Bastidores reais",
    description:
      "Mostramos o que está sendo decidido, testado e descartado no processo de criar produtos digitais.",
    icon: Layers3,
  },
  {
    title: "Aprendizados de produto",
    description:
      "Compartilhamos o que funciona, o que falha e como transformamos problema em interface, fluxo e código.",
    icon: Blocks,
  },
  {
    title: "Projetos com contexto",
    description:
      "Quando construímos para alguém, queremos mostrar a clareza por trás de cada decisão de software.",
    icon: Code2,
  },
  {
    title: "Relacionamento antes da venda",
    description:
      "Você acompanha a Morzen, conhece as pessoas por trás dela e só depois decide se faz sentido criar algo junto.",
    icon: Sparkles,
  },
];

const services = [
  {
    title: "Landing pages",
    description:
      "Páginas de conversão com narrativa, performance e design feito para explicar uma oferta com clareza.",
    icon: PanelTop,
  },
  {
    title: "Dashboards",
    description:
      "Interfaces para visualizar operação, métricas e processos com organização e leitura rápida.",
    icon: Blocks,
  },
  {
    title: "Sistemas internos",
    description:
      "Ferramentas sob medida para tirar rotina crítica de planilhas, improvisos e fluxos quebrados.",
    icon: Layers3,
  },
  {
    title: "Apps e produtos digitais",
    description:
      "MVPs, plataformas e experiências web criadas para validar, aprender e evoluir com o negócio.",
    icon: Code2,
  },
];

const founders = [
  {
    name: "Jean",
    image: "/jean_about_pic.jpg",
    alt: "Foto de Jean, fundador da Morzen",
    copy: "Produto, interface e desenvolvimento caminhando juntos para transformar ideias em software utilizável.",
  },
  {
    name: "Diego",
    image: "/diego_about_pic.jpg",
    alt: "Foto de Diego, fundador da Morzen",
    copy: "Tecnologia, execução e constância para construir a empresa enquanto os projetos ganham forma.",
  },
];
