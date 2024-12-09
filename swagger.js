const swaggerAutogen = require("swagger-autogen")({ openapi: "3.0.0" });

const doc = {
  info: {
    version: "", // by default: '1.0.0'
    title: "Café Aroma", // by default: 'REST API'
    description:
      "Back-End del proyecto final de Talentos Digitales", // by default: ''
  },
  host: "", // by default: 'localhost:3000'
  basePath: "", // by default: '/'
  schemes: [], // by default: ['http']
  consumes: [], // by default: ['application/json']
  produces: [], // by default: ['application/json']
  tags: [
    // by default: empty Array
    {
      name: "", // Tag name
      description: "", // Tag description
    },
    // { ... }
  ],
  components: {
    securitySchemes: {
      bearerAuth: {
        type: "http",
        scheme: "bearer",
      },
    },
      schemas: {
          ordersSchema: {
              $user_id: '675659ec9247bd1a5c6a8fe2',
              $items: "45",
              about: ''
          },
      }
  },
  definitions: {}, // by default: empty object
};

const outputFile = "./swagger-output.json";

const routes = ["./src/routes/main.js"];

/* NOTE: If you are using the express Router, you must pass in the 'routes' only the
root file where the route starts, such as index.js, app.js, routes.js, etc ... */

swaggerAutogen(outputFile, routes, doc)
  .then(() => {
    require("./index.js");
  })
  .catch((error) => {
    console.error("Error generating Swagger:", error);
  });
// swaggerAutogen()(outputFile, routes, doc)
//   .then(() => {
//     console.log("Swagger generation successful!");
//   })
//   .catch((error) => {
//     console.error("Error generating Swagger:", error);
//   });