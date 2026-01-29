# Informe Multimedia: IMA STUDIO
## Ismael Franco Ruiz y Mario Crespo 2ºDAW

## 1. Introducción
Este documento detalla el proceso de creación e integración de contenidos multimedia para la empresa ficticia "IMA STUDIO", dedicada al diseño web y marketing digital.

## 2. Identidad Corporativa e Imágenes
Se ha generado un banco de imágenes coherente con la identidad de la empresa, que busca transmitir profesionalidad, innovación y trabajo en equipo.

### Herramientas Utilizadas
- **Generación de Imágenes**: Se han utilizado herramientas de IA (simuladas en este ejercicio mediante los archivos proporcionados) para crear un logotipo moderno y escenas de oficina realistas.
- **Edición**: Se han renombrado y organizado los archivos para una estructura web lógica.

### Selección de Imágenes
- **Logo (`logo.png`)**: Diseño minimalista con colores naranja y gris, representando creatividad y solidez.
- **Oficina y Equipo (`oficina.png`, `equipo.png`, `reunion.png`)**: Imágenes que muestran un entorno de trabajo moderno y colaborativo.
- **Servicios (`servicios.png`)**: Gráficos vectoriales/planos para ilustrar las áreas de negocio.

## 3. Vídeo Corporativo
Se ha incluido un vídeo promocional que presenta la misión de la empresa.

### Proceso de Creación
- **Herramienta**: Debido a limitaciones técnicas en el entorno de desarrollo (ausencia de `ffmpeg`), se ha optado por utilizar un vídeo de stock de alta calidad (Big Buck Bunny sample) como *placeholder* funcional para demostrar la integración técnica en HTML5.
- **Integración**: El vídeo se sirve en formato MP4, compatible con todos los navegadores modernos.

## 4. Integración Web
La integración se ha realizado utilizando un diseño de **Grid Layout** (`css/styles.css`), organizando el contenido en tarjetas (`cards`).

### Detalles Técnicos
- **Grid Responsivo**: El contenedor principal utiliza `display: grid` y adapta el número de columnas (4, 2, o 1) mediante *Media Queries* según la anchura de la pantalla.
- **Imágenes `<picture>`**: Se han definido explícitamente las fuentes de imagen para distintos puntos de ruptura (`max-width: 734px`, `1068px`, `1440px`) y densidades de píxeles (`1x`, `2x`), asegurando la máxima nitidez y rendimiento.
- **Vídeo Adaptativo**: El vídeo se integra en una tarjeta de doble ancho, con fuentes seleccionables por CSS (`media`) y configurables por el usuario (Plyr).
- **Lightbox Interactivo**: Se ha implementado un script JS y estilos CSS para que, al hacer clic en las imágenes, estas se abran en una ventana modal (Lightbox) mostrando la imagen ampliada junto a su título y descripción, mejorando la interactividad.
- **Vídeo HTML5 con Plyr**: Se ha integrado la librería **Plyr** gestionando 4 vídeos diferentes:
  - `video_corporativo_large.mp4`: Presentación (Alta Calidad).
  - `video_corporativo.mp4`: Spot Promocional (Estándar).
  - `video_corporativo_small.mp4`: Contenido RRSS (Ligero).
  - `video_marketing_extra.mp4`: Nuevo spot de campaña viral.
  - El usuario puede reproducir cualquiera de los 4 contenidos de forma independiente.
- **Estilos**: Diseño limpio y profesional mantenido con CSS.

## 5. Conclusión
El resultado es una página web visualmente impactante y altamente optimizada, que cumple con los requisitos estéticos y técnicos de la práctica.

## Ismael Franco Ruiz y Mario Crespo 2ºDAW
