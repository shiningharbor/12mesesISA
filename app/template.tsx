"use client";

import { useEffect, useRef, useState, type ReactNode, type CSSProperties } from "react";
import { createPortal } from "react-dom";
import styles from "./premiere.module.css";

/* ═══════════════════════════════════════════════════════════════════
   CONFIGURACIÓN — aquí puedes activar, desactivar y editar el estreno.
   ═══════════════════════════════════════════════════════════════════ */
const ESTRENO_ACTIVO = true;
const FECHA_ESTRENO = "2026-12-12T12:00:00-06:00"; // fecha y hora de Ciudad de México

const MUSICA_ACTIVA = true;
const ARCHIVO_MUSICA = "/musica/ambiente-original.mp3";
const VOLUMEN_MUSICA = 0.35; // de 0 a 1

const TEXTO_SUPERIOR = "UNA SORPRESITA PARA MI LEONCITA ♡";
const TITULO = "Nuestro pequeño MUNDO";
const TITULO_RESALTADO = "se está por abrir.";
const MENSAJE = "Bronquitas, preparé un álbum de nosotros. Muy pronto podrás abrirlo, descubrir cada página y recordar todos nuestros momentitos.";
const MENSAJE_LISTO = "¡Ya llegó nuestro momento, Leoncita! Abre este álbum de aventuras que hice especialmente para ti.";
const FIRMA = "De tu Patito, con amor ♡";
/* ═════════════════════ FIN DE CONFIGURACIÓN ═══════════════════════ */

function contar(milisegundos: number): [number, number, number, number] {
  const ms = Math.max(0, milisegundos);
  return [
    Math.floor(ms / 86_400_000),
    Math.floor((ms % 86_400_000) / 3_600_000),
    Math.floor((ms % 3_600_000) / 60_000),
    Math.floor((ms % 60_000) / 1000),
  ];
}

/** Mismo texto de fecha en servidor y navegador: NO usa Intl ni Date.now al renderizar. */
function fechaEnTexto(iso: string): string {
  const partes = /^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2})/.exec(iso);
  if (!partes) return "la fecha indicada";
  const [, anio, mes, dia, hora, minuto] = partes;
  const meses = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre"];
  const nombre = meses[Number(mes) - 1];
  if (!nombre) return "la fecha indicada";
  const hora24 = Number(hora);
  const hora12 = hora24 % 12 || 12;
  return `${Number(dia)} de ${nombre} de ${anio} · ${hora12}:${minuto} ${hora24 < 12 ? "a. m." : "p. m."}`;
}

/* Ranita artesanal a juego con el pato, sólo como detalle decorativo. */
function Rana() {
  return (
    <svg viewBox="0 0 174 160" className={styles.ranita} role="img" aria-label="Ranita tierna con un corazón" xmlns="http://www.w3.org/2000/svg">
      <g stroke="#4d714e" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
        <path fill="#a6cc92" d="M24 100c-5-26 5-43 24-51-4-13 1-24 14-27 12-3 21 4 24 16 5-1 10-1 15 0 2-11 11-19 23-17 14 2 20 14 16 28 21 9 30 28 25 52-5 29-34 45-71 45-40 0-64-16-70-46Z" />
        <path d="M44 121 30 137M144 120l12 16" fill="none" />
        <path d="M59 63c5 5 10 5 15 0M108 63c5 5 10 5 15 0" fill="none" />
        <path d="M79 82q9 10 19 0" fill="none" />
      </g>
      <ellipse cx="48" cy="81" rx="11" ry="6" fill="#efb4bd" opacity=".94" />
      <ellipse cx="136" cy="81" rx="11" ry="6" fill="#efb4bd" opacity=".94" />
      <path d="M90 127C66 111 58 101 67 91c9-10 20-2 23 4 5-7 17-14 26-4 10 11-4 24-26 36Z" fill="#f6b4c8" stroke="#b97087" strokeWidth="3" strokeLinejoin="round" />
      <path d="m64 111 19 13m36-13-20 13" fill="none" stroke="#4d714e" strokeWidth="4" strokeLinecap="round" />
    </svg>
  );
}

