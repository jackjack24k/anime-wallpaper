const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

app.use('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'index.html'));
    console.log('Request received');
});
//port
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});