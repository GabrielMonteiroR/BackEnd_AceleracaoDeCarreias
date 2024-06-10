import express from "express";

const app = express();
const port = 3000;

app.use(express.json())

app.listen(port, () => {
    console.log(`API rodando na porta ${port}`)
});


app.get('/', (req, res) => {
    res.send("Hello world!");
});

app.get('/autores', (require, response) => {
    response.json('TESTING AUTORES JSON')
})




