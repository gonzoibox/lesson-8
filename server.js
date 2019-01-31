const http = require('http')
const port = 3001
const server = http.createServer((req, res) => {
  res.writeHead(200, 'ok', 
  {'Content-Type': 'text/html',
  'Cache-Control': 'no-cache'}
  )
  console.log(`Server running`)
  res.write('<span>123</span>')
  res.end()
})

server.listen(port);