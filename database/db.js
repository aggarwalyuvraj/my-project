const { MongoClient } = require("mongodb");

// const url = "mongodb://127.0.0.1:27017";
const url="mongodb+srv://aggarwalyuvraj87_db_user:7BCnwr1Us3BGShXt@cluster0.vmxrwac.mongodb.net/?appName=Cluster0"
const client = new MongoClient(url);

let db;

async function connectDB() {
    try {

        await client.connect();

        console.log("MongoDB Connected Successfully");

        db = client.db("sample_mflix");   

        return db;

    } catch (error) {

        console.log("Database Connection Error:", error);

    }
}

module.exports = {
    connectDB
};
