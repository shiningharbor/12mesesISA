"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import { chapters, siteContent, type Chapter } from "./timeline-data";

const two = (n: number) => String(n).padStart(2, "0");

function Icon({
  name = "heart",
  size = 18,
}: {
  name?: "heart" | "arrow" | "up" | "close" | "sparkle" | "expand" | "trail";
  size?: number;
}) {
  const paths = {
    heart: <path d="M20.7 5.1a5.3 5.3 0 0 0-7.5 0L12 6.3l-1.2-1.2a5.3 5.3 0 0 0-7.5 7.5L12 21l8.7-8.4a5.3 5.3 0 0 0 0-7.5Z" />,
    arrow: (
      <>
        <path d="M5 12h14" />
        <path d="m13 6 6 6-6 6" />
      </>
    ),
    up: (
      <>
        <path d="M12 19V5" />
        <path d="m6 11 6-6 6 6" />
      </>
    ),
    close: (
      <>
        <path d="M5 5 19 19M19 5 5 19" />
      </>
    ),
    sparkle: (
      <>
        <path d="m12 2 1.8 6.2L20 10l-6.2 1.8L12 18l-1.8-6.2L4 10l6.2-1.8L12 2Z" />
        <path d="m19 17 .6 2.4L22 20l-2.4.6L19 23l-.6-2.4L16 20l2.4-.6L19 17Z" />
      </>
    ),
    expand: (
      <>
        <path d="M8 4H4v4M16 20h4v-4M4 4l6 6M20 20l-6-6" />
      </>
    ),
    trail: (
      <>
        <path d="M4 16c4-10 12-10 16 0" />
        <path d="M7 11c1.5 2 3 3 5 3s3.5-1 5-3" />
      </>
    ),
  };
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {paths[name]}
    </svg>
  );
}

function FrogDoodle({ className = "", sleepy = false }: { className?: string; sleepy?: boolean }) {
  return (
    <svg className={className} viewBox="0 0 142 130" role="img" aria-label="Ranita tierna con un corazón" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M22 74c-3-17 3-33 17-41-3-13 4-23 16-24 11-1 18 7 19 17h3c2-10 10-17 21-16 13 1 19 13 14 25 15 10 20 26 15 42-5 22-25 37-53 37-28 0-47-14-52-40Z" fill="#A8CE91" stroke="#37654A" strokeWidth="3.2" strokeLinejoin="round" />
      <circle cx="55" cy="30" r="4" fill="#23412B" />
      <circle cx="97" cy="30" r="4" fill="#23412B" />
      {sleepy ? (
        <>
          <path d="M48 31c4 5 9 5 14 0M90 31c4 5 9 5 14 0" stroke="#23412B" strokeWidth="3" strokeLinecap="round" />
        </>
      ) : (
        <>
          <circle cx="56" cy="29" r="1.4" fill="white" />
          <circle cx="98" cy="29" r="1.4" fill="white" />
        </>
      )}
      <ellipse cx="43" cy="51" rx="9" ry="5" fill="#EEA7B7" opacity=".86" />
      <ellipse cx="109" cy="51" rx="9" ry="5" fill="#EEA7B7" opacity=".86" />
      <path d="M65 48c8 8 17 8 24 0" stroke="#23412B" strokeWidth="3" strokeLinecap="round" />
      <path d="M75 87c-21-13-29-24-21-33 7-7 17-3 21 4 5-7 15-11 22-4 9 9-1 22-22 33Z" fill="#F7A9B8" stroke="#B96D7A" strokeWidth="2.1" strokeLinejoin="round" />
      <path d="M49 69c5 12 13 16 20 18M103 69c-5 12-13 16-20 18" stroke="#37654A" strokeWidth="3.6" strokeLinecap="round" />
      <path d="M44 107c-5 8-10 8-14 8M104 107c5 8 10 8 14 8" stroke="#37654A" strokeWidth="3" strokeLinecap="round" />
      <path d="m120 9 2 6 6 2-6 2-2 6-2-6-6-2 6-2 2-6Z" fill="#F7C2C9" />
    </svg>
  );
}

