const express = require("express");
const router = express.Router();


const st = require("../controller/student");
const tc = require("../controller/teacher");
const cs = require("../controller/course");







// ================= STUDENT =================
/**
 * @swagger
 * /getstudentdata:
 *   get:
 *     summary: Get all student data
 *     tags:
 *       - Student
 *     responses:
 *       200:
 *         description: Successfully fetched student data
 *       500:
 *         description: Internal server error
 */

router.get("/getstudentdata", st.getStudentData);
/**
 * @swagger
 * /insertstudentdata:
 *   post:
 *     summary: Insert a new student
 *     tags:
 *       - Student
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *     responses:
 *       201:
 *         description: Student inserted successfully
 *       400:
 *         description: Invalid student data
 *       500:
 *         description: Internal server error
 */
router.post("/insertstudentdata", st.insertStudentData);
/**
 * @swagger
 * /updatestudentdata/{name}:
 *   put:
 *     summary: Update student data by name
 *     tags:
 *       - Student
 *     parameters:
 *       - in: path
 *         name: name
 *         required: true
 *         schema:
 *           type: string
 *         description: Student name
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *     responses:
 *       200:
 *         description: Student updated successfully
 *       404:
 *         description: Student not found
 *       500:
 *         description: Internal server error
 */
router.put("/updatestudentdata/:name", st.updateStudentData);
/**
 * @swagger
 * /deletestudentdata/{name}:
 *   delete:
 *     summary: Delete student data by name
 *     tags:
 *       - Student
 *     parameters:
 *       - in: path
 *         name: name
 *         required: true
 *         schema:
 *           type: string
 *         description: Student name
 *     responses:
 *       200:
 *         description: Student deleted successfully
 *       404:
 *         description: Student not found
 *       500:
 *         description: Internal server error
 */
router.delete("/deletestudentdata/:name", st.deleteStudentData);

// ================= TEACHER =================
/**
 * @swagger
 * /getteacherdata:
 *   get:
 *     summary: Get all teacher data
 *     tags:
 *       - Teacher
 *     responses:
 *       200:
 *         description: Successfully fetched teacher data
 *       500:
 *         description: Internal server error
 */
router.get("/getteacherdata", tc.getTeacherData);
/**
 * @swagger
 * /insertteacherdata:
 *   post:
 *     summary: Insert a new teacher
 *     tags:
 *       - Teacher
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *     responses:
 *       201:
 *         description: Teacher inserted successfully
 *       400:
 *         description: Invalid teacher data
 *       500:
 *         description: Internal server error
 */
router.post("/insertteacherdata", tc.insertTeacherData);
/**
 * @swagger
 * /updateteacherdata/{name}:
 *   put:
 *     summary: Update teacher data by name
 *     tags:
 *       - Teacher
 *     parameters:
 *       - in: path
 *         name: name
 *         required: true
 *         schema:
 *           type: string
 *         description: Teacher name
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *     responses:
 *       200:
 *         description: Teacher updated successfully
 *       404:
 *         description: Teacher not found
 *       500:
 *         description: Internal server error
 */

router.put("/updateteacherdata/:name", tc.updateTeacherData);
/**
 * @swagger
 * /deleteteacherdata/{name}:
 *   delete:
 *     summary: Delete teacher data by name
 *     tags:
 *       - Teacher
 *     parameters:
 *       - in: path
 *         name: name
 *         required: true
 *         schema:
 *           type: string
 *         description: Teacher name
 *     responses:
 *       200:
 *         description: Teacher deleted successfully
 *       404:
 *         description: Teacher not found
 *       500:
 *         description: Internal server error
 */
router.delete("/deleteteacherdata/:name", tc.deleteTeacherData);

// ================= COURSE =================
/**
 * @swagger
 * /getcoursedata:
 *   get:
 *     summary: Get all course data
 *     tags:
 *       - Course
 *     responses:
 *       200:
 *         description: Successfully fetched course data
 *       500:
 *         description: Internal server error
 */
router.get("/getcoursedata", cs.getCourseData);
/**
 * @swagger
 * /insertcoursedata:
 *   post:
 *     summary: Insert a new course
 *     tags:
 *       - Course
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *     responses:
 *       201:
 *         description: Course inserted successfully
 *       400:
 *         description: Invalid course data
 *       500:
 *         description: Internal server error
 */

router.post("/insertcoursedata", cs.insertCourseData);
/**
 * @swagger
 * /updatecoursedata/{name}:
 *   put:
 *     summary: Update course data by name
 *     tags:
 *       - Course
 *     parameters:
 *       - in: path
 *         name: name
 *         required: true
 *         schema:
 *           type: string
 *         description: Course name
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *     responses:
 *       200:
 *         description: Course updated successfully
 *       404:
 *         description: Course not found
 *       500:
 *         description: Internal server error
 */
router.put("/updatecoursedata/:name", cs.updateCourseData);
/**
 * @swagger
 * /deletecoursedata/{name}:
 *   delete:
 *     summary: Delete course data by name
 *     tags:
 *       - Course
 *     parameters:
 *       - in: path
 *         name: name
 *         required: true
 *         schema:
 *           type: string
 *         description: Course name
 *     responses:
 *       200:
 *         description: Course deleted successfully
 *       404:
 *         description: Course not found
 *       500:
 *         description: Internal server error
 */
router.delete("/deletecoursedata/:name", cs.deleteCourseData);

module.exports = router;