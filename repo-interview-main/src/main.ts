import "dotenv/config";
import { createApp } from "./app";

const PORT = Number(process.env.PORT ?? 3002);

const app = createApp();

app.listen(PORT, () => {
  console.log(`Servidor Iniciado`);
  console.log(`Host: http://localhost:${PORT}`);
  console.log(`Fecha/Hora: ${new Date().toLocaleString()}`);
});