function DuckDoodle({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 160 140" role="img" aria-label="Patito tierno" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M43 91c-10-4-17-13-17-25 0-18 13-29 29-33 3-19 16-30 34-30 20 0 34 15 34 36 14 4 24 15 24 31 0 23-20 39-52 39-25 0-43-7-52-18Z" fill="#FFE69C" stroke="#8E7642" strokeWidth="3.5" strokeLinejoin="round" />
      <path d="M65 28c-2-8 1-15 8-20" stroke="#8E7642" strokeWidth="3.3" strokeLinecap="round" />
      <path d="M84 26c1-8 6-14 14-16" stroke="#8E7642" strokeWidth="3.3" strokeLinecap="round" />
      <circle cx="95" cy="48" r="4.3" fill="#2D271E" />
      <circle cx="96.4" cy="46.8" r="1.2" fill="white" />
      <path d="M103 60c9 2 15 1 19-2 5-3 10-3 14-1 5 2 9 8 7 13-3 8-18 12-40 8" fill="#F4A164" stroke="#C97550" strokeWidth="2.5" strokeLinejoin="round" />
      <path d="M84 66c6 4 13 4 18 0" stroke="#8E7642" strokeWidth="3" strokeLinecap="round" />
      <ellipse cx="82" cy="61" rx="8" ry="5" fill="#F4CC83" opacity=".72" />
      <path d="M57 90c9 12 23 18 41 18 10 0 19-2 27-6" stroke="#F2D28C" strokeWidth="5" strokeLinecap="round" />
      <ellipse cx="114" cy="56" rx="7" ry="4.4" fill="#F5B0B9" opacity=".7" />
      <path d="M70 112v8M95 114v8" stroke="#8E7642" strokeWidth="3.2" strokeLinecap="round" />
      <path d="M31 26c-10-7-13-15-9-21 5-7 14-4 17 2 4-5 12-5 15 0 5 8-5 18-23 25Z" fill="#F6B9C9" />
      <path d="M37 90c4 0 8 2 11 6" stroke="#8E7642" strokeWidth="3.2" strokeLinecap="round" />
    </svg>
  );
}

function PhotoFrame({
  src,
  label,
  className = "",
  onZoom,
}: {
  src: string | null;
  label: string;
  className?: string;
  onZoom: (src: string, label: string) => void;
}) {
  const interior = src ? (
    <>
      <img src={src} alt={label} loading="lazy" />
      <span className="photo-expand">
        <Icon name="expand" size={16} /> VER FOTO
      </span>
    </>
  ) : (
    <div className="photo-empty">
      <span className="photo-empty-sun">✳</span>
      <FrogDoodle className="placeholder-frog" sleepy />
      <span className="photo-empty-small">UN RECUERDO POR GUARDAR</span>
      <span className="photo-empty-title">Aquí va nuestra foto ♡</span>
      <span className="photo-empty-label">{label}</span>
    </div>
  );

  return src ? (
    <button type="button" className={`photo-frame photo-frame--clickable ${className}`} onClick={() => onZoom(src, label)} aria-label={`Ampliar fotografía: ${label}`}>
      {interior}
    </button>
  ) : (
    <div className={`photo-frame ${className}`} role="img" aria-label={`Espacio para ${label}`}>
      {interior}
    </div>
  );
}

function TrailBadge({ number }: { number: string }) {
  return (
    <span className="trail-badge" aria-hidden="true">
      <span>{number}</span>
    </span>
  );
}

