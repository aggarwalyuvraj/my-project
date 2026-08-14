const data = require("../teacherlist");
const database = require("../database/db");

// Get Teacher
const getTeacherData = async (req, res) => {
    try {

        const db = await database.connectDB();

        let result = await db.collection("project1").find().toArray();

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

// Insert Teacher
const insertTeacherData = async (req, res) => {
    try {

        const db = await database.connectDB();

        let result = await db.collection("project1").insertOne(req.body);

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

// Update Teacher
const updateTeacherData = async (req, res) => {
    try {

        const db = await database.connectDB();

        let result = await db.collection("project1").updateOne(
            {
                id: Number(req.params.id)
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

// Delete Teacher
const deleteTeacherData = async (req, res) => {
    try {

        const db = await database.connectDB();

        let result = await db.collection("project1").deleteOne({
            id: Number(req.params.id)
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
    getTeacherData,
    insertTeacherData,
    updateTeacherData,
    deleteTeacherData
};