Aquí tienes el **Documento de Plan de Implementación Completo y Autocontenido** para el sitio web de la terapeuta ocupacional. Este documento reúne todos los acuerdos, el contexto, la arquitectura técnica y el plan de trabajo en un solo lugar.

---

# Plan de Implementación de Proyecto Web

## Sitio Web Profesional: "Terapeuta Ocupacional [NOMBRE] [APELLIDO]"

---

## 1. Introducción y Propósito del Proyecto

El propósito de este proyecto es el diseño, desarrollo y despliegue de un sitio web estático de una sola página (*One Page*) para promocionar los servicios de la terapeuta ocupacional **[NOMBRE] [APELLIDO]**.

El sitio web funcionará como su carta de presentación digital y principal canal de captación de pacientes/clientes. Está diseñado para centralizar toda la información profesional en un formato moderno, intuitivo, de rápida carga y con un enfoque prioritario en la **accesibilidad universal**, permitiendo que personas con distintas capacidades visuales o motoras interactúen con el contenido sin barreras.

### Objetivos Clave:

* **Visibilidad Profesional:** Posicionar los más de 4 años de experiencia de la profesional y sus áreas de especialización.
* **Conversión Directa:** Facilitar que los usuarios agenden una sesión o realicen consultas de forma fluida a través de un canal directo.
* **Inclusividad:** Ofrecer herramientas nativas de accesibilidad (alto contraste y control de tamaño de fuente) en sintonía con los valores de la terapia ocupacional.

---

## 2. Contexto y Definiciones de Negocio

### Público Objetivo (Audiencia)

El servicio está diversificado en cuatro pilares fundamentales:

1. **Niños (Pediatría):** Enfocado en el desarrollo infantil y dificultades del procesamiento sensorial.
2. **Adulto Mayor:** Orientado a mantener la autonomía, movilidad y seguridad en las actividades de la vida diaria.
3. **Escuelas / Instituciones Educativas:** Asesorías para la inclusión escolar y adaptaciones curriculares o ambientales.
4. **Ergonomía Laboral / Empresas:** Evaluaciones de puestos de trabajo y prevención de lesiones asociadas a la carga laboral.

### Propuesta de Valor y Diferenciadores

* **Atención a domicilio:** Intervención directa en el entorno real del usuario (hogar, comunidad).
* **Enfoque centrado en la familia:** Inclusión activa de los cuidadores y el núcleo familiar en el proceso terapéutico.
* **Especialización en Integración Sensorial:** Herramientas técnicas específicas para el abordaje infantil.
* **Experiencia:** Trayectoria consolidada de más de 4 años en el sector.

### Llamado a la Acción (CTA Principal)

El éxito del sitio se medirá por los clics en el botón de **Agendamiento vía WhatsApp**.
El sitio web no contará con un sistema complejo de reservas interno; en su lugar, utilizará un enlace dinámico que abrirá directamente una conversación de WhatsApp con un mensaje pre-configurado para iniciar el contacto de manera inmediata.

---

## 3. Arquitectura Técnica y Stack Tecnológico

Para garantizar la velocidad de carga, un costo de mantención cero y facilidad de actualización, se optó por un enfoque de desarrollo estático puro, sin herramientas de compilación o empaquetadores (*Buildless*).

* **Estructura de Archivos:** El proyecto consta únicamente de 3 archivos en el directorio raíz:
* `index.html`: Contiene la estructura semántica de la página y los textos.
* `styles.css`: Define estilos personalizados, animaciones básicas y las reglas del Modo de Alto Contraste.
* `app.js`: Maneja la lógica de los controles de accesibilidad y la interactividad.


* **Estilos y Framework:** **Tailwind CSS**, cargado directamente a través de su CDN oficial en el `<head>` del documento.
* **Interactividad:** **Vanilla JavaScript** (JS nativo), asegurando que no haya dependencias pesadas de terceros.
* **Alojamiento (Hosting):** **GitHub Pages**, aprovechando que es una solución gratuita, segura y óptima para sitios web estáticos.

---

## 4. Estructura de Contenido y Storytelling (*One Page*)

La página se organizará de forma vertical, guiando al usuario a través de una narrativa lógica pensada para generar confianza y fomentar la acción:

1. **Barra de Navegación (Header):** Nombre de la profesional, menú de navegación anclado a secciones y el **Panel Flotante de Accesibilidad**.
2. **Sección Hero (Portada):**
* Titular de alto impacto destacando la terapia ocupacional a domicilio.
* Botón destacado (CTA) en verde WhatsApp: *"Agendar Evaluación Inicial"*.
* Imagen o placeholder profesional de [NOMBRE].


3. **Sección Sobre Mí:**
* Breve reseña biográfica enfatizando los +4 años de experiencia.
* Explicación del enfoque centrado en la familia y la comunidad.


