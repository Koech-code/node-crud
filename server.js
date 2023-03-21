const express =  require('express')
const http = require('http');
const app = express()

const port = process.env.port || 3000

// routes
app.get('/', (req, res)=>{
    res.send('Hello Node')
})
app.listen(port, ()=>{
    console.log('Hello Nick')
})
// const server = http.createServer(app);

// server.listen(port)


