const database = require("../database/dbs");

// Get User
const getUserData = async (req, res) => {
    try {

        const db = await database.connectDB();

        let result = await db.collection("user").find().toArray();

        res.json({
            success: true,
            message: result,
            status: 200
        });

    } catch (err) {

        res.json({
            success: false,
            status: 500,
            message: "Error reading data",
            error: err.message
        });

    }
};

// Insert User
const insertUserData = async (req, res) => {
    try {

        const db = await database.connectDB();

        let result = await db.collection("user").insertOne(req.body);

        if (result.acknowledged == true) {

            res.json({
                success: true,
                message: "User inserted successfully",
                status: 200
            });

        } else {

            res.json({
                success: false,
                message: "Something went wrong. Please try again."
            });

        }

    } catch (err) {

        res.json({
            success: false,
            status: 500,
            message: err.message
        });

    }
};

// Update User
const updateUserData = async (req, res) => {
    try {

        const db = await database.connectDB();

        let result = await db.collection("user").updateOne(
            {
                name: req.params.id
            },
            {
                $set: req.body
            }
        );

        if (result.acknowledged == true) {

            res.json({
                success: true,
                message: "User updated successfully",
                status: 200
            });

        } else {

            res.json({
                success: false,
                message: "Something went wrong. Please try again."
            });

        }

    } catch (err) {

        res.json({
            success: false,
            status: 500,
            message: err.message
        });

    }
};

// Delete User
const deleteUserData = async (req, res) => {
    try {

        const db = await database.connectDB();

        let result = await db.collection("user").deleteOne({
            name: req.params.id
        });

        if (result.acknowledged == true) {

            res.json({
                success: true,
                message: "User deleted successfully",
                status: 200
            });

        } else {

            res.json({
                success: false,
                message: "Something went wrong. Please try again."
            });

        }

    } catch (err) {

        res.json({
            success: false,
            status: 500,
            message: err.message
        });

    }
};

module.exports = {
    getUserData,
    insertUserData,
    updateUserData,
    deleteUserData
};