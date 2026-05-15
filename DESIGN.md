# Documento de Diseño — Sitio Web Terapeuta Ocupacional

Este documento describe las decisiones de diseño visual, de interacción y de accesibilidad tomadas durante el desarrollo del sitio. Sirve como referencia para mantener coherencia en futuras modificaciones.

---

## Tabla de contenidos

1. [Filosofía de diseño](#filosofía-de-diseño)
2. [Sistema de colores](#sistema-de-colores)
3. [Tipografía](#tipografía)
4. [Espaciado y grilla](#espaciado-y-grilla)
5. [Diseño responsive](#diseño-responsive)
6. [Secciones: decisiones por componente](#secciones-decisiones-por-componente)
   - [Barra de navegación](#barra-de-navegación)
   - [Hero](#hero)
   - [Sobre mí](#sobre-mí)
   - [Servicios](#servicios)
   - [Testimonios](#testimonios)
   - [Contacto / CTA final](#contacto--cta-final)
   - [Footer](#footer)
7. [Sistema de accesibilidad](#sistema-de-accesibilidad)
   - [Modo alto contraste](#modo-alto-contraste)
   - [Control de tamaño de fuente](#control-de-tamaño-de-fuente)
   - [Navegación por teclado](#navegación-por-teclado)
   - [Semántica HTML y ARIA](#semántica-html-y-aria)
8. [Componentes reutilizables](#componentes-reutilizables)
   - [Botón primario (WhatsApp)](#botón-primario-whatsapp)
   - [Tarjetas de servicio](#tarjetas-de-servicio)
   - [Tarjetas de testimonio](#tarjetas-de-testimonio)
   - [Íconos de redes sociales](#íconos-de-redes-sociales)
9. [Iconografía SVG](#iconografía-svg)
10. [Estrategia de performance](#estrategia-de-performance)
11. [Convenciones de código](#convenciones-de-código)
12. [Decisiones descartadas](#decisiones-descartadas)

---

## Filosofía de diseño

El sitio sigue tres principios ordenados por prioridad:

1. **Accesibilidad ante todo.** Al ser un sitio de terapia ocupacional, la audiencia puede incluir personas con baja visión, dificultades motoras o usuarios de tecnologías asistivas. Las funciones de accesibilidad no son opcionales ni un añadido estético: son parte del producto.

2. **Confianza profesional.** El diseño debe transmitir seriedad, calidez y cercanía simultáneamente. Esto se logra con una paleta azul (asociada a confianza y salud), tipografía limpia, espaciado generoso y testimonios reales.

3. **Conversión directa.** El objetivo de negocio es que el usuario haga clic en el botón de WhatsApp. El diseño guía visualmente al usuario desde el primer scroll hacia ese CTA, usando jerarquía tipográfica, contraste de color (verde sobre azul) y repetición estratégica del botón (Hero, sección Contacto y footer).

---

## Sistema de colores

### Paleta principal

| Rol              | Nombre           | Hex       | Uso principal                                    |
|------------------|------------------|-----------|--------------------------------------------------|
| Primario         | Azul             | `#3b82f6` | Links activos, acentos, íconos, fondos de tags   |
| Primario oscuro  | Azul oscuro      | `#2563eb` | Hover en fondos azules                           |
| Fondo base       | Blanco roto      | `#f8fafc` | Fondo de body, secciones alternas                |
| Texto principal  | Gris muy oscuro  | `#1e293b` | Títulos, texto body en secciones claras          |
| Fondo dark       | Azul medianoche  | `#1e293b` | Footer                                           |

### Colores de sección

| Sección       | Fondo                                | Texto base     |
|---------------|--------------------------------------|----------------|
| Hero          | Gradiente `blue-50` → `#f8fafc`     | `#1e293b`      |
| Sobre mí      | `#ffffff`                            | `#4b5563` (gray-600) |
| Servicios     | `#f8fafc`                            | `#6b7280` (gray-500) |
| Testimonios   | `#ffffff`                            | `#374151` (gray-700) |
| Contacto CTA  | Gradiente `blue-600` → `blue-800`   | `#ffffff`      |
| Footer        | `#1e293b`                            | `#d1d5db` (gray-300) |

### Color de acción: verde WhatsApp

El CTA de WhatsApp usa deliberadamente verde (`#22c55e` / `green-500`) en lugar del azul primario. Esta ruptura de la paleta sirve como señal visual inequívoca: "esto es para agendar, es diferente al resto". El verde también es el color corporativo de WhatsApp, lo que reduce la fricción cognitiva del usuario.

### Colores de estado

| Estado         | Color                    | Uso                                   |
|----------------|--------------------------|---------------------------------------|
| Hover links    | `#3b82f6` (primary)      | Links de nav al pasar el cursor       |
| Focus ring     | `#3b82f6` (primary)      | Outline de foco por teclado           |
| Hover WhatsApp | `#16a34a` (green-600)    | Oscurecimiento al pasar el cursor     |
| Hover íconos   | `#3b82f6` o `#22c55e`    | Fondo de íconos sociales en footer    |
| Stars          | `#facc15` (yellow-400)   | Estrellas de valoración               |

---

## Tipografía

**Fuente elegida: Inter**

Inter es una fuente sans-serif diseñada específicamente para pantallas digitales. Sus características la hacen idónea para este proyecto:

- **Alta legibilidad en pantallas pequeñas**: diseñada con letterforms optimizadas para resoluciones bajas.
- **Amplio rango de pesos**: disponible desde 100 hasta 900, lo que permite establecer jerarquía visual sin cambiar de familia tipográfica.
- **Excelente soporte de caracteres latinos y tildes**: crítico para contenido en español.
- **Open source y gratuita** vía Google Fonts.

Se cargan únicamente los pesos necesarios (`400`, `500`, `600`, `700`) para minimizar el impacto en la carga inicial.

### Escala tipográfica

| Elemento              | Clase Tailwind           | Tamaño base (100%) |
|-----------------------|--------------------------|--------------------|
| H1 (Hero)             | `text-4xl md:text-5xl`   | 36 px / 48 px      |
| H2 (Secciones)        | `text-3xl`               | 30 px              |
| H3 (Tarjetas)         | `text-base font-bold`    | 16 px              |
| Body largo            | `text-lg`                | 18 px              |
| Body estándar         | `text-sm` / `text-base`  | 14 px / 16 px      |
| Metadata / subtexto   | `text-xs`                | 12 px              |

> Todos los tamaños usan `rem` internamente en Tailwind, lo que significa que escalan automáticamente al modificar `font-size` en `<html>` mediante los controles de accesibilidad.

### Jerarquía visual

- Los H2 de sección tienen un divisor decorativo azul (`w-16 h-1 bg-primary`) debajo del título para anclar visualmente el inicio de cada sección.
- Los H3 dentro de tarjetas usan `font-bold text-base` sin modificador de color adicional para no competir con el contenido de apoyo.
- El texto de apoyo (descripciones de tarjetas, textos de testimonios) usa tonos de gris para crear profundidad sin necesitar tamaños reducidos agresivos.

---

## Espaciado y grilla

El sistema de espaciado sigue la escala de Tailwind (múltiplos de 4 px):

| Rol                       | Valor Tailwind | px equivalentes |
|---------------------------|----------------|-----------------|
| Padding de sección        | `py-20`        | 80 px arriba y abajo |
| Gap entre cards           | `gap-6`        | 24 px           |
| Padding interno de cards  | `p-6`          | 24 px           |
| Margen H2 → contenido     | `mb-12`        | 48 px           |
| Padding horizontal global | `px-4`         | 16 px           |
| Max width contenedor      | `max-w-6xl`    | 1152 px         |
| Max width secciones texto | `max-w-4xl`    | 896 px          |

El contenedor máximo de `max-w-6xl` con `mx-auto` garantiza que en pantallas muy anchas el contenido no se estire indefinidamente, manteniendo la lectura cómoda.

---

## Diseño responsive

El sitio sigue una estrategia **Mobile-First**: los estilos base están escritos para pantallas pequeñas, y los breakpoints amplían o reorganizan el layout.

| Breakpoint Tailwind | Ancho mínimo | Cambios principales                                      |
|---------------------|--------------|----------------------------------------------------------|
| `sm` (640 px)       | 640 px       | Grilla de servicios pasa a 2 columnas; cifras de Sobre mí a 3 columnas |
| `md` (768 px)       | 768 px       | Hero pasa a 2 columnas (texto + foto); menú desktop visible; footer horizontal |
| `lg` (1024 px)      | 1024 px      | Grilla de servicios pasa a 4 columnas                   |

En mobile:
- El menú de navegación se oculta y se sustituye por un botón hamburguesa.
- El Hero muestra texto arriba y foto abajo (columna única).
- Las tarjetas de servicio aparecen en columna única o 2 columnas.
- Los testimonios aparecen en columna única con scroll vertical.

---

## Secciones: decisiones por componente

### Barra de navegación

**Decisión: sticky + shadow sutil.**
La barra permanece fija al hacer scroll (`sticky top-0 z-50`) para que el menú y los controles de accesibilidad estén siempre disponibles. La sombra (`shadow-sm`) separa visualmente el header del contenido sin ser invasiva.

**Decisión: controles de accesibilidad en el header.**
A diferencia de paneles flotantes (FABs, sidebars), los controles de A-, A+ y contraste viven dentro del header. Esto los hace parte del flujo natural de tabulación y los mantiene visibles sin tapar contenido.

**Decisión: menú hamburguesa simple sin animación de transición.**
Para mantener el JS mínimo, el menú mobile se muestra/oculta con `classList.toggle('hidden')`. No hay animación de deslizamiento porque habría requerido CSS adicional o una transición con JS más complejo. La apertura es instantánea, lo que también es aceptable desde el punto de vista de accesibilidad (las animaciones de entrada pueden ser disorienting para usuarios con vértigo o sensibilidad al movimiento).

**Decisión: cerrar el menú mobile al hacer clic fuera.**
Se implementa con un listener en `document` que verifica si el clic ocurrió dentro del menú o del botón. Es el comportamiento esperado por los usuarios de móviles y reduce la fricción.

---

### Hero

**Decisión: `min-h-[90vh]` en lugar de `h-screen`.**
`h-screen` fija la altura exacta al viewport, lo que puede causar que el CTA quede cortado en pantallas con barras de herramientas del navegador (problema común en iOS Safari). `min-h-[90vh]` con `flex items-center` garantiza centrado vertical sin cortar contenido.

**Decisión: gradiente azul muy suave.**
El fondo `from-blue-50 to-[#f8fafc]` es casi imperceptible pero suficiente para distinguir visualmente el Hero del resto del página sin crear un quiebre duro. La transición suave hacia el fondo base del sitio da sensación de continuidad.

**Decisión: tag de "Terapeuta Ocupacional certificada" como badge.**
El badge con fondo `blue-100` antes del H1 sirve como ancla inmediata de contexto. El usuario que llega desde buscador o enlace directo identifica en menos de un segundo el tipo de profesional.

**Decisión: placeholder circular con inicial en lugar de imagen genérica de stock.**
Las fotos de stock de salud son fácilmente reconocibles y generan desconfianza. Un placeholder limpio con la inicial establece que "aquí irá la foto real" sin contaminar la percepción inicial del sitio.

**Decisión: CTA en verde WhatsApp con ícono SVG inline.**
El ícono de WhatsApp es el SVG oficial del logo de la aplicación. Al ser inline, no depende de una fuente de íconos externa, carga instantáneamente y hereda el color del padre (`fill="currentColor"`), lo que lo hace compatible con el modo alto contraste.

---

### Sobre mí

**Decisión: ancho máximo `max-w-4xl` (más angosto que otras secciones).**
El texto de párrafo en bloques muy anchos es difícil de leer. Mantener el ancho en 896 px máximo garantiza líneas de texto cómodas (~70-85 caracteres), alineado con las recomendaciones tipográficas de legibilidad.

**Decisión: tres cifras destacadas al pie de la sección.**
Las cifras (+4, 4, 100%) funcionan como un micro-resumen escaneable para usuarios que no leen el texto completo. Refuerzan la credibilidad de forma visual y rápida.

---

### Servicios

**Decisión: `article` en lugar de `div` para las tarjetas.**
Cada tarjeta de servicio es contenido autónomo y autocontenido, lo que semánticamente corresponde a un `<article>`. Esto mejora la interpretación por parte de lectores de pantalla.

**Decisión: íconos temáticos en fondos `blue-100`.**
Los íconos decorativos van en un contenedor cuadrado redondeado con fondo azul claro, creando un contenedor visual que los separa del texto sin necesitar color en el ícono mismo. Facilita la lectura en modo alto contraste porque el ícono hereda el color de texto (`currentColor`).

**Decisión: hover shadow en las tarjetas.**
`hover:shadow-md` sobre `shadow-sm` da feedback visual inmediato de que la tarjeta es un elemento diferenciado. Aunque las tarjetas no son clicables actualmente, el feedback hace la interfaz más viva y puede ser útil si en el futuro se agregan modales o expansión de contenido.

---

### Testimonios

**Decisión: `blockquote` + `footer` semántico.**
HTML5 define `<blockquote>` para citas literales y `<footer>` (dentro de un elemento de sección) para atribuir la cita. Esta combinación es interpretada correctamente por lectores de pantalla: anuncian la cita y luego la atribución.

**Decisión: avatar con iniciales en lugar de foto.**
Las fotos de pacientes representan un problema de privacidad. Las iniciales mantienen la sensación de persona real sin comprometer datos personales.

**Decisión: estrellas como texto Unicode (`★`) con `aria-label`.**
Las estrellas `★★★★★` son decorativas para usuarios visuales, pero para lectores de pantalla el elemento tiene `aria-label="5 de 5 estrellas"` en el contenedor. El span de estrellas tiene `aria-hidden="true"` para que no se lea como "estrella estrella estrella estrella estrella".

**Decisión: `flex-col` + `flex-1` en el texto.**
Las tres tarjetas de testimonio tienen alturas variables (los textos tienen diferente extensión). Usando `flex flex-col` en el `blockquote` y `flex-1` en el texto, el footer de atribución siempre queda alineado al fondo de la tarjeta, independiente de la extensión del texto.

---

### Contacto / CTA final

**Decisión: sección con fondo azul oscuro como contraste máximo.**
Después de tres secciones con fondos claros, el cambio brusco a azul oscuro actúa como señal visual de "este es el momento de actuar". Es el equivalente al "botón rojo" de urgencia, pero dentro de la paleta de confianza del sitio.

**Decisión: repetición del CTA de WhatsApp.**
El botón de WhatsApp aparece en tres lugares: Hero, sección Contacto y footer. Esto no es redundancia sino estrategia: el usuario que no convirtió en el Hero tiene otra oportunidad al finalizar el scroll. Está respaldado por patrones de diseño de landing pages de alta conversión.

---

### Footer

**Decisión: fondo `#1e293b` (mismo que el texto principal del sitio).**
Usar el color de texto como fondo de footer da coherencia: es el color más oscuro del sistema, naturalmente al final de la página como cierre visual.

**Decisión: íconos circulares con hover individual.**
Cada red social tiene un `hover:bg-primary` excepto WhatsApp que tiene `hover:bg-green-500`. Esto preserva la asociación de color: WhatsApp → verde.

---

## Sistema de accesibilidad

### Modo alto contraste

El modo alto contraste se implementa inyectando la clase `.high-contrast` en `<body>` desde JavaScript. Las reglas CSS en `style.css` usan `!important` para sobreescribir las clases de Tailwind que se generan en runtime (CDN Play/JIT).

**Jerarquía de sobreescritura:**

```
Tailwind JIT (sin !important)
    ↓ sobreescrito por
style.css .high-contrast * { ... !important }
```

**Qué se modifica en alto contraste:**

| Propiedad CSS      | Valor en modo normal      | Valor en alto contraste |
|--------------------|---------------------------|-------------------------|
| `background-color` | Varios (azul, blanco, etc.) | `#000` (negro)          |
| `color`            | Varios grises/azules       | `#fff` (blanco)         |
| `border-color`     | Grises claros              | `#fff` (blanco)         |
| `box-shadow`       | Sombras de tarjetas        | `none`                  |
| Color de links/btn | Azul o verde               | `#ffff00` (amarillo)    |
| Gradientes         | `background-image`         | `none` (eliminados)     |
| Imágenes           | Color normal               | Gris + contraste alto   |
| Focus outline      | Azul `#3b82f6`             | Amarillo `#ffff00`      |

**Por qué amarillo para interactivos:**
El amarillo (`#ffff00`) sobre negro tiene una relación de contraste de aproximadamente **19.6:1**, superando con creces el ratio mínimo de 4.5:1 requerido por WCAG AA y el 7:1 de WCAG AAA. Es el color de señalización de seguridad universal.

**Estado del botón de contraste:**
Cuando el modo está activo, el botón de contraste en el header cambia su fondo a `#1e293b` y texto a blanco, dando feedback visual del estado activo independientemente de las reglas de alto contraste (ya que el selector `#btn-contrast[aria-pressed="true"]` es más específico que `.high-contrast *`).

---

### Control de tamaño de fuente

**Arquitectura de la implementación:**

```
Usuario clic A+ → increaseFont() → currentStep++ → applyFontSize()
                                                         ↓
                                    document.documentElement.style.fontSize = "120%"
                                                         ↓
                                    Todos los rem del sitio escalan automáticamente
                                                         ↓
                                    btn-decrease.disabled = false
                                    btn-increase.disabled = (currentStep === max)
```

**Por qué modificar `html` y no `body`:**
Las unidades `rem` (root em) son relativas al `font-size` del elemento `<html>`, no del `<body>`. Modificar `body` no tendría efecto en elementos que usen `rem`. Modificar `html` garantiza que toda la escala tipográfica de Tailwind (que usa `rem`) escale proporcionalmente.

**Por qué no usar `transform: scale()`:**
`scale()` amplia el elemento visualmente pero no reflow el layout, lo que causa que el contenido se corte o se solape. Modificar `font-size` en `html` genera un reflow real: los elementos se redistribuyen para acomodar el texto más grande.

**Por qué 3 pasos (100%, 120%, 140%) y no un slider:**
Los sliders requieren más interacción (arrastrar) y son más difíciles de operar con teclado. Tres pasos discretos con botones son simples, predecibles y completamente operables con teclado o tecnología asistiva.

---

### Navegación por teclado

**Flujo de Tab en el header:**

```
Logo → A- → A+ → Contraste → [Hamburguesa en mobile]
```

**Flujo de Tab en secciones (orden de aparición en el DOM):**

```
[Header] → Botón WhatsApp (Hero) → Botón WhatsApp (Contacto) → Email (Contacto)
→ Instagram → Facebook → LinkedIn → WhatsApp (Footer)
```

Los links del menú desktop están en el DOM antes de los controles de accesibilidad en la estructura visual, pero para simplificar el código de accesibilidad, el orden en el DOM coincide con el orden visual de izquierda a derecha.

**Focus visible:**
Todos los elementos interactivos tienen `focus:outline-none focus:ring-2 focus:ring-primary` en modo normal. El `focus:outline-none` elimina el outline nativo del navegador (que puede ser inconsistente entre navegadores), y `focus:ring-2` aplica un ring customizado de Tailwind de 2 px en azul primario. En alto contraste, el CSS sobreescribe esto con `outline: 3px solid #ffff00`.

---

### Semántica HTML y ARIA

**Elementos semánticos utilizados:**

| Elemento HTML | Uso en el sitio                                      |
|---------------|------------------------------------------------------|
| `<header>`    | Barra de navegación                                  |
| `<nav>`       | Menú principal y menú de redes sociales en footer    |
| `<main>`      | Contenedor de todo el contenido de la página         |
| `<section>`   | Cada sección temática (Hero, Sobre mí, etc.)         |
| `<article>`   | Cada tarjeta de servicio                             |
| `<blockquote>`| Cada testimonio                                      |
| `<footer>`    | Pie de página del sitio y pie de cada testimonio     |
| `<cite>`      | Atribución de los testimonios                        |

**Atributos ARIA utilizados:**

| Atributo            | Elemento              | Propósito                                                        |
|---------------------|-----------------------|------------------------------------------------------------------|
| `aria-label`        | `<nav>`, botones, `<a>` | Texto descriptivo para lectores de pantalla cuando el texto visible no es suficiente |
| `aria-pressed`      | Botón de contraste    | Indica si el modo está activo (valor: `"true"` o `"false"`)      |
| `aria-expanded`     | Botón hamburguesa     | Indica si el menú mobile está abierto                            |
| `aria-controls`     | Botón hamburguesa     | Referencia al ID del menú que controla (`mobile-menu`)           |
| `aria-hidden="true"`| Íconos SVG decorativos, estrellas | Oculta elementos puramente decorativos a lectores de pantalla |
| `aria-label` en `<div>` | Placeholder de foto | Provee texto alternativo al placeholder (que es un `<div>`, no `<img>`) |
| `role="list"`       | `<ul>` de menú y redes | Algunos navegadores/lectores remueven la semántica de lista cuando se aplica `list-style: none`; `role="list"` la preserva explícitamente |
| `role="group"`      | Contenedor de controles de accesibilidad | Agrupa semánticamente los 3 controles relacionados |

---

## Componentes reutilizables

### Botón primario (WhatsApp)

El CTA de WhatsApp aparece en tres variantes según el contexto:

**Hero (tamaño base):**
```html
<a href="..." class="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-4 rounded-xl text-base ...">
```

**Sección Contacto (grande):**
```html
<a href="..." class="inline-flex items-center gap-3 bg-green-500 hover:bg-green-400 text-white font-semibold px-8 py-4 rounded-xl text-lg ...">
```

**Footer (ícono solamente):**
```html
<a href="..." class="w-10 h-10 rounded-full bg-gray-700 hover:bg-green-500 ...">
```

La diferencia entre `hover:bg-green-600` (Hero) y `hover:bg-green-400` (Contacto) es intencional: en el Hero, el hover oscurece (más formal); en la sección azul oscura, el hover aclara para mantener legibilidad sobre el fondo oscuro.

---

### Tarjetas de servicio

Estructura base:
```html
<article class="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100">
  <div class="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4" aria-hidden="true">
    <!-- SVG icon -->
  </div>
  <h3 class="font-bold text-base mb-3">Título</h3>
  <p class="text-gray-500 text-sm leading-relaxed">Descripción</p>
</article>
```

Para agregar una tarjeta nueva, copiar este bloque y cambiar el SVG, título y descripción. La grilla `lg:grid-cols-4` puede ajustarse a `lg:grid-cols-3` si se reducen los servicios, o mantenerse con scroll horizontal si se agregan más.

---

### Tarjetas de testimonio

Estructura base:
```html
<blockquote class="bg-[#f8fafc] rounded-2xl p-6 border border-gray-100 flex flex-col">
  <div class="mb-4" aria-label="5 de 5 estrellas">
    <span class="text-yellow-400 text-lg" aria-hidden="true">★★★★★</span>
  </div>
  <p class="text-gray-700 leading-relaxed mb-6 italic flex-1">"Texto del testimonio."</p>
  <footer class="flex items-center gap-3">
    <div class="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center font-bold text-primary text-xs shrink-0" aria-hidden="true">AB</div>
    <div>
      <cite class="font-semibold not-italic text-sm block">Nombre / rol</cite>
      <span class="text-gray-400 text-xs">Categoría</span>
    </div>
  </footer>
</blockquote>
```

Las iniciales del avatar (`AB`) deben corresponder a las iniciales del nombre o descripción del autor.

---

### Íconos de redes sociales

Estructura base (footer):
```html
<li>
  <a href="URL_DE_LA_RED" class="w-10 h-10 rounded-full bg-gray-700 hover:bg-primary flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
    aria-label="Nombre de la red de [NOMBRE] [APELLIDO]">
    <!-- SVG icon -->
  </a>
</li>
```

Para eliminar una red social: borrar el `<li>` completo.
Para agregar una nueva: copiar un `<li>` existente, cambiar el `href`, el `aria-label` y el SVG del ícono.

---

## Iconografía SVG

Todos los íconos del sitio son SVGs inline. Esta decisión tiene varias ventajas:

1. **Sin dependencias externas**: no se carga Font Awesome, Heroicons ni ninguna librería de íconos.
2. **Control total de estilos**: los íconos heredan `color` del elemento padre mediante `stroke="currentColor"` o `fill="currentColor"`, lo que los hace compatibles automáticamente con el modo alto contraste.
3. **Cero requests adicionales**: los SVGs son parte del HTML, no archivos externos.
4. **Accesibilidad incorporada**: cada ícono tiene `aria-hidden="true"` porque es decorativo (el texto del botón o `aria-label` del elemento padre ya lo describe).

**Origen de los íconos:**
- Íconos de UI general (casas, personas, pantallas): basados en [Feather Icons](https://feathericons.com/) (MIT license).
- Ícono de WhatsApp: basado en el path SVG oficial de la marca WhatsApp.
- Ícono de Instagram: path simplificado del logo oficial.
- Ícono de Facebook: path simplificado del logo oficial.
- Ícono de LinkedIn: path simplificado del logo oficial.

---

## Estrategia de performance

El sitio está optimizado para cargar rápido en conexiones lentas (3G, zonas rurales):

| Optimización | Implementación |
|---|---|
| Sin JavaScript de terceros | Solo Tailwind CDN (CSS) y Google Fonts |
| `font-display: swap` implícito | Google Fonts aplica `swap` por defecto en URLs modernas |
| `loading="eager"` en foto hero | Al reemplazar el placeholder con una `<img>`, agregar `loading="eager"` ya que está above the fold |
| `rel="preconnect"` para Google Fonts | En el `<head>` antes del link de la fuente |
| Sin imágenes decorativas | Los íconos son SVGs, los fondos son CSS puro |
| Sin animaciones pesadas | Solo `transition-colors` y `transition-shadow` (propiedades baratas para el compositor del navegador) |

**Tamaño aproximado del sitio:**
- `index.html`: ~15 KB
- `style.css`: ~1.5 KB
- `app.js`: ~1 KB
- Tailwind CDN: ~350 KB (comprimido ~100 KB, cacheado después de la primera visita)
- Inter (4 pesos): ~200 KB (cacheado por Google Fonts CDN)

El tamaño total de la primera carga es comparable a cualquier sitio moderno, pero las visitas posteriores son significativamente más rápidas gracias al caché del navegador.

---

## Convenciones de código

### HTML

- **Indentación**: 2 espacios.
- **Orden de atributos**: `id`, `class`, `aria-*`, `role`, `href`/`src`, resto.
- **Comillas**: dobles (`"`) siempre.
- **Comentarios**: solo para marcar el inicio de secciones principales (`<!-- HERO -->`, `<!-- FOOTER -->`).
- **Booleanos**: los atributos booleanos de ARIA se escriben como strings (`aria-pressed="false"`) para ser modificables por JS con `setAttribute`.

### CSS (`style.css`)

- **Scope**: solo reglas que Tailwind no puede manejar (alto contraste con `!important`, estados de botones, scroll behavior).
- **Sin `!important` fuera del contexto de alto contraste**: las únicas reglas con `!important` están dentro de selectores `.high-contrast` o `.high-contrast *`.
- **Comentarios de sección**: bloques con `/* ===...=== */` para separar secciones lógicas.

### JavaScript (`app.js`)

- **Sin `var`**: solo `const` y `let`.
- **Sin framework**: Vanilla JS puro.
- **Funciones globales en `window`**: las funciones llamadas desde `onclick=` en el HTML deben ser accesibles globalmente (no encapsuladas en módulos ES).
- **Sin listeners duplicados**: un solo `document.addEventListener('click', ...)` maneja el cierre del menú.
- **Estado mínimo**: solo `currentStep` (número) para el zoom de fuente. Sin state management.

---

## Decisiones descartadas

Estas opciones fueron consideradas y descartadas durante el diseño:

| Opción descartada | Por qué se descartó |
|---|---|
| Framework React/Vue | Overhead innecesario para un sitio estático de una página. Cero beneficios, costo de complejidad alto. |
| Animaciones de scroll (AOS, GSAP) | Riesgo para usuarios con `prefers-reduced-motion`. Agrega dependencia JS. No aporta a la conversión. |
| Formulario de contacto interno | Requiere backend o servicio de terceros (Formspree, etc.). El CTA de WhatsApp es más directo y tiene mayor tasa de respuesta. |
| Galería de fotos / portafolio | Fuera del alcance inicial. Añade complejidad de mantenimiento. Se puede agregar en una segunda fase. |
| Blog / sección de artículos | Requiere CMS o generador estático. Fuera del alcance. |
| Dark mode nativo (`prefers-color-scheme`) | Conflicto con el modo alto contraste. Se priorizó el alto contraste como herramienta de accesibilidad explícita sobre el dark mode estético. |
| Fuente variable (Inter Variable) | La versión variable es más pesada. Los 4 pesos discretos son suficientes y más livianos. |
| CDN de íconos (Font Awesome, Heroicons) | Dependencia externa innecesaria. Los SVGs inline son más pequeños para la cantidad de íconos usados. |
| Google Analytics / Tag Manager | Privacidad del usuario. No requerido en el alcance inicial. Se puede añadir posteriormente si la profesional lo requiere. |