function TimelineChapter({ chapter, index, onZoom }: { chapter: Chapter; index: number; onZoom: (src: string, label: string) => void }) {
  const [noteOpen, setNoteOpen] = useState(false);
  const next = chapters[index + 1];
  const num = two(chapter.number);
  const sideClass = index % 2 === 0 ? "chapter--left" : "chapter--right";
  const sceneKind = ["bosque", "laguito", "picnic", "jardin"][index % 4];
  const sceneLabels = ["El bosquecito", "Nuestro laguito", "Una tarde de picnic", "Entre florecitas"];

  return (
    <article id={`mes-${num}`} data-month={chapter.number} className={`chapter ${sideClass} chapter--${sceneKind}`}>
      <TrailBadge number={num} />
      <span className="station-petal station-petal--one" aria-hidden="true">✿</span>
      <span className="station-petal station-petal--two" aria-hidden="true">✧</span>
      <div className="chapter-lane">
        <div className="chapter-card chapter-copy">
          <div className="chapter-eyebrow">
            <span className="eyebrow-star">✳</span> PARADA {num}
            <span className="eyebrow-line" />
            {chapter.kicker}
          </div>
          <h3>
            {chapter.title}
            <span className="title-period">.</span>
          </h3>
          <p className="chapter-description">{chapter.description}</p>
          <div className="memory-pill">
            <Icon name="heart" size={14} /> {chapter.memory}
          </div>

          <div className={`secret-note ${noteOpen ? "secret-note--open" : ""}`}>
            <button className="secret-note-trigger" type="button" aria-expanded={noteOpen} onClick={() => setNoteOpen((open) => !open)}>
              <span className="secret-note-icon">{noteOpen ? "♡" : "✉"}</span>
              <span>{noteOpen ? "Guardar mensajito" : "Abrir mensajito del mes"}</span>
              <span className="secret-note-plus">{noteOpen ? "−" : "+"}</span>
            </button>
            <div className="secret-note-reveal">
              <div>
                <p>“{chapter.quote}”</p>
                <span>{siteContent.chapterNoteSignature}</span>
              </div>
            </div>
          </div>

          <div className="chapter-navigation">
            {index > 0 && (
              <a href={`#mes-${two(index)}`} aria-label="Ir al capítulo anterior" className="chapter-prev">
                ← Regresar un pasito
              </a>
            )}
            {next ? (
              <a className="chapter-next" href={`#mes-${two(next.number)}`}>
                Seguir caminando <Icon name="arrow" size={16} />
              </a>
            ) : (
              <a className="chapter-next" href="#final">
                Llegar al final <Icon name="arrow" size={16} />
              </a>
            )}
          </div>
        </div>

        <div className="chapter-card chapter-scene">
          <div className={`chapter-photo-scene chapter-photo-scene--${sceneKind}`}>
            <div className="station-nature" aria-hidden="true">
              <span className="station-nature-hill" />
              <span className="station-nature-tree station-nature-tree--one" />
              <span className="station-nature-tree station-nature-tree--two" />
              <span className="station-nature-pond" />
              <span className="station-nature-blanket" />
              <span className="station-nature-flower station-nature-flower--one">✿</span>
              <span className="station-nature-flower station-nature-flower--two">✿</span>
              <span className="station-nature-butterfly">❧</span>
            </div>
            <span className="station-scene-tag">{sceneLabels[index % 4]} ♡</span>
            <span className="chapter-photo-leaf chapter-photo-leaf--one" aria-hidden="true" />
            <span className="chapter-photo-leaf chapter-photo-leaf--two" aria-hidden="true" />
            <div className="chapter-polaroid chapter-polaroid--main">
              <PhotoFrame src={chapter.photo} label={`Mes ${num}: foto principal`} onZoom={onZoom} />
              <span className="polaroid-caption">recuerdo {num} · nosotros ♡</span>
            </div>
            <div className="chapter-polaroid chapter-polaroid--small">
              <PhotoFrame src={chapter.detailPhoto} label={`Mes ${num}: detalle`} onZoom={onZoom} />
              <span className="polaroid-caption">un detallito bonito</span>
            </div>
            <span className="chapter-photo-ticket">
              {num} / 12 <Icon name="heart" size={13} />
            </span>
            {index % 4 === 0 ? <DuckDoodle className="chapter-duck" /> : <FrogDoodle className="chapter-frog" sleepy={index % 3 === 0} />}
          </div>
          <div className="chapter-photo-under">
            <span>UN MOMENTO PARA VOLVER</span>
            <span>✦</span>
            <span>{chapter.kicker}</span>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function Home() {
  const [activeMonth, setActiveMonth] = useState(1);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [timelineProgress, setTimelineProgress] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [letterOpen, setLetterOpen] = useState(false);
  const [zoom, setZoom] = useState<{ src: string; label: string } | null>(null);
  const ticking = useRef(false);

  useEffect(() => {
    const updateScroll = () => {
      ticking.current = false;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(max > 0 ? Math.min(100, (window.scrollY / max) * 100) : 0);
      setIsScrolled(window.scrollY > 60);

      const timeline = document.querySelector<HTMLElement>(".chapters");
      if (timeline) {
        const rect = timeline.getBoundingClientRect();
        setTimelineProgress(Math.max(0, Math.min(100, ((window.innerHeight * 0.42 - rect.top) / rect.height) * 100)));
      }

      const nodes = Array.from(document.querySelectorAll<HTMLElement>("[data-month]"));
      let closest = 1;
      let minDistance = Infinity;
      nodes.forEach((node) => {
        const rect = node.getBoundingClientRect();
        const target = window.innerHeight * 0.43;
        const distance = rect.top <= target && rect.bottom >= target ? 0 : Math.min(Math.abs(rect.top - target), Math.abs(rect.bottom - target));
        if (distance < minDistance) {
          minDistance = distance;
          closest = Number(node.dataset.month);
        }
      });
      if (nodes.length) setActiveMonth(closest);
    };

    const handleScroll = () => {
      if (!ticking.current) {
        ticking.current = true;
        window.requestAnimationFrame(updateScroll);
      }
    };

    updateScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  // Al avanzar entre estaciones, la navegación sigue la posición actual.
  // En desktop se mueve dentro de la lista; en móvil, sobre la cinta horizontal.
  useEffect(() => {
    const nav = document.querySelector<HTMLElement>(".timeline-index");
    const active = nav?.querySelector<HTMLElement>(".index-link--active");
    if (!nav || !active) return;
    const navRect = nav.getBoundingClientRect();
    const activeRect = active.getBoundingClientRect();
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (window.matchMedia("(max-width: 1120px)").matches) {
      nav.scrollTo({
        left: nav.scrollLeft + activeRect.left - navRect.left - (nav.clientWidth - activeRect.width) / 2,
        behavior: reducedMotion ? "instant" : "smooth",
      });
    } else {
      nav.scrollTo({
        top: nav.scrollTop + activeRect.top - navRect.top - (nav.clientHeight - activeRect.height) / 2,
        behavior: reducedMotion ? "instant" : "smooth",
      });
    }
  }, [activeMonth]);

  useEffect(() => {
    if (!("IntersectionObserver" in window) || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const elements = Array.from(document.querySelectorAll<HTMLElement>(".chapter, .reveal"));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.08 },
    );
    elements.forEach((element) => {
      element.classList.add("has-scroll-reveal");
      observer.observe(element);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!zoom) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setZoom(null);
    };
    const oldOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = oldOverflow;
      document.removeEventListener("keydown", onKey);
    };
  }, [zoom]);

  return (
    <main>
      <div className="reading-progress" style={{ transform: `scaleX(${scrollProgress / 100})` }} aria-hidden="true" />

      <header className={`site-header ${isScrolled ? "site-header--scrolled" : ""}`}>
        <a href="#inicio" className="header-brand" aria-label="Ir al inicio">
          <span className="brand-heart">♡</span> P + L
        </a>
        <span className="header-center">{siteContent.topLabel}</span>
        <a href="#timeline" className="header-link">
          Empezar recorrido <Icon name="arrow" size={15} />
        </a>
      </header>

      <section className="hero" id="inicio" aria-labelledby="hero-title">
        <div className="floating-heart floating-heart--one">♥</div>
        <div className="floating-heart floating-heart--two">♥</div>
        <div className="floating-spark floating-spark--one">✦</div>
        <div className="floating-spark floating-spark--two">✳</div>

        <div className="hero-layout">
          <div className="hero-copy reveal">
            <span className="hero-overline">
              <span className="overline-heart">♥</span> {siteContent.heroKicker}
            </span>
            <h1 id="hero-title">
              <span>{siteContent.heroTitleFirst}</span>
              <em>{siteContent.heroTitleSecond}</em>
            </h1>
            <p className="hero-subtitle">{siteContent.heroDescription}</p>

            <div className="hero-actions">
              <a href="#introduccion" className="primary-button">
                <span>{siteContent.heroButton}</span>
                <span className="button-round">
                  <Icon name="arrow" size={20} />
                </span>
              </a>
              <div className="hero-handwritten">
                {siteContent.heroHandwritten} <span>♡</span>
              </div>
            </div>

            <div className="hero-footnotes">
              <span>{siteContent.heroFooterLeft}</span>
              <span>{siteContent.heroFooterRight}</span>
            </div>
          </div>

          <div className="hero-scene reveal" aria-label="Escena de portada tipo paseo romántico">
            <div className="scene-sky" />
            <div className="scene-sun" />
            <div className="scene-hill scene-hill--back" />
            <div className="scene-hill scene-hill--front" />
            <div className="scene-pond" />
            <div className="scene-path" />
            <div className="scene-flowers scene-flowers--left" />
            <div className="scene-flowers scene-flowers--right" />
            <div className="hero-trees" aria-hidden="true"><span className="hero-tree hero-tree--one" /><span className="hero-tree hero-tree--two" /><span className="hero-tree hero-tree--three" /></div>
            <div className="hero-picnic" aria-hidden="true"><span className="picnic-blanket" /><span className="picnic-basket" /><span className="picnic-flower">✿</span></div>
            <span className="pond-ripple pond-ripple--one" aria-hidden="true" />
            <span className="pond-ripple pond-ripple--two" aria-hidden="true" />

            <div className="hero-memory hero-memory--main">
              <div className="memory-tape" />
              <PhotoFrame src={siteContent.heroPhoto} label="Nuestra foto de portada" onZoom={(src, label) => setZoom({ src, label })} />
              <span>{siteContent.albumBottom}</span>
            </div>

            <div className="hero-memory hero-memory--detail">
              <div className="memory-tape" />
              <PhotoFrame src={siteContent.heroDetailPhoto} label="Detalle de portada" onZoom={(src, label) => setZoom({ src, label })} />
              <span>{siteContent.albumSmallCaption}</span>
            </div>

            <div className="hero-sign hero-sign--left">
              <strong>{siteContent.albumTitleFirst}</strong>
              <span>{siteContent.albumTitleSecond}</span>
            </div>
            <div className="hero-sign hero-sign--right">
              <strong>Leoncita</strong>
              <span>y Patito</span>
            </div>

            <FrogDoodle className="hero-frog" />
            <DuckDoodle className="hero-duck" />
            <span className="hero-ribbon">{siteContent.heroRibbon}</span>
          </div>
        </div>

        <div className="hero-bottom">
          <span>{siteContent.topLabel}</span>
          <a href="#introduccion" className="scroll-indicator">
            {siteContent.heroScroll} <span>↓</span>
          </a>
          <span>{siteContent.albumSubtitle}</span>
        </div>
      </section>

      <section id="introduccion" className="intro-section reveal" aria-labelledby="intro-title">
        <div className="intro-card">
          <div className="intro-badge">
            <DuckDoodle className="intro-duck" />
            <span>{siteContent.introStickerText}</span>
          </div>
          <div className="intro-copy">
            <span className="eyebrow">
              <span>✦</span> {siteContent.introKicker}
            </span>
            <h2 id="intro-title">{siteContent.introTitle}</h2>
            <p>{siteContent.introDescription}</p>
            <div className="intro-stats">
              <span>
                <strong>12</strong> estaciones
              </span>
              <span>
                <strong>∞</strong> recuerdos
              </span>
              <span>
                <strong>1</strong> caminito juntos
              </span>
            </div>
          </div>
          <div className="intro-note">
            <span>{siteContent.introSideText}</span>
          </div>
        </div>
      </section>

      <section className="timeline-section" id="timeline" aria-label="Nuestra historia en doce capítulos">
        <div className="timeline-heading reveal">
          <span className="eyebrow">✳ {siteContent.timelineTop}</span>
          <div>
            <h2>
              {siteContent.timelineTitleFirst} <em>{siteContent.timelineTitleSecond}</em>
            </h2>
            <p>{siteContent.timelineDescription}</p>
          </div>
          <span className="heading-number">01 — 12</span>
        </div>

        <div className="timeline-layout">
          <aside className="timeline-sidebar" aria-label="Navegación por capítulos">
            <div className="sidebar-sticky reveal">
              <div className="journey-card">
                <span className="sidebar-title">{siteContent.timelineNavLabel}</span>
                <div className="journey-active">
                  <Icon name="trail" size={16} />
                  <span>Ahora vas por la parada</span>
                  <strong>{two(activeMonth)}</strong>
                </div>
                <nav className="timeline-index">
                  {chapters.map((chapter) => (
                    <a
                      href={`#mes-${two(chapter.number)}`}
                      key={chapter.number}
                      className={`index-link ${activeMonth === chapter.number ? "index-link--active" : ""}`}
                      aria-current={activeMonth === chapter.number ? "location" : undefined}
                    >
                      <span className="index-marker" />
                      <span className="index-number">{two(chapter.number)}</span>
                      <span className="index-month">{chapter.kicker}</span>
                    </a>
                  ))}
                </nav>
                <div className="sidebar-progress">
                  <span>RECORRIDO</span>
                  <div className="sidebar-progress-track">
                    <span style={{ width: `${timelineProgress}%` }} />
                  </div>
                  <strong>
                    {two(activeMonth)} <small>/ 12</small>
                  </strong>
                </div>
              </div>
            </div>
          </aside>

          <div className="chapters" style={{ "--timeline-progress": `${timelineProgress}%` } as CSSProperties}>
            {chapters.map((chapter, index) => (
              <TimelineChapter key={chapter.number} chapter={chapter} index={index} onZoom={(src, label) => setZoom({ src, label })} />
            ))}
          </div>
        </div>
      </section>

      <section id="final" className="ending-section" aria-labelledby="ending-title">
        <div className="ending-inner reveal">
          <span className="ending-eyebrow">
            <Icon name="heart" size={14} /> {siteContent.endingKicker}
          </span>
          <h2 id="ending-title">
            {siteContent.endingTitleFirst}
            <em>{siteContent.endingTitleSecond}</em>
          </h2>
          <p className="ending-subtitle">{siteContent.endingIntro}</p>

          <div className={`letter-experience ${letterOpen ? "letter-experience--open" : ""}`}>
            <div className="ending-landscape">
              <div className="ending-hill ending-hill--back" />
              <div className="ending-hill ending-hill--front" />
              <div className="ending-pond" />
              <span className="ending-lily ending-lily--one" aria-hidden="true" />
              <span className="ending-lily ending-lily--two" aria-hidden="true" />
              <span className="ending-flower" aria-hidden="true">✿</span>
              <FrogDoodle className="ending-frog-scene" sleepy />
              <DuckDoodle className="ending-duck-scene" />
              <div className="letter-scene">
                <div className="letter-sheet" aria-hidden={!letterOpen}>
                  <span className="letter-sheet-top">{siteContent.endingLetterTop}</span>
                  <p>{siteContent.endingText}</p>
                  <span className="letter-signature">{siteContent.signature}</span>
                </div>
                <button type="button" className="envelope" onClick={() => setLetterOpen((value) => !value)} aria-expanded={letterOpen} aria-label={letterOpen ? "Cerrar la carta" : "Abrir carta para Leoncita"}>
                  <span className="envelope-back" />
                  <span className="envelope-flap" />
                  <span className="envelope-front" />
                  <span className="envelope-seal">♥</span>
                </button>
                <div className="letter-burst" aria-hidden="true">
                  <span>♥</span>
                  <span>✦</span>
                  <span>♥</span>
                  <span>✳</span>
                  <span>♥</span>
                </div>
              </div>
            </div>
            <button className="letter-toggle" type="button" onClick={() => setLetterOpen((value) => !value)}>
              {letterOpen ? siteContent.endingCloseAction : siteContent.endingOpenAction}
              <Icon name={letterOpen ? "up" : "heart"} size={15} />
            </button>
          </div>

          <div className="ending-bottom">
            <span>{siteContent.endingBottom}</span>
          </div>
          <a href="#inicio" className="back-top">
            {siteContent.endingBack} <Icon name="up" size={16} />
          </a>
        </div>
      </section>

      <footer className="footer">
        <span>{siteContent.footerLeft}</span>
        <span>{siteContent.footerCenter}</span>
        <span>∞</span>
      </footer>

      {zoom && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label={`Foto ampliada: ${zoom.label}`} onClick={() => setZoom(null)}>
          <button className="lightbox-close" type="button" onClick={() => setZoom(null)} aria-label="Cerrar fotografía">
            <Icon name="close" size={23} />
          </button>
          <figure onClick={(event) => event.stopPropagation()}>
            <img src={zoom.src} alt={zoom.label} />
            <figcaption>{zoom.label} ♡</figcaption>
          </figure>
        </div>
      )}
    </main>
  );
}
