# Backend test Toolbox

Este proyecto es una solución backend a la prueba técnica fullstack de Toolbox. A continuación se detallan los pasos para correr el proyecto y ejecutar sus test

## Requisitos

- Node.js 14
- npm
- Docker

## Instalación

1. Clona este repositorio en tu máquina local.
2. Navega hasta la carpeta del proyecto: `cd toolbox_test`.
3. Ejecuta el siguiente comando para instalar las dependencias:

   ```shell
   npm install
   ```

## Ejecución

Una vez dentro de la carpeta del proyecto, para ejecutar el proyecto, utiliza el siguiente comando:

    npm start

## Docker

Para crear el contenedor de la aplicación y correrla deberá ejecutar la siguiente seria comandos:


   ```shell
docker build -t toolbox-backend .
docker run -p 8000:8000 toolbox-backend
   ```

#### Nota: Asegurate de tener el puerto 8000 disponible en tu máquina local.

Si deseas hacer peticiones a la API, ingresa a través de la URL http://localhost:8000/

## Endpoints

### GET /files/data

Este endpoint devuelve un archivo JSON con la información solicitada en la prueba técnica.

### GET /files/data?fileName=fileName

Este endpoint devuelve un archivo JSON con la información solicitada en la prueba técnica, filtrando por el nombre del archivo.

### GET /files/list

Este endpoint devuelve un archivo JSON con la lista de archivos.

## Test
Para ejecutar los test, utiliza el siguiente comando:

    npm test