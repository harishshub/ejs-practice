const express = require('express');
const app = express();
const bp = require('body-parser');
const path = require('path')
const adminroutes = require('./routes/admin')
const homeroutes = require('./routes/home')
const root = require('./utils/path')
//const http = require('http');

// const server = http.createServer(app);
// server.listen(8000);
app.use(bp.urlencoded());
app.use(express.static(path.join(__dirname,'public')))
app.use('/admin',adminroutes);
app.use('/home',homeroutes);
app.use((req,res,next)=>{
    res.status(404).sendFile(path.join(root,'views','html','404.html'));
})
//app.use(homeroutes)
app.listen(3000);




