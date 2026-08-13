const swaggerJsdoc = require("swagger-jsdoc");

const options = {
    definition: {
        openapi: "3.0.0",

        info: {
            title: "Student Management API",
            version: "1.0.0",
            description: "API documentation for Student Management System"
        },

        servers: [
            {
                url:"https://my-project-weos.onrender.com"
            },
            {
                url: "http://localhost:3001"
            }
        ]
    },

    apis: ["./router/*.js"]
};

const swaggerSpec = swaggerJsdoc(options);

module.exports = swaggerSpec;