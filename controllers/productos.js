const producto = require('../modelos/productos')
const Producto = require('../modelos/productos');

const traerProductos = async(req,res) => {
  const totalProductos = await producto.find()
  res.json(totalProductos)
}

const crearProducto = async(req,res) => {
  try {
    const { nombre, categoria, precio} = req.body
    
    const crearProducto = new Producto({
      nombre,
      categoria,
      precio
    }
    )

  await crearProducto.save() 
  
    res.status(200).json(crearProducto)
  } catch (error) {
    res.status(error.code || 500).json({message:error.message})
  }
}


const modificarProducto = async (req,res) => {
  const { _id, nombre, categoria, precio } = req.body
  try {
    const modificarProducto = await Producto.findByIdAndUpdate(_id, {
      nombre,
      categoria,
      precio 
    })
    res.json({
      message: `PRODUCTO ${modificarProducto.nombre} modificado correctamente`
    })
  } catch (error) {
    res.status(error.code || 500).json({ message: error.message });
  }
}

const eliminarProducto = async (req,res) => {
  const {_id } = req.params
  
  const producto = await Producto.findById(_id)

  try {
    res.json({
      message: `PRODUCTO ${producto.nombre} ELIMINADO correctamente`
    })
  } catch (error) {
    console.error(error)
  }
}

module.exports = { traerProductos, crearProducto, modificarProducto, eliminarProducto }