"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import styles from "./album.module.css";
import { chapters, siteContent, type Chapter } from "./timeline-data";

const LAST = chapters.length + 3; // portada, introducción, 12 meses, carta, contraportada
const two = (value: number) => String(value).padStart(2, "0");

function Frog({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 150 145" fill="none" role="img" aria-label="Ranita sonriente">
      <path d="M22 80c-7-20 2-39 19-48-2-16 9-27 24-26 12 1 18 9 18 18 2-10 11-17 23-16 17 2 24 16 19 29 18 12 22 33 15 52-8 26-35 41-67 38C40 125 26 108 22 80Z" fill="#A8CE91" stroke="#416B4C" strokeWidth="3.5" strokeLinejoin="round" />
      <path d="M48 37c6-7 14-7 19 0M94 37c6-7 14-7 19 0" stroke="#29452F" strokeWidth="3.5" strokeLinecap="round" />
      <ellipse cx="41" cy="59" rx="10" ry="6" fill="#F0AABD" /><ellipse cx="116" cy="59" rx="10" ry="6" fill="#F0AABD" />
      <path d="M66 58q12 11 23 0" stroke="#29452F" strokeWidth="3.5" strokeLinecap="round" />
      <path d="M77 103c-23-14-30-26-22-34 8-8 18-3 22 4 6-8 16-11 23-3 9 10-2 23-23 33Z" fill="#F5BACB" stroke="#BA7B8B" strokeWidth="2.5" strokeLinejoin="round" />
      <path d="M48 82q10 13 22 18M106 83q-11 13-21 17" stroke="#416B4C" strokeWidth="3.5" strokeLinecap="round" />
      <path d="m44 119-8 8m79-8 8 8" stroke="#416B4C" strokeWidth="3" strokeLinecap="round" />
    </svg>
  );
}

function Duck({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 156 141" fill="none" role="img" aria-label="Patito amarillo tierno">
      <path d="M41 90C24 82 19 62 28 46c7-13 19-19 30-21C63 10 79 5 96 12c16 6 25 21 25 39 17 3 28 17 27 35-1 26-23 44-58 44-26 0-41-10-49-40Z" fill="#FFE5A4" stroke="#997D49" strokeWidth="3.4" strokeLinejoin="round" />
      <path d="M69 25c-3-6-1-12 4-16M85 22c1-8 5-13 11-15" stroke="#997D49" strokeWidth="3.3" strokeLinecap="round" />
      <circle cx="97" cy="59" r="4.3" fill="#4C4030" /><circle cx="98" cy="57.5" r="1.1" fill="white" />
      <ellipse cx="89" cy="74" rx="10" ry="6" fill="#F5B3BB" />
      <path d="M107 75q14-14 28-8c8 4 9 10 5 16-7 9-23 8-33-8Z" fill="#F5A16F" stroke="#C98160" strokeWidth="2.5" strokeLinejoin="round" />
      <path d="M69 72q8 9 17 0" stroke="#4C4030" strokeWidth="3.2" strokeLinecap="round" />
      <path d="M49 94c11 14 25 19 40 19" stroke="#E8C77F" strokeWidth="6" strokeLinecap="round" />
      <path d="M74 127v9m25-8v8" stroke="#997D49" strokeWidth="3.5" strokeLinecap="round" />
    </svg>
  );
}

function TinyDoodles({ withDuck = true }: { withDuck?: boolean }) {
  return <div className={styles.doodles} aria-hidden="true"><Frog className={styles.doodleFrog} />{withDuck && <Duck className={styles.doodleDuck} />}<span className={styles.doodleHeart}>♡</span></div>;
}

function AlbumPhoto({ src, label, size = "big", onZoom }: { src: string | null; label: string; size?: "big" | "small"; onZoom: (src: string, label: string) => void }) {
  return <div className={`${styles.polaroid} ${size === "small" ? styles.polaroidSmall : ""}`}>
    <span className={styles.washiTape} aria-hidden="true" />
    {src ? <button className={styles.photoButton} type="button" onClick={() => onZoom(src, label)} aria-label={`Ampliar foto: ${label}`}><img src={src} alt={label} /></button> :
      <div className={styles.emptyPhoto} role="img" aria-label={`Espacio para foto: ${label}`}><span className={styles.emptySun}>✳</span><Frog className={styles.photoFrog} /><span>Aquí va<br />nuestro recuerdo ♡</span></div>}
    <span className={styles.photoCaption}>{label}</span>
  </div>;
}

