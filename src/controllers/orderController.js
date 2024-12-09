const Order = require('../models/ordersModel'); // Modelo de Mongoose

// Crear un nuevo producto
const createOrderController = async (name, precio, stock, img, description) => {
  const nuevoProducto = new Order({ name, precio, stock, img, description });
  const savedProduct = await nuevoProducto.save(); // Guardar en la base de datos
  console.log(savedProduct);
  return savedProduct;
};

// Obtener todos los productos
const getAllOrderController = async () => {
  const products = await Order.find(); // Recuperar todos los productos
  console.log(products);
  return products;
};

// Obtener un producto por ID
const getOrderByIdController = async (id) => {
  const productById = await Order.findById(id); // Buscar por ID
  console.log(productById);
  return productById;
};

// Actualizar un producto
const updateOrderController = async (id, name, precio, stock, img, description) => {
  const updatedProduct = await Order.findByIdAndUpdate(
    id,
    { name, precio, stock, img, description },
    { new: true } // Retorna el producto actualizado
  );
  console.log(updatedProduct);
  
  return updatedProduct;
};

// Eliminar un producto
const deleteOrderController = async (id) => {
  const deletedProduct = await Order.findByIdAndDelete(id); // Elimina por ID
  console.log(deletedProduct);
  return deletedProduct;
};

module.exports = {
  createOrderController,
  getAllOrderController,
  getOrderByIdController,
  updateOrderController,
  deleteOrderController,
};
