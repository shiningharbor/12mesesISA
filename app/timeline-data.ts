/**
 * ✏️ EDITA AQUÍ LOS TEXTOS Y LAS FOTOS. NO ES NECESARIO MODIFICAR EL DISEÑO.
 *
 * 1. Guarda tus imágenes en public/fotos/.
 * 2. Cambia photo: null por photo: "/fotos/mes-01.jpg".
 * 3. Si dejas una foto en null aparecerá una ilustración bonita de ranita.
 * 4. Puedes cambiar cualquier texto y los apodos de portada / contraportada.
 */

export type Chapter = {
  number: number;
  title: string;
  kicker: string;
  description: string;
  quote: string; // aparece cuando tocas el mensajito secreto
  memory: string;
  photo: string | null;
  detailPhoto: string | null;
};

export const siteContent = {
  topLabel: "NUESTRO PEQUEÑO MUNDO",
  headerAction: "EMPEZAR RECORRIDO",
  albumTop: "UN CAMINITO DE LOS DOS",
  albumTitleFirst: "Nuestro",
  albumTitleSecond: "camino",
  albumSubtitle: "12 paradas · infinitos recuerdos",
  albumBottom: "PATITO ♥ LEONCITA",
  albumSmallCaption: "siempre tú & yo",
  heroFooterLeft: "HECHO CON TODO MI AMOR",
  heroFooterRight: "VOL. 01 — NOSOTROS DOS",
  heroScroll: "DESLIZA PARA COMENZAR",
  introSideText: "UN AÑO · DOCE CAPÍTULOS · TÚ & YO",
  introStickerText: "de Papatín para Bronquitas",
  timelineTop: "EL CAMINITO",
  timelineTitleFirst: "Así se siente",
  timelineTitleSecond: "quererte.",
  timelineDescription: "Puedes saltar a una parada o simplemente seguir el sendero poco a poco.",
  timelineNavLabel: "IR A UNA PARADA",
  chapterNoteSignature: "— para mi Leoncita ♡",
  endingLetterTop: "PARA MI LEONCITA ♡",
  endingOpenAction: "Toca el sobre y abre tu cartita",
  endingCloseAction: "Cerrar la cartita",
  endingBottom: "DE TU PATITO Y PAPATÍN, CON AMOR INFINITO",
  endingBack: "Volver a la primera página",
  footerCenter: "HECHO CON AMOR Y UN POQUITO DE MAGIA ♥",
  heroKicker: "UN RECORRIDO HECHO DE MOMENTITOS",
  heroTitleFirst: "Todo empezó",
  heroTitleSecond: "contigo.",
  heroDescription: "Para mi Leoncita, mi Bronquitas. Un lugarcito para recordar cada risa, cada abrazo y todo lo bonito que hemos construido juntos.",
  heroButton: "Empezar el recorrido",
  heroHandwritten: "Con amor, tu Patito y Papatín",
  heroRibbon: "edición de nosotros ♡",
  heroPhoto: "/fotos/portada.png",
  heroDetailPhoto: "/fotos/portada02.jpeg",
  introKicker: "UNA NOTITA ANTES DE EMPEZAR",
  introTitle: "Hay historias que no se cuentan. Se sienten.",
  introDescription: "Este espacio no quiere sentirse como páginas separadas, sino como un paseo entre recuerdos: los días bonitos, los momentos inesperados y todo eso que me gustaría volver a vivir contigo mil veces.",
  endingKicker: "PERO ESPERA... HAY ALGO MÁS",
  endingTitleFirst: "Y si volviera a empezar,",
  endingTitleSecond: "te volvería a elegir.",
  endingIntro: "Al final del caminito hay una sorpresita para ti.",
  
endingText: `Mi Leoncita ♡

Te amo con todo mi cuerpo y toda mi mente,
y un poema, poema te voy a regalar.

Ya sé que la escritura nunca ha sido mi fuerte,
aunque en las letras carezca de suerte,
pensando en ti, las palabras solas se van a formar.

Puesto que eres tan bella,
que con la energía de cientos de estrellas,
por tu cariño me pongo a escribir.

¡Ay, Dios mío, la mente me vas a partir!
Pues dentro de ella ocupas mucho espacio,
desde la memoria de corto a largo plazo.

Y no puedo mentir,
porque cuando empieza la verborrea
de mis sentimientos hacia ti,
lo último que puedo hacer es parar.
Incluso canciones de amor me pongo a
tara-tara-tararear.

¿Ves cómo me desconcentras?
Es tanto lo que siento por ti
que no me dejas pensar bien.
Que me endeudaría por cien vidas en BBVA
con tal de poder pagarte un poquitito
de lo que me das.

¡CARAJO!
Mi amor por ti es tanto que siento que me arde,
me pica, me quema,
y yo sé que para el dolor sí soy medio cobarde,
¡pero este cómo lo disfruto!

Lo digo porque no es humanamente posible
comprimir tanto amor en un cuerpo como el mío,
que, comparado con el amor que siento por ti,
es tan diminuto
que mejor lo comparto.

Y digo, afirmo y repito:
que para las letras no tengo suerte.
La suerte la tengo
porque decidiste estar conmigo.

♡ ♡ ♡

Mi Leoncita, gracias por cada momento compartido, por hacer mi día a día mucho mejor y por ser mi lugar favorito.

Este es apenas el comienzo de toda nuestra vida juntos.

Te amo, Bronquitas. ♡`,

  signature: "Tu Patito, tu Papatín ♡",
  footerLeft: "PATITO ♡ LEONCITA · NUESTRO PRIMER AÑO",
};

