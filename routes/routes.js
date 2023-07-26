const { Router } = require("express");
const { traerProductos, crearProducto, modificarProducto , eliminarProducto } = require('../controllers/productos')
const router = Router();


router.get("/traerproductos", traerProductos);
router.post("/crearproducto", crearProducto);
router.delete("/eliminarproducto/:_id", eliminarProducto);
router.put("/modificarproducto", modificarProducto);


module.exports = router;