/** Nuevo patito: cuerpo ovalado, piquito bien unido, ala, rubor y dos patitas. */
function Patito() {
  return (
    <svg viewBox="0 0 200 175" className={styles.patito} role="img" aria-label="Patito amarillo sonriente" xmlns="http://www.w3.org/2000/svg">
      <path d="M27 38C11 24 8 14 17 7c10-7 19 0 21 6 8-7 19-4 20 6 0 9-17 19-31 19Z" fill="#efb2c6" />
      <path d="M75 149v13m35-13v13" fill="none" stroke="#ad8455" strokeWidth="7" strokeLinecap="round" />
      <path d="M41 88c0-21 12-37 30-46C76 19 97 10 120 16c21 5 36 21 40 45 20 9 30 25 29 43-1 30-30 51-75 52-46 1-74-11-84-36-4-10-2-22 11-32Z" fill="#ffe5a1" stroke="#a78350" strokeWidth="6" strokeLinejoin="round" />
      <path d="M97 21v-14m23 17 12-12" fill="none" stroke="#a78350" strokeWidth="6" strokeLinecap="round" />
      <path d="M59 111c8 16 25 24 43 24" fill="none" stroke="#e5c181" strokeWidth="7" strokeLinecap="round" />
      <path d="M72 101c-2-17 8-28 22-31" fill="none" stroke="#e5c181" strokeWidth="5" strokeLinecap="round" opacity=".6" />
      <circle cx="137" cy="78" r="5" fill="#493d31" />
      <ellipse cx="127" cy="101" rx="11" ry="7" fill="#f5aebb" opacity=".9" />
      <path d="M102 91q9 13 20-1" fill="none" stroke="#493d31" strokeWidth="5" strokeLinecap="round" />
      <path d="M150 105c13-10 27-11 39-3 12 8 12 20-1 27-16 10-34 4-44-7" fill="#f6ab74" stroke="#c97f57" strokeWidth="4" strokeLinejoin="round" />
      <path d="M161 109c11-5 22-3 28 2" fill="none" stroke="#ffcc95" strokeWidth="3" strokeLinecap="round" />
      <path d="M70 146c15 7 38 11 59 8" fill="none" stroke="#a78350" strokeWidth="3.5" strokeLinecap="round" opacity=".25" />
    </svg>
  );
}

function BosqueDecorativo() {
  return (
    <>
      <div className={styles.luces} aria-hidden="true"><i /><i /><i /><i /><i /><i /><i /></div>
      <div className={`${styles.rama} ${styles.ramaIzquierda}`} aria-hidden="true"><i /><i /><i /><i /><i /></div>
      <div className={`${styles.rama} ${styles.ramaDerecha}`} aria-hidden="true"><i /><i /><i /><i /><i /></div>
      <div className={styles.paisaje} aria-hidden="true">
        <div className={styles.colinaLejana} />
        <div className={styles.laguito}><i /><i /><i /></div>
        <div className={styles.colinaCercana} />
        <span className={`${styles.flor} ${styles.flor1}`}>✿</span>
        <span className={`${styles.flor} ${styles.flor2}`}>✿</span>
        <span className={`${styles.flor} ${styles.flor3}`}>✿</span>
        <span className={`${styles.flor} ${styles.flor4}`}>✿</span>
        <span className={`${styles.flor} ${styles.flor5}`}>✿</span>
      </div>
    </>
  );
}

