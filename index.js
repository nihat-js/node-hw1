const { log } = require('console')
const http = require('http')
const { loadPortNumber } = require('./utils/loadPortNumber')

let obj = {
  "message": "Request handled successfully",
  requestCount: 1
}
let PORT = loadPortNumber() || 3000

loadPortNumber()



http.createServer((req, res) => {
  if (req.url == "/") {
    res.writeHead(200, {
      'Content-Type': "application/json"
    })
    res.end(JSON.stringify(obj))
    obj.requestCount++
  }
}).listen(PORT, () => {
  console.log(`Server Restarted at ${PORT} `)
})