function MemoryNote({ chapter, isOpen, toggle }: { chapter: Chapter; isOpen: boolean; toggle: () => void }) {
  return <div className={`${styles.memoryNote} ${isOpen ? styles.noteOpen : ""}`}>
    <button type="button" aria-expanded={isOpen} className={styles.noteButton} onClick={toggle}><span>✉</span>{isOpen ? "Cerrar mensajito" : "Abrir mensajito secreto"}<span aria-hidden="true">{isOpen ? "−" : "+"}</span></button>
    {isOpen && <div className={styles.noteInside}><p>“{chapter.quote}”</p><small>{siteContent.chapterNoteSignature}</small></div>}
  </div>;
}

function ChapterText({ chapter, open, toggle }: { chapter: Chapter; open: boolean; toggle: () => void }) {
  return <>
    <span className={styles.pageEyebrow}>UN PEDACITO DE NOSOTROS · {two(chapter.number)}</span>
    <h2 className={styles.memoryTitle}>{chapter.title}<span className={styles.pinkDot}>.</span></h2>
    <p className={styles.kickerHand}>{chapter.kicker} ♡</p>
    <p className={styles.memoryDescription}>{chapter.description}</p>
    <div className={styles.memoryTag}>♡ {chapter.memory}</div>
    <MemoryNote chapter={chapter} isOpen={open} toggle={toggle} />
  </>;
}

function FinalLetter({ open, toggle }: { open: boolean; toggle: () => void }) {
  return <div className={`${styles.finalLetterWrap} ${open ? styles.finalLetterOpen : ""}`}>
    {open ? <div className={styles.letterPaper}>
      <span className={styles.letterAddress}>{siteContent.endingLetterTop}</span>
      <p>{siteContent.endingText}</p><span className={styles.letterSign}>{siteContent.signature}</span>
      <button type="button" className={styles.letterClose} onClick={toggle}>Cerrar cartita ×</button>
    </div> : <button className={styles.envelope} type="button" onClick={toggle} aria-label="Abrir carta para Leoncita"><span className={styles.envelopeFlap} /><span className={styles.envelopeFront} /><span className={styles.seal}>♥</span></button>}
  </div>;
}

