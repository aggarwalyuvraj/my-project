const express = require("express");
const cors = require("cors");

const app = express();

const PORT = 3001;

const userindex = require("./Router/userindex");
app.use(cors());
app.use(express.json());

app.use("/", userindex);

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});