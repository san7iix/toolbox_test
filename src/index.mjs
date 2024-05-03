import { app } from './infraestructure/server.mjs'

const port = process.env.PORT || 8000

app.listen(port, () => {
  console.log(`⚡️[server]: El servidor está corriendo en http://localhost:${port}`)
})
