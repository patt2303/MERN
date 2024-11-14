import express from 'express';
import userAuth from "../middlewares/authMiddleware.js";
import { createJob, getJobById, getJobPosts, updateJob } from "../controllers/jobController.js";

const router = express.Router();

// POST JOB
router.post("/upload-job", userAuth, createJob);

// UPDATE JOB
router.post("/update-job/:jobId", userAuth, updateJob);

// GET JOB POST
router.get("/find-jobs", getJobPosts);
router.get("/get-job-detail/:id", getJobById);

// DELETE JOB POSTS
router.delete("/delete-job/:id", userAuth, deleteJobPosts);

export default router;