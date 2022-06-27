const express = require('express');

const app = express();

app.get('/', (req, res) =>{
    res.send("CRUD Application"); 
})

app.listen(3000, ()=>{
    console.log("Server is running on Port 3000");
})