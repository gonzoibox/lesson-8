const express = require('express');
const app = express();
app.listen(3000);
console.log('The server is listenning on port 3000...');
// app.all('*', (req, res) => {
//     console.log('The server is listenning on port 3000...');
// });

app.get('/', (req, res)=>{
    res.send('Welcome to GET homepage!');
});

app.post('/', (req, res)=>{
    res.send('Welcome to POST homepage!');
});

app.put('/', (req, res)=>{
    res.send('Welcome to PUT homepage!');
});

app.get('/', (req, res)=>{
    res.send('Welcome to DELETE homepage!');
});