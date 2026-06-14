import swaggerJSDoc from "swagger-jsdoc";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Raízes do Nordeste API",
      version: "1.0.0",
      description:
        "API para gestão da rede Raízes do Nordeste. Trabalho final da disciplina de Desenvolvimento Backend UNINTER.",
    },
    servers: [
      {
        url: "http://localhost:3000",
      },
    ],
  },
  apis: ["./src/api/routes/*.js"],
};

const swaggerSpec = swaggerJSDoc(options);

export default swaggerSpec;
