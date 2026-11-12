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
  endingText: "Mi Leoncita, gracias por cada día compartido, por hacer de lo cotidiano algo extraordinario y por ser mi lugar favorito. Este es apenas el comienzo de todas nuestras aventuras. Te amo, Bronquitas. ♡",
  signature: "Tu Patito, tu Papatín ♡",
  footerLeft: "PATITO ♡ LEONCITA · NUESTRO PRIMER AÑO",
};

export const chapters: Chapter[] = [
  { number: 1, title: "Donde comenzó todo", kicker: "El primer hola", description: "Aquí puedes contar cómo comenzó su historia. Ese primer mensaje, la primera salida o el momento en que todo empezó a sentirse diferente.", quote: "Todavía no lo sabíamos, pero ahí comenzaba mi parte favorita de la vida.", memory: "Nuestro primer recuerdo", photo: "/fotos/mes1_01.jpeg", detailPhoto: "/fotos/mes1_02.jpeg" },
  { number: 2, title: "Las primeras mariposas", kicker: "Todo era nuevo", description: "Escribe sobre su primera cita especial, las miradas nerviosas, las conversaciones interminables y esas pequeñas primeras veces que se quedaron contigo.", quote: "Me gustaba todo, pero sobre todo me gustaba estar contigo.", memory: "La primera de muchas aventuras", photo: "/fotos/mes2_01.jpeg", detailPhoto: "/fotos/mes2_02.jpeg" },
  { number: 3, title: "Nuestro propio mundo", kicker: "Pequeñas costumbres", description: "Aquí van sus primeras bromas internas, sus lugares favoritos y esas palabras que solo ustedes entienden. Un universo chiquito hecho para dos.", quote: "De pronto, las cosas más sencillas se volvieron nuestras favoritas.", memory: "Eso que solo tú y yo entendemos", photo: null, detailPhoto: null },
  { number: 4, title: "Días de risa infinita", kicker: "Sonrisas compartidas", description: "Recuerda un día especialmente divertido, una cita improvisada o esa anécdota que sigue haciéndolos reír hasta hoy.", quote: "Con mi Bronquitas hasta los días normales tienen magia.", memory: "La risa que todavía recuerdo", photo: null, detailPhoto: null },
  { number: 5, title: "Aventuras de dos", kicker: "Contigo a donde sea", description: "Un viaje, una caminata, una tarde de descubrimientos: aquí va ese recuerdo en el que el mundo parecía más bonito porque lo estaban recorriendo juntos.", quote: "Mi lugar favorito nunca fue un lugar. Siempre fuiste tú.", memory: "Un destino que llevaré conmigo", photo: null, detailPhoto: null },
  { number: 6, title: "Medio año, mil latidos", kicker: "Seis meses de nosotros", description: "El punto medio de nuestro primer año. Un buen momento para recordar cuánto hemos aprendido, reído y crecido de la mano.", quote: "Seis meses contigo y todavía siento la emoción del primer día.", memory: "Nuestro medio aniversario", photo: null, detailPhoto: null },
  { number: 7, title: "Esos días pequeñitos", kicker: "Lo extraordinario del diario", description: "Un café, una película, un abrazo largo o una tarde en casa. A veces los momentos más simples son los que más queremos guardar.", quote: "Ojalá pudiera guardar algunos días en el bolsillo para volver a vivirlos.", memory: "Un día que repetiría", photo: null, detailPhoto: null },
  { number: 8, title: "Cada vez más cerquita", kicker: "Nuestra complicidad", description: "Aquí puedes hablar de la confianza, los cuidados, la manera en que se entienden y de todo lo que han construido poco a poco.", quote: "Eres mi Leoncita, mi refugio bonito y mi persona favorita.", memory: "Una mirada que lo dijo todo", photo: null, detailPhoto: null },
  { number: 9, title: "Todo lo que florece", kicker: "Creciendo juntos", description: "Sueños compartidos, cambios importantes o pequeños logros: este espacio es para los momentos en que aprendieron a acompañarse todavía mejor.", quote: "Qué bonito es crecer sabiendo que estamos del mismo lado.", memory: "Un sueño que empezamos a compartir", photo: null, detailPhoto: null },
  { number: 10, title: "Nuestro idioma secreto", kicker: "Apodos y tonterías lindas", description: "Leoncita, Bronquitas, Patito, Papatín... aquí puedes contar la historia de sus apodos, sus chistes y todo aquello que hace especial su manera de quererse.", quote: "Si el amor tuviera un idioma, el nuestro sonaría a risitas y apodos raros.", memory: "Un apodo que se volvió hogar", photo: null, detailPhoto: null },
  { number: 11, title: "Casi una vuelta al sol", kicker: "Mirar atrás y sonreír", description: "El primer año casi está completo. Aquí puedes recordar los momentos más importantes o escribir todo lo que quisieras agradecerle.", quote: "Entre tantos días, me alegra que la vida me haya cruzado contigo.", memory: "Un momento para agradecer", photo: null, detailPhoto: null },
  { number: 12, title: "El primero de muchos", kicker: "Nuestro aniversario", description: "Este capítulo es para su primer aniversario: lo que sientes hoy, lo que ha significado el camino juntos y las aventuras que les esperan.", quote: "Un año de nosotros. Y todavía quiero infinitos capítulos más.", memory: "Nuestro primer año juntitos", photo: null, detailPhoto: null },
];