4. **Sección de Servicios (Grid de 4 Columnas):**
* *Tarjeta 1:* Terapia Ocupacional Infantil (Integración Sensorial).
* *Tarjeta 2:* Autonomía en el Adulto Mayor.
* *Tarjeta 3:* Asesoría y Consultoría Escolar.
* *Tarjeta 4:* Ergonomía y Salud Laboral.


5. **Sección de Testimonios (Estrategia de Validación Social):**
* Se incluirán tres testimonios redactados de forma informal y natural, simulando la voz real de pacientes y clientes:
* *Testimonio Infantil:* *"Increíble la paciencia que le tiene a mi hijo. Desde que empezamos con las sesiones de integración sensorial en casa, hemos visto un cambio gigante en el colegio. Súper recomendada."*
* *Testimonio Adulto Mayor:* *"Excelente profesional. Vino a ver a mi papá a la casa y nos dio tips súper prácticos para adaptar el baño y la pieza. Muy cercana y preocupada de toda la familia."*
* *Testimonio Ergonomía:* *"Contratamos sus asesorías para evaluar los puestos de trabajo en la oficina. Explicó todo de forma muy lúdica y cercana, no la típica charla aburrida."*




6. **Pie de Página (Footer) y Contacto:** Datos de contacto rápidos, correo electrónico, redes profesionales y reiteración del botón de WhatsApp.

---

## 5. Estrategia de Accesibilidad Web (WCAG)

Como pilar fundamental para un sitio de terapia ocupacional, se implementarán de forma nativa las siguientes directrices:

* **Accesibilidad Semántica:** Uso riguroso de etiquetas HTML5 (`<main>`, `<section>`, `<nav>`, `<button>`) y atributos `alt` detallados en imágenes para lectores de pantalla.
* **Enlace de WhatsApp Dinámico:** Configurado mediante la sintaxis:
`[https://wa.me/NUMERO_TELEFONO?text=Hola%20](https://wa.me/NUMERO_TELEFONO?text=Hola%20)[NOMBRE],%20me%20gustaría%20solicitar%20información%20para%20agendar%20una%20hora.`
* **Controles de Fuente (Zoom de Texto):** Botones accesibles mediante teclado que modificarán la propiedad `font-size` base en el elemento `html` (ej: 100%, 120%, 140%), permitiendo agrandar o encoger los textos del sitio web de manera uniforme sin romper el diseño.
* **Modo de Alto Contraste:** Un botón interactivo que inyectará una clase global `.high-contrast` en el `<body>`. Esta clase anulará los colores de Tailwind utilizando CSS tradicional con directrices `!important` para transformar la interfaz a un esquema de colores de alta visibilidad (Fondo Negro, Textos Blancos/Amarillos).

---

## 6. Fases del Plan de Trabajo e Implementación

### Fase 1: Configuración del Repositorio y Archivos Base

* Creación del repositorio en GitHub.
* Inicialización de los archivos `index.html`, `styles.css` y `app.js`.
* Vinculación de la CDN de Tailwind CSS y fuentes tipográficas accesibles (ej: Sans-Serif legibles).

### Fase 2: Maquetación y Desarrollo del Contenido (HTML + CSS)

* Escritura del marcado HTML semántico completo utilizando los placeholders `NOMBRE` y `APELLIDO`.
* Estilizado con Tailwind CSS aplicando un diseño completamente adaptivo (*Responsive / Mobile-First*) garantizando una visualización óptima en smartphones y tablets.
* Implementación visual de las tarjetas de servicio y la sección de testimonios.

### Fase 3: Programación de la Interactividad y Accesibilidad (JS)

* Escritura de las funciones de cambio de tamaño de letra en `app.js`.
* Desarrollo de la lógica del conmutador (*toggle*) para el modo de alto contraste.
* Definición de las reglas de sobreescritura de color en `styles.css` para el alto contraste.

### Fase 4: Control de Calidad y Pruebas de Accesibilidad

* **Prueba de navegación por teclado:** Verificar que se puede interactuar con todos los botones (incluido WhatsApp y accesibilidad) usando la tecla `Tab` y `Enter`.
* **Prueba de responsividad:** Simular pantallas de dispositivos móviles de baja gama y alta gama.
* **Validación de links:** Comprobar que el enlace de WhatsApp abre la aplicación móvil o WhatsApp Web con el texto pre-armado correctamente codificado.

### Fase 5: Despliegue y Lanzamiento

* Subir los cambios finales a la rama principal de GitHub.
* Ir a *Settings > Pages* en el repositorio de GitHub.
* Configurar la fuente de despliegue desde la rama `main` / carpeta raíz.
* Monitorear la generación de la URL pública provista por GitHub (ej: `usuario.github.io/repositorio`).

---

Este plan constituye la hoja de ruta definitiva para el desarrollo. Al estar completamente autocontenido, puedes utilizarlo como guía técnica directa para comenzar la codificación de los archivos. Cuando lo requieras, podemos proceder a escribir el código fuente base listo para producción.