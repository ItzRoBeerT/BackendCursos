const express = require("express");
require("./db/mongoose");
const usuarioRouter = require("./routers/usuario");
const cursoRouter = require("./routers/curso");

const app = express();
const port = 3000;

app.use(express.json());
app.use(usuarioRouter);
app.use(cursoRouter);

app.listen(port, () => {
  console.log("Servidor escuchando en el puerto " + port);
});
