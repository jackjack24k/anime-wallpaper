const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

const replicaImage = process.env.APP_NAME

app.use('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'index.html'));
    console.log(`Request received by ${replicaImage}`);
});
//port
app.listen(port,()=>{
    console.log(`${replicaImage} Server is running on port ${port}`);
});