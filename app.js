const express = require('express');
const app = express();
const bp = require('body-parser');
const adminroutes = require('./routes/admin')
const homeroutes = require('./routes/home')
//const http = require('http');

// const server = http.createServer(app);
// server.listen(8000);
app.use(bp.urlencoded());

app.use('/admin',adminroutes);
app.use('/home',homeroutes);
app.use((req,res,next)=>{
    res.status(404).send("<h1>404, Not Found!!<//h1>")
})
//app.use(homeroutes)
app.listen(8000);