function StagePage({
  stage, side, onZoom, noteOpen, toggleNote, letterOpen, toggleLetter,
}: {
  stage: number; side: "left" | "right" | "mobile"; onZoom: (src: string, label: string) => void;
  noteOpen: boolean; toggleNote: (stage: number) => void; letterOpen: boolean; toggleLetter: () => void;
}) {
  const isMobile = side === "mobile";
  const isLeft = side === "left";
  const pageNo = stage === 1 ? 0 : stage >= 2 && stage <= 13 ? stage - 1 : 13;
  const chapter = stage >= 2 && stage <= 13 ? chapters[stage - 2] : null;

  if (stage === 1) {
    if (!isMobile && !isLeft) return <div className={`${styles.sheetInner} ${styles.introRight}`}>
      <span className={styles.paperCorner}>✳</span>
      <div className={styles.introPostcard}><AlbumPhoto src={siteContent.heroPhoto} label="nuestro primer recuerdo" onZoom={onZoom} /></div>
      <span className={styles.introSmallLabel}>DE PATITO PARA LEONCITA</span>
      <TinyDoodles />
      <p className={styles.introHandLine}>Todo lo que viene, contigo.</p>
    </div>;
    return <div className={`${styles.sheetInner} ${styles.introLeft}`}>
      <span className={styles.pageEyebrow}>ANTES DE COMENZAR...</span>
      <div className={styles.heartSketch}>♡</div>
      <h2 className={styles.introTitle}>Nuestra historia<br /><em>en papel.</em></h2>
      <p className={styles.introLead}>{siteContent.introTitle}</p>
      <p className={styles.introBody}>{siteContent.introDescription}</p>
      <div className={styles.introFooter}>12 meses · 2 corazones · ∞ aventuras</div>
      {isMobile && <TinyDoodles />}
    </div>;
  }

  if (chapter) {
    if (!isMobile && !isLeft) return <div className={`${styles.sheetInner} ${styles.photoPage}`}>
      <span className={styles.pageEyebrow}>RECUERDOS QUE GUARDAMOS</span>
      <span className={styles.pageSketch} aria-hidden="true">⌁ ♡ ✿</span>
      <div className={styles.photoArrangement}>
        <AlbumPhoto src={chapter.photo} label={`nuestro mes ${two(chapter.number)} ♡`} onZoom={onZoom} />
        <AlbumPhoto src={chapter.detailPhoto} size="small" label="un detallito" onZoom={onZoom} />
      </div>
      <span className={styles.pageTicket}>♥ {two(chapter.number)} / 12 ♥</span>
      <TinyDoodles withDuck={chapter.number % 3 !== 0} />
      <span className={styles.pageBottomHand}>y todavía nos quedan tantas aventuras...</span>
    </div>;
    return <div className={`${styles.sheetInner} ${styles.textPage}`}>
      <div className={styles.paperPin} aria-hidden="true" />
      <span className={styles.pressedFlower} aria-hidden="true">❀</span>
      <div className={styles.chapterNumber}>{two(chapter.number)}</div>
      <ChapterText chapter={chapter} open={noteOpen} toggle={() => toggleNote(stage)} />
      {isMobile && <div className={styles.mobilePhotos}><AlbumPhoto src={chapter.photo} label={`nuestro mes ${two(chapter.number)} ♡`} onZoom={onZoom} /><AlbumPhoto src={chapter.detailPhoto} label="un detallito" size="small" onZoom={onZoom} /></div>}
      <span className={styles.pageFoot}>PAPATÍN + BRONQUITAS · {two(pageNo)}</span>
    </div>;
  }

  if (stage === 14) {
    if (!isMobile && !isLeft) return <div className={`${styles.sheetInner} ${styles.endingRight}`}>
      <span className={styles.pageEyebrow}>UNA ÚLTIMA SORPRESA</span>
      <FinalLetter open={letterOpen} toggle={toggleLetter} />
      <TinyDoodles />
      <span className={styles.pageFoot}>CON TODO MI AMOR, PATITO ♡</span>
    </div>;
    return <div className={`${styles.sheetInner} ${styles.endingLeft}`}>
      <span className={styles.pageEyebrow}>EL FINAL DE ESTE TOMO...</span>
      <div className={styles.heartSketch}>♥</div>
      <h2 className={styles.endingTitle}>{siteContent.endingTitleFirst}<em>{siteContent.endingTitleSecond}</em></h2>
      <p className={styles.endingIntro}>{siteContent.endingIntro}</p>
      <span className={styles.endingHand}>Pero nuestra aventura apenas comienza.</span>
      {isMobile && <FinalLetter open={letterOpen} toggle={toggleLetter} />}
      <span className={styles.pageFoot}>DE TU PATITO PARA MI LEONCITA</span>
    </div>;
  }
  return null;
}

function Spread({ stage, onZoom, noteOpen, toggleNote, letterOpen, toggleLetter }: {
  stage: number; onZoom: (src: string, label: string) => void; noteOpen: boolean; toggleNote: (stage: number) => void; letterOpen: boolean; toggleLetter: () => void;
}) {
  const common = { stage, onZoom, noteOpen, toggleNote, letterOpen, toggleLetter };
  if (stage === 0) return <div className={styles.coverScene}><div className={styles.cover}>
    <div className={styles.coverSpine} /><div className={styles.coverBorder} />
    <span className={`${styles.coverBotanical} ${styles.coverBotanicalLeft}`} aria-hidden="true">❧</span><span className={`${styles.coverBotanical} ${styles.coverBotanicalRight}`} aria-hidden="true">❧</span>
    <span className={styles.coverGoldenStars} aria-hidden="true">✦ &nbsp; ✧ &nbsp; ✦</span>
    <div className={styles.coverTop}>UN LIBRITO SOLO PARA NOSOTROS</div>
    <div className={styles.coverTitle}><span>Nuestro</span><strong>álbum de</strong><em>aventuras</em></div>
    <div className={styles.coverCloud}>♡</div>
    <div className={styles.coverBadge}><span>LEONCITA</span><span>✳</span><span>PATITO</span></div>
    <TinyDoodles />
    <span className={styles.coverSubtitle}>12 meses · un amor que no se acaba</span>
    <span className={styles.coverSealText}>✿ edición única para mi Leoncita ✿</span>
    <span className={styles.coverBottom}>Hecho por Papatín para Bronquitas ♡</span>
  </div></div>;
  if (stage === LAST) return <div className={styles.coverScene}><div className={`${styles.cover} ${styles.backCover}`}>
    <div className={styles.coverSpine} /><div className={styles.coverBorder} />
    <span className={`${styles.coverBotanical} ${styles.coverBotanicalLeft}`} aria-hidden="true">❧</span><span className={`${styles.coverBotanical} ${styles.coverBotanicalRight}`} aria-hidden="true">❧</span>
    <span className={styles.backHeart}>♡</span>
    <h2>Y la aventura<br /><em>continúa...</em></h2>
    <TinyDoodles />
    <p>Gracias por llenar de magia nuestras páginas.</p><span className={styles.coverBottom}>SIEMPRE TÚ Y YO · ∞</span>
  </div></div>;
  return <>
    <div className={styles.desktopSpread}>
      <div className={`${styles.sheet} ${styles.sheetLeft}`}><StagePage {...common} side="left" /></div>
      <div className={`${styles.sheet} ${styles.sheetRight}`}><StagePage {...common} side="right" /></div>
      <div className={styles.bookSeam} aria-hidden="true" />
    </div>
    <div className={styles.mobileSpread}><div className={styles.mobileSheet}><StagePage {...common} side="mobile" /></div></div>
  </>;
}

