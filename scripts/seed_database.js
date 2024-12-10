const fs = require('fs');
const path = require('path');
const { promisify } = require('util');
const readFile = promisify(fs.readFile);
const userController = require("../src/controllers/userController");
const connectDB = require("../src/config/db");

const currentDir = path.dirname(__filename);
const dataDir = path.join(currentDir, 'sample_data');

connectDB();

// Read JSON from randomuser.me api
const dataFile = path.join(dataDir, 'users.json');
console.log(`Reading data from ${dataFile}...`);


async function seedUsers() {
    try {
      const data = await readFile(dataFile, 'utf8');
      const results = JSON.parse(data);
      console.log(`Found ${results.length} rows...`);
  
      // Creating users
      console.log('Creating users...');
      for (const result of results) {
        const user = {
          dni: result.dni,
          nombre: result.nombre,
          apellido: result.apellido,
          email: result.email,
          password: result.password,
          username: result.username,
          provincia: result.provincia,
          ciudad: result.ciudad,
          direccion: result.direccion,
        };
        try {
          await userController.createUserController(user);
        } catch (error) {
          console.error(`Error creating user: ${error.message}`);
        }
      }
    } catch (err) {
      console.error(err);
    }
  }

seedUsers().then(() => {
    console.log('Script execution completed.');
    process.exit();
});