const data = require("../courselist");
const database = require("../database/db");

// Get Course
const getCourseData = async (req, res) => {
    try {

        const db = await database.connectDB();

        let result = await db.collection("project3").find().toArray();

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

// Insert Course
const insertCourseData = async (req, res) => {
    try {

        const db = await database.connectDB();

        let result = await db.collection("project3").insertOne(req.body);

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

// Update Course
const updateCourseData = async (req, res) => {
    try {

        const db = await database.connectDB();

        let result = await db.collection("project3").updateOne(
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

// Delete Course
const deleteCourseData = async (req, res) => {
    try {

        const db = await database.connectDB();

        let result = await db.collection("project3").deleteOne({
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
    getCourseData,
    insertCourseData,
    updateCourseData,
    deleteCourseData
};