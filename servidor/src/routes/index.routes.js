const express = require ('express')
const router = express.Router()
const controller = require('../controllers/index.controller')

//get productos firebase

router.get('/getProductos', (req, res) => {
    controller.getProductos(req, res);
});
  

//añadir producto 
router.post('/addProducto', (req, res) => {
    controller.addProducto(req, res);
});


// Definimos la ruta para eliminar un producto por su ID
router.delete('/productos/:id', (req, res) => {
    controller.productos(req, res);
});


//subir imagen indicando el id del producto y pasando una imagen 
router.put('/upload/producto/:nombre', (req, res) => {
    controller.putProducto(req, res);
});


router.get('/getAgregados', (req, res) => {
    controller.getAgregados(req, res);
});
  

//añadir producto 
router.post('/addAgregado', (req, res) => {
    controller.addAgregado(req, res);
});


// Definimos la ruta para eliminar un producto por su ID
router.delete('/agregados/:id', (req, res) => {
    controller.agregados(req, res);
});


//subir imagen indicando el id del producto y pasando una imagen 
router.put('/upload/agregados/:nombre', (req, res) => {
    console.log("ruta")
    controller.putAgregados(req, res);
});


router.put('/edit/agregado/:id', (req, res) => {
    console.log("ruta")
    controller.editAgregado(req, res);
});
router.put('/edit/producto/:id', (req, res) => {
    console.log("ruta")
    controller.editProductos(req, res);
});



//Export para que se puedan utilizar en cualquier archivo las Rutas
module.exports = router