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


routes.post('/autores', (req, res) => {
    const autor = req.body;
    maxId++;
    autor.id = maxId;
    autores.push(autor)
    res.json(autor)
});

routes.delete("/autores/:id", (req, res) => {
    const id = parseInt(req.params.id);
    
    if (id < 0 || id >= autores.length) {
        return res.status(404).json({ message: "Not Found" });
    }
    
    const index = autores.findIndex(a => a.id === id);
    
    autores.splice(index, 1);
    
    res.status(204).send();
});


routes.get("/autores/:id", (req, res) => {
    const id = parseInt(req.params.id);
    if (id > autores.length || id < 0) res.status(404).json({ message: "Not Found" })
    res.json(autores.find(a => a.id === id))
})

let maxId = 5;

routes.get("/autores/name/:name", (req, res) => {
    const name = req.params.name;

    const finded = autores.filter((item) => item.name.includes(name))

    if (finded.length > 0) res.status(200).json(finded)
    else res.status(404).json({ message: "Not found" })
})

routes.post("/autores/filter-by-name", (req, res) => {
    const name = req.body.name;

    const finded = autores.filter((item) => item.name.includes(name))

    if (finded.length > 0) res.status(200).json(finded)
    else res.status(404).json({ message: "Not found" })
})


export default routes;
