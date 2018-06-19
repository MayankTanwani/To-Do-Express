const  express = require('express')
const fs = require('fs')

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/',express.static(__dirname + '/public'))
app.get('/json', readFile)
app.post('/json',postFile)
function readFile(req,res) {
    fs.readFile('./todolist.txt','utf8',function (err,data) {
            if(err) throw err;
            console.log(data)
            res.send(data)
        })
}
function postFile(req,res) {
    fs.writeFile('./todolist.txt',req.body["arr"],function (err) {
        console.log('Complete')
    })
}
app.set('port',process.env.PORT || 4000)
app.listen(app.get('port'),function () {
    console.log('Server started on http://localhost:2323/')
})