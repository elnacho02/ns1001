var fs  = require("fs")
var http  = require("http")



// Escribí acá tu servidor
function readFile(fileName) {
  return new Promise((resolve, reject) => {
    fs.readFile('./images/' + fileName, (err, data) => {
      if(err) reject({
        data: '<h1>No encontrada</h1>',
        contentType: 'text/html',
        status: 404
      })
      else resolve({
        data,
        contentType: 'image/jpg',
        status: 200
      })
    })
  })
}

http.createServer((req, res) => {
  readFile(req.url.split('/', 2).pop())
    .then((img) => {
      res.writeHead(img.status, { 'Content-Type': img.contentType })
      return res.end(img.data)
    })
    .catch((err) => {
      res.writeHead(err.status, { 'Content-Type': err.contentType })
      return res.end(err.data)
    })
}).listen(1337, '127.0.0.1')