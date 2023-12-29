const express = require('express');
const format = require('date-format')
const app = express();
const PORT = 4000 || process.env.PORT;

app.get('/' , (req , res) => {
    res.status(200).send("<h1>Hello from Node</h1>");
});

app.get('/api/v1/instagram', (req , res) => {
    const instaSocial = {
        userName : "Mouli33",
        followers : 429,
        follows : 319,
        date : format.asString('dd-MM-yyyy - hh:mm:ss', new Date()),
      };
    res.status(200).json(instaSocial)
});


app.get('/api/v1/facebook', (req , res) => {
    const instaSocial = {
        userName : "Mouli Daran",
        followers : 809,
        follows : 600,
         date : format.asString('dd-MM-yyyy - hh:mm:ss', new Date()),
    };
    res.status(200).json(instaSocial);
});

app.get('/api/v1/linkedin', (req, res) => {
    const instaSocial = {
        userName : "MouliDaran",
        followers : 18,
        follows : 18,
        date : format.asString('dd-MM-yyyy - hh:mm:ss', new Date()),
    };
    res.status(200).json(instaSocial);
})

app.get('/api/v1/:urlName' , (req , res) => {
    // console.log(req.params.urlName);
    res.status(200).json({url : req.params.urlName})
});

app.listen(PORT , () => {
    console.log(`Server is starting at ${PORT}`);
});