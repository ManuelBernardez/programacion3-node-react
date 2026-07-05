# Actividad Programación III - Introducción a Node.js y React

Aplicación desarrollada con **React** y **Vite** como parte de la actividad de introducción a **Node.js** y React.

## Cómo ejecutar el proyecto
1. Ejecutar en dentro del directorio `...\app-react`:

```bash
npm install
npm run dev
```

2. Abrir la dirección que se indica en la terminal (`http://localhost:5173`)

## Respuestas

### ¿Para qué sirve el archivo `package.json`?

`package.json` es el archivo que define la configuración del proyecto. Contiene información como el nombre del proyecto, los scripts que se pueden ejecutar (como `dev` o `build`) y las dependencias necesarias junto con sus versiones.

Gracias a este archivo, cualquier persona puede instalar todo lo necesario con `npm install` sin tener que incluir la carpeta `node_modules` en el repositorio.

### ¿Qué diferencia notaron entre ejecutar un archivo directamente con Node.js y levantar un proyecto de React?

Al ejecutar un archivo con `node app.js`: Node interpreta el código, lo ejecuta y el proceso finaliza cuando termina la ejecución.

En cambio, al ejecutar `npm run dev`, se inicia un servidor de desarrollo que permanece activo, muestra la aplicación en el navegador y actualiza los cambios automáticamente mediante **Hot Module Replacement (HMR)**, sin necesidad de recargar la página manualmente.
