import express from "express";

const routes = express.Router();

const autores = [
    { id: 1, name: "Diogenes de sinope" },
    { id: 2, name: "Niccolo Machiavelli" },
    { id: 3, name: "Sun Tzu" },
    { id: 4, name: "Winston Churchill" },

]

routes.get('/', (req, res) => {
    res.send("Hello world");
});

routes.get('/autores', (req, res) => {
    res.json(autores);
});

routes.get("/autores/:id", (req, res) => {
    const id = parseInt(req.params.id);
    if (id > autores.length || id < 0) res.status(404).json({ message: "Not Found" })
    res.json(autores.find(a => a.id === id))
})

export default routes;