function FlipEffect({ direction, from, to, onZoom, noteOpen, toggleNote, letterOpen, toggleLetter }: {
  direction: "next" | "prev"; from: number; to: number; onZoom: (src: string, label: string) => void;
  noteOpen: boolean; toggleNote: (stage: number) => void; letterOpen: boolean; toggleLetter: () => void;
}) {
  const common = { onZoom, noteOpen, toggleNote, letterOpen, toggleLetter };
  return <>
    <div className={`${styles.desktopFlip} ${direction === "next" ? styles.flipForward : styles.flipBackward}`} aria-hidden="true">
      <div className={`${styles.flipFace} ${styles.flipFaceFront}`}>
        {from > 0 && from < LAST && <StagePage {...common} stage={from} side={direction === "next" ? "right" : "left"} />}
        {(from === 0 || from === LAST) && <div className={styles.flipCloth} />}
      </div>
      <div className={`${styles.flipFace} ${styles.flipFaceBack}`}>
        {to > 0 && to < LAST && <StagePage {...common} stage={to} side={direction === "next" ? "left" : "right"} />}
        {(to === 0 || to === LAST) && <div className={styles.flipCloth} />}
      </div>
    </div>
    <div className={`${styles.mobileFlip} ${direction === "next" ? styles.flipForward : styles.flipBackward}`} aria-hidden="true">
      <div className={`${styles.flipFace} ${styles.flipFaceFront}`}>
        {from > 0 && from < LAST && <StagePage {...common} stage={from} side="mobile" />}
      </div>
      <div className={`${styles.flipFace} ${styles.flipFaceBack}`}>
        {to > 0 && to < LAST && <StagePage {...common} stage={to} side="mobile" />}
      </div>
    </div>
  </>;
}

