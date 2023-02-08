

var app = require('express')()
var http = require("http").Server(app)
var io = require("socket.io")(http)
const port = 5000

app.get("/",(req,res)=>{
    res.sendFile(__dirname + '/interface.html')
})

io.on('connection',(socket)=>{
    console.log('A user connected')

    socket.on('disconnect',()=>{
        console.log("A user is disconnect")
    })

    socket.on('chat message',(msg)=>{
        console.log("A message reçu : " + msg)
        io.emit('chat message',msg)
    })

})

http.listen(port,()=>{
    console.log(`Server running on, ${port}`)
})