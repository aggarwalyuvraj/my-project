const data = require("../studentlist");
const database = require("../database/db");

// Get Student
const getStudentData = async (req, res) => {
    try {

        const db = await database.connectDB();

        let result = await db.collection("student").find().toArray();

        res.json({
            success: true,
            message: result,
            status: 200
        });

    } catch (err) {

        res.json({
            success: false,
            status: 500,
            message: "Error reading file",
            error: err.message
        });

    }
};

// Insert Student
const insertStudentData = async (req, res) => {
    try {

        const db = await database.connectDB();

        let result = await db.collection("student").insertOne(req.body);

        if (result.acknowledged == true) {

            res.json({
                success: true,
                message: "Record inserted successfully",
                status: 200
            });

        } else {

            res.json({
                success: false,
                message: "Something went wrong please try again"
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

// Update Student
const updateStudentData = async (req, res) => {
    try {

        const db = await database.connectDB();

        let result = await db.collection("student").updateOne(
            {
                name: req.params.name
            },
            {
                $set: req.body
            }
        );

        if (result.acknowledged == true) {

            res.json({
                success: true,
                message: "Record updated successfully",
                status: 200
            });

        } else {

            res.json({
                success: false,
                message: "Something went wrong please try again"
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

// Delete Student
const deleteStudentData = async (req, res) => {
    try {

        const db = await database.connectDB();

        let result = await db.collection("student").deleteOne({
            name: req.params.name
        });

        if (result.acknowledged == true) {

            res.json({
                success: true,
                message: "Record deleted successfully",
                status: 200
            });

        } else {

            res.json({
                success: false,
                message: "Something went wrong please try again"
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
    getStudentData,
    insertStudentData,
    updateStudentData,
    deleteStudentData
};