export default function Home() {
  const [active, setActive] = useState(0);
  const [turning, setTurning] = useState<{ from: number; to: number; direction: "next" | "prev" } | null>(null);
  const [openNote, setOpenNote] = useState<number | null>(null);
  const [letterOpen, setLetterOpen] = useState(false);
  const [zoom, setZoom] = useState<{ src: string; label: string } | null>(null);
  const touchX = useRef<number | null>(null);
  const timers = useRef<ReturnType<typeof setTimeout>[]>([]);
  const canTurn = !turning;

  const turnTo = useCallback((destination: number) => {
    if (turning || destination < 0 || destination > LAST || destination === active) return;
    const direction = destination > active ? "next" : "prev";
    setTurning({ from: active, to: destination, direction });
    timers.current.forEach(clearTimeout);
    timers.current = [setTimeout(() => setActive(destination), 440), setTimeout(() => setTurning(null), 930)];
  }, [active, turning]);

  useEffect(() => () => { timers.current.forEach(clearTimeout); }, []);
  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") { setZoom(null); return; }
      if (zoom || (event.target instanceof HTMLElement && ["INPUT", "TEXTAREA"].includes(event.target.tagName))) return;
      if (event.key === "ArrowRight") { event.preventDefault(); turnTo(active + 1); }
      if (event.key === "ArrowLeft") { event.preventDefault(); turnTo(active - 1); }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active, turnTo, zoom]);
  useEffect(() => {
    if (!zoom) return;
    const old = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = old; };
  }, [zoom]);

  const toggleNote = (stage: number) => setOpenNote(current => current === stage ? null : stage);
  const onZoom = (src: string, label: string) => setZoom({ src, label });
  const currentStage = active;
  const stageLabel = currentStage === 0 ? "Portada" : currentStage === 1 ? "Antes de empezar" : currentStage === 14 ? "Una carta para ti" : currentStage === LAST ? "Contraportada" : `Mes ${two(currentStage - 1)} · ${chapters[currentStage - 2].title}`;
  const common = { onZoom, noteOpen: openNote === active, toggleNote, letterOpen, toggleLetter: () => setLetterOpen(v => !v) };

  return <main className={styles.album}>
    <div className={styles.deskTexture} aria-hidden="true" />
    <div className={styles.forestVignette} aria-hidden="true" />
    <div className={styles.floatingPetals} aria-hidden="true"><i/><i/><i/><i/><i/><i/></div>
    <span className={`${styles.backgroundFlower} ${styles.flowerOne}`} aria-hidden="true">✿</span>
    <span className={`${styles.backgroundFlower} ${styles.flowerTwo}`} aria-hidden="true">✳</span>
    <div className={styles.tablePostcard} aria-hidden="true"><span>to: Leoncita ♡</span><span>love, Patito</span></div>
    <div className={styles.tableFlower} aria-hidden="true">✿</div>

    <header className={styles.topbar}>
      <div className={styles.topBrand}><span>♡</span> Nuestro pequeño infinito</div>
      <div className={styles.topDescription}>Un álbum de aventuras para nosotros dos</div>
      <div className={styles.topEdition}>VOL. 01 · P + L</div>
    </header>

    <div className={styles.bookArea}>
      <div className={styles.leftDecoration} aria-hidden="true"><span>NOTITAS<br />Y RECUERDOS</span><span>✦</span></div>
      <div
        className={`${styles.book} ${active === 0 || active === LAST ? styles.bookClosed : ""} ${turning ? styles.bookIsTurning : ""}`}
        onTouchStart={e => { touchX.current = e.touches[0]?.clientX ?? null; }}
        onTouchEnd={e => { if (touchX.current === null) return; const delta = (e.changedTouches[0]?.clientX ?? touchX.current) - touchX.current; touchX.current = null; if (Math.abs(delta) > 70) turnTo(active + (delta < 0 ? 1 : -1)); }}
      >
        <Spread stage={active} {...common} />
        {turning && <FlipEffect {...turning} {...common} />}
      </div>
    </div>

    <nav className={styles.controls} aria-label="Controles del álbum">
      <button type="button" onClick={() => turnTo(active - 1)} disabled={!canTurn || active === 0} className={styles.turnButton} aria-label="Pasar a la página anterior"><span aria-hidden="true">←</span><span>Anterior</span></button>
      <div className={styles.currentPage} aria-live="polite"><span>{stageLabel}</span><small>{two(active)} / {two(LAST)}</small></div>
      <button type="button" onClick={() => turnTo(active + 1)} disabled={!canTurn || active === LAST} className={`${styles.turnButton} ${styles.nextButton}`}><span>{active === 0 ? "Abrir el álbum" : active === LAST - 1 ? "Cerrar el álbum" : "Siguiente"}</span><span aria-hidden="true">→</span></button>
    </nav>

    <div className={styles.bookmarks} aria-label="Ir directamente a un recuerdo">
      <button type="button" disabled={!canTurn} className={`${styles.bookmark} ${active === 0 ? styles.bookmarkActive : ""}`} onClick={() => turnTo(0)}>Portada</button>
      {chapters.map(chapter => <button key={chapter.number} type="button" disabled={!canTurn} className={`${styles.bookmark} ${active === chapter.number + 1 ? styles.bookmarkActive : ""}`} onClick={() => turnTo(chapter.number + 1)} aria-label={`Ir al mes ${two(chapter.number)}`} aria-current={active === chapter.number + 1 ? "page" : undefined}>{two(chapter.number)}</button>)}
      <button type="button" disabled={!canTurn} className={`${styles.bookmark} ${active === 14 ? styles.bookmarkActive : ""}`} onClick={() => turnTo(14)}>Carta ♡</button>
    </div>
    <p className={styles.bookHint}>♡ Cada página es una aventura que vivimos juntitos ♡</p>

    {zoom && <div className={styles.lightbox} role="dialog" aria-modal="true" aria-label={`Foto: ${zoom.label}`} onClick={() => setZoom(null)}><button className={styles.zoomClose} type="button" onClick={() => setZoom(null)} aria-label="Cerrar foto">×</button><figure onClick={e => e.stopPropagation()}><img src={zoom.src} alt={zoom.label} /><figcaption>{zoom.label}</figcaption></figure></div>}
  </main>;
}
