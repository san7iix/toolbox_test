import { app } from "./infraestructure/server.js";

const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log(`⚡️[server]: El servidor está corriendo en http://localhost:${port}`);
});