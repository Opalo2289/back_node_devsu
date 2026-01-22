const serverless = require("serverless-http");

// Necesario para routing-controllers (decorators/metadata)
require("reflect-metadata");
require("dotenv/config");
// routing-controllers carga 'cors' con require dinámico cuando cors: true.
// Netlify (esbuild) puede no incluirlo si no se requiere de forma estática.
require("cors");

// Importa el Express app compilado por TypeScript (tsc -> dist/)
// Ruta: netlify/functions/api.js -> ../../dist/app.js
const { createApp } = require("../../dist/app");

const app = createApp();

// Netlify invoca la function con el prefijo "/.netlify/functions/<name>"
// Esto hace que Express reciba la ruta real (por ejemplo "/bp/productos")
const handler = serverless(app, { basePath: "/.netlify/functions/api" });

exports.handler = async (event, context) => handler(event, context);

