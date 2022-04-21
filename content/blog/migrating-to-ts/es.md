---
title: Migrando mi portafolio a TypeScript
date: "2022-04-21"
description: "El proceso de migración de Javascript a Typescript de mi portafolio paso a paso"
categories: "gatsby, typescript, javascript, blog, tutorial, portafolio"
locale: es
featuredImage: templates.png
draft: true
---

> Empiezo hoy, pero no sé cuando terminaré.

<p align="right"><strong>Massick</strong></p>

# Las razones

Este portafolio va de lo que, en mi rol de desarrollador, soy capaz de crear, así que definitivamente voy a pasar de JS a TS para mejorar mis habilidades con el lenguaje y de paso mejorar también la experiencia mientras trabajo. Y es que trabajar con **Typescript** es lo máximo, _al menos cuando ya he corregido todos los problemas y voy a crear algo nuevo_.

Ya esto lo hice antes con [mi generador de currículos](https://github.com/M4ss1ck/gatsby-cv-maker) y me fue bien, además, **Typescript** es una habilidad que, como desarrollador web, conviene aprender. La diferencia es que aquí son muchos más archivos y debe ser mucho más complejo 🚶‍♂️

# Antes

Los archivos que debo convertir de JS a TS son:

- Los componentes de `src/components`.

![componentes de react](components.png)

- Las diferentes rutas del sitio en `src/pages`.

![Páginas de mi portafolio](pages.png)

- Plantillas para las publicaciones del blog y las categorías en `src/templates`.

![Plantilla para las publicaciones del blog y las categorías](templates.png)

En cuanto a los archivos de configuración específicos de gatsby (`gatsby-*.js`), de momento los dejaré como están.

# Primeros pasos

Lo primero es instalar los paquetes necesarios, en mi caso sería:

```bash
// npm
npm i -D @types/react-helmet @types/node @types/react @types/react-dom typescript
// yarn
yarn add -D @types/react-helmet @types/node @types/react @types/react-dom typescript
// pnpm
pnpm add -D @types/react-helmet @types/node @types/react @types/react-dom typescript
```

Y ahora toca lo bueno: cambiar las extensiones de `.js` a `.ts` o `.tsx` y solucionar problemas 😅

# Migrando

bla bla bla

# Resultados

![Resultados de la migración]()
