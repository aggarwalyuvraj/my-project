const { MongoClient } = require("mongodb");

const url = "mongodb://127.0.0.1:27017";
const client = new MongoClient(url);

let db;

async function connectDB() {
    try {

        await client.connect();

        console.log("MongoDB Connected Successfully");

        db = client.db("local");   

        return db;

    } catch (error) {

        console.log("Database Connection Error:", error);

    }
}

module.exports = {
    connectDB
};