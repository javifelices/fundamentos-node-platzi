/*
Desarrollo
Nodemon. Demons en linux, puedes tener procesos que ves ejecutandose
nodemon + archivo al que quiero acceder detecta cambios, y ejecuta automaticamente el código.

npm i -g nodemon

En caso de no hacerlo de forma global, tenemos dos opciones, y luego se configura el package.json agregando tu script de start:

como depedencia de desarrollo
npm i -D nodemon
"scripts": {
    "start": "nodemon ./server.js"
}

usando npx
"scripts": {
    "start": "npx nodemon app.js"
}

Otra opción es usar
npx nodemon conceptos/node01-monohilo.js

Producción

https://pm2.keymetrics.io/

PM2 Es un demonio administrador de procesos que me puede ayudar a administrar y mantener mi aplicación 24/7.

npm i -g pm2

npm i -D pm2

- Monitorizar el código para saber si algo se rompe.
- Ver dashboards del código, ver que se está ejecutando
- Analizar el rendimiento de la máquina

Algunos comandos de pm2:

pm2 start entorno.js // Iniciar
pm2 status // Para verificar el id, name, mode, status, cpu, memory...
pm2 logs // Vemos lo que esta ocurriendo con el proceso.
pm2 stop id //Detener el proceso con ese ID

Algunos scripts en el package.json

"scripts": {
    "nodemon-start": "nodemon conceptos/monohilo.js",
    "pm2-start": "pm2 start conceptos/monohilo.js",
    "pm2-stop": "pm2 stop conceptos/monohilo.js",
    "pm2-log": "pm2 log",
    "pm2-status": "pm2 status"
},

*/
