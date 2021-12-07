const express = require('express');

const app = express();

app.use(express.static('public'));

app.get('*', (req, res) => {
    res.sendFile(__dirname+'/index.html');
})

app.listen(3000, _ => {
    console.log('Server running on port 3000')
})