const express = require("express");
const app = express();

const PORT = 3000;

// Permite usar arquivos estáticos (HTML, CSS, JS)
app.use(express.static("src"));

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});