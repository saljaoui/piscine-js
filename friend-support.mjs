import http from 'http'
import { readFile } from 'fs/promises'

const PORT = 5000

const server = http.createServer(async (req, res) => {
  res.statusCode = 200
  res.setHeader('Content-Type', 'application/json')

  try {
    let path = "guests" + req.url + ".json"
    let content = await readFile(path, "utf-8")
    res.end(content)
  } catch (err) {
    if (err.code === 'ENOENT') {
      res.statusCode = 404
      res.end(JSON.stringify({ error: 'guest not found' }))
    } else {
      res.statusCode = 500
      res.end(JSON.stringify({ error: 'server failed' }))
    }
  }
})

server.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})
