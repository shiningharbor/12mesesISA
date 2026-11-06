# Nuestro pequeño infinito ♡

Timeline romántico interactivo de **12 meses**, hecho sobre tu proyecto original con **Next.js 16 + React 19 + TypeScript**. Mantiene el verde profundo y el menta de la web original, con detalles rosa pastel de tu página de San Valentín.

## Ejecutar

```bash
npm install
npm run dev
```

Abre `http://localhost:3000` o publícalo en Vercel como antes.

## Cambiar textos (todo en un solo lugar)

Edita `app/timeline-data.ts`:

- `siteContent`: portada, apodos, subtítulos, introducción, carta de la contraportada y firma.
- `chapters`: los 12 meses, ordenados por número. Cambia título, texto, recuerdo destacado y `quote` (mensaje secreto desplegable).

## Añadir fotos

Guarda tus imágenes en `public/fotos/`, por ejemplo:

```
public/fotos/portada.jpg
public/fotos/portada-detalle.jpg
public/fotos/mes-01.jpg
public/fotos/mes-01-detalle.jpg
```

Después, en `app/timeline-data.ts`, cambia las rutas correspondientes:

```ts
heroPhoto: "/fotos/portada.jpg",
heroDetailPhoto: "/fotos/portada-detalle.jpg",
// Dentro del mes correspondiente:
photo: "/fotos/mes-01.jpg",
detailPhoto: "/fotos/mes-01-detalle.jpg",
```

Si una ruta queda en `null`, aparece un marcador artístico con ranita. Los originales se muestran sin deformación (recorte `object-fit: cover`) y se pueden ampliar tocando la foto.

## Interacciones

- Portada estilo álbum físico: libro ilustrado, polaroids y ranita flotante.
- Navegación entre 12 meses, barra de progreso de lectura y riel activo.
- Mensajitos desplegables individuales en cada capítulo.
- Acercamiento de fotografías con modal (se cierra con Escape o haciendo clic fuera).
- Contraportada con sobre rosa que se abre para revelar la dedicatoria final.
- Ranitas, patito, corazones y detalles de papelería decorativos, sin tapar el contenido.
- Diseño responsivo y compatibilidad con `prefers-reduced-motion`.

## Cambiar colores

Las variables de color están arriba de `app/globals.css`. Los principales verdes del sitio original se conservan. Los acentos están en `--pink`, `--pink-light` y `--coral`.

**No son necesarias librerías adicionales** a las de tu proyecto original.
