import { createExpressServer } from "routing-controllers";

export function createApp() {
  // Crea express app y registra controladores (routing-controllers)
  return createExpressServer({
    cors: true,
    routePrefix: "/bp",
    controllers: [__dirname + "/controllers/*{.js,.ts}"],
  });
}

