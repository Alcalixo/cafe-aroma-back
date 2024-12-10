const fs = require("fs");
const path = require("path");
const { promisify } = require("util");
const readFile = promisify(fs.readFile);
const userController = require("../src/controllers/userController");
const {
  createProductController,
} = require("../src/controllers/productController");
const connectDB = require("../src/config/db");

const currentDir = path.dirname(__filename);
const dataDir = path.join(currentDir, "sample_data");

connectDB();

// Read JSON file
// let dataFile = path.join(dataDir, "users.json");
// console.log(`Reading data from ${dataFile}...`);

// async function seedUsers() {
//   try {
//     const data = await readFile(dataFile, "utf8");
//     const results = JSON.parse(data);
//     console.log(`Found ${results.length} rows...`);

//     // Creating users
//     console.log("Creating users...");
//     for (const result of results) {
//       const user = {
//         dni: result.dni,
//         nombre: result.nombre,
//         apellido: result.apellido,
//         email: result.email,
//         password: result.password,
//         username: result.username,
//         provincia: result.provincia,
//         ciudad: result.ciudad,
//         domicilio: result.domicilio,
//       };
//       try {
//         await userController.createUserController(user);
//       } catch (error) {
//         console.error(`Error creating user: ${error.message}`);
//       }
//     }
//   } catch (err) {
//     console.error(err);
//   }
// }

// seedUsers().then(() => {
//   console.log("User's script execution completed.");
//   process.exit();
// });

// Read JSON file
let dataFile = path.join(dataDir, "cafes.json");
console.log(`Reading data from ${dataFile}...`);

async function seedProducts() {
  try {
    const data = await readFile(dataFile, "utf8");
    const results = JSON.parse(data);
    console.log(`Found ${results.length} rows...`);

    // Creating products
    console.log("Creating products...");
    for (const result of results) {
      let name = result.name;
      let precio = result.precio;
      let stock = result.stock;
      let img = result.img;
      let description = result.description;
      try {
        await createProductController(name, precio, stock, img, description);
      } catch (error) {
        console.error(`Error creating product: ${error.message}`);
      }
    }
  } catch (err) {
    console.error(err);
  }
}

seedProducts().then(() => {
  console.log("Product's script execution completed.");
  process.exit();
});
