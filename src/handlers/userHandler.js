// se encarga de recibir los request y contestar por response
// cuando userRouter reciba una peticion, me invocará para que maneje el flujo de los datos y de una resupuesta

//funciones de usuario
const getAllUsersHandler = (req, res) => {
  res.send("Estos son los usuarios");
};

const getOneUserHandler = (req, res) => {
  const {id} = req.params;
  console.log(`Se solicito datos del usuario: ${id}`);
  res.send(`Este es el detalle de un solo usuario con id: ${id}`);
};

const createUserHandler = (req, res) => {
  const {id, name, username, email} = req.body;
  console.log("El usuario envio los siguientes datos:",id,name,username,email);
  res.send(`Creando un usuario, bienvenido ${username}`);
};

const updateUserHandler = (req, res) => {
  res.send(`Modificando un solo usuario con id: ${req.params.id}`);
};

const deleteUserHandler = (req, res) => {
  res.send(`Eliminando un solo usuario con id: ${req.params.id}`);
};

const getUserByUsername = (req, res) => {
  const {username} = req.query
  if (username) {
    res.send(`El usuario ${username} fue encontrado con exito`);
  } else {
    res.send("No se encontro ningun usuario con ese username");
  }
};

const userHandler = {
  getAllUsersHandler,
  getOneUserHandler,
  createUserHandler,
  updateUserHandler,
  deleteUserHandler,
  getUserByUsername,
};

module.exports = userHandler;
