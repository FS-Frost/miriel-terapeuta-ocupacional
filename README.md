# Sitio Web Profesional — Terapeuta Ocupacional

Sitio web estático de una sola página (*One Page*) para una terapeuta ocupacional. Diseñado para ser rápido, accesible y de costo de mantención cero. No requiere servidor, ni herramientas de compilación, ni dependencias instaladas.

---

## Tabla de contenidos

1. [Características](#características)
2. [Estructura del proyecto](#estructura-del-proyecto)
3. [Cómo ejecutar localmente](#cómo-ejecutar-localmente)
4. [Personalización: reemplazar placeholders](#personalización-reemplazar-placeholders)
5. [Agregar foto profesional](#agregar-foto-profesional)
6. [Agregar links de redes sociales](#agregar-links-de-redes-sociales)
7. [Funciones de accesibilidad](#funciones-de-accesibilidad)
8. [Despliegue en GitHub Pages](#despliegue-en-github-pages)
9. [Stack tecnológico](#stack-tecnológico)
10. [Checklist antes del lanzamiento](#checklist-antes-del-lanzamiento)

---

## Características

- **One Page**: toda la información en una sola URL, sin navegación entre páginas.
- **Responsive / Mobile-First**: adaptado para smartphones, tablets y pantallas de escritorio.
- **Panel de accesibilidad nativo**: controles de tamaño de fuente (3 niveles) y modo de alto contraste.
- **CTA directo a WhatsApp**: enlace dinámico con mensaje pre-configurado para agendar.
- **Sin dependencias instaladas**: Tailwind CSS se carga desde CDN, el JS es vanilla.
- **Sin build tools**: no hay Webpack, Vite, npm scripts ni proceso de compilación.
- **Semántica HTML5 completa**: compatible con lectores de pantalla (NVDA, VoiceOver).
- **Navegación por teclado**: todos los elementos interactivos son alcanzables con `Tab` y activables con `Enter` / `Space`.

---

## Estructura del proyecto

```
/
├── index.html   # Estructura HTML completa: marcado semántico, contenido y secciones
├── style.css    # Estilos personalizados: modo alto contraste, scroll suave, estados de botones
├── app.js       # Lógica JS: control de tamaño de fuente, toggle de contraste, menú mobile
└── README.md    # Este archivo
```

No existe ni existirá un `package.json`, `node_modules/`, ni carpeta `dist/`. El proyecto se abre directamente en el navegador.

---

## Cómo ejecutar localmente

No se necesita servidor. Abre el archivo directamente:

```bash
# Opción 1: abrir con el explorador de archivos del sistema operativo
# Hacer doble clic en index.html

# Opción 2: desde la terminal
open index.html          # macOS
xdg-open index.html      # Linux
start index.html         # Windows

# Opción 3: servidor local simple (recomendado para probar links y fuentes)
python3 -m http.server 8080
# Luego abrir http://localhost:8080 en el navegador
```

> **Nota:** Tailwind CSS y la fuente Inter se cargan desde CDN. Sin conexión a internet, los estilos y la tipografía no aplicarán correctamente, pero la página seguirá siendo funcional y legible con los estilos de sistema.

---

## Personalización: reemplazar placeholders

El código fuente usa los siguientes marcadores que deben reemplazarse antes del lanzamiento. Se puede hacer manualmente con un editor de texto o con `sed`:

| Placeholder   | Descripción                                      | Ejemplo de valor              |
|---------------|--------------------------------------------------|-------------------------------|
| `[NOMBRE]`    | Nombre de pila de la terapeuta                   | `Miriel`                      |
| `[APELLIDO]`  | Apellido de la terapeuta                         | `González`                    |
| `[TELEFONO]`  | Número de WhatsApp con código de país (sin `+`)  | `56912345678`                 |
| `[EMAIL]`     | Correo electrónico de contacto                   | `miriel@ejemplo.cl`           |
| `[N]`         | Inicial del nombre (en el placeholder de foto)   | `M`                           |

### Reemplazar con un editor de texto

Abre `index.html` y usa la función "Buscar y reemplazar" (normalmente `Ctrl+H` o `Cmd+H`) para sustituir cada placeholder por el valor real.

### Reemplazar desde la terminal (Linux / macOS)

```bash
# Reemplazar en index.html (ajusta los valores)
sed -i 's/\[NOMBRE\]/Miriel/g' index.html
sed -i 's/\[APELLIDO\]/González/g' index.html
sed -i 's/\[TELEFONO\]/56912345678/g' index.html
sed -i 's/\[EMAIL\]/miriel@ejemplo.cl/g' index.html
sed -i 's/\[N\]/M/g' index.html
```

> **Importante sobre el teléfono en WhatsApp:** El formato del enlace de WhatsApp es `https://wa.me/NUMERO` donde el número debe incluir el código de país **sin el símbolo `+`** y sin espacios ni guiones. Por ejemplo, para Chile `+56 9 1234 5678` se escribe como `56912345678`.

---

## Agregar foto profesional

1. Coloca el archivo de imagen en el directorio raíz del proyecto (junto a `index.html`). Se recomienda formato `.webp` o `.jpg` con un ancho mínimo de 600 px y proporción cuadrada o vertical.

2. En `index.html`, localiza el bloque de placeholder de foto (busca el comentario `<!-- Placeholder foto profesional -->`):

```html
<!-- ANTES: placeholder circular con inicial -->
<div class="w-64 h-64 md:w-80 md:h-80 rounded-full bg-blue-100 border-4 border-blue-200 flex items-center justify-center shadow-lg"
  role="img" aria-label="Foto de [NOMBRE] [APELLIDO], Terapeuta Ocupacional">
  <span class="text-8xl font-bold text-primary select-none" aria-hidden="true">[N]</span>
</div>
```

3. Reemplázalo por una etiqueta `<img>` con el mismo tamaño y estilo redondeado:

```html
<!-- DESPUÉS: foto real -->
<img
  src="foto.jpg"
  alt="[NOMBRE] [APELLIDO], Terapeuta Ocupacional, sonriendo"
  class="w-64 h-64 md:w-80 md:h-80 rounded-full border-4 border-blue-200 shadow-lg object-cover object-top"
  width="320"
  height="320"
  loading="eager"
>
```

> **Sobre el atributo `alt`:** Describe brevemente qué muestra la foto. Un lector de pantalla lo leerá en voz alta. No escribas "foto de" ni "imagen de" porque el navegador ya anuncia que es una imagen.

---

## Agregar links de redes sociales

En `index.html`, dentro del `<footer>`, cada red social tiene un enlace con `href="#"` como placeholder. Reemplaza el `#` por la URL real de cada perfil:

```html
<!-- Instagram -->
<a href="https://www.instagram.com/USUARIO_AQUI" ...>

<!-- Facebook -->
<a href="https://www.facebook.com/USUARIO_AQUI" ...>

<!-- LinkedIn -->
<a href="https://www.linkedin.com/in/USUARIO_AQUI" ...>
```

El enlace de WhatsApp en el footer ya apunta al mismo número configurado con el placeholder `[TELEFONO]`, por lo que se actualiza automáticamente al reemplazar ese valor.

Si alguna red social no aplica, elimina el bloque `<li>` completo correspondiente en el footer.

---

## Funciones de accesibilidad

### Control de tamaño de fuente

Los botones **A-** y **A+** en la barra de navegación modifican la propiedad `font-size` del elemento `<html>`. Dado que todos los tamaños de Tailwind usan unidades `rem` (relativas al `html`), el escalado es uniforme en toda la página sin romper el diseño.

| Nivel | `font-size` en `<html>` | Equivalente |
|-------|------------------------|-------------|
| 0 (base) | `100%`            | 16 px       |
| 1        | `120%`            | 19.2 px     |
| 2 (máx)  | `140%`            | 22.4 px     |

- El botón **A-** se deshabilita automáticamente al llegar al nivel mínimo (0).
- El botón **A+** se deshabilita automáticamente al llegar al nivel máximo (2).
- El cambio es inmediato y no requiere recargar la página.

### Modo de alto contraste

El botón del ícono de contraste (☯) en la barra de navegación inyecta la clase `.high-contrast` en el `<body>`. Esta clase aplica en `style.css` un esquema de colores de alta visibilidad:

- **Fondo**: negro (`#000`)
- **Texto general**: blanco (`#fff`)
- **Elementos interactivos** (botones, enlaces): amarillo (`#ffff00`)
- **Foco visible**: outline amarillo de 3 px
- **Gradientes**: eliminados, reemplazados por fondo negro plano
- **Imágenes**: desaturadas y con mayor contraste

El botón actualiza su atributo `aria-pressed` para comunicar el estado a tecnologías asistivas.

### Navegación por teclado

Todos los elementos interactivos son focusables con `Tab` en orden lógico de lectura:

1. Logo / nombre en el header
2. Botones A-, A+, contraste
3. Botón hamburguesa (solo en mobile)
4. Links del menú (desktop o mobile)
5. Botón de WhatsApp en Hero
6. Botón de WhatsApp en sección de Contacto
7. Link de email en sección de Contacto
8. Íconos de redes sociales en el footer

Cada elemento interactivo tiene un `aria-label` descriptivo para lectores de pantalla, y un `focus:ring` visible de color azul primario (o amarillo en modo alto contraste).

---

## Despliegue en GitHub Pages

1. **Crear el repositorio en GitHub** (si no existe aún):
   - Ir a [github.com/new](https://github.com/new)
   - Nombre sugerido: `terapeuta-ocupacional` o similar
   - Tipo: Público (requerido para GitHub Pages gratuito)
   - Sin inicializar con README (ya tenemos los archivos)

2. **Subir los archivos al repositorio:**

```bash
git init
git add index.html style.css app.js README.md
git commit -m "Lanzamiento inicial del sitio web"
git branch -M main
git remote add origin https://github.com/USUARIO/REPOSITORIO.git
git push -u origin main
```

3. **Activar GitHub Pages:**
   - Ir al repositorio en GitHub
   - Clic en **Settings** (ícono de engranaje)
   - En el menú lateral, clic en **Pages**
   - En *Source*, seleccionar **Deploy from a branch**
   - Branch: `main` / Folder: `/ (root)`
   - Clic en **Save**

4. **Esperar el despliegue** (1-3 minutos). La URL pública quedará en formato:
   ```
   https://USUARIO.github.io/REPOSITORIO/
   ```

5. **Para actualizaciones futuras**, basta con hacer `git push` a `main` y GitHub Pages se actualiza automáticamente en 1-2 minutos.

> **Dominio personalizado (opcional):** Si la profesional tiene un dominio propio (ej: `mirielto.cl`), se puede configurar en la misma sección *Settings > Pages > Custom domain*. Requiere agregar registros DNS en el proveedor del dominio siguiendo la [guía oficial de GitHub](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site).

---

## Stack tecnológico

| Tecnología       | Versión / Fuente       | Propósito                                           |
|------------------|------------------------|-----------------------------------------------------|
| HTML5            | Nativo                 | Estructura y semántica de la página                 |
| Tailwind CSS     | CDN (Play CDN / JIT)   | Utilidades de estilo responsive                     |
| CSS3             | Nativo (`style.css`)   | Alto contraste, scroll suave, estados de botones    |
| JavaScript ES6+  | Nativo (`app.js`)      | Accesibilidad interactiva, menú mobile              |
| Inter (Google Fonts) | CDN              | Tipografía principal legible y accesible            |
| GitHub Pages     | Gratuito               | Alojamiento y entrega del sitio                     |

**Sin bundlers. Sin frameworks JS. Sin npm. Sin build step.**

---

## Checklist antes del lanzamiento

- [ ] Reemplazar `[NOMBRE]` en todo `index.html`
- [ ] Reemplazar `[APELLIDO]` en todo `index.html`
- [ ] Reemplazar `[TELEFONO]` con el número real (sin `+`, con código de país)
- [ ] Reemplazar `[EMAIL]` con el correo real
- [ ] Reemplazar `[N]` con la inicial correcta (o agregar la foto real)
- [ ] Agregar foto profesional (opcional pero recomendado)
- [ ] Agregar URLs reales a Instagram, Facebook y LinkedIn en el footer
- [ ] Verificar el enlace de WhatsApp en un celular real
- [ ] Probar navegación por teclado (Tab entre todos los elementos)
- [ ] Probar modo alto contraste (activar y desactivar)
- [ ] Probar zoom de texto (A- y A+ hasta los límites)
- [ ] Probar en pantalla de smartphone (Chrome DevTools o dispositivo real)
- [ ] Actualizar el año en el copyright del footer si corresponde
- [ ] Subir a GitHub Pages y verificar la URL pública
