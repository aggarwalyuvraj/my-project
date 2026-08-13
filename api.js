const express = require("express");
const cors = require("cors");
const swaggerUi = require("swagger-ui-express");

const swaggerSpec = require("./swagger");



const app = express();

const PORT = 3001;

const indexRouter = require("./Router/index");

app.use(cors());         
app.use(express.json());
app.use(
    "/api-docs",
    swaggerUi.serve,
    swaggerUi.setup(swaggerSpec)
);


app.use("/", indexRouter);

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});