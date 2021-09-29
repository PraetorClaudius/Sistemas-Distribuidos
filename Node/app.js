var express = require('express');
var app = express();
var bodyParser = require('body-parser');

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  };


app.get("/", async function (req, res) {
    let r = {'dato': 1,'valor': 'Nio'};
    res.json(r);
});

app.get("/ruta1", async function (req, res) {
    let r = {'dato': 1,'valor': 'Nio'};
    res.json(r);
});

app.put("/ruta2/:number", async function (req, res) {
    let r = getRandomInt(0, req.params.number);
    res.json(r);
});


app.get("/ruta2", async function (req, res) {
    let r = {};
    res.json(r);
});

app.put('/generasiguiente/:number', (req, res) => {
    let r = {'dato': req.params.number};
    res.json(r);
});

app.get("/ruta3", async function (req, res) {
    let r = {};
    res.json(r);
});

app.get("/ruta4", async function (req, res) {
    let r = {};
    res.json(r);
});

app.get("/ruta5/subruta/todos/xd", async function (req, res) {
    let r = {};
    res.json(r);
});

app.post("/ruta5/subruta/todosss", async function (req, res) {
    let r = { 
    texto: req.query.texto,
    datos: {
    nombre: req.query.nombre,
    edad: req.query.edad}
    };
    res.json(r);
});

var bodyParser = require('body-parser')

app.use(bodyParser.urlencoded())
app.use(bodyParser.json())

app.post('/ruta5/subruta/todos', (req, res) => {
  const data = req.body
  console.log(data)
  return res.json({
    data
  })
});

app.get("/ruta6/crear", async function (req, res) {
    let r = {};
    res.json(r);
});

app.get("/ruta7/echo", async function (req, res) {
    let r = { texto: req.query.texto, nombre: req.query.nombre, proyecto:req.query.proyecto};
    res.json(r);
});

app.listen(3000, function() {
    console.log('Aplicación ejemplo, escuchando el puerto 3000!');
});