export const chapters: Chapter[] = [
  { number: 1, title: "Donde comenzó todo", kicker: "Teamo colachón", description: "Aquí, el primer mes fue donde salimos a citas más inocentes, cuando te pedí que fueras mi novia en cancino, cuando todavía nos daba pena comer mucho con el otro.", quote: "Todavía no lo sabíamos, pero ahí comenzaba mi parte favorita de la vida.", memory: "Nuestro primer recuerdo", photo: "/fotos/mes1_01.jpeg", detailPhoto: "/fotos/mes1_02.jpeg" },
  { number: 2, title: "Los primeros punes juntos jsjsjs", kicker: "Todo era nuevo", description: "Hablando de nosotros, nuestro futuro, nuestro pasado y teninendo nuestras primeras diferencias.", quote: "Me gustaba todo, pero sobre todo me gustaba estar contigo.", memory: "La primera de muchas aventuras", photo: "/fotos/mes2_01.jpeg", detailPhoto: "/fotos/mes2_02.jpeg" },
  { number: 3, title: "Nuestro propio mundo", kicker: "Pequeñas cosas entre nosotros", description: "Aquí van sus primeras bromas internas ''Como?...'', nuestros lugares favoritos y esas palabras que solo nosotros entendemos. Un universo chiquito hecho para nosotros dos.", quote: "De pronto, las cosas más sencillas se volvieron nuestras favoritas.", memory: "Eso que solo tú y yo entendemos", photo: "/fotos/mes3_01.jpeg", detailPhoto: "/fotos/mes3_02.jpeg" },
  { number: 4, title: "Días de risa infinita", kicker: "Sonrisas compartidas", description: "Recuerda un día especialmente divertido, una cita improvisada o esa anécdota que sigue haciéndolos reír hasta hoy. La neta lo que yomás recuerdo de esté mes es mi primer ataque de celos jsjsjsjs. Pinche wey de la fiesta", quote: "Con mi Bronquitas hasta los días normales tienen magia.", memory: "La risa que todavía recuerdo", photo: "/fotos/mes4_01.jpeg", detailPhoto: "/fotos/mes4_02.jpeg" },
  { number: 5, title: "Aventuras de dos", kicker: "Contigo a donde sea", description: "Un viaje, una caminata, una tarde de descubrimientos: aquí va ese recuerdo en el que el mundo parecía más bonito porque lo estaban recorriendo juntos.", quote: "Mi lugar favorito nunca fue un lugar. Siempre fuiste tú.", memory: "Un destino que llevaré conmigo", photo: "/fotos/mes5_01.jpeg", detailPhoto: "/fotos/mes5_02.jpeg" },
  { number: 6, title: "Medio año, mil latidos", kicker: "Seis meses de nosotros", description: "El punto medio de nuestro primer año. Un buen momento para recordar cuánto hemos aprendido, reído y crecido de la mano.", quote: "Seis meses contigo y todavía siento la emoción del primer día.", memory: "Nuestro medio aniversario", photo: "/fotos/mes6_01.jpeg", detailPhoto: "/fotos/mes6_02.jpeg" },
  { number: 7, title: "Esos días pequeñitos", kicker: "Lo extraordinario del diario", description: "Un café, una película, un abrazo largo o una tarde en casa. A veces los momentos más simples son los que más queremos guardar.", quote: "Ojalá pudiera guardar algunos días en el bolsillo para volver a vivirlos.", memory: "Un día que repetiría", photo: "/fotos/mes7_01.jpeg", detailPhoto: "/fotos/mes7_02.jpeg" },
  { number: 8, title: "Cada vez más cerquita", kicker: "Nuestra complicidad", description: "Aquí puedes hablar de la confianza, los cuidados, la manera en que se entienden y de todo lo que han construido poco a poco.", quote: "Eres mi Leoncita, mi refugio bonito y mi persona favorita.", memory: "Una mirada que lo dijo todo", photo: "/fotos/mes8_01.jpeg", detailPhoto: "/fotos/mes8_02.jpeg" },
  { number: 9, title: "Todo lo que florece", kicker: "Creciendo juntos", description: "Sueños compartidos, cambios importantes o pequeños logros: este espacio es para los momentos en que aprendieron a acompañarse todavía mejor.", quote: "Qué bonito es crecer sabiendo que estamos del mismo lado.", memory: "Un sueño que empezamos a compartir", photo: "/fotos/mes9_01.jpeg", detailPhoto: "/fotos/mes9_02.jpeg" },
  { number: 10, title: "Nuestro idioma secreto", kicker: "Apodos y tonterías lindas", description: "Leoncita, Bronquitas, Patito, Papatín... aquí puedes contar la historia de sus apodos, sus chistes y todo aquello que hace especial su manera de quererse.", quote: "Si el amor tuviera un idioma, el nuestro sonaría a risitas y apodos raros.", memory: "Un apodo que se volvió hogar", photo: "/fotos/mes10_01.jpeg", detailPhoto: "/fotos/mes10_02.jpeg" },
  { number: 11, title: "Casi una vuelta al sol", kicker: "Mirar atrás y sonreír", description: "El primer año casi está completo. Aquí puedes recordar los momentos más importantes o escribir todo lo que quisieras agradecerle.", quote: "Entre tantos días, me alegra que la vida me haya cruzado contigo.", memory: "Un momento para agradecer", photo: "/fotos/mes11_01.jpeg", detailPhoto: "/fotos/mes11_02.jpeg" },
  { number: 12, title: "El primero de muchos", kicker: "Nuestro aniversario", description: "Este capítulo es para su primer aniversario: lo que sientes hoy, lo que ha significado el camino juntos y las aventuras que les esperan.", quote: "Un año de nosotros. Y todavía quiero infinitos capítulos más.", memory: "Nuestro primer año juntitos", photo: "/fotos/mes12_01.jpeg", detailPhoto: "/fotos/mes12_02.jpeg" },
];
