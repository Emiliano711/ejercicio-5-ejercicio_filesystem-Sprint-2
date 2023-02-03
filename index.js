const fs = require("fs");
const http = require("http");
const format = require("date-fns/format");
const spanishLocale = require("date-fns/locale/es");

const server = http.createServer((req, res) => {
  fs.appendFile("access_log.txt", "date", (err) => {
    if (err) throw err; // si el mensaje es error tiro error en pantalla
  });
  const date = format(
    new Date(),
    "'Se llamo al servidor el dia' d 'de' MMM 'de y a las' HH:mm:ss EEEE'.' ",
    {
      locale: spanishLocale,
    }
  );
  console.log(date);
  res.end("Hola Mundo");
});

server.listen(8000, () => {
  console.log("Servidor escuchando en http://localhost:8080");
});

console.log(__dirname);
