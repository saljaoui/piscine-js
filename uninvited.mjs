
import http from 'http'
const PORT = 5000
const server = http.createServer(async (req, res) => {
    res.statusCode = 201
    res.setHeader('Content-Type', 'application/json')
    // console.log(req.url)
    // console.log(req.method)
    // console.log(req.headers['content-type'])
    let body = ''
    req.on('data', chunk => {
        body += chunk.toString()
    })
    
    req.on('end', async () => {
         try {
            const jsonBody = JSON.parse(body)
            await writeFile(`guests${req.url}.json`, JSON.stringify(jsonBody))
            res.end(jsonBody)
        } catch(err) {
            res.statusCode = 500
            res.end(JSON.stringify({ error: "server failed" }))
        }  
    })
})

server.listen(PORT ,() => {
    console.log(`Server is listening on port ${PORT}`)
})