export default function Template({ children }: { children: ReactNode }) {
  const [hidratado, setHidratado] = useState(false);
  const [restante, setRestante] = useState<number | null>(null);
  const [saliendo, setSaliendo] = useState(false);
  const [revelado, setRevelado] = useState(false);
  const [musicaSonando, setMusicaSonando] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const salidaTimer = useRef<number | null>(null);

  const objetivo = Date.parse(FECHA_ESTRENO);
  const fechaValida = Number.isFinite(objetivo);
  const mostrar = ESTRENO_ACTIVO && fechaValida && !revelado;
  const listo = restante !== null && restante <= 0;

  useEffect(() => {
    setHidratado(true);
    if (!ESTRENO_ACTIVO || !fechaValida) return;
    const actualizar = () => setRestante(Math.max(0, objetivo - Date.now()));
    actualizar();
    const timer = window.setInterval(actualizar, 1000);
    return () => window.clearInterval(timer);
  }, [objetivo, fechaValida]);

  useEffect(() => {
    if (!mostrar) return;
    const bodyPrev = document.body.style.overflow;
    const htmlPrev = document.documentElement.style.overflow;
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = bodyPrev;
      document.documentElement.style.overflow = htmlPrev;
    };
  }, [mostrar]);

  useEffect(() => () => { if (salidaTimer.current !== null) window.clearTimeout(salidaTimer.current); }, []);

  function ponerMusica() {
    if (!MUSICA_ACTIVA || !audioRef.current) return;
    audioRef.current.volume = Math.min(1, Math.max(0, VOLUMEN_MUSICA));
    void audioRef.current.play().then(() => setMusicaSonando(true)).catch(() => setMusicaSonando(false));
  }

  function alternarMusica() {
    if (!MUSICA_ACTIVA || !audioRef.current) return;
    if (audioRef.current.paused) ponerMusica();
    else { audioRef.current.pause(); setMusicaSonando(false); }
  }

  function abrirRecorrido() {
    if (!listo || saliendo) return;
    ponerMusica(); // el click real del usuario autoriza audio en los navegadores
    setSaliendo(true);
    // Respaldo si CSS animations están reducidas/deshabilitadas.
    salidaTimer.current = window.setTimeout(() => setRevelado(true), 1650);
  }

  const fecha = fechaEnTexto(FECHA_ESTRENO);
  const [dias, horas, minutos, segundos] = contar(restante ?? 0);
  const grupos = [
    { etiqueta: "DÍAS", valor: dias },
    { etiqueta: "HORAS", valor: horas },
    { etiqueta: "MINUTOS", valor: minutos },
    { etiqueta: "SEGUNDOS", valor: segundos },
  ];

  // Si tarda o falla el CSS, igualmente cubre toda la pantalla.
  const capaSegura: CSSProperties = {
    position: "fixed", inset: 0, width: "100%", height: "100dvh",
    display: "flex", flexDirection: "column", alignItems: "center",
    overflowY: "auto", overflowX: "hidden", zIndex: 2147483647,
    isolation: "isolate", pointerEvents: "auto", color: "#fff7ea",
    background: "radial-gradient(circle at 50% 20%, #5a7955 0%, #28583e 42%, #153b2c 100%)",
  };

  const overlay = mostrar ? (
    <div
      className={`${styles.pantalla} ${saliendo ? styles.saliendo : ""}`}
      style={capaSegura}
      role="dialog"
      aria-modal="true"
      aria-labelledby="estreno-titulo"
      aria-describedby="estreno-descripcion"
    >
      <BosqueDecorativo />
      <div className={styles.escena}>
        <span className={styles.etiqueta}>✦ Un estreno muy especial ✦</span>
        <span className={styles.sobreTitulo}>{TEXTO_SUPERIOR}</span>
        <h1 id="estreno-titulo" className={styles.titulo}>{TITULO}<em>{TITULO_RESALTADO}</em></h1>
        <p id="estreno-descripcion" className={styles.descripcion}>{listo ? MENSAJE_LISTO : MENSAJE}</p>

        {listo ? (
          <div className={styles.estrenoListo} role="status" aria-live="polite">
            <span className={styles.listonListo}>♡ ¡El momento llegó! ♡</span>
            <button type="button" className={styles.botonContinuar} onClick={abrirRecorrido} disabled={saliendo}>
              {saliendo ? "Abriendo nuestro álbum…" : "Haz clic para continuar"}
              <span aria-hidden="true">↗</span>
            </button>
            <span className={styles.ayudaMusica}>Al entrar comenzará a sonar nuestra música ♫</span>
          </div>
        ) : (
          <div className={styles.contador} role="timer" aria-label="Cuenta regresiva para el estreno">
            {grupos.map((grupo, indice) => (
              <div className={styles.tarjetita} key={grupo.etiqueta}>
                <span className={styles.cintaPapel} aria-hidden="true" />
                <strong className={styles.cifra} key={`${indice}-${grupo.valor}`}>
                  {restante === null ? "--" : String(grupo.valor).padStart(2, "0")}
                </strong>
                <span className={styles.unidad}>{grupo.etiqueta}</span>
              </div>
            ))}
          </div>
        )}
        <span className={styles.fecha}>{listo ? "Cada segundo contigo vale infinito." : `Nos vemos el ${fecha} ♡`}</span>
        <div className={styles.mascotas} aria-label="Ranita y patito en su pequeño picnic">
          <Rana />
          <span className={styles.mantas} aria-hidden="true" />
          <Patito />
          <span className={styles.corazonEnMedio} aria-hidden="true">♥</span>
        </div>
        <span className={styles.dedicatoria}>{FIRMA}</span>
      </div>
      {MUSICA_ACTIVA && (
        <button className={`${styles.botonMusica} ${styles.musicaEnCapa}`} type="button" onClick={alternarMusica} aria-label={musicaSonando ? "Pausar música" : "Reproducir música"} title="Música de fondo">
          <span aria-hidden="true">{musicaSonando ? "♫" : "♪"}</span>
          <span>{musicaSonando ? "Pausar música" : "Escuchar música"}</span>
        </button>
      )}
    </div>
  ) : null;

  return (
    <>
      <div id="contenido-timeline">{children}</div>
      {MUSICA_ACTIVA && <audio ref={audioRef} src={ARCHIVO_MUSICA} loop preload="none" />}
      {MUSICA_ACTIVA && !mostrar && (
        <button className={`${styles.botonMusica} ${styles.musicaFlotante}`} type="button" onClick={alternarMusica} aria-label={musicaSonando ? "Pausar música" : "Reproducir música"} title="Música de fondo">
          <span aria-hidden="true">{musicaSonando ? "♫" : "♪"}</span>
          <span>{musicaSonando ? "Pausar" : "Música"}</span>
        </button>
      )}
      {overlay && (hidratado ? createPortal(overlay, document.body) : overlay)}
    </>
  );
}
